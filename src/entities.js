import * as THREE from 'three';
import { CONFIG } from './config.js';
import { rand, pick, RUNTIME } from './utils.js';

const SKIN_TONES = [0xf2c9a0, 0xd9a06b, 0xb07b4f, 0x8a5a3a, 0x6b4630];

// vivid superhero suit palette
const PRIMARIES = [0xd7263d, 0x1f6feb, 0x12a454, 0xf2a516, 0x7b2fbf, 0xe4572e,
  0x0aa6a6, 0xd81b8c, 0x23305e, 0x9a1750, 0x1b7f5c, 0x5546c8];
const SECONDARIES = [0x1b1d2a, 0xf5f0e6, 0x2c3a52, 0x571c1c, 0x1c4238, 0x3d2a55,
  0x704214, 0x232323, 0x54306e, 0x0e3d5c];
const ACCENTS = [0xffd166, 0xffffff, 0x9df2ff, 0xff9de2, 0xffe45c, 0x7dffca, 0xff8c42, 0xc9b8ff];

export function randomCostume() {
  const primary = pick(PRIMARIES);
  let secondary = pick(SECONDARIES);
  const accent = pick(ACCENTS);
  const mask = pick(['none', 'domino', 'domino', 'cowl', 'cowl', 'none', 'domino']);
  return {
    primary,
    secondary,
    accent,
    skin: pick(SKIN_TONES),
    cape: Math.random() < 0.45,
    capeColor: Math.random() < 0.5 ? primary : accent,
    mask,
    emblem: Math.random() < 0.6,
    gloves: Math.random() < 0.6,
    boots: Math.random() < 0.75,
  };
}

export const PLAYER_COSTUME = {
  primary: 0x27406e, secondary: 0x1b2c4d, accent: 0xffd166,
  skin: 0xf2c9a0, cape: true, capeColor: 0xc23a4a,
  mask: 'domino', emblem: true, gloves: true, boots: true,
};

function makeLabelSprite(text, color = '#cfe0ff') {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 64;
  const g = c.getContext('2d');
  g.font = '700 30px system-ui, sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.shadowColor = 'rgba(0,0,0,0.85)';
  g.shadowBlur = 8;
  g.fillStyle = color;
  g.fillText(text, 128, 32);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false });
  const spr = new THREE.Sprite(mat);
  spr.scale.set(3.4, 0.85, 1);
  return spr;
}

function limb(r, h, color) {
  // rounded limb: capsule pivoted at the top
  const geo = new THREE.CapsuleGeometry(r, h - r * 2, 4, 10);
  geo.translate(0, -h / 2, 0);
  return new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color }));
}

export class Character {
  constructor(scene, { name = '', isPlayer = false, costume = null } = {}) {
    this.scene = scene;
    this.isPlayer = isPlayer;
    this.name = name;
    this.costume = costume || (isPlayer ? PLAYER_COSTUME : randomCostume());
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.yaw = 0;
    this.altitude = 0;          // flying height above ground
    this.hp = CONFIG.PLAYER_HP;
    this.maxHp = CONFIG.PLAYER_HP;
    this.alive = true;
    this.power = null;
    this.score = 0;
    this.phase = rand(0, Math.PI * 2);
    this.moveAmount = 0;
    this.frozenUntil = 0;
    this.scaleTarget = 1;
    this.curScale = 1;
    this.disguised = false;
    this.punchT = 0;

    this.buildMesh();
    scene.add(this.group);
  }

  buildMesh() {
    const C = this.costume;
    const g = new THREE.Group();

    const torsoGeo = new THREE.CapsuleGeometry(0.33, 0.52, 6, 12);
    torsoGeo.scale(1.12, 1, 0.72);
    this.torso = new THREE.Mesh(torsoGeo, new THREE.MeshLambertMaterial({ color: C.primary }));
    this.torso.position.y = 1.32;
    g.add(this.torso);

    // belt
    this.belt = new THREE.Mesh(
      new THREE.BoxGeometry(0.76, 0.14, 0.46),
      new THREE.MeshLambertMaterial({ color: C.accent })
    );
    this.belt.position.y = 0.9;
    g.add(this.belt);

    // chest emblem
    if (C.emblem) {
      this.emblem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.14, 0.14, 0.05, 6),
        new THREE.MeshLambertMaterial({ color: C.accent })
      );
      this.emblem.rotation.x = Math.PI / 2;
      this.emblem.position.set(0, 1.5, 0.24);
      g.add(this.emblem);
    }

    this.head = new THREE.Mesh(
      new THREE.SphereGeometry(0.29, 12, 10),
      new THREE.MeshLambertMaterial({ color: C.mask === 'cowl' ? C.primary : C.skin })
    );
    this.head.position.y = 2.06;
    g.add(this.head);

    if (C.mask === 'cowl') {
      // exposed jaw under the cowl
      this.face = new THREE.Mesh(
        new THREE.BoxGeometry(0.3, 0.2, 0.12),
        new THREE.MeshLambertMaterial({ color: C.skin })
      );
      this.face.position.set(0, 1.96, 0.24);
      g.add(this.face);
    } else if (C.mask === 'domino') {
      this.maskBand = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.12, 0.14),
        new THREE.MeshLambertMaterial({ color: Math.random() < 0.5 ? 0x14161c : C.accent })
      );
      this.maskBand.position.set(0, 2.1, 0.22);
      g.add(this.maskBand);
    }

    this.armL = limb(0.11, 0.78, C.primary);
    this.armL.position.set(-0.48, 1.72, 0);
    this.armR = limb(0.11, 0.78, C.primary);
    this.armR.position.set(0.48, 1.72, 0);
    g.add(this.armL, this.armR);

    // shoulder pads round out the silhouette
    const shoulderMat = new THREE.MeshLambertMaterial({ color: C.primary });
    this.shoulderL = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), shoulderMat);
    this.shoulderL.position.set(-0.48, 1.74, 0);
    this.shoulderR = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), shoulderMat.clone());
    this.shoulderR.position.set(0.48, 1.74, 0);
    g.add(this.shoulderL, this.shoulderR);

    if (C.gloves) {
      const gloveMat = new THREE.MeshLambertMaterial({ color: C.accent });
      this.gloveL = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.24, 0.22), gloveMat);
      this.gloveL.position.y = -0.68;
      this.armL.add(this.gloveL);
      this.gloveR = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.24, 0.22), gloveMat.clone());
      this.gloveR.position.y = -0.68;
      this.armR.add(this.gloveR);
    }

    this.legL = limb(0.13, 0.86, C.secondary);
    this.legL.position.set(-0.2, 0.88, 0);
    this.legR = limb(0.13, 0.86, C.secondary);
    this.legR.position.set(0.2, 0.88, 0);
    g.add(this.legL, this.legR);

    if (C.boots) {
      const bootMat = new THREE.MeshLambertMaterial({ color: C.accent });
      this.bootL = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.28, 0.3), bootMat);
      this.bootL.position.set(0, -0.72, 0.03);
      this.legL.add(this.bootL);
      this.bootR = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.28, 0.3), bootMat.clone());
      this.bootR.position.set(0, -0.72, 0.03);
      this.legR.add(this.bootR);
    }

    if (C.cape) {
      const capeGeo = new THREE.PlaneGeometry(0.85, 1.15);
      capeGeo.translate(0, -0.55, 0);
      this.cape = new THREE.Mesh(capeGeo, new THREE.MeshLambertMaterial({ color: C.capeColor, side: THREE.DoubleSide }));
      this.cape.position.set(0, 1.78, 0.26);
      g.add(this.cape);
    }

    // power aura ring at the feet
    this.aura = new THREE.Mesh(
      new THREE.RingGeometry(0.55, 0.85, 28),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.55, depthWrite: false, side: THREE.DoubleSide })
    );
    this.aura.rotation.x = -Math.PI / 2;
    this.aura.position.y = 0.07;
    g.add(this.aura);

    // frozen shell (hidden by default)
    this.iceShell = new THREE.Mesh(
      new THREE.BoxGeometry(1.15, 2.45, 0.95),
      new THREE.MeshLambertMaterial({ color: 0x9df2ff, transparent: true, opacity: 0.55 })
    );
    this.iceShell.position.y = 1.22;
    this.iceShell.visible = false;
    g.add(this.iceShell);

    if (this.name) {
      this.label = makeLabelSprite(this.name, this.isPlayer ? '#ffd166' : '#cfe0ff');
      this.label.position.y = 2.75;
      g.add(this.label);
    }

    // soft blob shadow grounds the character (stays cheap on mobile)
    this.blobShadow = new THREE.Mesh(
      new THREE.CircleGeometry(0.62, 20),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.3, depthWrite: false })
    );
    this.blobShadow.rotation.x = -Math.PI / 2;
    this.blobShadow.position.y = 0.04;
    g.add(this.blobShadow);

    this.group = g;
    this.bodyMats = [];
    g.traverse((o) => {
      if (o.material && o !== this.aura && o !== this.iceShell && o !== this.label && o !== this.blobShadow) {
        this.bodyMats.push(o.material);
        if (RUNTIME.shadows && o.isMesh) o.castShadow = true;
      }
    });
  }

  setPower(power) {
    this.power = power;
    if (power) this.aura.material.color.set(power.color);
  }

  setNemesisLook() {
    this.aura.material.color.set(0xff2038);
    this.aura.material.opacity = 0.95;
    this.aura.scale.setScalar(1.5);
    const dark = 0x16090d, darker = 0x24080f;
    for (const part of [this.torso, this.armL, this.armR, this.legL, this.legR]) {
      part.material.color.set(dark);
    }
    this.head.material.color.set(darker);
    if (this.face) this.face.material.color.set(darker);
    if (this.maskBand) this.maskBand.material.color.set(0xff2038);
    this.belt.material.color.set(0xff2038);
    if (this.emblem) this.emblem.material.color.set(0xff2038);
    if (this.gloveL) { this.gloveL.material.color.set(0xff2038); this.gloveR.material.color.set(0xff2038); }
    if (this.bootL) { this.bootL.material.color.set(darker); this.bootR.material.color.set(darker); }
    if (this.cape) this.cape.material.color.set(0x2a0a10);
    if (this.label) { this.group.remove(this.label); this.label = null; }
    const l = makeLabelSprite(this.name, '#ff5470');
    l.position.y = 2.75;
    this.group.add(l);
    this.label = l;
  }

  setOpacity(alpha) {
    for (const m of this.bodyMats) {
      m.transparent = alpha < 1;
      m.opacity = alpha;
      m.needsUpdate = true;
    }
    this.aura.material.opacity = 0.55 * alpha;
    if (this.label) this.label.material.opacity = alpha < 1 ? alpha * 0.4 : 1;
  }

  get frozen() { return performance.now() / 1000 < this.frozenUntil; }

  freeze(dur) {
    this.frozenUntil = performance.now() / 1000 + dur;
    this.iceShell.visible = true;
  }

  update(dt, time) {
    if (!this.alive) return;

    if (!this.frozen && this.iceShell.visible) this.iceShell.visible = false;

    // scale (enlarge potion)
    this.curScale += (this.scaleTarget - this.curScale) * Math.min(1, dt * 5);
    this.group.scale.setScalar(this.curScale);

    const speed = Math.hypot(this.vel.x, this.vel.z);
    this.moveAmount += ((speed > 0.4 ? 1 : 0) - this.moveAmount) * Math.min(1, dt * 8);
    if (!this.frozen) this.phase += dt * Math.min(14, 4 + speed * 1.1);

    const flying = this.altitude > 0.4;
    const swing = Math.sin(this.phase) * 0.85 * this.moveAmount;

    if (flying) {
      // superman pose: lean forward, arms ahead
      this.torso.rotation.x += (0.9 - this.torso.rotation.x) * Math.min(1, dt * 6);
      this.armL.rotation.x += (-2.6 - this.armL.rotation.x) * Math.min(1, dt * 6);
      this.armR.rotation.x += (-2.6 - this.armR.rotation.x) * Math.min(1, dt * 6);
      this.legL.rotation.x += (0.15 - this.legL.rotation.x) * Math.min(1, dt * 6);
      this.legR.rotation.x += (0.15 - this.legR.rotation.x) * Math.min(1, dt * 6);
    } else {
      this.torso.rotation.x *= Math.max(0, 1 - dt * 8);
      this.armL.rotation.x = swing;
      this.armR.rotation.x = -swing;
      this.legL.rotation.x = -swing;
      this.legR.rotation.x = swing;
      if (this.punchT > 0) {
        this.punchT -= dt;
        this.armR.rotation.x = -2.3;
        this.armL.rotation.x = -1.4;
      }
    }

    if (this.cape) {
      this.cape.rotation.x = 0.25 + this.moveAmount * 0.55 + Math.sin(time * 6 + this.phase) * 0.07 + (flying ? 0.9 : 0);
    }

    // bob while running
    const bob = flying ? 0 : Math.abs(Math.sin(this.phase)) * 0.08 * this.moveAmount;
    this.group.position.set(this.pos.x, this.altitude + bob, this.pos.z);
    this.group.rotation.y = this.yaw;

    // blob shadow stays pinned to the ground, fading with height
    const lift = this.altitude + bob;
    this.blobShadow.position.y = -lift / Math.max(0.001, this.curScale) + 0.04;
    const fade = 1 / (1 + lift * 0.25);
    this.blobShadow.material.opacity = 0.3 * fade;
    this.blobShadow.scale.setScalar(Math.max(0.4, fade));

    this.aura.rotation.z = time * 1.5;
    const pulse = 0.9 + Math.sin(time * 5 + this.phase) * 0.12;
    this.aura.scale.setScalar(pulse * (this.aura.userData.base || 1));
  }

  dispose() {
    this.scene.remove(this.group);
    this.group.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => {
          if (m.map) m.map.dispose();
          m.dispose();
        });
      }
    });
  }
}
