// Layered procedural animator for the hero rig.
//  base layer  : idle / locomotion (walk<->run by speed) / fly, crossfaded
//  action layer: attack moves and power-cast poses, masked to the bones they
//                own and faded in/out over the base
//
// Bone conventions (rest = A-pose, arms hanging, facing +Z):
//  upperArm.x  < 0 : arm forward/up          upperArm.z : L<0 / R>0 = out to the side
//  foreArm.x   < 0 : elbow bends (hand forward)
//  thigh.x     < 0 : leg forward             shin.x > 0 : knee bends back
//  spine/chest.x > 0 : lean forward          *.y : twist about vertical
//  hips is the root: rotating it pitches / spins the whole body
import { BONES } from './rig.js';

const NB = BONES.length;
const BI = Object.fromEntries(BONES.map((b, i) => [b, i]));
const clamp01 = (v) => Math.max(0, Math.min(1, v));
const lerp = (a, b, k) => a + (b - a) * k;

// ---------------------------------------------------------------------------
// attack move library — absolute rotations for the bones each frame names
// ---------------------------------------------------------------------------
const GUARD = {
  upperArmL: [-0.8, 0, -0.3], foreArmL: [-2.0, 0, 0],
  upperArmR: [-0.8, 0, 0.3], foreArmR: [-2.0, 0, 0],
};
const LEGS0 = { thighL: [0, 0, 0], shinL: [0, 0, 0], thighR: [0, 0, 0], shinR: [0, 0, 0] };

const mirror = (pose) => {
  const out = {};
  for (const [k, v] of Object.entries(pose)) {
    const m = k.endsWith('L') ? k.slice(0, -1) + 'R' : k.endsWith('R') ? k.slice(0, -1) + 'L' : k;
    out[m] = k.endsWith('L') || k.endsWith('R') ? [v[0], -v[1], -v[2]] : [v[0], -v[1], -v[2]];
  }
  return out;
};
const mirrorMove = (mv) => ({ ...mv, frames: mv.frames.map(([at, p]) => [at, mirror(p)]) });

export const MOVES = {
  jabR: { dur: 0.38, hits: [0.45], frames: [
    [0, { ...GUARD, upperArmR: [-0.9, 0, 0.3], foreArmR: [-1.9, 0, 0], chest: [0.05, 0.25, 0], spine2: [0, 0.1, 0] }],
    [0.45, { ...GUARD, upperArmR: [-1.55, 0, 0.12], foreArmR: [-0.05, 0, 0], chest: [0.15, -0.45, 0], spine2: [0, -0.2, 0] }],
    [1, { ...GUARD, chest: [0, 0, 0], spine2: [0, 0, 0] }],
  ] },
  hookR: { dur: 0.5, hits: [0.5], frames: [
    [0, { ...GUARD, upperArmR: [-0.6, -0.2, 1.3], foreArmR: [-1.6, 0, 0], chest: [0.05, 0.55, 0], spine2: [0, 0.2, 0] }],
    [0.5, { ...GUARD, upperArmR: [-1.2, -1.5, 1.2], foreArmR: [-1.5, 0, 0], chest: [0.1, -0.65, 0], spine2: [0, -0.3, 0] }],
    [1, { ...GUARD, chest: [0, 0, 0], spine2: [0, 0, 0] }],
  ] },
  uppercutR: { dur: 0.5, hits: [0.5], frames: [
    [0, { ...GUARD, upperArmR: [0.3, 0, 0.35], foreArmR: [-1.2, 0, 0], chest: [0.35, 0.2, 0], spine1: [0.2, 0, 0] }],
    [0.5, { ...GUARD, upperArmR: [-1.6, 0, 0.2], foreArmR: [-1.6, 0, 0], chest: [-0.25, -0.3, 0], spine1: [-0.1, 0, 0] }],
    [1, { ...GUARD, chest: [0, 0, 0], spine1: [0, 0, 0] }],
  ] },
  frontKickR: { dur: 0.55, hits: [0.5], frames: [
    [0, { ...GUARD, ...LEGS0, thighR: [-0.8, 0, 0.1], shinR: [1.7, 0, 0], chest: [-0.15, 0, 0] }],
    [0.5, { ...GUARD, ...LEGS0, thighR: [-1.45, 0, 0.1], shinR: [0.1, 0, 0], chest: [-0.35, 0, 0] }],
    [1, { ...GUARD, ...LEGS0, chest: [0, 0, 0] }],
  ] },
  roundhouseR: { dur: 0.65, hits: [0.55], frames: [
    [0, { ...GUARD, ...LEGS0, hips: [0, 0.6, 0], thighR: [-0.5, 0, 1.2], shinR: [1.6, 0, 0], chest: [0.1, 0.3, 0] }],
    [0.55, { ...GUARD, ...LEGS0, hips: [0, -1.4, 0], thighR: [-0.9, 0, 1.4], shinR: [0.2, 0, 0], chest: [0.2, -0.4, 0] }],
    [1, { ...GUARD, ...LEGS0, hips: [0, 0, 0], chest: [0, 0, 0] }],
  ] },
  kneeR: { dur: 0.45, hits: [0.5], frames: [
    [0, { ...LEGS0, thighR: [-0.4, 0, 0], shinR: [0.8, 0, 0], upperArmL: [-1.3, 0, -0.3], foreArmL: [-1.2, 0, 0], upperArmR: [-1.3, 0, 0.3], foreArmR: [-1.2, 0, 0], chest: [0.05, 0, 0] }],
    [0.5, { ...LEGS0, thighR: [-1.6, 0, 0], shinR: [1.8, 0, 0], upperArmL: [-0.4, 0, -0.3], foreArmL: [-1.6, 0, 0], upperArmR: [-0.4, 0, 0.3], foreArmR: [-1.6, 0, 0], chest: [0.4, 0, 0] }],
    [1, { ...GUARD, ...LEGS0, chest: [0, 0, 0] }],
  ] },
  overheadSlam: { dur: 0.8, hits: [0.55], frames: [
    [0, { ...LEGS0, upperArmL: [-2.9, 0, -0.35], foreArmL: [-0.6, 0, 0], upperArmR: [-2.9, 0, 0.35], foreArmR: [-0.6, 0, 0], chest: [-0.3, 0, 0], spine1: [-0.15, 0, 0] }],
    [0.55, { thighL: [-0.3, 0, -0.1], shinL: [0.5, 0, 0], thighR: [-0.3, 0, 0.1], shinR: [0.5, 0, 0], upperArmL: [-0.9, 0, -0.3], foreArmL: [-0.2, 0, 0], upperArmR: [-0.9, 0, 0.3], foreArmR: [-0.2, 0, 0], chest: [0.55, 0, 0], spine1: [0.3, 0, 0] }],
    [1, { ...GUARD, ...LEGS0, chest: [0, 0, 0], spine1: [0, 0, 0] }],
  ] },
  palmStrike: { dur: 0.5, hits: [0.5], frames: [
    [0, { upperArmL: [-0.8, 0, -0.3], foreArmL: [-1.8, 0, 0], upperArmR: [-0.8, 0, 0.3], foreArmR: [-1.8, 0, 0], chest: [-0.1, 0, 0] }],
    [0.5, { upperArmL: [-1.55, 0, -0.15], foreArmL: [-0.15, 0, 0], upperArmR: [-1.55, 0, 0.15], foreArmR: [-0.15, 0, 0], chest: [0.25, 0, 0] }],
    [1, { ...GUARD, chest: [0, 0, 0] }],
  ] },
  backhandSwipe: { dur: 0.5, hits: [0.5], frames: [
    [0, { ...GUARD, upperArmR: [-1.2, -1.9, 1.3], foreArmR: [-0.6, 0, 0], chest: [0.05, -0.6, 0], spine2: [0, -0.2, 0] }],
    [0.5, { ...GUARD, upperArmR: [-1.2, 0.6, 1.3], foreArmR: [-0.3, 0, 0], chest: [0.05, 0.7, 0], spine2: [0, 0.25, 0] }],
    [1, { ...GUARD, chest: [0, 0, 0], spine2: [0, 0, 0] }],
  ] },
  chopR: { dur: 0.42, hits: [0.5], frames: [
    [0, { ...GUARD, upperArmR: [-2.6, 0, 0.4], foreArmR: [-1.2, 0, 0], chest: [-0.15, 0.2, 0] }],
    [0.5, { ...GUARD, upperArmR: [-1.3, 0, 0.25], foreArmR: [-0.1, 0, 0], chest: [0.3, -0.25, 0] }],
    [1, { ...GUARD, chest: [0, 0, 0] }],
  ] },
  stompR: { dur: 0.7, hits: [0.6], frames: [
    [0, { ...LEGS0, thighR: [-1.2, 0, 0.15], shinR: [1.5, 0, 0], chest: [0.2, 0, 0], upperArmL: [-0.6, 0, -0.4], foreArmL: [-1.5, 0, 0], upperArmR: [-0.6, 0, 0.4], foreArmR: [-1.5, 0, 0] }],
    [0.6, { ...LEGS0, thighR: [-0.15, 0, 0.15], shinR: [0.05, 0, 0], chest: [0.45, 0, 0], spine1: [0.2, 0, 0], upperArmL: [-0.2, 0, -0.5], foreArmL: [-1.0, 0, 0], upperArmR: [-0.2, 0, 0.5], foreArmR: [-1.0, 0, 0] }],
    [1, { ...GUARD, ...LEGS0, chest: [0, 0, 0], spine1: [0, 0, 0] }],
  ] },
  diveStrike: { dur: 0.55, hits: [0.5], frames: [
    [0, { ...GUARD, upperArmR: [-2.4, 0, 0.2], foreArmR: [-0.3, 0, 0], chest: [0.2, 0.1, 0] }],
    [0.5, { ...GUARD, upperArmR: [-1.6, 0, 0.1], foreArmR: [0, 0, 0], chest: [0.6, -0.2, 0], spine1: [0.3, 0, 0], thighL: [0.3, 0, -0.1], thighR: [0.3, 0, 0.1] }],
    [1, { ...GUARD, ...LEGS0, chest: [0, 0, 0], spine1: [0, 0, 0] }],
  ] },
  spinKick: { dur: 0.75, hits: [0.6], frames: [
    [0, { ...GUARD, ...LEGS0, hips: [0, 0.3, 0], thighL: [-0.3, 0, -0.4], shinL: [1.2, 0, 0], chest: [0.1, 0.2, 0] }],
    [0.6, { ...GUARD, ...LEGS0, hips: [0, -2.6, 0], thighL: [-1.3, 0, -1.3], shinL: [0.2, 0, 0], chest: [0.2, -0.2, 0] }],
    [1, { ...GUARD, ...LEGS0, hips: [0, -6.283, 0], chest: [0, 0, 0] }],
  ] },
  longStraightR: { dur: 0.5, hits: [0.5], frames: [
    [0, { ...GUARD, ...LEGS0, upperArmR: [-0.7, 0, 0.3], foreArmR: [-1.9, 0, 0], chest: [0, 0.3, 0] }],
    [0.5, { ...GUARD, ...LEGS0, upperArmR: [-1.7, 0, 0.05], foreArmR: [0, 0, 0], chest: [0.4, -0.5, 0], spine1: [0.25, 0, 0], spine2: [0, -0.3, 0], thighL: [-0.5, 0, -0.1], shinL: [0.3, 0, 0] }],
    [1, { ...GUARD, ...LEGS0, chest: [0, 0, 0], spine1: [0, 0, 0], spine2: [0, 0, 0] }],
  ] },
  longKickR: { dur: 0.6, hits: [0.5], frames: [
    [0, { ...GUARD, ...LEGS0, thighR: [-0.9, 0, 0.15], shinR: [1.6, 0, 0], chest: [-0.3, 0, 0] }],
    [0.5, { ...GUARD, ...LEGS0, thighR: [-1.65, 0, 0.1], shinR: [0, 0, 0], chest: [-0.55, 0, 0], spine1: [-0.2, 0, 0] }],
    [1, { ...GUARD, ...LEGS0, chest: [0, 0, 0], spine1: [0, 0, 0] }],
  ] },
  flurry: { dur: 0.72, hits: [0.2, 0.45, 0.7], hitScale: 0.45, frames: [
    [0, { ...GUARD, chest: [0.05, 0.2, 0] }],
    [0.2, { ...GUARD, upperArmR: [-1.5, 0, 0.12], foreArmR: [-0.05, 0, 0], chest: [0.1, -0.35, 0] }],
    [0.32, { ...GUARD, chest: [0.05, 0, 0] }],
    [0.45, { ...GUARD, upperArmL: [-1.5, 0, -0.12], foreArmL: [-0.05, 0, 0], chest: [0.1, 0.35, 0] }],
    [0.57, { ...GUARD, chest: [0.05, 0, 0] }],
    [0.7, { ...GUARD, upperArmR: [-1.5, 0, 0.12], foreArmR: [-0.05, 0, 0], chest: [0.1, -0.35, 0] }],
    [1, { ...GUARD, chest: [0, 0, 0] }],
  ] },
  bodyBlowR: { dur: 0.4, hits: [0.5], frames: [
    [0, { ...GUARD, upperArmR: [-0.3, -0.3, 1.0], foreArmR: [-1.5, 0, 0], chest: [0.35, 0.4, 0], spine1: [0.15, 0, 0] }],
    [0.5, { ...GUARD, upperArmR: [-0.9, -1.4, 0.9], foreArmR: [-1.3, 0, 0], chest: [0.4, -0.5, 0], spine1: [0.2, 0, 0] }],
    [1, { ...GUARD, chest: [0, 0, 0], spine1: [0, 0, 0] }],
  ] },
};
MOVES.crossL = mirrorMove({ ...MOVES.jabR, dur: 0.45, hits: [0.5] });
MOVES.hookL = mirrorMove(MOVES.hookR);
MOVES.bodyBlowL = mirrorMove(MOVES.bodyBlowR);

// ---------------------------------------------------------------------------
// power-cast poses (held for a duration)
// ---------------------------------------------------------------------------
export const CASTS = {
  telekinesis: { dur: 9, pose: { upperArmL: [-1.4, 0, -0.35], foreArmL: [-0.6, 0, 0], upperArmR: [-1.4, 0, 0.35], foreArmR: [-0.6, 0, 0], chest: [0.1, 0, 0], head: [-0.1, 0, 0] } },
  pyro: { dur: 1.3, pose: { upperArmL: [-1.5, 0, -0.2], foreArmL: [-0.3, 0, 0], upperArmR: [-1.5, 0, 0.2], foreArmR: [-0.3, 0, 0], chest: [0.15, 0, 0] } },
  cryo: { dur: 0.9, pose: { upperArmL: [-1.5, 0, -0.5], foreArmL: [-0.3, 0, 0], upperArmR: [-1.5, 0, 0.5], foreArmR: [-0.3, 0, 0], chest: [0.15, 0, 0] } },
  flight: { dur: 0.55, pose: { upperArmR: [-3.0, 0, 0.1], foreArmR: [-0.2, 0, 0], upperArmL: [0.2, 0, -0.3], foreArmL: [-0.3, 0, 0], chest: [-0.15, 0, 0] } },
  speed: { dur: 0.35, pose: { chest: [0.5, 0, 0], spine1: [0.2, 0, 0], thighL: [-0.4, 0, -0.1], shinL: [0.7, 0, 0], thighR: [-0.4, 0, 0.1], shinR: [0.7, 0, 0], upperArmL: [0.6, 0, -0.3], foreArmL: [-1.0, 0, 0], upperArmR: [-0.9, 0, 0.3], foreArmR: [-1.6, 0, 0] } },
  invisibility: { dur: 0.5, pose: { upperArmL: [-1.2, 0, 0.5], foreArmL: [-1.4, 0, 0], upperArmR: [-1.2, 0, -0.5], foreArmR: [-1.4, 0, 0], head: [0.2, 0, 0] } },
  teleport: { dur: 0.3, pose: { chest: [0.3, 0, 0], thighL: [-0.6, 0, -0.1], shinL: [1.1, 0, 0], thighR: [-0.6, 0, 0.1], shinR: [1.1, 0, 0], upperArmL: [-0.5, 0, -0.3], foreArmL: [-2.2, 0, 0], upperArmR: [-0.5, 0, 0.3], foreArmR: [-2.2, 0, 0] } },
  xray: { dur: 0.9, pose: { upperArmR: [-1.8, 0, 0.25], foreArmR: [-2.4, 0, 0], head: [-0.05, 0.2, 0] } },
  shapeshift: { dur: 0.7, pose: { upperArmL: [0, 0, -1.5], foreArmL: [-0.1, 0, 0], upperArmR: [0, 0, 1.5], foreArmR: [-0.1, 0, 0], head: [0, 0.3, 0] } },
  duplication: { dur: 0.6, pose: { upperArmL: [-1.2, 0, -0.9], foreArmL: [-0.3, 0, 0], upperArmR: [-1.2, 0, 0.9], foreArmR: [-0.3, 0, 0], chest: [-0.1, 0, 0] } },
};

// ---------------------------------------------------------------------------

function samplePose(frames, u, out, mask) {
  // out: Float32Array NB*3 (only masked bones written); mask: Set of bone idx
  let i = 0;
  while (i < frames.length - 2 && frames[i + 1][0] <= u) i++;
  const [a0, p0] = frames[i], [a1, p1] = frames[i + 1];
  const k = clamp01((u - a0) / Math.max(1e-6, a1 - a0));
  const ke = k * k * (3 - 2 * k);
  for (const bi of mask) {
    const name = BONES[bi];
    const v0 = p0[name] || p1[name] || [0, 0, 0];
    const v1 = p1[name] || p0[name] || [0, 0, 0];
    out[bi * 3] = lerp(v0[0], v1[0], ke);
    out[bi * 3 + 1] = lerp(v0[1], v1[1], ke);
    out[bi * 3 + 2] = lerp(v0[2], v1[2], ke);
  }
}

function moveMask(mv) {
  const s = new Set();
  for (const [, p] of mv.frames) for (const name of Object.keys(p)) s.add(BI[name]);
  return s;
}

export class Animator {
  constructor(bones, arch) {
    this.bones = bones;
    this.arch = arch;
    this.base = new Float32Array(NB * 3);
    this.tmpA = new Float32Array(NB * 3);
    this.tmpB = new Float32Array(NB * 3);
    this.action = new Float32Array(NB * 3);
    this.state = 'idle'; this.prevState = 'idle'; this.blend = 1;
    this.phase = 0;
    this.attack = null;     // {mv, t, dur, mask, hitsDone}
    this.cast = null;       // {pose, mask, t, dur}
    this.moveIndex = 0;
    this.actionW = 0;
    this.flyPitch = 0;
  }

  get attacking() { return !!this.attack; }

  startAttack(name, speedMul = 1) {
    const mv = MOVES[name] || MOVES.jabR;
    const dur = mv.dur / speedMul;
    this.cast = null;   // an attack always takes over from a held cast pose
    this.attack = { mv, t: 0, dur, mask: moveMask(mv), hitsFired: 0 };
    return { duration: dur, hits: mv.hits.map((h) => h * dur), hitScale: mv.hitScale || 1 };
  }

  nextMove() {
    const list = this.arch.combat.moves;
    const name = list[this.moveIndex % list.length];
    this.moveIndex++;
    return name;
  }

  startCast(powerId, duration) {
    const c = CASTS[powerId];
    if (!c) return;
    const mask = new Set(Object.keys(c.pose).map((n) => BI[n]));
    this.cast = { pose: c.pose, mask, t: 0, dur: duration ?? c.dur };
  }
  stopCast() { if (this.cast) this.cast.dur = Math.min(this.cast.dur, this.cast.t + 0.12); }

  // ---- base layers ----
  writeIdle(out, t) {
    out.fill(0);
    const br = Math.sin(t * 1.6);
    const set = (b, x, y, z) => { out[BI[b] * 3] = x; out[BI[b] * 3 + 1] = y; out[BI[b] * 3 + 2] = z; };
    set('chest', 0.03 + 0.02 * br, 0, 0);
    set('spine1', 0.02, 0, 0.02 * Math.sin(t * 0.7));
    set('upperArmL', 0.05 * Math.sin(t * 0.9), 0, -0.2 - 0.015 * br);
    set('upperArmR', 0.05 * Math.sin(t * 0.9 + 1), 0, 0.2 + 0.015 * br);
    set('foreArmL', -0.2, 0, 0);
    set('foreArmR', -0.2, 0, 0);
    set('thighL', 0, 0, -0.07);
    set('thighR', 0, 0, 0.07);
    set('head', 0.02 * br, 0.12 * Math.sin(t * 0.45), 0);
  }

  writeLocomotion(out, p, k) {
    out.fill(0);
    const set = (b, x, y, z) => { out[BI[b] * 3] = x; out[BI[b] * 3 + 1] = y; out[BI[b] * 3 + 2] = z; };
    const A = lerp(0.5, 0.95, k), B = lerp(0.9, 1.55, k), Aa = lerp(0.45, 0.95, k);
    const lean = lerp(0.06, 0.3, k), elbow = lerp(-0.35, -1.55, k);
    const s = Math.sin(p), s2 = Math.sin(p + Math.PI);
    const bendL = Math.pow(Math.max(0, Math.cos(p + 0.6)), 1.4) * B;
    const bendR = Math.pow(Math.max(0, Math.cos(p + Math.PI + 0.6)), 1.4) * B;
    set('thighL', -A * s, 0, -0.05);
    set('thighR', -A * s2, 0, 0.05);
    set('shinL', bendL, 0, 0);
    set('shinR', bendR, 0, 0);
    set('footL', 0.25 * Math.max(0, -s), 0, 0);
    set('footR', 0.25 * Math.max(0, -s2), 0, 0);
    set('upperArmL', Aa * s - 0.1 * k, 0, -0.18 - 0.1 * k);
    set('upperArmR', -Aa * s - 0.1 * k, 0, 0.18 + 0.1 * k);
    set('foreArmL', elbow - 0.2 * Math.max(0, -s), 0, 0);
    set('foreArmR', elbow - 0.2 * Math.max(0, s), 0, 0);
    set('hips', 0.02 * k, -0.1 * s, 0.03 * s);
    set('spine1', lean * 0.4, 0.05 * s, 0);
    set('spine2', lean * 0.3, 0.12 * s, 0);
    set('chest', lean * 0.3, 0.1 * s, 0);
    set('head', -lean * 0.6, -0.06 * s, 0);
  }

  writeFly(out, t, bank, speedK) {
    out.fill(0);
    const set = (b, x, y, z) => { out[BI[b] * 3] = x; out[BI[b] * 3 + 1] = y; out[BI[b] * 3 + 2] = z; };
    const w = Math.sin(t * 2.2);
    set('hips', 1.3 + 0.05 * w, 0, -bank * 0.6);
    set('spine1', -0.05, 0, 0);
    set('chest', -0.15 + 0.03 * w, 0, 0);
    set('head', -0.75, 0, 0);
    // lead arm forward, other arm swept back along the body
    set('upperArmR', -2.95, 0, 0.12);
    set('foreArmR', -0.15, 0, 0);
    set('upperArmL', lerp(-2.9, 0.4, speedK), 0, -0.25);
    set('foreArmL', lerp(-0.2, -0.5, speedK), 0, 0);
    set('thighL', 0.1 + 0.04 * w, 0, -0.1);
    set('thighR', 0.1 - 0.04 * w, 0, 0.1);
    set('shinL', 0.15, 0, 0);
    set('shinR', 0.15, 0, 0);
    set('footL', 0.5, 0, 0);
    set('footR', 0.5, 0, 0);
  }

  // ctx: { speed, flying, bank, time, dt }
  update(dt, ctx) {
    const speed = ctx.speed;
    const moving = speed > 0.6;
    const target = ctx.flying ? 'fly' : moving ? 'move' : 'idle';
    if (target !== this.state) {
      this.prevState = this.state; this.state = target; this.blend = 0;
    }
    this.blend = Math.min(1, this.blend + dt * (this.state === 'fly' || this.prevState === 'fly' ? 3.2 : 7));
    const k = clamp01((speed - 2.5) / 7);            // walk -> run
    this.phase += dt * (ctx.flying ? 0 : lerp(5.5, 11.5, k) * (moving ? 1 : 0));

    const write = (state, out) => {
      if (state === 'fly') this.writeFly(out, ctx.time, ctx.bank || 0, clamp01(speed / 10));
      else if (state === 'move') this.writeLocomotion(out, this.phase, k);
      else this.writeIdle(out, ctx.time);
    };
    write(this.state, this.tmpA);
    if (this.blend < 1) {
      write(this.prevState, this.tmpB);
      const kb = this.blend * this.blend * (3 - 2 * this.blend);
      for (let i = 0; i < NB * 3; i++) this.base[i] = lerp(this.tmpB[i], this.tmpA[i], kb);
    } else {
      this.base.set(this.tmpA);
    }

    // ---- action layer ----
    let mask = null, w = 0;
    if (this.attack) {
      const a = this.attack;
      a.t += dt;
      const u = clamp01(a.t / a.dur);
      samplePose(a.mv.frames, u, this.action, a.mask);
      const fade = 0.07;
      w = Math.min(1, a.t / fade, (a.dur - a.t) / fade);
      mask = a.mask;
      if (a.t >= a.dur) { this.attack = null; w = 0; mask = null; }
    } else if (this.cast) {
      const c = this.cast;
      c.t += dt;
      for (const bi of c.mask) {
        const v = c.pose[BONES[bi]];
        this.action[bi * 3] = v[0]; this.action[bi * 3 + 1] = v[1]; this.action[bi * 3 + 2] = v[2];
      }
      const fade = 0.12;
      w = Math.min(1, c.t / fade, (c.dur - c.t) / fade);
      mask = c.mask;
      if (c.t >= c.dur) { this.cast = null; w = 0; mask = null; }
    }
    this.actionW = Math.max(0, w);

    // ---- apply ----
    for (let bi = 0; bi < NB; bi++) {
      const bone = this.bones[BONES[bi]];
      let x = this.base[bi * 3], y = this.base[bi * 3 + 1], z = this.base[bi * 3 + 2];
      if (mask && mask.has(bi) && w > 0) {
        x = lerp(x, this.action[bi * 3], w);
        y = lerp(y, this.action[bi * 3 + 1], w);
        z = lerp(z, this.action[bi * 3 + 2], w);
      }
      bone.rotation.set(x, y, z);
    }

    const bob = ctx.flying ? 0.05 * Math.sin(ctx.time * 2.2) : moving ? Math.abs(Math.sin(this.phase)) * lerp(0.025, 0.06, k) : 0;
    return { bob };
  }
}
