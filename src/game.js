import * as THREE from 'three';
import { CONFIG } from './config.js';
import { POWERS, powerById, counterPowerFor } from './powers.js';
import { World } from './world.js';
import { FX } from './fx.js';
import { Collectibles } from './collectibles.js';
import { Character } from './entities.js';
import { Director } from './rtp.js';
import { Controls } from './controls.js';
import { UI } from './ui.js';
import { SFX } from './audio.js';
import { rand, randInt, pick, clamp, botName, formatMoney, weightedPick } from './utils.js';

const now = () => performance.now() / 1000;

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(68, 1, 0.1, 600);
    this.baseFov = 68;

    this.world = new World(this.scene);
    this.fx = new FX(this.scene);
    this.collectibles = new Collectibles(this.scene, this.world);
    this.ui = new UI();
    this.controls = new Controls(canvas);
    this.director = new Director();

    this.state = 'menu';
    this.timescale = 1;
    this.slowmoUntil = 0;
    this.time = 0;

    this.wallet = parseFloat(localStorage.getItem('irr_wallet') ?? '') || CONFIG.STARTING_WALLET;

    this.bots = [];
    this.clones = [];
    this.pendingRespawns = [];
    this.player = null;
    this.nemesis = null;

    // camera state
    this.camYaw = 0;
    this.camPitch = 0.42;
    this.camPos = new THREE.Vector3(0, 30, 40);
    this.camTarget = new THREE.Vector3();
    this.attractBot = null;
    this.attractTimer = 0;
    this.deathT = 0;

    this.lbTimer = 0;
    this.shiftTimer = rand(...CONFIG.WORLD_SHIFT_SECONDS);

    this._v1 = new THREE.Vector3();
    this._v2 = new THREE.Vector3();

    this.world.regenerate();
    this.collectibles.respawnAll();
    for (let i = 0; i < CONFIG.BOT_COUNT; i++) this.spawnBot({ initial: true });

    this.ui.onPlay = (power, bet) => this.startRound(power, bet);
    this.ui.onResultsDone = () => this.backToMenu();
    this.ui.onSwitchOpen = () => this.openSwitch();
    this.ui.onSwitchPick = (p) => this.doSwitch(p);
    this.controls.onAttack = () => this.playerAttack();
    this.controls.onPower = () => this.usePower();
    this.controls.onSwitch = () => this.openSwitch();

    this.ui.showMenu(this.wallet);
    window.addEventListener('pointerdown', () => SFX.unlock(), { once: true });
  }

  saveWallet() { localStorage.setItem('irr_wallet', String(this.wallet)); }

  resize(w, h) {
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  // ================= BOTS =================

  spawnBot({ initial = false, pos = null } = {}) {
    const ch = new Character(this.scene, { name: botName() });
    const power = weightedPick(POWERS, (p) => (p.rare ? 0.35 : 1));
    ch.setPower(power);
    let p = pos;
    if (!p && !initial && this.player && this.state === 'playing' && Math.random() < 0.65) {
      // bias replacements toward the player so the lobby stays lively nearby
      for (let i = 0; i < 20 && !p; i++) {
        const ang = rand(0, Math.PI * 2), r = rand(25, 65);
        const x = this.player.ch.pos.x + Math.cos(ang) * r;
        const z = this.player.ch.pos.z + Math.sin(ang) * r;
        if (!this.world.isBlocked(x, z, 1)) p = { x, z };
      }
    }
    p = p || this.world.randomOpenPos();
    ch.pos.set(p.x, 0, p.z);
    ch.yaw = rand(0, Math.PI * 2);
    const bot = {
      ch, power,
      state: 'roam',
      target: null,
      wander: this.world.randomOpenPos(),
      repath: rand(0.5, 3),
      attackCd: 0,
      quirkCd: rand(2, 8),
      aggressive: Math.random() < 0.35,
      score: initial ? rand(0.2, 8) * 10 : rand(0.5, 3),
      isNemesis: false,
      hp: 100,
      tkState: null,
    };
    this.bots.push(bot);
    return bot;
  }

  botsAndClones() { return this.bots.concat(this.clones); }

  updateBot(b, dt) {
    const ch = b.ch;
    if (!ch.alive) return;
    ch.update(dt, this.time);
    if (ch.frozen) { ch.vel.set(0, 0, 0); return; }

    // telekinesis lift overrides everything
    if (b.tkState) {
      const tk = b.tkState;
      tk.t += dt;
      if (tk.t < 1.1) {
        ch.altitude = Math.min(7, ch.altitude + dt * 8);
        ch.yaw += dt * 9;
      } else {
        ch.altitude = 0;
        this.fx.ring(ch.pos.x, ch.pos.z, { color: 0xc07bff, maxR: 4, dur: 0.4 });
        this.fx.emit(ch.pos.x, 1, ch.pos.z, { count: 26, color: 0xc07bff, speed: 8, life: 0.6, size: 1.8 });
        SFX.slam();
        this.fx.addShake(0.5);
        b.tkState = null;
        this.killBot(b, { byPlayer: tk.byPlayer, cause: 'telekinesis' });
      }
      return;
    }

    b.repath -= dt;
    b.attackCd -= dt;
    b.quirkCd -= dt;

    const playerTargetable = this.player && this.player.ch.alive && this.state === 'playing' &&
      !this.playerHidden() && this.player.ch.curScale < 1.5;

    if (b.repath <= 0 && !b.isNemesis) {
      b.repath = rand(1.2, 3);
      b.target = null;
      // find someone to pick on
      let best = null, bestD = 24;
      for (const other of this.bots) {
        if (other === b || !other.ch.alive || other.ch.frozen) continue;
        const d = ch.pos.distanceTo(other.ch.pos);
        if (d < bestD) { best = other; bestD = d; }
      }
      if (playerTargetable && b.aggressive) {
        const dP = ch.pos.distanceTo(this.player.ch.pos);
        if (dP < 15 && dP < bestD) { b.target = 'player'; }
      }
      if (!b.target && best && Math.random() < 0.55) b.target = best;
      if (!b.target && Math.random() < 0.6) b.wander = this.world.randomOpenPos();
    }

    // nemesis always hunts the player
    if (b.isNemesis) b.target = 'player';

    // resolve destination
    let dest = b.wander, chasing = false;
    if (b.target === 'player') {
      if (!this.player || !this.player.ch.alive || (!b.isNemesis && !playerTargetable)) b.target = null;
      else { dest = this.player.ch.pos; chasing = true; }
    } else if (b.target) {
      if (!b.target.ch.alive || b.target.ch.frozen) b.target = null;
      else { dest = b.target.ch.pos; chasing = true; }
    }

    const dx = dest.x - ch.pos.x, dz = dest.z - ch.pos.z;
    const dist = Math.hypot(dx, dz);
    let speed = b.isNemesis ? CONFIG.NEMESIS_SPEED : CONFIG.BOT_SPEED;

    // power quirks — spectacle & motion variety
    if (b.quirkCd <= 0) {
      b.quirkCd = rand(4, 10);
      const id = b.power.id;
      if (id === 'speed') { b.speedBurst = now() + 1.2; }
      else if (id === 'flight') { b.flyUntil = now() + rand(3, 6); }
      else if (id === 'teleport' && dist > 8) {
        const k = Math.min(9, dist * 0.6) / dist;
        const nx = ch.pos.x + dx * k, nz = ch.pos.z + dz * k;
        if (!this.world.isBlocked(nx, nz)) {
          this.fx.emit(ch.pos.x, 1.2, ch.pos.z, { count: 14, color: 0x7dffca, speed: 5, life: 0.4 });
          ch.pos.set(nx, 0, nz);
          this.fx.emit(nx, 1.2, nz, { count: 14, color: 0x7dffca, speed: 5, life: 0.4 });
        }
      } else if (id === 'invisibility') { b.fadeUntil = now() + 2.5; }
    }
    if (b.speedBurst && now() < b.speedBurst) {
      speed *= 2.1;
      this.fx.emitDir(ch.pos.x, 1, ch.pos.z, this._v1.set(-dx / (dist || 1), 0, -dz / (dist || 1)),
        { count: 1, color: 0xffe45c, speed: 3, life: 0.3, size: 1.2, cone: 0.2 });
    }
    ch.setOpacity(b.fadeUntil && now() < b.fadeUntil ? 0.25 : 1);

    // flight altitude
    const wantFly = (b.flyUntil && now() < b.flyUntil) ||
      (b.isNemesis && this.player && this.player.ch.altitude > 2);
    const targetAlt = wantFly ? (b.isNemesis ? Math.max(0, this.player.ch.altitude) : 6 + Math.sin(this.time * 0.7 + ch.phase) * 2) : 0;
    ch.altitude += (targetAlt - ch.altitude) * Math.min(1, dt * 2.2);
    if (ch.altitude < 0.05) ch.altitude = 0;

    // nemesis catch-up blink
    if (b.isNemesis && this.player) {
      const dP = ch.pos.distanceTo(this.player.ch.pos);
      if (dP > 26) {
        const px = this.player.ch.pos.x - (dx / dist) * 10;
        const pz = this.player.ch.pos.z - (dz / dist) * 10;
        this.fx.emit(ch.pos.x, 1.2, ch.pos.z, { count: 20, color: 0xff2038, speed: 6, life: 0.5 });
        ch.pos.set(
          this.world.isBlocked(px, pz) ? this.player.ch.pos.x + rand(-6, 6) : px, 0,
          this.world.isBlocked(px, pz) ? this.player.ch.pos.z + rand(-6, 6) : pz);
        this.fx.emit(ch.pos.x, 1.2, ch.pos.z, { count: 20, color: 0xff2038, speed: 6, life: 0.5 });
        SFX.teleport();
      }
      // menacing trail
      if (Math.random() < 0.5) {
        this.fx.emit(ch.pos.x, rand(0.4, 2), ch.pos.z, { count: 1, color: 0xff2038, speed: 1.2, life: 0.5, size: 1.6, gravity: 1 });
      }
    }

    // move
    if (dist > (chasing ? 1.9 : 1.2)) {
      const vx = (dx / dist) * speed, vz = (dz / dist) * speed;
      ch.vel.set(vx, 0, vz);
      ch.pos.x += vx * dt;
      ch.pos.z += vz * dt;
      const targetYaw = Math.atan2(vx, vz);
      let dy = targetYaw - ch.yaw;
      while (dy > Math.PI) dy -= Math.PI * 2;
      while (dy < -Math.PI) dy += Math.PI * 2;
      ch.yaw += dy * Math.min(1, dt * 8);
      if (ch.altitude < 3) this.world.resolve(ch.pos, 0.55, ch.altitude);
    } else {
      ch.vel.set(0, 0, 0);
      if (!chasing && b.repath > 1) b.wander = this.world.randomOpenPos();
    }

    // attack
    if (chasing && dist < CONFIG.BOT_ATTACK_RANGE && b.attackCd <= 0 && ch.altitude < 1.5) {
      b.attackCd = rand(0.7, 1.1);
      ch.punchT = 0.22;
      if (b.target === 'player') {
        this.damagePlayer(b.isNemesis ? 34 : CONFIG.BOT_ATTACK_DPS * rand(0.8, 1.3), b);
      } else if (b.target) {
        b.target.hp -= rand(26, 42);
        this.fx.emit(b.target.ch.pos.x, 1.4, b.target.ch.pos.z, { count: 6, color: 0xffffff, speed: 3.5, life: 0.3, size: 1.1 });
        if (b.target.hp <= 0) this.killBot(b.target, { byBot: b });
      }
    }
  }

  killBot(b, { byPlayer = false, byBot = null, cause = 'attack', silent = false } = {}) {
    if (!b.ch.alive) return;
    b.ch.alive = false;

    const px = b.ch.pos.x, py = b.ch.altitude + 1.2, pz = b.ch.pos.z;
    if (!silent) {
      const col = b.power.color;
      if (cause === 'shatter') { this.fx.emit(px, py, pz, { count: 34, color: 0x9df2ff, speed: 9, life: 0.8, size: 1.7 }); SFX.shatter(); }
      else if (cause === 'fire') { this.fx.emit(px, py, pz, { count: 30, color: 0xff7a3c, speed: 7, life: 0.7, size: 2.2, gravity: 3 }); }
      else { this.fx.emit(px, py, pz, { count: 24, color: col, speed: 8, life: 0.7, size: 1.8 }); }
      this.fx.ring(px, pz, { color: col, maxR: 3, dur: 0.4 });
      SFX.kill();
    }

    // bounty
    if (byPlayer && this.player) {
      const bounty = this.director.bet * rand(CONFIG.KILL_VALUE_MIN, CONFIG.KILL_VALUE_MAX) *
        (1 + Math.min(2, b.score / 200));
      const gain = this.director.addWinnings(bounty);
      this.player.kills++;
      if (gain > 0) {
        const s = this.project(this._v1.set(px, py, pz));
        if (s) this.ui.popup(s.x, s.y, '+' + formatMoney(gain), true);
        this.ui.setTotal(this.director.total, this.director.mult, true);
      }
      SFX.coin();
      this.ui.killfeed(`<b>You</b> ⚡ eliminated <b>${b.ch.name}</b>`, true);
      // power absorption pill
      if (this.player.absorbUntil > now() && b.power.id !== this.playerMainPower().id) {
        this.setPlayerPower(b.power);
        this.ui.announce(`ABSORBED ${b.power.name.toUpperCase()}`, { dur: 1800 });
        SFX.pickup();
      }
    } else if (byBot) {
      byBot.score += 2 + b.score * 0.25;
      if (Math.random() < 0.5 || b.ch.pos.distanceTo(this.camPos) < 70) {
        this.ui.killfeed(`<b>${byBot.ch.name}</b> ⚔ <b>${b.ch.name}</b>`);
      }
    }

    if (b.isNemesis) this.nemesis = null;

    // remove & schedule a replacement "player" joining the lobby
    const idx = this.bots.indexOf(b);
    if (idx >= 0) this.bots.splice(idx, 1);
    b.ch.dispose();
    if (!b.isNemesis) this.pendingRespawns.push(rand(1.5, 4));
  }

  // ================= ROUND FLOW =================

  startRound(power, bet) {
    if (bet > this.wallet) return;
    this.wallet -= bet;
    this.saveWallet();
    this.director.startRound(bet);

    if (this.player) this.player.ch.dispose();
    const ch = new Character(this.scene, { name: 'YOU', isPlayer: true });
    ch.setPower(power);
    const p = this.world.randomOpenPos(2);
    ch.pos.set(p.x, 0, p.z);
    this.player = {
      ch, powerMain: power, secondPower: null,
      switchesLeft: CONFIG.SWITCHES_PER_GAME,
      cds: {}, flying: false,
      speedUntil: 0, invisUntil: 0, disguiseUntil: 0, xrayUntil: 0,
      absorbUntil: 0, twoUntil: 0, enlargeUntil: 0, landingUntil: 0,
      fireballArmed: false, flameUntil: 0,
      invulnUntil: now() + 2, adrenalineReady: now(),
      kills: 0, tokens: 0,
      prevAlt: 0,
    };
    ch.hp = CONFIG.PLAYER_HP;

    this.state = 'playing';
    this.nemesis = null;
    this.camYaw = ch.yaw + Math.PI;
    this.ui.showHUD(this.controls.isTouch);
    this.ui.setSwitches(this.player.switchesLeft);
    this.ui.setTotal(0, 0);
    this.ui.setHP(1);
    this.controls.setEnabled(true);
    this.ui.announce(`${power.emblem} ${power.name.toUpperCase()}`, { dur: 1800 });
    this.fx.ring(p.x, p.z, { color: power.color, maxR: 6, dur: 0.7 });
    this.fx.emit(p.x, 1, p.z, { count: 30, color: power.color, speed: 7, life: 0.8 });
    SFX.whoosh();
  }

  playerMainPower() { return this.player.powerMain; }

  playerHidden() {
    if (!this.player) return false;
    return this.player.invisUntil > now() || this.player.disguiseUntil > now();
  }

  setPlayerPower(power) {
    this.player.powerMain = power;
    this.player.ch.setPower(power);
    // leaving flight mid-air: glide down handled by update
    if (power.id !== 'flight') this.player.flying = false;
  }

  openSwitch() {
    if (this.state !== 'playing') return;
    if (this.ui.switchOpen) { this.ui.closeSwitch(); return; }
    this.ui.openSwitch(this.player.powerMain.id, this.player.switchesLeft);
  }

  doSwitch(power) {
    if (this.state !== 'playing' || !power) return;
    if (this.player.switchesLeft <= 0) return;
    this.player.switchesLeft--;
    this.ui.setSwitches(this.player.switchesLeft);
    this.setPlayerPower(power);
    const p = this.player.ch.pos;
    this.fx.ring(p.x, p.z, { color: power.color, maxR: 5, dur: 0.5 });
    this.fx.emit(p.x, 1.4, p.z, { count: 26, color: power.color, speed: 6, life: 0.7 });
    this.ui.announce(`${power.emblem} ${power.name.toUpperCase()}`, { dur: 1500 });
    SFX.morph();
  }

  // ================= PLAYER COMBAT =================

  playerAttack() {
    if (this.state !== 'playing' || !this.player?.ch.alive) return;
    const P = this.player, ch = P.ch;

    if (P.fireballArmed) { this.launchFireball(); return; }

    ch.punchT = 0.25;
    SFX.punch();
    const scale = ch.curScale;
    const range = 3.0 * scale;
    const fx = Math.sin(ch.yaw), fz = Math.cos(ch.yaw);
    let hitAny = false;

    for (const b of [...this.bots]) {
      if (!b.ch.alive) continue;
      const dx = b.ch.pos.x - ch.pos.x, dz = b.ch.pos.z - ch.pos.z;
      const d = Math.hypot(dx, dz);
      if (d > range + 0.6) continue;
      if (Math.abs(b.ch.altitude - ch.altitude) > 3) continue;
      const dot = (dx * fx + dz * fz) / (d || 1);
      if (d > 1.2 && dot < 0.35) continue;
      hitAny = true;

      const disguiseStrike = P.disguiseUntil > now();
      const giant = scale > 1.5;
      if (b.ch.frozen) { this.killBot(b, { byPlayer: true, cause: 'shatter' }); continue; }
      if (disguiseStrike || giant) {
        this.killBot(b, { byPlayer: true });
        if (disguiseStrike) this.revealDisguise();
        continue;
      }
      b.hp -= 55;
      this.fx.emit(b.ch.pos.x, 1.4 + b.ch.altitude, b.ch.pos.z, { count: 8, color: 0xffffff, speed: 4, life: 0.3, size: 1.2 });
      this.fx.addShake(0.15);
      if (b.hp <= 0) this.killBot(b, { byPlayer: true });
      else {
        // knockback + retaliation chance
        const k = 1.1 / (d || 1);
        b.ch.pos.x += dx * k; b.ch.pos.z += dz * k;
        if (Math.random() < 0.5) { b.target = 'player'; b.aggressive = true; }
      }
    }
    if (hitAny) this.fx.addShake(0.12);
  }

  launchFireball() {
    const P = this.player, ch = P.ch;
    P.fireballArmed = false;
    SFX.fireball();
    const dir = this._v1.set(Math.sin(ch.yaw), 0, Math.cos(ch.yaw)).clone();
    const start = ch.pos.clone().setY(1.4 + ch.altitude);
    this.projectiles = this.projectiles || [];
    this.projectiles.push({ pos: start, dir, speed: 26, life: 2.2, r: 0 });
    this.fx.addShake(0.3);
  }

  updateProjectiles(dt) {
    if (!this.projectiles) return;
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const pr = this.projectiles[i];
      pr.life -= dt;
      pr.pos.addScaledVector(pr.dir, pr.speed * dt);
      this.fx.emit(pr.pos.x, pr.pos.y, pr.pos.z, { count: 6, color: 0xff7a3c, speed: 2.5, life: 0.45, size: 2.6, gravity: 2, jitter: 0.35 });
      this.fx.emit(pr.pos.x, pr.pos.y, pr.pos.z, { count: 2, color: 0xffd166, speed: 2, life: 0.3, size: 2 });
      const hitWall = this.world.isBlocked(pr.pos.x, pr.pos.z, 0.5) && this.world.buildingHeightAt(pr.pos.x, pr.pos.z) > pr.pos.y;
      let hitBot = false;
      for (const b of this.bots) {
        if (b.ch.alive && b.ch.pos.distanceTo(pr.pos) < 1.6) { hitBot = true; break; }
      }
      if (pr.life <= 0 || hitWall || hitBot) {
        // explode
        SFX.explosion();
        this.fx.addShake(0.8);
        this.fx.emit(pr.pos.x, pr.pos.y, pr.pos.z, { count: 60, color: 0xff7a3c, speed: 14, life: 0.9, size: 3, gravity: -2 });
        this.fx.emit(pr.pos.x, pr.pos.y, pr.pos.z, { count: 30, color: 0xffd166, speed: 10, life: 0.7, size: 2.2 });
        this.fx.ring(pr.pos.x, pr.pos.z, { color: 0xff7a3c, maxR: 8, dur: 0.6 });
        for (const b of [...this.bots]) {
          if (b.ch.alive && b.ch.pos.distanceTo(pr.pos) < 7.5) this.killBot(b, { byPlayer: true, cause: 'fire' });
        }
        this.projectiles.splice(i, 1);
      }
    }
  }

  // ================= POWERS =================

  usePower() {
    if (this.state !== 'playing' || !this.player?.ch.alive) return;
    const P = this.player;
    const powers = [P.powerMain];
    if (P.twoUntil > now() && P.secondPower) powers.push(P.secondPower);
    for (const pw of powers) this.activatePower(pw);
  }

  activatePower(power) {
    const P = this.player, ch = P.ch;
    const t = now();
    if ((P.cds[power.id] || 0) > t) return;

    const px = ch.pos.x, pz = ch.pos.z, py = 1.2 + ch.altitude;
    let used = true;

    switch (power.id) {
      case 'flight': {
        P.flying = !P.flying;
        if (P.flying) {
          SFX.whoosh();
          this.fx.ring(px, pz, { color: 0x8ecbff, maxR: 4, dur: 0.5 });
          this.fx.emitDir(px, 0.5, pz, this._v1.set(0, -1, 0), { count: 22, color: 0x8ecbff, speed: 6, life: 0.6, cone: 0.6 });
        }
        break;
      }
      case 'speed': {
        P.speedUntil = t + 3;
        SFX.whoosh();
        this.fx.ring(px, pz, { color: 0xffe45c, maxR: 5, dur: 0.45 });
        break;
      }
      case 'invisibility': {
        P.invisUntil = t + 5;
        SFX.invis();
        this.fx.emit(px, py, pz, { count: 24, color: 0xbfc7de, speed: 4, life: 0.6, size: 1.6 });
        // stalkers lose you
        for (const b of this.bots) if (b.target === 'player' && !b.isNemesis) b.target = null;
        break;
      }
      case 'telekinesis': {
        const victims = this.bots
          .filter((b) => b.ch.alive && !b.tkState && b.ch.pos.distanceTo(ch.pos) < 11)
          .sort((a, b2) => a.ch.pos.distanceTo(ch.pos) - b2.ch.pos.distanceTo(ch.pos))
          .slice(0, 3);
        if (!victims.length) { used = false; break; }
        SFX.tk();
        this.fx.ring(px, pz, { color: 0xc07bff, maxR: 11, dur: 0.7 });
        for (const v of victims) {
          v.tkState = { t: 0, byPlayer: true };
          this.fx.emit(v.ch.pos.x, 1.4, v.ch.pos.z, { count: 16, color: 0xc07bff, speed: 3, life: 1.1, gravity: 3 });
        }
        this.fx.addShake(0.25);
        break;
      }
      case 'pyro': {
        P.flameUntil = t + 1.6;
        SFX.flame();
        break;
      }
      case 'cryo': {
        SFX.freeze();
        this.fx.ring(px, pz, { color: 0x9df2ff, maxR: 10, dur: 0.8 });
        this.fx.emit(px, 0.6, pz, { count: 70, color: 0x9df2ff, speed: 11, life: 0.9, size: 1.8, gravity: -1, spread: 1.2 });
        this.fx.addShake(0.3);
        for (const b of this.bots) {
          if (b.ch.alive && b.ch.pos.distanceTo(ch.pos) < 10 && Math.abs(b.ch.altitude - ch.altitude) < 4) {
            b.ch.freeze(4.5);
            b.ch.vel.set(0, 0, 0);
          }
        }
        break;
      }
      case 'teleport': {
        const dirYaw = ch.yaw;
        let bx = Math.sin(dirYaw), bz = Math.cos(dirYaw);
        let dist = 14, nx = px, nz = pz;
        for (; dist >= 4; dist -= 2) {
          const tx = px + bx * dist, tz = pz + bz * dist;
          if (!this.world.isBlocked(tx, tz, 0.9)) { nx = tx; nz = tz; break; }
        }
        if (nx === px && nz === pz) { used = false; break; }
        SFX.teleport();
        this.fx.emit(px, py, pz, { count: 26, color: 0x7dffca, speed: 6, life: 0.5, size: 1.8 });
        ch.pos.set(nx, 0, nz);
        this.fx.emit(nx, py, nz, { count: 26, color: 0x7dffca, speed: 6, life: 0.5, size: 1.8 });
        this.fx.ring(nx, nz, { color: 0x7dffca, maxR: 4, dur: 0.45 });
        // superhero-landing potion triggers on arrival
        if (P.landingUntil > t) this.superheroLanding();
        break;
      }
      case 'xray': {
        P.xrayUntil = t + 6;
        this.world.setXray(true);
        this.collectibles.setXray(true);
        SFX.xray();
        this.ui.flash();
        break;
      }
      case 'shapeshift': {
        P.disguiseUntil = t + 8;
        SFX.morph();
        this.fx.emit(px, py, pz, { count: 30, color: 0xff9de2, speed: 5, life: 0.7, size: 1.8 });
        ch.setOpacity(1);
        // look like a bot: hide the cape, dull the suit
        if (ch.cape) ch.cape.visible = false;
        ch.torso.material.color.set(0x555a60);
        ch.armL.material.color.set(0x555a60);
        ch.armR.material.color.set(0x555a60);
        for (const b of this.bots) if (b.target === 'player' && !b.isNemesis) b.target = null;
        break;
      }
      case 'duplication': {
        SFX.dupe();
        for (let i = 0; i < 2; i++) {
          const cch = new Character(this.scene, { name: 'YOU', outfit: 0x27406e });
          cch.setPower(P.powerMain);
          cch.pos.set(px + rand(-2, 2), 0, pz + rand(-2, 2));
          this.fx.emit(cch.pos.x, 1.2, cch.pos.z, { count: 20, color: 0xffb27d, speed: 5, life: 0.6 });
          this.clones.push({
            ch: cch, until: t + 10, attackCd: 0, target: null, repath: 0,
          });
        }
        this.fx.ring(px, pz, { color: 0xffb27d, maxR: 5, dur: 0.5 });
        break;
      }
    }

    if (used) P.cds[power.id] = t + power.cooldown;
  }

  revealDisguise() {
    const P = this.player, ch = P.ch;
    P.disguiseUntil = 0;
    if (ch.cape) ch.cape.visible = true;
    ch.torso.material.color.set(0x27406e);
    ch.armL.material.color.set(0x27406e);
    ch.armR.material.color.set(0x27406e);
    this.fx.emit(ch.pos.x, 1.4, ch.pos.z, { count: 18, color: 0xff9de2, speed: 5, life: 0.5 });
  }

  superheroLanding() {
    const P = this.player, ch = P.ch;
    P.landingUntil = 0;
    SFX.landing();
    this.fx.addShake(1.1);
    this.ui.flash();
    this.fx.ring(ch.pos.x, ch.pos.z, { color: 0xffd166, maxR: 9, dur: 0.7 });
    this.fx.ring(ch.pos.x, ch.pos.z, { color: 0xffffff, maxR: 5, dur: 0.5 });
    this.fx.emit(ch.pos.x, 0.6, ch.pos.z, { count: 60, color: 0xffd166, speed: 12, life: 0.8, size: 2.2 });
    for (const b of [...this.bots]) {
      if (b.ch.alive && b.ch.pos.distanceTo(ch.pos) < 8.5) this.killBot(b, { byPlayer: true });
    }
  }

  // ================= PICKUPS =================

  applyItem(it) {
    const P = this.player, t = now();
    SFX.pickup();
    const label = `${it.def.emblem} ${it.def.name.toUpperCase()}`;
    this.ui.announce(label, { dur: 1800 });
    if (it.kind === 'pill') {
      if (it.def.id === 'absorb') P.absorbUntil = t + it.def.duration;
      else if (it.def.id === 'twopower') {
        P.twoUntil = t + it.def.duration;
        const others = POWERS.filter((p) => p.id !== P.powerMain.id);
        P.secondPower = pick(others);
        this.ui.announce(`${P.secondPower.emblem} + ${P.powerMain.emblem}  TWO POWERS`, { dur: 2200 });
      } else if (it.def.id === 'extraswitch') {
        P.switchesLeft++;
        this.ui.setSwitches(P.switchesLeft);
      }
    } else {
      SFX.potion();
      if (it.def.id === 'enlarge') {
        P.enlargeUntil = t + it.def.duration;
        P.ch.scaleTarget = 2.3;
        SFX.grow();
        this.fx.addShake(0.4);
      } else if (it.def.id === 'fireball') {
        P.fireballArmed = true;
        this.ui.announce('☄ FIREBALL ARMED — ATTACK TO LAUNCH', { dur: 2600 });
      } else if (it.def.id === 'landing') {
        P.landingUntil = t + it.def.duration;
      }
    }
  }

  // ================= DAMAGE / DEATH =================

  damagePlayer(amount, byBot) {
    const P = this.player;
    if (!P || !P.ch.alive || this.state !== 'playing') return;
    const t = now();
    if (t < P.invulnUntil) return;

    P.ch.hp -= amount;
    SFX.hurt();
    this.fx.addShake(0.3);
    this.fx.emit(P.ch.pos.x, 1.4 + P.ch.altitude, P.ch.pos.z, { count: 8, color: 0xff5470, speed: 4, life: 0.4 });

    if (P.ch.hp <= 0) {
      if (byBot?.isNemesis) {
        this.playerDeath(byBot);
        return;
      }
      // The house never lets a random mob end your run: you always slip away.
      P.ch.hp = 1;
      if (t > P.adrenalineReady) {
        P.adrenalineReady = t + CONFIG.ADRENALINE_COOLDOWN;
        P.invulnUntil = t + 1.6;
        P.speedUntil = Math.max(P.speedUntil, t + 1.6);
        this.slowmoUntil = performance.now() / 1000 + 0.7;
        this.timescale = 0.35;
        this.ui.announce('ADRENALINE RUSH', { dur: 1400 });
        this.ui.flash();
        SFX.whoosh();
        if (byBot) { byBot.target = null; byBot.repath = 4; }
      } else {
        P.invulnUntil = t + 0.9;
      }
    }
  }

  sendNemesis() {
    const power = counterPowerFor(this.player.powerMain.id);
    const p = this.player.ch.pos;
    // spawn just off-camera behind a building line
    const ang = this.camYaw + rand(-0.9, 0.9);
    let sx = p.x - Math.sin(ang) * 30, sz = p.z - Math.cos(ang) * 30;
    if (this.world.isBlocked(sx, sz)) { const o = this.world.randomOpenPos(); sx = o.x; sz = o.z; }
    const b = this.spawnBot({ pos: { x: sx, z: sz } });
    b.isNemesis = true;
    b.aggressive = true;
    b.power = power;
    b.ch.setPower(power);
    b.ch.setNemesisLook();
    b.score = rand(120, 600);
    this.nemesis = b;
    this.ui.vignette(true);
    this.ui.announce(`${power.emblem} ${b.ch.name} HAS YOUR SCENT`, { danger: true, dur: 2600 });
    SFX.nemesis();
    this.fx.addShake(0.4);
  }

  playerDeath(killer) {
    const P = this.player;
    P.ch.alive = false;
    this.state = 'dying';
    this.deathT = 0;
    this.deathKiller = killer;
    this.controls.setEnabled(false);
    this.ui.closeSwitch();
    this.ui.vignette(false);
    this.timescale = 0.3;
    this.slowmoUntil = performance.now() / 1000 + 2.0;
    SFX.death();
    this.fx.addShake(1.2);
    this.ui.flash();
    const c = P.ch.pos;
    this.fx.emit(c.x, 1.4 + P.ch.altitude, c.z, { count: 50, color: killer ? killer.power.color : 0xff5470, speed: 9, life: 1.1, size: 2 });
    this.fx.ring(c.x, c.z, { color: 0xff2038, maxR: 7, dur: 0.8 });
    // clear xray if active
    this.world.setXray(false);
    this.collectibles.setXray(false);
  }

  finishRound() {
    const payout = this.director.endRound();
    this.wallet += payout;
    this.saveWallet();
    const win = payout >= this.director.bet;
    const rows = this.leaderboardRows();
    const place = rows.find((r) => r.me)?.rank ?? this.bots.length + 1;
    if (win) SFX.cashout();
    this.ui.showResults({
      payout,
      mult: this.director.mult,
      kills: this.player.kills,
      tokens: this.player.tokens,
      place,
      killerName: this.deathKiller?.ch.name,
      killerPower: this.deathKiller?.power.name,
      win,
    });
    this.state = 'results';
  }

  backToMenu() {
    if (this.player) { this.player.ch.dispose(); this.player = null; }
    if (this.nemesis) { this.killBot(this.nemesis, { silent: true }); this.nemesis = null; }
    for (const c of this.clones) c.ch.dispose();
    this.clones = [];
    this.state = 'menu';
    this.attractBot = null;
    this.attractTimer = 0;
    this.ui.showMenu(this.wallet);
  }

  // ================= PLAYER UPDATE =================

  updatePlayer(dt, input) {
    const P = this.player, ch = P.ch;
    if (!ch.alive) return;
    const t = now();

    // camera-relative movement
    const speedBoost = (P.speedUntil > t ? 2.4 : 1) * (P.enlargeUntil > t ? 1.2 : 1);
    const flySpeed = P.flying ? 1.35 : 1;
    const spd = CONFIG.PLAYER_SPEED * speedBoost * flySpeed;
    const sin = Math.sin(this.camYaw), cos = Math.cos(this.camYaw);
    const mx = input.moveX * cos + input.moveZ * sin;
    const mz = -input.moveX * sin + input.moveZ * cos;
    const moving = Math.hypot(mx, mz) > 0.05;

    ch.vel.set(mx * spd, 0, mz * spd);
    ch.pos.x += ch.vel.x * dt;
    ch.pos.z += ch.vel.z * dt;
    if (moving) {
      const targetYaw = Math.atan2(mx, mz);
      let dy = targetYaw - ch.yaw;
      while (dy > Math.PI) dy -= Math.PI * 2;
      while (dy < -Math.PI) dy += Math.PI * 2;
      ch.yaw += dy * Math.min(1, dt * 10);
    }

    // altitude / flight
    P.prevAlt = ch.altitude;
    if (P.flying && P.powerMain.id === 'flight') {
      ch.altitude = Math.min(13, ch.altitude + dt * 9);
      if (Math.random() < 0.6) {
        this.fx.emitDir(ch.pos.x, ch.altitude + 0.4, ch.pos.z, this._v1.set(-mx, 0, -mz),
          { count: 1, color: 0x8ecbff, speed: 4, life: 0.4, size: 1.4, cone: 0.3 });
      }
    } else if (ch.altitude > 0) {
      ch.altitude = Math.max(0, ch.altitude - dt * 16);
      if (ch.altitude === 0 && P.prevAlt > 3.5) {
        if (P.landingUntil > t) this.superheroLanding();
        else { this.fx.ring(ch.pos.x, ch.pos.z, { color: 0xffffff, maxR: 3, dur: 0.4 }); this.fx.addShake(0.3); SFX.punch(); }
      }
    }
    this.world.resolve(ch.pos, 0.6 * ch.curScale, ch.altitude);

    // speed streaks
    if (P.speedUntil > t && moving) {
      this.fx.emitDir(ch.pos.x, 0.9, ch.pos.z, this._v1.set(-mx, 0.05, -mz),
        { count: 2, color: 0xffe45c, speed: 6, life: 0.35, size: 1.5, cone: 0.15 });
    }

    // flame cone (pyrokinesis channel)
    if (P.flameUntil > t) {
      const fxd = this._v1.set(Math.sin(ch.yaw), 0.05, Math.cos(ch.yaw));
      this.fx.emitDir(ch.pos.x + fxd.x, 1.3 + ch.altitude, ch.pos.z + fxd.z, fxd,
        { count: 10, color: 0xff7a3c, speed: 15, life: 0.5, size: 2.6, cone: 0.22, gravity: 2 });
      this.fx.emitDir(ch.pos.x + fxd.x, 1.3 + ch.altitude, ch.pos.z + fxd.z, fxd,
        { count: 3, color: 0xffd166, speed: 13, life: 0.35, size: 2, cone: 0.18 });
      for (const b of [...this.bots]) {
        if (!b.ch.alive) continue;
        const dx = b.ch.pos.x - ch.pos.x, dz = b.ch.pos.z - ch.pos.z;
        const d = Math.hypot(dx, dz);
        if (d < 8.5 && (dx * fxd.x + dz * fxd.z) / (d || 1) > 0.72 && Math.abs(b.ch.altitude - ch.altitude) < 3) {
          this.killBot(b, { byPlayer: true, cause: 'fire' });
        }
      }
    }

    // timed effects wearing off
    ch.setOpacity(P.invisUntil > t ? 0.15 : 1);
    if (P.disguiseUntil > 0 && P.disguiseUntil < t && ch.torso.material.color.getHex() === 0x555a60) this.revealDisguise();
    if (P.xrayUntil > 0 && P.xrayUntil < t) {
      P.xrayUntil = 0;
      this.world.setXray(false);
      this.collectibles.setXray(false);
    }
    if (P.enlargeUntil > 0 && P.enlargeUntil < t) { P.enlargeUntil = 0; ch.scaleTarget = 1; }
    if (P.twoUntil > 0 && P.twoUntil < t) { P.twoUntil = 0; P.secondPower = null; }

    // hp regen
    ch.hp = Math.min(ch.maxHp, ch.hp + CONFIG.HP_REGEN * dt);

    // pickups
    const reach = 1.7 * ch.curScale;
    const got = this.collectibles.collectTokens(ch.pos.x, ch.pos.z, reach);
    if (got > 0) {
      P.tokens += got;
      const gain = this.director.addWinnings(got * this.director.bet * CONFIG.TOKEN_VALUE);
      SFX.coin();
      if (gain > 0) {
        const s = this.project(this._v1.set(ch.pos.x, 1.5, ch.pos.z));
        if (s) this.ui.popup(s.x, s.y, '+' + formatMoney(gain));
        this.ui.setTotal(this.director.total, this.director.mult);
      }
    }
    const item = this.collectibles.collectItem(ch.pos.x, ch.pos.z, reach + 0.4);
    if (item) this.applyItem(item);

    // giant crush: walking over bots while enlarged
    if (ch.curScale > 1.5) {
      for (const b of [...this.bots]) {
        if (b.ch.alive && !b.isNemesis && b.ch.pos.distanceTo(ch.pos) < 1.9 * ch.curScale && b.ch.altitude < 2) {
          this.killBot(b, { byPlayer: true });
          this.fx.addShake(0.3);
        }
      }
    }

    ch.update(dt, this.time);
  }

  updateClones(dt) {
    const t = now();
    for (let i = this.clones.length - 1; i >= 0; i--) {
      const c = this.clones[i];
      if (t > c.until) {
        this.fx.emit(c.ch.pos.x, 1.2, c.ch.pos.z, { count: 16, color: 0xffb27d, speed: 5, life: 0.5 });
        c.ch.dispose();
        this.clones.splice(i, 1);
        continue;
      }
      c.repath -= dt;
      c.attackCd -= dt;
      if (c.repath <= 0 || !c.target?.ch.alive) {
        c.repath = 1;
        let best = null, bestD = 26;
        for (const b of this.bots) {
          if (!b.ch.alive || b.isNemesis) continue;
          const d = c.ch.pos.distanceTo(b.ch.pos);
          if (d < bestD) { best = b; bestD = d; }
        }
        c.target = best;
      }
      if (c.target) {
        const dx = c.target.ch.pos.x - c.ch.pos.x, dz = c.target.ch.pos.z - c.ch.pos.z;
        const d = Math.hypot(dx, dz);
        if (d > 1.8) {
          c.ch.vel.set((dx / d) * 8.5, 0, (dz / d) * 8.5);
          c.ch.pos.x += c.ch.vel.x * dt;
          c.ch.pos.z += c.ch.vel.z * dt;
          c.ch.yaw = Math.atan2(dx, dz);
          this.world.resolve(c.ch.pos, 0.55, 0);
        } else if (c.attackCd <= 0) {
          c.attackCd = 0.8;
          c.ch.punchT = 0.22;
          c.target.hp -= 45;
          if (c.target.hp <= 0) this.killBot(c.target, { byPlayer: true });
        }
      } else {
        c.ch.vel.set(0, 0, 0);
      }
      c.ch.update(dt, this.time);
    }
  }

  // ================= CAMERA =================

  updateCameraPlay(dt, input) {
    const P = this.player, ch = P.ch;
    this.camYaw -= input.look;
    this.camPitch = clamp(this.camPitch + input.pitch, 0.12, 1.1);
    // gently swing behind movement direction when not manually looking
    const scale = ch.curScale;
    const dist = (8.5 + ch.altitude * 0.35) * (0.75 + scale * 0.35);
    const h = (3.2 + Math.sin(this.camPitch) * 6) * (0.7 + scale * 0.3);

    const tx = ch.pos.x - Math.sin(this.camYaw) * dist;
    const tz = ch.pos.z - Math.cos(this.camYaw) * dist;
    const ty = ch.altitude + h;
    this._v2.set(tx, ty, tz);
    this.camPos.lerp(this._v2, Math.min(1, dt * 7));

    // keep camera above rooftops it would clip through
    const roof = this.world.buildingHeightAt(this.camPos.x, this.camPos.z);
    if (roof > 0 && this.camPos.y < roof + 1.2) this.camPos.y = roof + 1.2;

    this.camera.position.copy(this.camPos).add(this.fx.shakeOffset);
    this.camTarget.lerp(this._v2.set(ch.pos.x, ch.altitude + 1.6 * scale, ch.pos.z), Math.min(1, dt * 10));
    this.camera.lookAt(this.camTarget);

    // fov punch while speeding / flying
    const t = now();
    const targetFov = this.baseFov + (P.speedUntil > t ? 14 : 0) + (ch.altitude > 2 ? 6 : 0);
    this.camera.fov += (targetFov - this.camera.fov) * Math.min(1, dt * 5);
    this.camera.updateProjectionMatrix();
  }

  updateCameraMenu(dt) {
    this.attractTimer -= dt;
    if (this.attractTimer <= 0 || !this.attractBot?.ch.alive) {
      this.attractTimer = rand(7, 11);
      const candidates = this.bots.filter((b) => b.ch.alive);
      this.attractBot = candidates.length ? pick(candidates) : null;
      this.attractAngle = rand(0, Math.PI * 2);
    }
    if (!this.attractBot) return;
    this.attractAngle += dt * 0.12;
    const p = this.attractBot.ch.pos;
    const r = 13;
    this._v2.set(
      p.x + Math.cos(this.attractAngle) * r,
      5.5 + Math.sin(this.time * 0.3) * 2 + this.attractBot.ch.altitude,
      p.z + Math.sin(this.attractAngle) * r
    );
    this.camPos.lerp(this._v2, Math.min(1, dt * 1.2));
    this.camTarget.lerp(this._v2.set(p.x, this.attractBot.ch.altitude + 1.5, p.z), Math.min(1, dt * 2.5));
    this.camera.position.copy(this.camPos);
    this.camera.lookAt(this.camTarget);
    this.camera.fov += (this.baseFov - this.camera.fov) * Math.min(1, dt);
    this.camera.updateProjectionMatrix();
  }

  updateCameraDeath(dt) {
    this.deathT += dt;
    const P = this.player;
    const p = P.ch.pos;
    const ang = this.camYaw + this.deathT * 0.7;
    const r = 7 + this.deathT * 2;
    this.camPos.lerp(this._v2.set(p.x - Math.sin(ang) * r, 3.5 + this.deathT * 1.5, p.z - Math.cos(ang) * r), Math.min(1, dt * 4));
    this.camera.position.copy(this.camPos).add(this.fx.shakeOffset);
    this.camera.lookAt(p.x, 1, p.z);
    // body crumples
    P.ch.group.rotation.x = Math.min(Math.PI / 2, this.deathT * 1.8);
    P.ch.group.position.y = Math.max(0.3, 1 - this.deathT * 0.6);
  }

  // ================= LEADERBOARD =================

  leaderboardRows() {
    const entries = this.bots
      .filter((b) => !b.isNemesis)
      .map((b) => ({ name: b.ch.name, score: b.score * this.director.bet * 0.02 + b.score, me: false }));
    if (this.player && this.state !== 'menu') {
      entries.push({ name: 'You', score: this.director.total, me: true });
    }
    entries.sort((a, b) => b.score - a.score);
    const rows = entries.slice(0, 6).map((e, i) => ({ ...e, rank: i + 1 }));
    const meIdx = entries.findIndex((e) => e.me);
    if (meIdx >= 6) rows.push({ ...entries[meIdx], rank: meIdx + 1 });
    return rows.length ? rows : [];
  }

  // ================= MAIN UPDATE =================

  update(rawDt) {
    const dt = Math.min(rawDt, 0.05) * this.timescale;
    this.time += dt;

    // slow-mo recovery
    if (this.timescale < 1 && performance.now() / 1000 > this.slowmoUntil && this.state !== 'dying') {
      this.timescale = Math.min(1, this.timescale + rawDt * 2);
    }

    // simulate lobby
    for (const b of [...this.bots]) this.updateBot(b, dt);
    // pending "players" joining
    for (let i = this.pendingRespawns.length - 1; i >= 0; i--) {
      this.pendingRespawns[i] -= dt;
      if (this.pendingRespawns[i] <= 0) {
        this.pendingRespawns.splice(i, 1);
        if (this.bots.length < CONFIG.BOT_COUNT + (this.nemesis ? 1 : 0)) this.spawnBot({});
      }
    }
    // background scores drift upward so the lobby feels alive
    if (Math.random() < dt * 2 && this.bots.length) {
      const b = pick(this.bots);
      if (!b.isNemesis) b.score += rand(0.5, 4);
    }

    this.collectibles.update(dt, this.time);
    this.updateProjectiles(dt);
    this.fx.update(dt);

    // world regeneration
    this.shiftTimer -= dt;
    if (this.shiftTimer <= 0) this.worldShift();

    const input = this.controls.poll();

    if (this.state === 'playing') {
      this.updatePlayer(dt, input);
      this.updateClones(dt);

      // the director decides when your story ends
      if (this.director.update(dt) && !this.nemesis) this.sendNemesis();

      this.updateCameraPlay(dt, input);

      // HUD
      const P = this.player, t = now();
      this.ui.setHP(P.ch.hp / P.ch.maxHp);
      const main = P.powerMain;
      const cdLeft = Math.max(0, (P.cds[main.id] || 0) - t);
      this.ui.setPowerButton(main, cdLeft / main.cooldown);
      this.lbTimer -= dt;
      if (this.lbTimer <= 0) {
        this.lbTimer = 0.5;
        this.ui.leaderboard(this.leaderboardRows());
        const buffs = [];
        if (P.absorbUntil > t) buffs.push({ emblem: '🧬', label: Math.ceil(P.absorbUntil - t) + 's' });
        if (P.twoUntil > t && P.secondPower) buffs.push({ emblem: P.secondPower.emblem, label: Math.ceil(P.twoUntil - t) + 's' });
        if (P.enlargeUntil > t) buffs.push({ emblem: '🦹', label: Math.ceil(P.enlargeUntil - t) + 's' });
        if (P.landingUntil > t) buffs.push({ emblem: '💥', label: Math.ceil(P.landingUntil - t) + 's' });
        if (P.fireballArmed) buffs.push({ emblem: '☄', label: 'armed' });
        if (P.invisUntil > t) buffs.push({ emblem: '👁', label: Math.ceil(P.invisUntil - t) + 's' });
        if (P.disguiseUntil > t) buffs.push({ emblem: '🎭', label: Math.ceil(P.disguiseUntil - t) + 's' });
        this.ui.setBuffs(buffs);
      }
    } else if (this.state === 'menu' || this.state === 'results') {
      this.updateCameraMenu(dt);
    } else if (this.state === 'dying') {
      this.updateCameraDeath(rawDt);
      this.player.ch.update(dt, this.time);
      if (this.deathT > 2.4) {
        this.timescale = 1;
        this.finishRound();
      }
    }

    this.renderer.render(this.scene, this.camera);
  }

  worldShift() {
    this.shiftTimer = rand(...CONFIG.WORLD_SHIFT_SECONDS);
    const next = this.world.theme === 'downtown' ? 'suburb' : 'downtown';
    this.ui.flash();
    SFX.worldshift();
    if (this.state === 'playing') this.ui.announce('THE WORLD SHIFTS', { dur: 2000 });
    this.world.regenerate(next);
    this.collectibles.respawnAll();
    // shake everyone out of walls
    for (const b of this.bots) {
      if (this.world.isBlocked(b.ch.pos.x, b.ch.pos.z)) {
        const p = this.world.randomOpenPos();
        b.ch.pos.set(p.x, 0, p.z);
      }
      b.wander = this.world.randomOpenPos();
    }
    if (this.player) {
      this.world.resolve(this.player.ch.pos, 1, this.player.ch.altitude);
      if (this.world.isBlocked(this.player.ch.pos.x, this.player.ch.pos.z, 0.4)) {
        const p = this.world.randomOpenPos();
        this.player.ch.pos.set(p.x, 0, p.z);
      }
    }
    if (this.player?.xrayUntil > now()) { this.world.setXray(true); }
    this.collectibles.setXray(this.player ? this.player.xrayUntil > now() : false);
  }

  project(v) {
    this._v2.copy(v).project(this.camera);
    if (this._v2.z > 1) return null;
    return {
      x: (this._v2.x * 0.5 + 0.5) * this.canvas.clientWidth,
      y: (-this._v2.y * 0.5 + 0.5) * this.canvas.clientHeight,
    };
  }
}
