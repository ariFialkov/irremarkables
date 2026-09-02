// Procedural skinned hero rig: an 18-bone skeleton, a lofted body mesh with
// muscle profiles skinned across the joints, a sculpted head with hair,
// facial hair and gear, all driven by an archetype spec + instance palette.
import * as THREE from 'three';
import { SUITS } from './archetypes.js';

const TAU = Math.PI * 2;
const clamp01 = (v) => Math.max(0, Math.min(1, v));
const gauss = (x, w) => Math.exp(-(x * x) / (2 * w * w));
const angDiff = (a, b) => Math.atan2(Math.sin(a - b), Math.cos(a - b));
const smoothstep = (t) => { t = clamp01(t); return t * t * (3 - 2 * t); };

export const BONES = [
  'hips', 'spine1', 'spine2', 'chest', 'neck', 'head',
  'clavL', 'upperArmL', 'foreArmL', 'handL',
  'clavR', 'upperArmR', 'foreArmR', 'handR',
  'thighL', 'shinL', 'footL',
  'thighR', 'shinR', 'footR',
];
const BI = Object.fromEntries(BONES.map((b, i) => [b, i]));

// ---------------------------------------------------------------------------
// geometry accumulator with skin attributes
// ---------------------------------------------------------------------------
class Builder {
  constructor() {
    this.pos = []; this.col = []; this.si = []; this.sw = []; this.idx = [];
    this.n = 0;
  }
  vertex(p, color, weights) {
    this.pos.push(p.x, p.y, p.z);
    this.col.push(color.r, color.g, color.b);
    // normalise up to 4 weights
    const w = weights.slice(0, 4);
    while (w.length < 4) w.push([0, 0]);
    let sum = 0;
    for (const [, wt] of w) sum += wt;
    for (const [bi, wt] of w) { this.si.push(bi); this.sw.push(sum > 0 ? wt / sum : 0); }
    return this.n++;
  }
  tri(a, b, c) { this.idx.push(a, b, c); }
  quad(a, b, c, d) { this.idx.push(a, b, c, a, c, d); }

  // Lofted tube along an axis. frame.u/frame.v define theta=0 and theta=PI/2.
  tube({ from, to, rings, segs, radius, bump, color, weights, frame, closeStart = false, closeEnd = false }) {
    const axis = to.clone().sub(from);
    const start = this.n;
    const centers = [];
    for (let i = 0; i < rings; i++) {
      const t = i / (rings - 1);
      const c = from.clone().addScaledVector(axis, t);
      centers.push(c);
      const { rx, rz } = radius(t);
      for (let j = 0; j < segs; j++) {
        const th = (j / segs) * TAU;
        const b = bump ? bump(t, th) : 0;
        const k = 1 + b / ((rx + rz) * 0.5);
        const p = c.clone()
          .addScaledVector(frame.u, rx * Math.cos(th) * k)
          .addScaledVector(frame.v, rz * Math.sin(th) * k);
        this.vertex(p, color(t, th), weights(t));
      }
    }
    for (let i = 0; i < rings - 1; i++) {
      for (let j = 0; j < segs; j++) {
        const a = start + i * segs + j;
        const b = start + i * segs + (j + 1) % segs;
        const c = start + (i + 1) * segs + (j + 1) % segs;
        const d = start + (i + 1) * segs + j;
        this.quad(a, b, c, d);
      }
    }
    if (closeStart) {
      const cv = this.vertex(centers[0], color(0, 0), weights(0));
      for (let j = 0; j < segs; j++) this.tri(cv, start + (j + 1) % segs, start + j);
    }
    if (closeEnd) {
      const base = start + (rings - 1) * segs;
      const cv = this.vertex(centers[rings - 1], color(1, 0), weights(1));
      for (let j = 0; j < segs; j++) this.tri(cv, base + j, base + (j + 1) % segs);
    }
  }

  // Deformable sphere: displace(n) -> radial offset for unit normal n.
  sphere({ center, radii, wSeg = 14, hSeg = 10, color, weights, displace, filter }) {
    const start = this.n;
    const grid = [];
    for (let iy = 0; iy <= hSeg; iy++) {
      const v = iy / hSeg;
      const phi = v * Math.PI;
      const row = [];
      for (let ix = 0; ix <= wSeg; ix++) {
        const u = ix / wSeg;
        const th = u * TAU;
        const n = new THREE.Vector3(-Math.cos(th) * Math.sin(phi), Math.cos(phi), Math.sin(th) * Math.sin(phi));
        let r = 1;
        if (displace) r += displace(n);
        const p = new THREE.Vector3(n.x * radii.x * r, n.y * radii.y * r, n.z * radii.z * r).add(center);
        const keep = !filter || filter(n);
        row.push(keep ? this.vertex(p, typeof color === 'function' ? color(n) : color, weights) : -1);
      }
      grid.push(row);
    }
    for (let iy = 0; iy < hSeg; iy++) {
      for (let ix = 0; ix < wSeg; ix++) {
        const a = grid[iy][ix], b = grid[iy][ix + 1], c = grid[iy + 1][ix + 1], d = grid[iy + 1][ix];
        if (a < 0 || b < 0 || c < 0 || d < 0) continue;
        if (iy !== 0) this.tri(a, b, d);
        if (iy !== hSeg - 1) this.tri(b, c, d);
      }
    }
    return start;
  }

  box({ center, size, color, weights, rot = null }) {
    const g = new THREE.BoxGeometry(size.x, size.y, size.z).toNonIndexed();
    if (rot) g.applyQuaternion(rot);
    g.translate(center.x, center.y, center.z);
    const p = g.attributes.position;
    const start = this.n;
    for (let i = 0; i < p.count; i++) {
      this.vertex(new THREE.Vector3(p.getX(i), p.getY(i), p.getZ(i)), color, weights);
    }
    for (let i = 0; i < p.count; i += 3) this.tri(start + i, start + i + 1, start + i + 2);
  }

  cone({ center, radius, height, color, weights, rot = null, segs = 7 }) {
    const g = new THREE.ConeGeometry(radius, height, segs).toNonIndexed();
    if (rot) g.applyQuaternion(rot);
    g.translate(center.x, center.y, center.z);
    const p = g.attributes.position;
    const start = this.n;
    for (let i = 0; i < p.count; i++) {
      this.vertex(new THREE.Vector3(p.getX(i), p.getY(i), p.getZ(i)), color, weights);
    }
    for (let i = 0; i < p.count; i += 3) this.tri(start + i, start + i + 1, start + i + 2);
  }

  build() {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    geo.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(this.si, 4));
    geo.setAttribute('skinWeight', new THREE.Float32BufferAttribute(this.sw, 4));
    geo.setIndex(this.idx);
    geo.computeVertexNormals();
    return geo;
  }
}

// smooth piecewise interpolation of [t, value] control points
function profile(points) {
  return (t) => {
    if (t <= points[0][0]) return points[0][1];
    for (let i = 0; i < points.length - 1; i++) {
      const [t0, v0] = points[i], [t1, v1] = points[i + 1];
      if (t <= t1) {
        const k = smoothstep((t - t0) / (t1 - t0));
        return v0 + (v1 - v0) * k;
      }
    }
    return points[points.length - 1][1];
  };
}

// ---------------------------------------------------------------------------
// rig construction
// ---------------------------------------------------------------------------
export function buildRig(arch, P, { faceless = false } = {}) {
  const b = arch.build;
  const H = 1.85 * b.height;
  const mass = b.mass, def = b.definition;

  // ---- skeleton rest positions (character space, facing +Z) ----
  const thighLen = 0.245 * H * b.legLen, shinLen = 0.235 * H * b.legLen;
  const ankleY = 0.045 * H;
  const hipsY = ankleY + thighLen + shinLen;
  const spine1Y = hipsY + 0.065 * H, spine2Y = spine1Y + 0.065 * H, chestY = spine2Y + 0.07 * H;
  const neckY = chestY + 0.11 * H, headY = neckY + 0.045 * H;
  const headC = neckY + 0.1 * H;
  const shoulderX = 0.115 * H * b.shoulder, shoulderY = chestY + 0.085 * H;
  const upperArmLen = 0.165 * H, foreArmLen = 0.15 * H, handLen = 0.085 * H;
  const hipX = 0.058 * H * (0.85 + 0.15 * b.waist);

  const rest = {
    hips: [0, hipsY, 0], spine1: [0, spine1Y, 0], spine2: [0, spine2Y, 0], chest: [0, chestY, 0],
    neck: [0, neckY, 0], head: [0, headY, 0],
    clavL: [-0.03 * H, shoulderY - 0.01 * H, 0], upperArmL: [-shoulderX, shoulderY, 0],
    foreArmL: [-shoulderX, shoulderY - upperArmLen, 0], handL: [-shoulderX, shoulderY - upperArmLen - foreArmLen, 0],
    clavR: [0.03 * H, shoulderY - 0.01 * H, 0], upperArmR: [shoulderX, shoulderY, 0],
    foreArmR: [shoulderX, shoulderY - upperArmLen, 0], handR: [shoulderX, shoulderY - upperArmLen - foreArmLen, 0],
    thighL: [-hipX, hipsY - 0.02 * H, 0], shinL: [-hipX, hipsY - 0.02 * H - thighLen, 0], footL: [-hipX, ankleY, 0],
    thighR: [hipX, hipsY - 0.02 * H, 0], shinR: [hipX, hipsY - 0.02 * H - thighLen, 0], footR: [hipX, ankleY, 0],
  };
  const parent = {
    spine1: 'hips', spine2: 'spine1', chest: 'spine2', neck: 'chest', head: 'neck',
    clavL: 'chest', upperArmL: 'clavL', foreArmL: 'upperArmL', handL: 'foreArmL',
    clavR: 'chest', upperArmR: 'clavR', foreArmR: 'upperArmR', handR: 'foreArmR',
    thighL: 'hips', shinL: 'thighL', footL: 'shinL',
    thighR: 'hips', shinR: 'thighR', footR: 'shinR',
  };
  const bones = {};
  for (const name of BONES) {
    const bone = new THREE.Bone();
    bone.name = name;
    const r = rest[name];
    const pr = parent[name] ? rest[parent[name]] : [0, 0, 0];
    bone.position.set(r[0] - pr[0], r[1] - pr[1], r[2] - pr[2]);
    bones[name] = bone;
  }
  for (const name of BONES) if (parent[name]) bones[parent[name]].add(bones[name]);
  const V = (a) => new THREE.Vector3(a[0], a[1], a[2]);

  const B = new Builder();
  const suit = SUITS[arch.suit] || SUITS.flight;
  const suitColor = (region, t, theta, y, side) => suit({ region, t, theta, y: y / H, side }, P);
  const skin = P.skin;
  const F = { u: new THREE.Vector3(1, 0, 0), v: new THREE.Vector3(0, 0, 1) };     // vertical tubes
  const FF = { u: new THREE.Vector3(1, 0, 0), v: new THREE.Vector3(0, 1, 0) };    // feet (along +Z)

  // ---- torso: hips bottom -> neck base ----
  const torsoFrom = new THREE.Vector3(0, hipsY - 0.07 * H, 0), torsoTo = new THREE.Vector3(0, neckY, 0);
  const rxP = profile([
    [0, 0.088 * H * (0.9 + 0.1 * b.waist)], [0.2, 0.076 * H * b.waist], [0.5, 0.098 * H * (0.55 + 0.45 * b.shoulder)],
    [0.72, 0.112 * H * b.shoulder], [0.86, 0.128 * H * b.shoulder], [1, 0.05 * H],
  ]);
  const rzP = profile([
    [0, 0.062 * H * (0.8 + 0.2 * b.waist)], [0.2, 0.052 * H * b.waist], [0.5, 0.066 * H * (0.7 + 0.3 * mass)],
    [0.72, 0.074 * H * (0.7 + 0.3 * mass)], [0.86, 0.068 * H], [1, 0.05 * H],
  ]);
  const spineBones = [['hips', hipsY - 0.07 * H], ['spine1', spine1Y], ['spine2', spine2Y], ['chest', chestY], ['neck', neckY]];
  const torsoWeights = (t) => {
    const y = torsoFrom.y + (torsoTo.y - torsoFrom.y) * t;
    for (let i = 0; i < spineBones.length - 1; i++) {
      const [na, ya] = spineBones[i], [nb, yb] = spineBones[i + 1];
      if (y <= yb) {
        const k = smoothstep((y - ya) / (yb - ya));
        return [[BI[na], 1 - k], [BI[nb], k]];
      }
    }
    return [[BI.neck, 1]];
  };
  const torsoBump = (t, th) => {
    const fr = angDiff(th, Math.PI / 2);      // 0 at front
    const bk = angDiff(th, 3 * Math.PI / 2);  // 0 at back
    let d = 0;
    // pectorals
    d += 0.013 * H * def * mass * (gauss(fr - 0.4, 0.3) + gauss(fr + 0.4, 0.3)) * gauss(t - 0.7, 0.085);
    // abdominals: three rows, two columns
    for (const row of [0.31, 0.42, 0.53]) {
      d += 0.0062 * H * def * (gauss(fr - 0.17, 0.13) + gauss(fr + 0.17, 0.13)) * gauss(t - row, 0.04);
    }
    // obliques / serratus hint
    d += 0.004 * H * def * (gauss(fr - 0.85, 0.2) + gauss(fr + 0.85, 0.2)) * gauss(t - 0.45, 0.12);
    // lats + traps on the back
    d += 0.009 * H * mass * (gauss(bk - 0.55, 0.32) + gauss(bk + 0.55, 0.32)) * gauss(t - 0.66, 0.14);
    d += 0.006 * H * mass * gauss(bk, 0.5) * gauss(t - 0.9, 0.08);
    // spine groove
    d -= 0.0045 * H * gauss(bk, 0.12) * gauss(t - 0.55, 0.3);
    // sternum line
    d -= 0.002 * H * gauss(fr, 0.06) * gauss(t - 0.7, 0.1);
    return d;
  };
  B.tube({
    from: torsoFrom, to: torsoTo, rings: 18, segs: 22, frame: F,
    radius: (t) => ({ rx: rxP(t), rz: rzP(t) }),
    bump: torsoBump,
    color: (t, th) => suitColor('torso', t, th, torsoFrom.y + (torsoTo.y - torsoFrom.y) * t, 0),
    weights: torsoWeights, closeStart: true,
  });

  // ---- neck ----
  B.tube({
    from: new THREE.Vector3(0, neckY - 0.012 * H, 0), to: new THREE.Vector3(0, headC - 0.055 * H, 0),
    rings: 4, segs: 12, frame: F,
    radius: (t) => ({ rx: 0.031 * H * Math.sqrt(mass) * (1 + 0.15 * t), rz: 0.03 * H * Math.sqrt(mass) }),
    color: (t, th) => (faceless ? suitColor('neck', t, th, neckY, 0) : skin),
    weights: (t) => (t < 0.4 ? [[BI.neck, 1]] : [[BI.neck, 1 - (t - 0.4) / 0.6 * 0.6], [BI.head, (t - 0.4) / 0.6 * 0.6]]),
  });

  // ---- head ----
  const headR = new THREE.Vector3(0.066 * H, 0.078 * H, 0.071 * H);
  const headCenter = new THREE.Vector3(0, headC, 0);
  const headW = [[BI.head, 1]];
  const headDisplace = (n) => {
    let d = 0;
    // jaw taper toward the chin
    const jaw = clamp01((-n.y - 0.15) / 0.85);
    d -= 0.16 * jaw * (Math.abs(n.x) * 0.9 + 0.15) * (n.z < 0 ? 0.6 : 1);
    // chin comes forward slightly
    d += 0.05 * gauss(n.y + 0.78, 0.15) * clamp01(n.z);
    // brow ridge
    d += 0.05 * gauss(n.y - 0.32, 0.1) * clamp01(n.z - 0.35) * (1 - 0.5 * gauss(n.x, 0.12));
    // eye sockets
    d -= 0.06 * (gauss(n.x - 0.4, 0.18) + gauss(n.x + 0.4, 0.18)) * gauss(n.y - 0.16, 0.13) * clamp01(n.z - 0.3);
    // cheekbones
    d += 0.035 * (gauss(n.x - 0.62, 0.2) + gauss(n.x + 0.62, 0.2)) * gauss(n.y + 0.08, 0.14) * clamp01(n.z);
    // temples flatten
    d -= 0.03 * (gauss(n.x - 0.8, 0.2) + gauss(n.x + 0.8, 0.2)) * gauss(n.y - 0.3, 0.2);
    // back of skull fuller
    d += 0.04 * clamp01(-n.z - 0.3) * clamp01(n.y + 0.2);
    return d;
  };
  B.sphere({
    center: headCenter, radii: headR, wSeg: 20, hSeg: 14,
    color: faceless ? suitColor('head', 0.5, 0, headC, 0) : skin,
    weights: headW, displace: headDisplace,
  });

  if (!faceless) {
    // nose
    B.box({ center: new THREE.Vector3(0, headC - 0.004 * H, headR.z * 0.96), size: new THREE.Vector3(0.017 * H, 0.04 * H, 0.026 * H), color: skin, weights: headW,
      rot: new THREE.Quaternion().setFromEuler(new THREE.Euler(0.35, 0, 0)) });
    B.box({ center: new THREE.Vector3(0, headC - 0.022 * H, headR.z * 1.02), size: new THREE.Vector3(0.024 * H, 0.014 * H, 0.02 * H), color: skin, weights: headW });
    // ears
    for (const s of [-1, 1]) {
      B.sphere({ center: new THREE.Vector3(s * headR.x * 0.98, headC - 0.004 * H, -0.008 * H), radii: new THREE.Vector3(0.007 * H, 0.02 * H, 0.014 * H), wSeg: 8, hSeg: 6, color: skin, weights: headW });
    }
    // brows (stoic, straight), eyes, mouth
    const brow = P.hair.clone().multiplyScalar(0.55);
    const eyeCol = new THREE.Color(0x141820);
    for (const s of [-1, 1]) {
      B.box({ center: new THREE.Vector3(s * 0.03 * H, headC + 0.027 * H, headR.z * 0.9), size: new THREE.Vector3(0.036 * H, 0.006 * H, 0.012 * H), color: brow, weights: headW,
        rot: new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, s * -0.12)) });
      B.sphere({ center: new THREE.Vector3(s * 0.028 * H, headC + 0.012 * H, headR.z * 0.86), radii: new THREE.Vector3(0.012 * H, 0.008 * H, 0.008 * H), wSeg: 8, hSeg: 5, color: eyeCol, weights: headW });
    }
    B.box({ center: new THREE.Vector3(0, headC - 0.046 * H, headR.z * 0.92), size: new THREE.Vector3(0.028 * H, 0.004 * H, 0.008 * H), color: skin.clone().multiplyScalar(0.7), weights: headW });
  }

  // ---- hair ----
  addHair(B, arch.hair, P, headCenter, headR, H, headW);
  if (arch.facialHair) addFacialHair(B, arch.facialHair, P, headCenter, headR, H, headW);

  // ---- arms ----
  for (const side of [-1, 1]) {
    const S = side < 0 ? 'L' : 'R';
    const sh = V(rest['upperArm' + S]), el = V(rest['foreArm' + S]), wr = V(rest['hand' + S]);
    const handEnd = wr.clone().add(new THREE.Vector3(0, -handLen, 0));
    // deltoid cap
    B.sphere({ center: sh.clone().add(new THREE.Vector3(side * 0.004 * H, -0.008 * H, 0)), radii: new THREE.Vector3(0.033 * H * mass, 0.036 * H * mass, 0.034 * H * mass), wSeg: 12, hSeg: 8,
      color: (n) => suitColor('upperArm', 0.02, Math.atan2(n.z, n.x), sh.y, side),
      weights: [[BI['upperArm' + S], 0.75], [BI['clav' + S], 0.25]] });
    B.tube({
      from: sh, to: el, rings: 9, segs: 12, frame: F,
      radius: (t) => {
        const base = 0.036 * H * mass * (1.1 - 0.25 * t);
        return { rx: base, rz: base * 1.05 };
      },
      bump: (t, th) => {
        const fr = angDiff(th, Math.PI / 2), bk = angDiff(th, 3 * Math.PI / 2);
        return 0.008 * H * def * mass * gauss(fr, 0.55) * gauss(t - 0.5, 0.18)     // bicep
          + 0.006 * H * def * mass * gauss(bk, 0.6) * gauss(t - 0.55, 0.2);         // tricep
      },
      color: (t, th) => suitColor('upperArm', t, th, sh.y - upperArmLen * t, side),
      weights: (t) => t < 0.16 ? [[BI['upperArm' + S], 1 - (0.16 - t) / 0.16 * 0.35], [BI['clav' + S], (0.16 - t) / 0.16 * 0.35]]
        : t > 0.82 ? [[BI['upperArm' + S], 1 - (t - 0.82) / 0.18 * 0.5], [BI['foreArm' + S], (t - 0.82) / 0.18 * 0.5]]
        : [[BI['upperArm' + S], 1]],
    });
    // elbow
    B.sphere({ center: el, radii: new THREE.Vector3(0.028 * H * mass, 0.03 * H * mass, 0.03 * H * mass), wSeg: 10, hSeg: 7,
      color: (n) => suitColor('foreArm', 0.02, Math.atan2(n.z, n.x), el.y, side), weights: [[BI['upperArm' + S], 0.5], [BI['foreArm' + S], 0.5]] });
    B.tube({
      from: el, to: wr, rings: 8, segs: 12, frame: F,
      radius: (t) => {
        const base = 0.03 * H * Math.sqrt(mass) * (1 + 0.15 * gauss(t - 0.25, 0.2) - 0.35 * t);
        return { rx: base * 1.05, rz: base };
      },
      color: (t, th) => suitColor('foreArm', t, th, el.y - foreArmLen * t, side),
      weights: (t) => t < 0.18 ? [[BI['foreArm' + S], 1 - (0.18 - t) / 0.18 * 0.5], [BI['upperArm' + S], (0.18 - t) / 0.18 * 0.5]]
        : t > 0.86 ? [[BI['foreArm' + S], 1 - (t - 0.86) / 0.14 * 0.5], [BI['hand' + S], (t - 0.86) / 0.14 * 0.5]]
        : [[BI['foreArm' + S], 1]],
    });
    // hand: flattened box-ish tube with fingers hint
    B.tube({
      from: wr, to: handEnd, rings: 4, segs: 10, frame: F,
      radius: (t) => ({ rx: 0.024 * H * (1 + 0.3 * Math.sin(t * Math.PI)), rz: 0.013 * H * (1 + 0.2 * Math.sin(t * Math.PI)) }),
      color: (t, th) => suitColor('hand', t, th, wr.y, side),
      weights: (t) => t < 0.3 ? [[BI['hand' + S], 0.7], [BI['foreArm' + S], 0.3]] : [[BI['hand' + S], 1]],
      closeEnd: true,
    });
  }

  // ---- legs ----
  for (const side of [-1, 1]) {
    const S = side < 0 ? 'L' : 'R';
    const hp = V(rest['thigh' + S]), kn = V(rest['shin' + S]), an = V(rest['foot' + S]);
    B.tube({
      from: hp.clone().add(new THREE.Vector3(0, 0.03 * H, 0)), to: kn, rings: 10, segs: 14, frame: F,
      radius: (t) => {
        const base = 0.058 * H * Math.sqrt(mass) * (0.5 + 0.5 * b.waist) * (1.05 - 0.38 * t);
        return { rx: base, rz: base * 1.08 };
      },
      bump: (t, th) => {
        const fr = angDiff(th, Math.PI / 2), bk = angDiff(th, 3 * Math.PI / 2);
        return 0.009 * H * def * mass * (gauss(fr - 0.3, 0.35) + gauss(fr + 0.3, 0.35)) * gauss(t - 0.55, 0.22)  // quads
          + 0.007 * H * def * mass * gauss(bk, 0.6) * gauss(t - 0.4, 0.22);                                     // hamstrings
      },
      color: (t, th) => suitColor('thigh', t, th, hp.y - thighLen * t, side),
      weights: (t) => t < 0.15 ? [[BI['thigh' + S], 1 - (0.15 - t) / 0.15 * 0.4], [BI.hips, (0.15 - t) / 0.15 * 0.4]]
        : t > 0.84 ? [[BI['thigh' + S], 1 - (t - 0.84) / 0.16 * 0.5], [BI['shin' + S], (t - 0.84) / 0.16 * 0.5]]
        : [[BI['thigh' + S], 1]],
    });
    B.sphere({ center: kn, radii: new THREE.Vector3(0.036 * H * Math.sqrt(mass), 0.04 * H, 0.038 * H), wSeg: 10, hSeg: 7,
      color: (n) => suitColor('shin', 0.02, Math.atan2(n.z, n.x), kn.y, side), weights: [[BI['thigh' + S], 0.5], [BI['shin' + S], 0.5]] });
    B.tube({
      from: kn, to: an, rings: 9, segs: 12, frame: F,
      radius: (t) => {
        const base = 0.037 * H * Math.sqrt(mass) * (1.05 - 0.4 * t);
        return { rx: base, rz: base * 1.05 };
      },
      bump: (t, th) => {
        const bk = angDiff(th, 3 * Math.PI / 2);
        return 0.011 * H * def * mass * gauss(bk, 0.55) * gauss(t - 0.3, 0.16)      // calf
          + 0.003 * H * def * gauss(angDiff(th, Math.PI / 2), 0.25) * gauss(t - 0.5, 0.3); // shin ridge
      },
      color: (t, th) => suitColor('shin', t, th, kn.y - shinLen * t, side),
      weights: (t) => t < 0.16 ? [[BI['shin' + S], 1 - (0.16 - t) / 0.16 * 0.5], [BI['thigh' + S], (0.16 - t) / 0.16 * 0.5]]
        : t > 0.86 ? [[BI['shin' + S], 1 - (t - 0.86) / 0.14 * 0.45], [BI['foot' + S], (t - 0.86) / 0.14 * 0.45]]
        : [[BI['shin' + S], 1]],
    });
    // foot: heel to toe along +Z
    const heel = an.clone().add(new THREE.Vector3(0, -0.025 * H, -0.035 * H));
    const toe = an.clone().add(new THREE.Vector3(0, -0.03 * H, 0.125 * H));
    B.tube({
      from: heel, to: toe, rings: 5, segs: 10, frame: FF,
      radius: (t) => ({ rx: 0.032 * H * (1 + 0.25 * Math.sin(t * Math.PI)), rz: 0.02 * H * (1.3 - 0.6 * t) }),
      color: (t, th) => suitColor('foot', t, th, an.y, side),
      weights: () => [[BI['foot' + S], 1]],
      closeStart: true, closeEnd: true,
    });
  }

  // ---- chest emblem ----
  addEmblem(B, arch, P, chestY, rzP(0.72), H);

  // ---- gear (merged) ----
  for (const g of arch.gear) addGear(B, g, P, headCenter, headR, H, headW);

  const geo = B.build();
  geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, H * 0.5, 0), H * 1.4);
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.62, metalness: 0.04 });
  const mesh = new THREE.SkinnedMesh(geo, mat);
  mesh.add(bones.hips);
  mesh.bind(new THREE.Skeleton(BONES.map((n) => bones[n])));
  mesh.frustumCulled = true;

  // ---- animated / glowing attachments ----
  const extras = [];
  if (arch.hair === 'flame') extras.push(makeFlameHair(bones.head, headC - headY, headR, H));
  if (arch.gear.includes('xrayGoggles')) extras.push(makeGlowLenses(bones.head, headC - headY, headR, H, P.glow));
  if (arch.gear.includes('lightningBoots')) {
    for (const S of ['L', 'R']) extras.push(makeBootGlow(bones['shin' + S], shinLen, H, P.glow));
  }

  // cape pins: along the collarbones, just behind the shoulders (chest-local)
  const pins = [];
  const capeCols = 7;
  for (let i = 0; i < capeCols; i++) {
    const k = i / (capeCols - 1) - 0.5;
    pins.push(new THREE.Vector3(k * shoulderX * 1.35, shoulderY - chestY + 0.012 * H, -rzP(0.86) * 0.85));
  }

  return {
    mesh, bones, extras, pins,
    H, hipsY, chestY, shoulderY, neckY,
    torsoRadius: rxP(0.72) * 1.05,
    capeWidth: shoulderX * 1.35 * 2,
  };
}

// ---------------------------------------------------------------------------
// hair
// ---------------------------------------------------------------------------
function addHair(B, style, P, hc, hr, H, w) {
  const col = P.hair;
  const cap = (yMin, thick, opts = {}) => B.sphere({
    center: hc, radii: hr.clone().multiplyScalar(1 + thick), wSeg: 20, hSeg: 12, color: col, weights: w,
    filter: (n) => n.y > yMin && !(n.z > 0.42 && n.y < (opts.fringe ?? 0.5)) && !(opts.flatTop && n.y > 0.985),
    displace: opts.displace,
  });
  switch (style) {
    case 'surfer':
      cap(-0.25, 0.09, { fringe: 0.35, displace: (n) => 0.05 * Math.sin(n.x * 14 + n.y * 9) * Math.sin(n.z * 11) });
      // hanging side/back strands to the jaw
      for (const [x, z] of [[-0.85, 0.1], [0.85, 0.1], [-0.6, -0.65], [0.6, -0.65], [0, -0.95], [-0.95, -0.35], [0.95, -0.35]]) {
        B.sphere({ center: new THREE.Vector3(x * hr.x * 1.05, hc.y - 0.035 * H, z * hr.z * 1.05).add(hc).sub(new THREE.Vector3(0, hc.y, 0)),
          radii: new THREE.Vector3(0.012 * H, 0.05 * H, 0.016 * H), wSeg: 7, hSeg: 6, color: col, weights: w });
      }
      break;
    case 'spiky':
      cap(0.02, 0.05);
      for (let i = 0; i < 9; i++) {
        const a = (i / 9) * TAU;
        const r = 0.55;
        const dir = new THREE.Vector3(Math.cos(a) * r * 0.6, 1, Math.sin(a) * r * 0.5 - 0.15).normalize();
        const base = hc.clone().add(new THREE.Vector3(dir.x * hr.x, dir.y * hr.y, dir.z * hr.z));
        const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
        B.cone({ center: base.clone().addScaledVector(dir, 0.028 * H), radius: 0.016 * H, height: 0.065 * H, color: col, weights: w, rot: q, segs: 6 });
      }
      break;
    case 'quiff': {
      cap(-0.05, 0.06, { fringe: 0.45 });
      // swept side-parted front volume
      const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(-0.5, 0.35, 0.25));
      B.sphere({ center: hc.clone().add(new THREE.Vector3(0.012 * H, hr.y * 0.98, hr.z * 0.25)), radii: new THREE.Vector3(0.055 * H, 0.026 * H, 0.048 * H), wSeg: 12, hSeg: 8, color: col, weights: w,
        displace: (n) => 0.08 * Math.sin(n.x * 9) * Math.sin(n.z * 7) });
      if (P.hairStreak) {
        B.box({ center: hc.clone().add(new THREE.Vector3(0.03 * H, hr.y * 1.03, hr.z * 0.3)), size: new THREE.Vector3(0.016 * H, 0.03 * H, 0.06 * H), color: P.hairStreak, weights: w, rot: q });
      }
      break;
    }
    case 'flame':
      cap(0.1, 0.05);   // dark base; animated flames attach separately
      break;
    case 'mohawk': {
      const n = 9;
      for (let i = 0; i < n; i++) {
        const k = i / (n - 1);
        const z = (0.75 - 1.5 * k) * hr.z;
        const ySurf = Math.sqrt(Math.max(0, 1 - (z / hr.z) ** 2)) * hr.y;
        const h = (0.075 + 0.03 * Math.sin(k * Math.PI)) * H;
        B.box({ center: hc.clone().add(new THREE.Vector3(0, ySurf + h / 2 - 0.006 * H, z)), size: new THREE.Vector3(0.018 * H, h, hr.z * 1.5 / n * 1.15), color: col, weights: w,
          rot: new THREE.Quaternion().setFromEuler(new THREE.Euler((k - 0.5) * 0.8, 0, 0)) });
      }
      break;
    }
    case 'buzz':
      cap(0.05, 0.02);
      break;
    case 'sidepart':
      cap(-0.02, 0.05, { fringe: 0.4, displace: (n) => (n.x > 0.15 ? 0.05 : 0) });
      // part line
      B.box({ center: hc.clone().add(new THREE.Vector3(0.02 * H, hr.y * 1.04, 0)), size: new THREE.Vector3(0.004 * H, 0.004 * H, hr.z * 1.1), color: col.clone().multiplyScalar(0.55), weights: w });
      break;
    case 'crew':
      cap(0.15, 0.035, { flatTop: true });
      break;
    case 'bald':
    default:
      break;
  }
}

function addFacialHair(B, style, P, hc, hr, H, w) {
  const col = P.hair.clone().multiplyScalar(0.9);
  if (style === 'goatee' || style === 'stubbleGoatee') {
    const c = style === 'goatee' ? col : P.skin.clone().lerp(new THREE.Color(0x2a2420), 0.55);
    B.box({ center: hc.clone().add(new THREE.Vector3(0, -0.062 * H, hr.z * 0.82)), size: new THREE.Vector3(0.028 * H, 0.03 * H, 0.016 * H), color: c, weights: w });
    B.box({ center: hc.clone().add(new THREE.Vector3(0, -0.033 * H, hr.z * 0.95)), size: new THREE.Vector3(0.034 * H, 0.006 * H, 0.008 * H), color: c, weights: w });
  } else if (style === 'fullBeard') {
    B.sphere({
      center: hc.clone().add(new THREE.Vector3(0, -0.012 * H, 0.004 * H)), radii: new THREE.Vector3(hr.x * 1.06, hr.y * 1.02, hr.z * 1.08), wSeg: 18, hSeg: 12, color: col, weights: w,
      filter: (n) => n.y < -0.28 && n.z > -0.1 && !(n.z > 0.75 && n.y > -0.5),
      displace: (n) => 0.06 * Math.sin(n.x * 15) * Math.sin(n.y * 12) + 0.1 * clamp01(-n.y - 0.6),
    });
  }
}

// ---------------------------------------------------------------------------
// gear (merged, Lambert) — glowing pieces are separate meshes below
// ---------------------------------------------------------------------------
function addGear(B, kind, P, hc, hr, H, w) {
  const dark = new THREE.Color(0x14161c);
  const eyeY = hc.y + 0.012 * H;
  const strap = (y, thick, color) => B.tube({
    from: new THREE.Vector3(0, y - thick / 2, 0).add(new THREE.Vector3(0, 0, 0)), to: new THREE.Vector3(0, y + thick / 2, 0),
    rings: 2, segs: 18, frame: { u: new THREE.Vector3(1, 0, 0), v: new THREE.Vector3(0, 0, 1) },
    radius: () => ({ rx: hr.x * 1.06, rz: hr.z * 1.06 }), color: () => color, weights: () => w,
  });
  switch (kind) {
    case 'aviatorGoggles': {
      strap(eyeY, 0.02 * H, new THREE.Color(0x5a4630));
      for (const s of [-1, 1]) {
        const c = new THREE.Vector3(s * 0.03 * H, eyeY, hr.z * 0.98);
        B.sphere({ center: c, radii: new THREE.Vector3(0.026 * H, 0.02 * H, 0.012 * H), wSeg: 12, hSeg: 6, color: new THREE.Color(0x8a7a55), weights: w });
        B.sphere({ center: c.clone().add(new THREE.Vector3(0, 0, 0.006 * H)), radii: new THREE.Vector3(0.02 * H, 0.015 * H, 0.01 * H), wSeg: 12, hSeg: 6, color: new THREE.Color(0x2c4a6e), weights: w });
      }
      break;
    }
    case 'speedShades':
      B.box({ center: new THREE.Vector3(0, eyeY, hr.z * 0.95), size: new THREE.Vector3(0.11 * H, 0.02 * H, 0.014 * H), color: new THREE.Color(0x3a0d12), weights: w });
      for (const s of [-1, 1]) B.box({ center: new THREE.Vector3(s * hr.x * 0.95, eyeY, hr.z * 0.3), size: new THREE.Vector3(0.006 * H, 0.008 * H, hr.z * 1.3), color: dark, weights: w });
      break;
    case 'facelessMask':
      // handled by faceless build + suit head colour; add a subtle seam ring
      strap(hc.y - 0.06 * H, 0.006 * H, P.secondary);
      break;
    case 'robinMask': {
      B.box({ center: new THREE.Vector3(0, eyeY, hr.z * 0.93), size: new THREE.Vector3(0.1 * H, 0.03 * H, 0.012 * H), color: dark, weights: w });
      for (const s of [-1, 1]) {
        B.box({ center: new THREE.Vector3(s * 0.058 * H, eyeY + 0.014 * H, hr.z * 0.72), size: new THREE.Vector3(0.026 * H, 0.014 * H, 0.012 * H), color: dark, weights: w,
          rot: new THREE.Quaternion().setFromEuler(new THREE.Euler(0, s * 0.6, s * 0.5)) });
        // eye whites in the mask
        B.sphere({ center: new THREE.Vector3(s * 0.028 * H, eyeY, hr.z * 0.99), radii: new THREE.Vector3(0.011 * H, 0.006 * H, 0.004 * H), wSeg: 8, hSeg: 4, color: new THREE.Color(0xf2f2f2), weights: w });
      }
      break;
    }
    case 'baneMask': {
      const mc = new THREE.Color(0x3a3f4a);
      B.sphere({ center: hc.clone().add(new THREE.Vector3(0, -0.01 * H, 0.006 * H)), radii: new THREE.Vector3(hr.x * 1.1, hr.y * 1.05, hr.z * 1.12), wSeg: 18, hSeg: 12, color: mc, weights: w,
        filter: (n) => n.y < -0.12 && n.z > 0.05 && !(n.y < -0.9) });
      // breather tubes
      for (const s of [-1, 1]) {
        for (let i = 0; i < 3; i++) {
          B.box({ center: new THREE.Vector3(s * (0.02 + i * 0.018) * H, hc.y - 0.045 * H, hr.z * 0.95 - i * 0.008 * H), size: new THREE.Vector3(0.01 * H, 0.03 * H, 0.012 * H), color: new THREE.Color(0x8a93a3), weights: w });
        }
        B.box({ center: new THREE.Vector3(s * hr.x * 0.9, hc.y - 0.03 * H, hr.z * 0.45), size: new THREE.Vector3(0.012 * H, 0.012 * H, 0.06 * H), color: mc.clone().multiplyScalar(0.7), weights: w });
      }
      break;
    }
    case 'bandana': {
      strap(eyeY, 0.032 * H, P.accent);
      // knot + tails at the back
      B.sphere({ center: new THREE.Vector3(0, eyeY, -hr.z * 1.02), radii: new THREE.Vector3(0.016 * H, 0.014 * H, 0.014 * H), wSeg: 8, hSeg: 6, color: P.accent, weights: w });
      for (const s of [-1, 1]) {
        B.box({ center: new THREE.Vector3(s * 0.018 * H, eyeY - 0.045 * H, -hr.z * 1.05), size: new THREE.Vector3(0.018 * H, 0.08 * H, 0.004 * H), color: P.accent, weights: w,
          rot: new THREE.Quaternion().setFromEuler(new THREE.Euler(0.25, 0, s * 0.25)) });
      }
      // eye slits
      for (const s of [-1, 1]) B.box({ center: new THREE.Vector3(s * 0.028 * H, eyeY, hr.z * 1.08), size: new THREE.Vector3(0.026 * H, 0.006 * H, 0.004 * H), color: dark, weights: w });
      break;
    }
    case 'xrayGoggles':
      strap(eyeY, 0.016 * H, dark);
      for (const s of [-1, 1]) {
        B.sphere({ center: new THREE.Vector3(s * 0.03 * H, eyeY, hr.z * 0.97), radii: new THREE.Vector3(0.024 * H, 0.024 * H, 0.014 * H), wSeg: 12, hSeg: 6, color: new THREE.Color(0x2a2f2a), weights: w });
      }
      break;
    case 'sunglasses':
      B.box({ center: new THREE.Vector3(0, eyeY, hr.z * 0.96), size: new THREE.Vector3(0.096 * H, 0.022 * H, 0.012 * H), color: dark, weights: w });
      for (const s of [-1, 1]) B.box({ center: new THREE.Vector3(s * hr.x * 0.96, eyeY + 0.004 * H, hr.z * 0.3), size: new THREE.Vector3(0.005 * H, 0.006 * H, hr.z * 1.3), color: dark, weights: w });
      break;
    case 'lightningBoots':
    default:
      break;
  }
}

// ---------------------------------------------------------------------------
// emblems (chest bone)
// ---------------------------------------------------------------------------
function addEmblem(B, arch, P, chestY, rzChest, H) {
  const w = [[BI.chest, 1]];
  const z = rzChest + 0.016 * H;
  const y = chestY + 0.05 * H;
  const c = P.accent;
  const box = (dx, dy, sx, sy, rz = 0, col = c) => B.box({
    center: new THREE.Vector3(dx, y + dy, z), size: new THREE.Vector3(sx, sy, 0.008 * H), color: col, weights: w,
    rot: new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, rz)),
  });
  switch (arch.suit) {
    case 'flight':   // wings
      box(-0.03 * H, 0, 0.05 * H, 0.012 * H, 0.35); box(0.03 * H, 0, 0.05 * H, 0.012 * H, -0.35); break;
    case 'speed':    // bolt
      box(-0.008 * H, 0.012 * H, 0.014 * H, 0.03 * H, 0.5); box(0.008 * H, -0.012 * H, 0.014 * H, 0.03 * H, 0.5); break;
    case 'telekinesis': // eye-of-mind ring
      B.sphere({ center: new THREE.Vector3(0, y, z), radii: new THREE.Vector3(0.026 * H, 0.018 * H, 0.005 * H), wSeg: 12, hSeg: 6, color: c, weights: w });
      B.sphere({ center: new THREE.Vector3(0, y, z + 0.004 * H), radii: new THREE.Vector3(0.009 * H, 0.009 * H, 0.004 * H), wSeg: 8, hSeg: 5, color: P.glow, weights: w });
      break;
    case 'pyro':     // flame
      B.cone({ center: new THREE.Vector3(0, y + 0.006 * H, z), radius: 0.02 * H, height: 0.045 * H, color: c, weights: w, segs: 6 }); break;
    case 'cryo':     // snowflake
      for (let i = 0; i < 3; i++) box(0, 0, 0.05 * H, 0.007 * H, i * Math.PI / 3); break;
    case 'teleport': // portal ring
      B.sphere({ center: new THREE.Vector3(0, y, z), radii: new THREE.Vector3(0.024 * H, 0.024 * H, 0.005 * H), wSeg: 12, hSeg: 6, color: c, weights: w }); break;
    case 'xray':     // eye
      B.sphere({ center: new THREE.Vector3(0, y, z), radii: new THREE.Vector3(0.028 * H, 0.014 * H, 0.005 * H), wSeg: 12, hSeg: 6, color: c, weights: w }); break;
    case 'shapeshift': // shifting diamond
      box(0, 0, 0.028 * H, 0.028 * H, Math.PI / 4); break;
    case 'duplication': // double bars
      box(-0.014 * H, 0, 0.012 * H, 0.04 * H); box(0.014 * H, 0, 0.012 * H, 0.04 * H); break;
    case 'invisibility':
    default:
      break;
  }
}

// ---------------------------------------------------------------------------
// animated / glowing attachments (separate meshes parented to bones)
// ---------------------------------------------------------------------------
function makeFlameHair(headBone, yOff, hr, H) {
  const g = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({ color: 0xff7a1a, transparent: true, opacity: 0.95 });
  const mat2 = new THREE.MeshBasicMaterial({ color: 0xffd23c, transparent: true, opacity: 0.9 });
  const flames = [];
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * TAU;
    const x = Math.cos(a) * hr.x * 0.55, z = Math.sin(a) * hr.z * 0.5 - hr.z * 0.15;
    const ySurf = Math.sqrt(Math.max(0, 1 - (x / hr.x) ** 2 - (z / hr.z) ** 2)) * hr.y;
    const h = (0.07 + 0.04 * Math.random()) * H;
    const m = new THREE.Mesh(new THREE.ConeGeometry(0.018 * H, h, 5), i % 3 === 0 ? mat2 : mat);
    m.position.set(x, yOff + ySurf + h / 2 - 0.01 * H, z);
    m.rotation.set((Math.random() - 0.5) * 0.5, 0, (Math.random() - 0.5) * 0.5);
    m.userData.base = { y: m.position.y, rx: m.rotation.x, rz: m.rotation.z, h };
    g.add(m);
    flames.push(m);
  }
  headBone.add(g);
  g.userData.animate = (t) => {
    for (let i = 0; i < flames.length; i++) {
      const f = flames[i], b = f.userData.base;
      f.scale.y = 0.85 + 0.35 * Math.sin(t * 9 + i * 1.7);
      f.rotation.x = b.rx + Math.sin(t * 7 + i) * 0.15;
      f.rotation.z = b.rz + Math.cos(t * 6 + i * 2) * 0.15;
    }
  };
  return g;
}

function makeGlowLenses(headBone, yOff, hr, H, glow) {
  const g = new THREE.Group();
  const mat = new THREE.MeshBasicMaterial({ color: glow });
  for (const s of [-1, 1]) {
    const m = new THREE.Mesh(new THREE.CircleGeometry(0.017 * H, 12), mat);
    m.position.set(s * 0.03 * H, yOff + 0.012 * H, hr.z * 0.97 + 0.015 * H);
    g.add(m);
  }
  headBone.add(g);
  g.userData.animate = (t) => { mat.opacity = 1; g.scale.setScalar(1 + 0.05 * Math.sin(t * 8)); };
  return g;
}

function makeBootGlow(shinBone, shinLen, H, glow) {
  const mat = new THREE.MeshBasicMaterial({ color: glow });
  const g = new THREE.Group();
  for (let i = 0; i < 3; i++) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.014 * H, 0.006 * H, 0.012 * H), mat);
    m.position.set((i - 1) * 0.008 * H, -shinLen * (0.55 + i * 0.1), 0.036 * H);
    m.rotation.z = 0.5;
    g.add(m);
  }
  shinBone.add(g);
  return g;
}
