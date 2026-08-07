import * as THREE from 'three';
import { CONFIG } from './config.js';
import { rand, pick } from './utils.js';

const SKIN_TONES = [0xf2c9a0, 0xd9a06b, 0xb07b4f, 0x8a5a3a, 0x6b4630];
const OUTFITS = [0x39445e, 0x5e3946, 0x3a5e46, 0x4d3a5e, 0x5e553a, 0x2e4a5c, 0x555a60];

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

function limb(w, h, d, color) {
  const geo = new THREE.BoxGeometry(w, h, d);
  geo.translate(0, -h / 2, 0); // pivot at top
  return new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color }));
}

export class Character {
  constructor(scene, { name = '', isPlayer = false, outfit = null, skin = null } = {}) {
    this.scene = scene;
    this.isPlayer = isPlayer;
    this.name = name;
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

    this.outfitColor = outfit ?? pick(OUTFITS);
    this.skinColor = skin ?? pick(SKIN_TONES);
    this.buildMesh();
    scene.add(this.group);
  }

  buildMesh() {
    const g = new THREE.Group();
    const outfit = this.isPlayer ? 0x27406e : this.outfitColor;

    this.torso = new THREE.Mesh(
      new THREE.BoxGeometry(0.72, 0.92, 0.42),
      new THREE.MeshLambertMaterial({ color: outfit })
    );
    this.torso.position.y = 1.32;
    g.add(this.torso);

    this.head = new THREE.Mesh(
      new THREE.SphereGeometry(0.29, 12, 10),
      new THREE.MeshLambertMaterial({ color: this.skinColor })
    );
    this.head.position.y = 2.06;
    g.add(this.head);

    this.armL = limb(0.2, 0.78, 0.2, outfit);
    this.armL.position.set(-0.5, 1.72, 0);
    this.armR = limb(0.2, 0.78, 0.2, outfit);
    this.armR.position.set(0.5, 1.72, 0);
    g.add(this.armL, this.armR);

    const legColor = new THREE.Color(outfit).multiplyScalar(0.65).getHex();
    this.legL = limb(0.24, 0.86, 0.24, legColor);
    this.legL.position.set(-0.2, 0.88, 0);
    this.legR = limb(0.24, 0.86, 0.24, legColor);
    this.legR.position.set(0.2, 0.88, 0);
    g.add(this.legL, this.legR);

    if (this.isPlayer) {
      const capeGeo = new THREE.PlaneGeometry(0.85, 1.15);
      capeGeo.translate(0, -0.55, 0);
      this.cape = new THREE.Mesh(capeGeo, new THREE.MeshLambertMaterial({ color: 0xc23a4a, side: THREE.DoubleSide }));
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

    this.group = g;
    this.bodyMats = [
      this.torso.material, this.head.material,
      this.armL.material, this.armR.material,
      this.legL.material, this.legR.material,
      ...(this.cape ? [this.cape.material] : []),
    ];
  }

  setPower(power) {
    this.power = power;
    if (power) this.aura.material.color.set(power.color);
  }

  setNemesisLook() {
    this.aura.material.color.set(0xff2038);
    this.aura.material.opacity = 0.95;
    this.aura.scale.setScalar(1.5);
    this.torso.material.color.set(0x1a0d12);
    this.armL.material.color.set(0x1a0d12);
    this.armR.material.color.set(0x1a0d12);
    this.head.material.color.set(0x2a1016);
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
