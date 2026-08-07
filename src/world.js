import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { CONFIG } from './config.js';
import { rand, randInt, pick } from './utils.js';

const PITCH = CONFIG.BLOCK + CONFIG.ROAD;   // chunk pitch (block + one road)
const RADIUS = CONFIG.CHUNK_RADIUS;

// ---------------------------------------------------------------------------
// procedural textures (drawn once, shared by every chunk)
// ---------------------------------------------------------------------------

function makeWindowTexture() {
  // daytime glass: pale blue panels in a dark frame grid
  const c = document.createElement('canvas');
  c.width = c.height = 96;
  const g = c.getContext('2d');
  g.fillStyle = '#3c4654';
  g.fillRect(0, 0, 96, 96);
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      const t = rand(-18, 18);
      g.fillStyle = `rgb(${150 + t}, ${185 + t}, ${215 + t})`;
      g.fillRect(x * 24 + 3, y * 24 + 3, 18, 18);
      // sky reflection streak
      g.fillStyle = 'rgba(255,255,255,0.25)';
      g.fillRect(x * 24 + 3, y * 24 + 3, 18, 5);
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// One ground tile per theme. The tile covers a full chunk: road margins on all
// four edges (half a road each, so neighbours combine into full streets),
// a sidewalk ring, and the block interior.
function makeGroundTile(theme) {
  const S = 512;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d');
  const px = S / PITCH;                 // pixels per world unit
  const roadW = (CONFIG.ROAD / 2) * px; // half road on each edge
  const walkW = 1.6 * px;

  // interior base
  if (theme === 'downtown') {
    g.fillStyle = '#8d9299';
    g.fillRect(0, 0, S, S);
    // pavement panel grid
    g.strokeStyle = 'rgba(60,64,70,0.5)';
    g.lineWidth = 2;
    const step = S / 8;
    for (let i = 0; i <= 8; i++) {
      g.beginPath(); g.moveTo(i * step, 0); g.lineTo(i * step, S); g.stroke();
      g.beginPath(); g.moveTo(0, i * step); g.lineTo(S, i * step); g.stroke();
    }
    for (let i = 0; i < 900; i++) {
      g.fillStyle = `rgba(255,255,255,${rand(0.02, 0.07)})`;
      g.fillRect(rand(0, S), rand(0, S), rand(1, 3), rand(1, 3));
    }
  } else {
    g.fillStyle = '#5d8a48';
    g.fillRect(0, 0, S, S);
    for (let i = 0; i < 5000; i++) {
      const shade = Math.random();
      g.fillStyle = shade < 0.5
        ? `rgba(110,165,80,${rand(0.15, 0.4)})`
        : `rgba(70,105,55,${rand(0.15, 0.4)})`;
      g.fillRect(rand(0, S), rand(0, S), rand(1, 4), rand(1, 4));
    }
  }

  // sidewalk ring
  g.fillStyle = theme === 'downtown' ? '#b9bcc2' : '#c9c4b8';
  g.fillRect(roadW, roadW, S - roadW * 2, walkW);
  g.fillRect(roadW, S - roadW - walkW, S - roadW * 2, walkW);
  g.fillRect(roadW, roadW, walkW, S - roadW * 2);
  g.fillRect(S - roadW - walkW, roadW, walkW, S - roadW * 2);
  // sidewalk joints
  g.strokeStyle = 'rgba(90,90,95,0.45)';
  g.lineWidth = 2;
  for (let i = 1; i < 10; i++) {
    const p = roadW + (S - 2 * roadW) * (i / 10);
    g.beginPath(); g.moveTo(p, roadW); g.lineTo(p, roadW + walkW); g.stroke();
    g.beginPath(); g.moveTo(p, S - roadW - walkW); g.lineTo(p, S - roadW); g.stroke();
    g.beginPath(); g.moveTo(roadW, p); g.lineTo(roadW + walkW, p); g.stroke();
    g.beginPath(); g.moveTo(S - roadW - walkW, p); g.lineTo(S - roadW, p); g.stroke();
  }

  // asphalt margins (roads)
  const asphalt = (x, y, w, h) => {
    g.fillStyle = '#33363c';
    g.fillRect(x, y, w, h);
  };
  asphalt(0, 0, S, roadW);
  asphalt(0, S - roadW, S, roadW);
  asphalt(0, 0, roadW, S);
  asphalt(S - roadW, 0, roadW, S);
  // asphalt speckle
  for (let i = 0; i < 1400; i++) {
    const onV = Math.random() < 0.5;
    const a = rand(0, S), b = rand(0, roadW) + (Math.random() < 0.5 ? 0 : S - roadW);
    g.fillStyle = `rgba(255,255,255,${rand(0.015, 0.05)})`;
    if (onV) g.fillRect(b, a, 2, 2); else g.fillRect(a, b, 2, 2);
  }
  // curb line
  g.strokeStyle = 'rgba(210,210,215,0.6)';
  g.lineWidth = 2;
  g.strokeRect(roadW, roadW, S - roadW * 2, S - roadW * 2);
  // centre-line dashes: half-dashes at the tile edge, mirrored so seams align
  g.fillStyle = 'rgba(235,210,110,0.8)';
  const dashL = 2.6 * px, gap = 2.6 * px, lw = 0.35 * px;
  for (let d = gap; d < S - dashL; d += dashL + gap) {
    g.fillRect(d, 0, dashL, lw);           // top edge
    g.fillRect(d, S - lw, dashL, lw);      // bottom edge
    g.fillRect(0, d, lw, dashL);           // left edge
    g.fillRect(S - lw, d, lw, dashL);      // right edge
  }
  // crosswalk stripes near the four corners
  g.fillStyle = 'rgba(230,230,235,0.75)';
  const cwLen = roadW * 0.8, stripe = 0.55 * px;
  for (let s = 0; s < 5; s++) {
    const off = roadW + walkW + 1.2 * px + s * stripe * 2;
    if (off > roadW + walkW + 8 * px) break;
    g.fillRect(off, roadW * 0.1, stripe, cwLen);
    g.fillRect(off, S - roadW * 0.9, stripe, cwLen);
    g.fillRect(roadW * 0.1, off, cwLen, stripe);
    g.fillRect(S - roadW * 0.9, off, cwLen, stripe);
  }

  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

// ---------------------------------------------------------------------------
// geometry helpers (vertex-coloured, baked into world coordinates, merged)
// ---------------------------------------------------------------------------

const _color = new THREE.Color();
function paint(geo, hex, shade = 0) {
  // mergeGeometries requires index consistency; polyhedra are non-indexed,
  // so normalize everything to non-indexed
  if (geo.index) geo = geo.toNonIndexed();
  _color.set(hex);
  if (shade) _color.multiplyScalar(1 + rand(-shade, shade));
  const n = geo.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    arr[i * 3] = _color.r; arr[i * 3 + 1] = _color.g; arr[i * 3 + 2] = _color.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return geo;
}

function box(list, w, h, d, x, y, z, hex, { ry = 0, shade = 0.06 } = {}) {
  const g = new THREE.BoxGeometry(w, h, d);
  if (ry) g.rotateY(ry);
  g.translate(x, y, z);
  list.push(paint(g, hex, shade));
}

function cone4(list, r, h, x, y, z, hex) {
  const g = new THREE.ConeGeometry(r, h, 4);
  g.rotateY(Math.PI / 4);
  g.translate(x, y, z);
  list.push(paint(g, hex, 0.05));
}

function blob(list, r, x, y, z, hex) {
  const g = new THREE.IcosahedronGeometry(r, 0);
  g.translate(x, y, z);
  list.push(paint(g, hex, 0.1));
}

function cylinder(list, rt, rb, h, seg, x, y, z, hex) {
  const g = new THREE.CylinderGeometry(rt, rb, h, seg);
  g.translate(x, y, z);
  list.push(paint(g, hex, 0.05));
}

// smooth 2D value noise for the theme field
function hash2(i, j, seed) {
  const s = Math.sin(i * 127.1 + j * 311.7 + seed * 74.7) * 43758.5453;
  return s - Math.floor(s);
}
const smooth = (t) => t * t * (3 - 2 * t);

// ---------------------------------------------------------------------------

export class World {
  constructor(scene) {
    this.scene = scene;
    this.chunks = new Map();        // "cx:cz" -> chunk record
    this.focus = { x: 0, z: 0 };
    this.seed = rand(0, 1000);
    this.drift = 0;                 // slowly moves the theme field
    this.xray = false;
    this.orphans = [];              // liftables detached from despawned chunks

    // permanent daytime atmosphere for both themes
    scene.background = new THREE.Color(0xa8d4ff);
    scene.fog = new THREE.Fog(0xa8d4ff, 60, 142);
    this.hemi = new THREE.HemisphereLight(0xd6e9ff, 0x5d7a4d, 1.0);
    scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xfff2d5, 1.7);
    this.sun.position.set(60, 110, 40);
    scene.add(this.sun);

    // shared resources
    this.windowTex = makeWindowTexture();
    this.groundMats = {
      suburb: new THREE.MeshLambertMaterial({ map: makeGroundTile('suburb') }),
      downtown: new THREE.MeshLambertMaterial({ map: makeGroundTile('downtown') }),
    };
    this.groundGeo = new THREE.PlaneGeometry(PITCH, PITCH);
    this.groundGeo.rotateX(-Math.PI / 2);
    this.vcMat = new THREE.MeshLambertMaterial({ vertexColors: true });
    this.towerMat = new THREE.MeshLambertMaterial({ map: this.windowTex, vertexColors: true });
    this.buildingMats = [this.vcMat, this.towerMat];

    this.update(this.focus, 0, true);
  }

  // theme field: large smooth regions, drifting slowly so newly generated
  // chunks gradually introduce the other biome at the map edges
  themeAt(cx, cz) {
    const s = 0.09;
    const x = cx * s + this.drift, z = cz * s;
    const ix = Math.floor(x), iz = Math.floor(z);
    const fx = smooth(x - ix), fz = smooth(z - iz);
    const v =
      hash2(ix, iz, this.seed) * (1 - fx) * (1 - fz) +
      hash2(ix + 1, iz, this.seed) * fx * (1 - fz) +
      hash2(ix, iz + 1, this.seed) * (1 - fx) * fz +
      hash2(ix + 1, iz + 1, this.seed) * fx * fz;
    return v > 0.52 ? 'downtown' : 'suburb';
  }

  update(focus, dt = 0, buildAll = false) {
    this.focus = { x: focus.x, z: focus.z };
    this.drift += dt * 0.004;

    const fcx = Math.round(focus.x / PITCH);
    const fcz = Math.round(focus.z / PITCH);

    // drop chunks that fell out of range
    for (const [key, chunk] of this.chunks) {
      if (Math.abs(chunk.cx - fcx) > RADIUS + 1 || Math.abs(chunk.cz - fcz) > RADIUS + 1) {
        this.disposeChunk(chunk);
        this.chunks.delete(key);
      }
    }

    // build missing chunks, nearest first, budgeted per frame
    let budget = buildAll ? Infinity : 4;
    for (let r = 0; r <= RADIUS && budget > 0; r++) {
      for (let cx = fcx - r; cx <= fcx + r && budget > 0; cx++) {
        for (let cz = fcz - r; cz <= fcz + r && budget > 0; cz++) {
          if (Math.max(Math.abs(cx - fcx), Math.abs(cz - fcz)) !== r) continue;
          const key = cx + ':' + cz;
          if (!this.chunks.has(key)) {
            this.chunks.set(key, this.buildChunk(cx, cz));
            budget--;
          }
        }
      }
    }

    // expire orphaned liftables (props carried away from despawned chunks)
    for (let i = this.orphans.length - 1; i >= 0; i--) {
      const o = this.orphans[i];
      o.ttl -= dt;
      if (o.ttl <= 0 && !o.busy) {
        this.destroyLiftableMesh(o);
        this.orphans.splice(i, 1);
      }
    }
  }

  disposeChunk(chunk) {
    for (const l of chunk.liftables) {
      if (!l.alive) continue;
      if (l.busy) {
        // being carried by telekinesis — hand it to the orphan list
        l.ttl = 30;
        this.orphans.push(l);
        chunk.group.remove(l.mesh);
        this.scene.add(l.mesh);
      } else {
        this.destroyLiftableMesh(l);
      }
    }
    this.scene.remove(chunk.group);
    chunk.group.traverse((o) => {
      if (o.geometry && !o.userData.shared) o.geometry.dispose();
    });
  }

  destroyLiftableMesh(l) {
    l.alive = false;
    l.mesh.parent?.remove(l.mesh);
    l.mesh.geometry.dispose();
  }

  // ---------------- chunk construction ----------------

  buildChunk(cx, cz) {
    const theme = this.themeAt(cx, cz);
    const ox = cx * PITCH, oz = cz * PITCH;
    const group = new THREE.Group();
    const colliders = [];
    const liftables = [];
    const vc = [];      // vertex-coloured geometries (merged)
    const towers = [];  // window-textured geometries (merged)

    const ground = new THREE.Mesh(this.groundGeo, this.groundMats[theme]);
    ground.position.set(ox, 0, oz);
    ground.userData.shared = true;
    group.add(ground);

    const addCollider = (x, z, hw, hd, h) => colliders.push({ x, z, hw, hd, h });

    if (theme === 'suburb') this.buildSuburbBlock(ox, oz, vc, liftables, addCollider);
    else this.buildDowntownBlock(ox, oz, vc, towers, liftables, addCollider);

    if (vc.length) {
      const mesh = new THREE.Mesh(mergeGeometries(vc, false), this.vcMat);
      group.add(mesh);
    }
    if (towers.length) {
      const mesh = new THREE.Mesh(mergeGeometries(towers, false), this.towerMat);
      group.add(mesh);
    }
    for (const l of liftables) group.add(l.mesh);

    this.scene.add(group);
    return { cx, cz, theme, group, colliders, liftables };
  }

  buildSuburbBlock(ox, oz, vc, liftables, addCollider) {
    const B = CONFIG.BLOCK;
    const housePalette = [0xe8dcc8, 0xd9c1a8, 0xc3d5e6, 0xd7e2c1, 0xe2bfb6, 0xf0e6d0, 0xb8cfd9, 0xd9d0e8];
    const roofPalette = [0x8a4b3b, 0x5b6570, 0x71504a, 0x4f6b52, 0x815f3f];
    // four lots in a 2x2 grid; each faces the nearest street
    for (let lx = 0; lx < 2; lx++) {
      for (let lz = 0; lz < 2; lz++) {
        const cxp = ox + (lx - 0.5) * (B / 2);
        const czp = oz + (lz - 0.5) * (B / 2);
        const facing = lz === 0 ? Math.PI : 0;   // toward the nearer horizontal road
        if (Math.random() < 0.18) {
          // park lot: trees + bushes
          this.tree(vc, cxp + rand(-2.5, 2.5), czp + rand(-2.5, 2.5), rand(0.9, 1.6), addCollider);
          if (Math.random() < 0.7) this.tree(vc, cxp + rand(-3, 3), czp + rand(-3, 3), rand(0.7, 1.2), addCollider);
          blob(vc, rand(0.5, 0.8), cxp + rand(-3, 3), 0.5, czp + rand(-3, 3), 0x4f8f3a);
          continue;
        }
        const wall = pick(housePalette);
        const roof = pick(roofPalette);
        const kind = randInt(0, 2);
        this.house(vc, cxp, czp, facing, wall, roof, kind, addCollider);
        // yard dressing
        if (Math.random() < 0.75) this.tree(vc, cxp + pick([-1, 1]) * rand(3.4, 4.6), czp + rand(-3.5, 3.5), rand(0.7, 1.3), addCollider);
        if (Math.random() < 0.5) blob(vc, rand(0.35, 0.6), cxp + rand(-4, 4), 0.35, czp + rand(-4, 4), pick([0x4f8f3a, 0x5da245, 0x3f7a30]));
        // white picket fence along the lot's street side
        if (Math.random() < 0.5) {
          const fz = czp + (lz === 0 ? -1 : 1) * (B / 4 - 0.4);
          box(vc, 4.2, 0.55, 0.08, cxp - 2.6, 0.3, fz, 0xe8e6df);
          box(vc, 4.2, 0.55, 0.08, cxp + 2.6, 0.3, fz, 0xe8e6df);
        }
      }
    }
    // parked car / bin by the curb
    if (Math.random() < 0.45) this.spawnCar(liftables, ox + rand(-B / 3, B / 3), oz + pick([-1, 1]) * (B / 2 + 1.6), 0);
    if (Math.random() < 0.3) this.spawnBin(liftables, ox + pick([-1, 1]) * (B / 2 - 1), oz + rand(-B / 3, B / 3));
  }

  house(vc, x, z, facing, wall, roof, kind, addCollider) {
    const sinF = Math.sin(facing), cosF = Math.cos(facing);
    // local->world helper for door/porch placement on the facing side
    const front = (dx, dz) => ({ x: x + dx * cosF + dz * sinF, z: z - dx * sinF + dz * cosF });

    if (kind === 0) {
      // classic one-storey with hip roof + garage
      const w = rand(5.5, 6.5), d = rand(4.6, 5.4), h = rand(3.0, 3.6);
      box(vc, w, h, d, x, h / 2, z, wall, { ry: facing });
      cone4(vc, Math.max(w, d) * 0.72, rand(1.7, 2.3), x, h, z, roof);
      addCollider(x, z, Math.max(w, d) / 2 + 0.2, Math.max(w, d) / 2 + 0.2, h + 2);
      const g = front(w / 2 + 1.5, 0.4);
      box(vc, 3, 2.4, 3.4, g.x, 1.2, g.z, wall, { ry: facing });
      box(vc, 2.4, 1.8, 0.15, g.x, 1.0, g.z + cosF * 1.75 - 0 * sinF, 0x5a636e, { ry: facing });
      box(vc, 3.2, 0.25, 3.6, g.x, h * 0.78, g.z, roof, { ry: facing });
      addCollider(g.x, g.z, 1.7, 1.9, 2.6);
      this.houseFace(vc, x, z, w, d, h, facing, wall);
    } else if (kind === 1) {
      // two-storey
      const w = rand(5, 6), d = rand(4.6, 5.4), h = rand(5.4, 6.2);
      box(vc, w, h, d, x, h / 2, z, wall, { ry: facing });
      cone4(vc, Math.max(w, d) * 0.7, rand(1.6, 2.1), x, h, z, roof);
      addCollider(x, z, Math.max(w, d) / 2 + 0.2, Math.max(w, d) / 2 + 0.2, h + 2);
      // chimney
      box(vc, 0.6, 1.6, 0.6, x + w * 0.28, h + 0.8, z + d * 0.2, 0x9a6a55);
      this.houseFace(vc, x, z, w, d, h, facing, wall, true);
    } else {
      // L-shaped ranch
      const w = rand(6.5, 7.5), d = rand(3.6, 4.2), h = rand(3.0, 3.4);
      box(vc, w, h, d, x, h / 2, z, wall, { ry: facing });
      const wingW = rand(3.2, 3.8);
      const wing = front(-w / 2 + wingW / 2, d / 2 + 1.4);
      box(vc, wingW, h, 3.4, wing.x, h / 2, wing.z, wall, { ry: facing });
      box(vc, w + 0.5, 0.3, d + 0.5, x, h + 0.1, z, roof, { ry: facing });
      box(vc, wingW + 0.5, 0.3, 3.9, wing.x, h + 0.1, wing.z, roof, { ry: facing });
      addCollider(x, z, w / 2 + 0.4, d / 2 + 0.4, h + 1);
      addCollider(wing.x, wing.z, wingW / 2 + 0.3, 1.9, h + 1);
      this.houseFace(vc, x, z, w, d, h, facing, wall);
    }
  }

  // door, windows, porch, path — the street-facing detail pass
  houseFace(vc, x, z, w, d, h, facing, wall, twoStorey = false) {
    const sinF = Math.sin(facing), cosF = Math.cos(facing);
    const faceZ = d / 2 + 0.06;
    const place = (dx, dy, bw, bh, hex) => {
      const wx = x + dx * cosF + faceZ * sinF;
      const wz = z - dx * sinF + faceZ * cosF;
      box(vc, bw, bh, 0.12, wx, dy, wz, hex, { ry: facing, shade: 0.03 });
    };
    // door + step
    place(w * 0.22, 1.05, 0.95, 2.1, pick([0x7a3b2e, 0x314a6e, 0x3e5a3a, 0x6e5a31]));
    place(w * 0.22, 0.12, 1.3, 0.24, 0xb9b4a8);
    // windows
    place(-w * 0.24, 1.45, 1.2, 1.1, 0xbcd3e8);
    if (w > 6) place(0, 1.45, 1.0, 1.0, 0xbcd3e8);
    if (twoStorey) {
      place(-w * 0.24, 3.9, 1.1, 1.0, 0xbcd3e8);
      place(w * 0.24, 3.9, 1.1, 1.0, 0xbcd3e8);
    }
    // front path
    const px = x + (w * 0.22) * cosF + (d / 2 + 2.2) * sinF;
    const pz = z - (w * 0.22) * sinF + (d / 2 + 2.2) * cosF;
    box(vc, 1.1, 0.06, 4.2, px, 0.04, pz, 0xc9c4b8, { ry: facing, shade: 0.02 });
  }

  tree(vc, x, z, s, addCollider) {
    cylinder(vc, 0.16 * s, 0.26 * s, 2.1 * s, 5, x, 1.05 * s, z, 0x6b4a32);
    const canopy = pick([0x4f8f3a, 0x5da245, 0x3f7a30, 0x76a83f, 0x4a9668]);
    blob(vc, 1.15 * s, x, 2.6 * s, z, canopy);
    blob(vc, 0.8 * s, x + 0.7 * s, 2.1 * s, z + 0.3 * s, canopy);
    blob(vc, 0.7 * s, x - 0.6 * s, 2.3 * s, z - 0.4 * s, canopy);
    addCollider?.(x, z, 0.4 * s, 0.4 * s, 2.5 * s);
  }

  buildDowntownBlock(ox, oz, vc, towers, liftables, addCollider) {
    const B = CONFIG.BLOCK;
    const plaza = Math.random() < 0.16;
    // raised sidewalk slab under the whole block
    box(vc, B, 0.14, B, ox, 0.07, oz, 0xa7abb2, { shade: 0.03 });

    if (plaza) {
      // pocket plaza: planters, trees, benches, fountain-ish centrepiece
      cylinder(vc, 1.6, 1.9, 0.5, 10, ox, 0.35, oz, 0x8d9299);
      cylinder(vc, 0.4, 0.5, 1.3, 8, ox, 1.0, oz, 0x9fb8c9);
      for (let i = 0; i < 3; i++) {
        const a = rand(0, Math.PI * 2), r = rand(4, 8);
        const tx = ox + Math.cos(a) * r, tz = oz + Math.sin(a) * r;
        box(vc, 1.8, 0.5, 1.8, tx, 0.35, tz, 0x7e838a);
        this.tree(vc, tx, tz, rand(0.6, 0.9), addCollider);
      }
      this.spawnBench(liftables, ox + rand(-5, 5), oz + rand(-5, 5), rand(0, Math.PI));
    } else {
      const count = randInt(1, 2);
      for (let i = 0; i < count; i++) {
        const w = rand(7, 11), d = rand(7, 11);
        const tall = Math.random() < 0.2;
        const h = tall ? rand(30, 48) : rand(9, 26);
        const tx = ox + (count === 1 ? 0 : (i === 0 ? -B / 4.2 : B / 4.2)) + rand(-1, 1);
        const tz = oz + rand(-2.5, 2.5);
        const shade = rand(0.72, 1.15);
        this.tower(vc, towers, tx, tz, w, d, h, shade);
        addCollider(tx, tz, w / 2, d / 2, h);
      }
      // street furniture
      if (Math.random() < 0.6) this.lamppost(vc, ox + B / 2 - 0.8, oz + B / 2 - 0.8);
      if (Math.random() < 0.4) this.lamppost(vc, ox - B / 2 + 0.8, oz - B / 2 + 0.8);
      if (Math.random() < 0.4) this.spawnBench(liftables, ox + pick([-1, 1]) * (B / 2 - 1.6), oz + rand(-6, 6), Math.PI / 2);
      if (Math.random() < 0.35) this.spawnBin(liftables, ox + rand(-B / 3, B / 3), oz + pick([-1, 1]) * (B / 2 - 1));
    }
    if (Math.random() < 0.55) this.spawnCar(liftables, ox + pick([-1, 1]) * (B / 2 + 1.6), oz + rand(-B / 3, B / 3), Math.PI / 2);
  }

  tower(vc, towers, x, z, w, d, h, shade) {
    const tint = new THREE.Color().setHSL(rand(0.52, 0.62), rand(0.05, 0.22), rand(0.45, 0.62) * shade);
    const tiers = h > 26 ? randInt(2, 3) : 1;
    let curW = w, curD = d, y0 = 0;
    for (let t = 0; t < tiers; t++) {
      const th = t === tiers - 1 ? h - y0 : h * rand(0.35, 0.5);
      const g = new THREE.BoxGeometry(curW, th, curD);
      // scale UVs so window panels stay ~2.4 world units square
      const uv = g.attributes.uv;
      for (let i = 0; i < uv.count; i++) {
        uv.setXY(i, uv.getX(i) * Math.max(curW, curD) / 2.4, uv.getY(i) * th / 2.4);
      }
      g.translate(x, y0 + th / 2, z);
      towers.push(paint(g, tint.getHex(), 0.02));
      // tier cap
      box(vc, curW + 0.3, 0.3, curD + 0.3, x, y0 + th + 0.1, z, 0x3a4048);
      y0 += th;
      curW *= rand(0.68, 0.82);
      curD *= rand(0.68, 0.82);
    }
    // ground lobby band
    box(vc, w + 0.4, 1.4, d + 0.4, x, 0.7, z, 0x2e343c);
    // roof clutter
    if (Math.random() < 0.7) box(vc, rand(1, 2), rand(0.8, 1.4), rand(1, 2), x + rand(-1, 1), h + 0.6, z + rand(-1, 1), 0x555b63);
    if (Math.random() < 0.4) cylinder(vc, 0.06, 0.06, rand(2, 5), 4, x, h + 1.8, z, 0x777d85);
  }

  lamppost(vc, x, z) {
    cylinder(vc, 0.07, 0.1, 4.6, 5, x, 2.3, z, 0x3a4048);
    box(vc, 1.1, 0.12, 0.25, x + 0.45, 4.6, z, 0x3a4048);
    box(vc, 0.4, 0.15, 0.3, x + 0.9, 4.52, z, 0xfff2c9, { shade: 0 });
  }

  // ---- liftable props (telekinesis targets) ----

  makeLiftable(geos, x, z, type, radius) {
    const mesh = new THREE.Mesh(mergeGeometries(geos, false), this.vcMat);
    mesh.position.set(x, 0, z);
    return { mesh, type, radius, alive: true, busy: false, x, z };
  }

  spawnCar(liftables, x, z, ry) {
    const bodyColor = pick([0xc23a3a, 0x3a66c2, 0xd8d8dc, 0x2e2e34, 0x3aa66a, 0xd9a51f, 0x8446b8]);
    const g = [];
    box(g, 1.9, 0.55, 4.1, 0, 0.55, 0, bodyColor, { shade: 0.03 });
    box(g, 1.7, 0.5, 2.1, 0, 1.05, -0.2, 0xbfd6e8, { shade: 0.03 });
    box(g, 1.95, 0.3, 0.7, 0, 0.3, 1.85, 0x2a2d33);
    box(g, 1.95, 0.3, 0.7, 0, 0.3, -1.85, 0x2a2d33);
    const l = this.makeLiftable(g, x, z, 'car', 2.1);
    l.mesh.rotation.y = ry + (Math.random() < 0.5 ? Math.PI : 0);
    liftables.push(l);
  }

  spawnBin(liftables, x, z) {
    const g = [];
    cylinder(g, 0.45, 0.4, 1.0, 8, 0, 0.5, 0, pick([0x3f6e4a, 0x555b63, 0x6e3f3f]));
    cylinder(g, 0.5, 0.5, 0.1, 8, 0, 1.02, 0, 0x2e343c);
    liftables.push(this.makeLiftable(g, x, z, 'bin', 0.8));
  }

  spawnBench(liftables, x, z, ry) {
    const g = [];
    box(g, 2.2, 0.12, 0.55, 0, 0.5, 0, 0x8a6642);
    box(g, 2.2, 0.5, 0.1, 0, 0.85, -0.25, 0x8a6642);
    box(g, 0.12, 0.5, 0.5, -0.95, 0.25, 0, 0x3a4048);
    box(g, 0.12, 0.5, 0.5, 0.95, 0.25, 0, 0x3a4048);
    const l = this.makeLiftable(g, x, z, 'bench', 1.4);
    l.mesh.rotation.y = ry;
    liftables.push(l);
  }

  liftablesNear(pos, maxR) {
    const out = [];
    const cx = Math.round(pos.x / PITCH), cz = Math.round(pos.z / PITCH);
    for (let ix = cx - 1; ix <= cx + 1; ix++) {
      for (let iz = cz - 1; iz <= cz + 1; iz++) {
        const chunk = this.chunks.get(ix + ':' + iz);
        if (!chunk) continue;
        for (const l of chunk.liftables) {
          if (!l.alive || l.busy) continue;
          const d = Math.hypot(l.mesh.position.x - pos.x, l.mesh.position.z - pos.z);
          if (d < maxR) out.push({ l, d });
        }
      }
    }
    return out;
  }

  removeLiftable(l) {
    this.destroyLiftableMesh(l);
    const i = this.orphans.indexOf(l);
    if (i >= 0) this.orphans.splice(i, 1);
  }

  // ---------------- queries ----------------

  collidersNear(x, z) {
    const out = [];
    const cx = Math.round(x / PITCH), cz = Math.round(z / PITCH);
    for (let ix = cx - 1; ix <= cx + 1; ix++) {
      for (let iz = cz - 1; iz <= cz + 1; iz++) {
        const chunk = this.chunks.get(ix + ':' + iz);
        if (chunk) out.push(...chunk.colliders);
      }
    }
    return out;
  }

  resolve(pos, radius, y = 0) {
    for (const c of this.collidersNear(pos.x, pos.z)) {
      if (y > c.h + 0.5) continue;
      const dx = pos.x - c.x, dz = pos.z - c.z;
      const px = c.hw + radius - Math.abs(dx);
      const pz = c.hd + radius - Math.abs(dz);
      if (px > 0 && pz > 0) {
        if (px < pz) pos.x += (dx >= 0 ? 1 : -1) * px;
        else pos.z += (dz >= 0 ? 1 : -1) * pz;
      }
    }
  }

  isBlocked(x, z, r = 0.8) {
    for (const c of this.collidersNear(x, z)) {
      if (Math.abs(x - c.x) < c.hw + r && Math.abs(z - c.z) < c.hd + r) return true;
    }
    return false;
  }

  buildingHeightAt(x, z) {
    let h = 0;
    for (const c of this.collidersNear(x, z)) {
      if (Math.abs(x - c.x) < c.hw && Math.abs(z - c.z) < c.hd) h = Math.max(h, c.h);
    }
    return h;
  }

  randomOpenPos(center = this.focus, minR = 6, maxR = 90) {
    for (let i = 0; i < 50; i++) {
      const a = rand(0, Math.PI * 2);
      const r = rand(minR, maxR);
      const x = center.x + Math.cos(a) * r;
      const z = center.z + Math.sin(a) * r;
      if (!this.isBlocked(x, z, 1.1)) return { x, z };
    }
    return { x: center.x + rand(-8, 8), z: center.z + rand(-8, 8) };
  }

  setXray(on) {
    this.xray = on;
    for (const mat of this.buildingMats) {
      mat.transparent = on;
      mat.opacity = on ? 0.22 : 1;
      mat.depthWrite = !on;
      mat.needsUpdate = true;
    }
  }
}
