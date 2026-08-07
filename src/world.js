import * as THREE from 'three';
import { CONFIG } from './config.js';
import { rand, randInt, pick } from './utils.js';

const PITCH = CONFIG.BLOCK + CONFIG.ROAD;

function makeWindowTexture() {
  const c = document.createElement('canvas');
  c.width = 64; c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#0e1420';
  g.fillRect(0, 0, 64, 128);
  for (let y = 4; y < 124; y += 10) {
    for (let x = 4; x < 60; x += 9) {
      const lit = Math.random() < 0.42;
      g.fillStyle = lit ? (Math.random() < 0.3 ? '#ffd985' : '#9fd0ff') : '#131a2a';
      g.fillRect(x, y, 6, 6);
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(1, 3);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function makeGroundTexture(theme) {
  const size = 1024;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  const scale = size / CONFIG.WORLD_SIZE;

  if (theme === 'downtown') {
    g.fillStyle = '#2a2d34';
    g.fillRect(0, 0, size, size);
    // subtle concrete noise
    for (let i = 0; i < 2600; i++) {
      g.fillStyle = `rgba(255,255,255,${rand(0.01, 0.05)})`;
      g.fillRect(rand(0, size), rand(0, size), rand(1, 3), rand(1, 3));
    }
  } else {
    g.fillStyle = '#4c7a3d';
    g.fillRect(0, 0, size, size);
    for (let i = 0; i < 3200; i++) {
      g.fillStyle = Math.random() < 0.5 ? `rgba(90,150,70,${rand(0.1, 0.3)})` : `rgba(50,90,40,${rand(0.1, 0.3)})`;
      g.fillRect(rand(0, size), rand(0, size), rand(1, 4), rand(1, 4));
    }
  }

  // roads on the block grid
  const half = CONFIG.WORLD_SIZE / 2;
  const roadPx = CONFIG.ROAD * scale;
  g.fillStyle = theme === 'downtown' ? '#191b20' : '#3a3d42';
  for (let w = -half; w <= half + 1; w += PITCH) {
    const p = (w + half) * scale - roadPx / 2;
    g.fillRect(p, 0, roadPx, size);
    g.fillRect(0, p, size, roadPx);
  }
  // center dashes
  g.fillStyle = 'rgba(230,220,130,0.55)';
  const dash = 3 * scale;
  for (let w = -half; w <= half + 1; w += PITCH) {
    const p = (w + half) * scale - 0.35 * scale;
    for (let d = 0; d < size; d += dash * 2.2) {
      g.fillRect(p, d, 0.7 * scale, dash);
      g.fillRect(d, p, dash, 0.7 * scale);
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

export class World {
  constructor(scene) {
    this.scene = scene;
    this.theme = 'downtown';
    this.group = null;
    this.colliders = [];      // {x, z, hw, hd, h}
    this.grid = new Map();    // spatial hash -> collider indices
    this.cellSize = 20;
    this.half = CONFIG.WORLD_SIZE / 2;
    this.xray = false;
    this.buildingMats = [];

    // lights persist across regenerations; regenerate() re-tunes them
    this.hemi = new THREE.HemisphereLight(0xbdd7ff, 0x30343c, 0.9);
    scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xffffff, 1.6);
    this.sun.position.set(60, 110, 40);
    scene.add(this.sun);

    this.windowTex = makeWindowTexture();
  }

  regenerate(theme) {
    this.theme = theme || (Math.random() < 0.5 ? 'suburb' : 'downtown');
    if (this.group) {
      this.scene.remove(this.group);
      this.group.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material && o.material !== this.windowTex) {
          (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => {
            if (m.map && m.map !== this.windowTex) m.map.dispose();
            m.dispose();
          });
        }
      });
    }
    this.group = new THREE.Group();
    this.colliders = [];
    this.grid.clear();
    this.buildingMats = [];

    const downtown = this.theme === 'downtown';

    // atmosphere
    if (downtown) {
      this.scene.background = new THREE.Color(0x101726);
      this.scene.fog = new THREE.Fog(0x101726, 90, 260);
      this.hemi.color.set(0x7d92c9); this.hemi.groundColor.set(0x1a1d26); this.hemi.intensity = 0.8;
      this.sun.color.set(0xa8bdff); this.sun.intensity = 0.9;
    } else {
      this.scene.background = new THREE.Color(0x9fd2ff);
      this.scene.fog = new THREE.Fog(0x9fd2ff, 110, 300);
      this.hemi.color.set(0xcfe6ff); this.hemi.groundColor.set(0x51703f); this.hemi.intensity = 1.0;
      this.sun.color.set(0xfff2d5); this.sun.intensity = 1.7;
    }

    // ground
    const groundGeo = new THREE.PlaneGeometry(CONFIG.WORLD_SIZE, CONFIG.WORLD_SIZE);
    const groundMat = new THREE.MeshLambertMaterial({ map: makeGroundTexture(this.theme) });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    this.group.add(ground);

    // far horizon skirt so the edge doesn't cut to sky abruptly
    const skirt = new THREE.Mesh(
      new THREE.PlaneGeometry(CONFIG.WORLD_SIZE * 4, CONFIG.WORLD_SIZE * 4),
      new THREE.MeshBasicMaterial({ color: downtown ? 0x0c111c : 0x6f9c5a })
    );
    skirt.rotation.x = -Math.PI / 2;
    skirt.position.y = -0.15;
    this.group.add(skirt);

    if (downtown) this.buildDowntown();
    else this.buildSuburb();

    this.scene.add(this.group);
    this.setXray(this.xray);
  }

  blockCenters() {
    const centers = [];
    const n = Math.floor(CONFIG.WORLD_SIZE / PITCH);
    const start = -((n - 1) / 2) * PITCH;
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++)
        centers.push([start + i * PITCH, start + j * PITCH]);
    return centers;
  }

  addCollider(x, z, hw, hd, h) {
    const idx = this.colliders.length;
    this.colliders.push({ x, z, hw, hd, h });
    const minX = Math.floor((x - hw + this.half) / this.cellSize);
    const maxX = Math.floor((x + hw + this.half) / this.cellSize);
    const minZ = Math.floor((z - hd + this.half) / this.cellSize);
    const maxZ = Math.floor((z + hd + this.half) / this.cellSize);
    for (let cx = minX; cx <= maxX; cx++)
      for (let cz = minZ; cz <= maxZ; cz++) {
        const k = cx + ':' + cz;
        if (!this.grid.has(k)) this.grid.set(k, []);
        this.grid.get(k).push(idx);
      }
  }

  buildDowntown() {
    const towers = [];
    for (const [bx, bz] of this.blockCenters()) {
      if (Math.random() < 0.14) continue; // plaza block
      const count = randInt(1, 2);
      for (let i = 0; i < count; i++) {
        const w = rand(7, 12), d = rand(7, 12);
        const h = Math.random() < 0.18 ? rand(34, 52) : rand(10, 30);
        const ox = count === 1 ? 0 : (i === 0 ? -CONFIG.BLOCK / 4.2 : CONFIG.BLOCK / 4.2);
        const x = bx + ox + rand(-1.5, 1.5), z = bz + rand(-3, 3);
        towers.push({ x, z, w, d, h, shade: rand(0.7, 1.15) });
        this.addCollider(x, z, w / 2, d / 2, h);
      }
    }
    const geo = new THREE.BoxGeometry(1, 1, 1);
    geo.translate(0, 0.5, 0);
    const mat = new THREE.MeshLambertMaterial({
      map: this.windowTex,
      emissiveMap: this.windowTex,
      emissive: new THREE.Color(0x8899bb),
      emissiveIntensity: 0.65,
    });
    this.buildingMats.push(mat);
    const inst = new THREE.InstancedMesh(geo, mat, towers.length);
    const m = new THREE.Matrix4();
    const col = new THREE.Color();
    towers.forEach((t, i) => {
      m.makeScale(t.w, t.h, t.d);
      m.setPosition(t.x, 0, t.z);
      inst.setMatrixAt(i, m);
      inst.setColorAt(i, col.setScalar(t.shade));
    });
    inst.instanceMatrix.needsUpdate = true;
    this.group.add(inst);

    // street lights
    const lightPosts = [];
    for (const [bx, bz] of this.blockCenters()) {
      if (Math.random() < 0.5) lightPosts.push([bx + CONFIG.BLOCK / 2 + 1.5, bz + CONFIG.BLOCK / 2 + 1.5]);
    }
    const poleGeo = new THREE.CylinderGeometry(0.12, 0.16, 6, 5);
    poleGeo.translate(0, 3, 0);
    const poleInst = new THREE.InstancedMesh(poleGeo, new THREE.MeshLambertMaterial({ color: 0x3a4048 }), lightPosts.length);
    const bulbGeo = new THREE.SphereGeometry(0.35, 8, 6);
    const bulbInst = new THREE.InstancedMesh(bulbGeo, new THREE.MeshBasicMaterial({ color: 0xffd9a0 }), lightPosts.length);
    lightPosts.forEach(([x, z], i) => {
      m.makeTranslation(x, 0, z);
      poleInst.setMatrixAt(i, m);
      m.makeTranslation(x, 6, z);
      bulbInst.setMatrixAt(i, m);
    });
    this.group.add(poleInst, bulbInst);
  }

  buildSuburb() {
    const houses = [], roofs = [], trunks = [], leaves = [];
    const houseColors = [0xe8dcc8, 0xd9c1a8, 0xc9d8e8, 0xdde8c9, 0xe8c9c9, 0xf0e6d0];
    const roofColors = [0x8a4b3b, 0x5b6570, 0x71504a, 0x4f6b52];
    for (const [bx, bz] of this.blockCenters()) {
      const perSide = 2;
      for (let i = 0; i < perSide * 2; i++) {
        if (Math.random() < 0.2) continue;
        const side = i < perSide ? -1 : 1;
        const slot = i % perSide;
        const x = bx + (slot - 0.5) * (CONFIG.BLOCK / 2) + rand(-1, 1);
        const z = bz + side * (CONFIG.BLOCK / 4) + rand(-1, 1);
        const w = rand(5, 7), d = rand(4.5, 6), h = rand(3.2, 4.6);
        houses.push({ x, z, w, d, h, color: pick(houseColors) });
        roofs.push({ x, z, w: Math.max(w, d) * 0.78, h: rand(1.8, 2.6), y: h, color: pick(roofColors) });
        this.addCollider(x, z, w / 2, d / 2, h + 2);
      }
      // trees
      const treeCount = randInt(1, 3);
      for (let t = 0; t < treeCount; t++) {
        const x = bx + rand(-CONFIG.BLOCK / 2.3, CONFIG.BLOCK / 2.3);
        const z = bz + rand(-CONFIG.BLOCK / 2.3, CONFIG.BLOCK / 2.3);
        if (houses.some((hh) => Math.abs(hh.x - x) < hh.w / 2 + 1.5 && Math.abs(hh.z - z) < hh.d / 2 + 1.5)) continue;
        const s = rand(0.8, 1.5);
        trunks.push({ x, z, s });
        leaves.push({ x, z, s });
        this.addCollider(x, z, 0.4 * s, 0.4 * s, 3 * s);
      }
    }
    const m = new THREE.Matrix4();
    const col = new THREE.Color();

    const houseGeo = new THREE.BoxGeometry(1, 1, 1);
    houseGeo.translate(0, 0.5, 0);
    const houseMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
    this.buildingMats.push(houseMat);
    const houseInst = new THREE.InstancedMesh(houseGeo, houseMat, houses.length);
    houses.forEach((hh, i) => {
      m.makeScale(hh.w, hh.h, hh.d);
      m.setPosition(hh.x, 0, hh.z);
      houseInst.setMatrixAt(i, m);
      houseInst.setColorAt(i, col.set(hh.color));
    });
    this.group.add(houseInst);

    const roofGeo = new THREE.ConeGeometry(0.72, 1, 4);
    roofGeo.rotateY(Math.PI / 4);
    roofGeo.translate(0, 0.5, 0);
    const roofMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
    this.buildingMats.push(roofMat);
    const roofInst = new THREE.InstancedMesh(roofGeo, roofMat, roofs.length);
    roofs.forEach((r, i) => {
      m.makeScale(r.w, r.h, r.w);
      m.setPosition(r.x, r.y, r.z);
      roofInst.setMatrixAt(i, m);
      roofInst.setColorAt(i, col.set(r.color));
    });
    this.group.add(roofInst);

    const trunkGeo = new THREE.CylinderGeometry(0.25, 0.35, 2.2, 5);
    trunkGeo.translate(0, 1.1, 0);
    const trunkInst = new THREE.InstancedMesh(trunkGeo, new THREE.MeshLambertMaterial({ color: 0x6b4a32 }), trunks.length);
    trunks.forEach((t, i) => {
      m.makeScale(t.s, t.s, t.s);
      m.setPosition(t.x, 0, t.z);
      trunkInst.setMatrixAt(i, m);
    });
    this.group.add(trunkInst);

    const leafGeo = new THREE.IcosahedronGeometry(1.4, 0);
    const leafInst = new THREE.InstancedMesh(leafGeo, new THREE.MeshLambertMaterial({ color: 0xffffff }), leaves.length);
    const leafColors = [0x4f8f3a, 0x5da245, 0x3f7a30, 0x76a83f];
    leaves.forEach((t, i) => {
      m.makeScale(t.s, t.s * 1.15, t.s);
      m.setPosition(t.x, 2.2 * t.s + 0.8, t.z);
      leafInst.setMatrixAt(i, m);
      leafInst.setColorAt(i, col.set(pick(leafColors)));
    });
    this.group.add(leafInst);
  }

  nearbyColliders(x, z) {
    const cx = Math.floor((x + this.half) / this.cellSize);
    const cz = Math.floor((z + this.half) / this.cellSize);
    const out = [];
    for (let ix = cx - 1; ix <= cx + 1; ix++)
      for (let iz = cz - 1; iz <= cz + 1; iz++) {
        const arr = this.grid.get(ix + ':' + iz);
        if (arr) for (const i of arr) out.push(this.colliders[i]);
      }
    return out;
  }

  // Push a character position out of any building it overlaps (ignores
  // buildings shorter than y — flying characters pass over them).
  resolve(pos, radius, y = 0) {
    const b = this.half - 2;
    pos.x = Math.max(-b, Math.min(b, pos.x));
    pos.z = Math.max(-b, Math.min(b, pos.z));
    for (const c of this.nearbyColliders(pos.x, pos.z)) {
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
    if (Math.abs(x) > this.half - 2 || Math.abs(z) > this.half - 2) return true;
    for (const c of this.nearbyColliders(x, z)) {
      if (Math.abs(x - c.x) < c.hw + r && Math.abs(z - c.z) < c.hd + r) return true;
    }
    return false;
  }

  buildingHeightAt(x, z) {
    let h = 0;
    for (const c of this.nearbyColliders(x, z)) {
      if (Math.abs(x - c.x) < c.hw && Math.abs(z - c.z) < c.hd) h = Math.max(h, c.h);
    }
    return h;
  }

  randomOpenPos(margin = 1.2) {
    for (let i = 0; i < 60; i++) {
      const x = rand(-this.half + 6, this.half - 6);
      const z = rand(-this.half + 6, this.half - 6);
      if (!this.isBlocked(x, z, margin)) return { x, z };
    }
    return { x: 0, z: 0 };
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
