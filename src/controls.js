import { clamp } from './utils.js';
import { GamepadInput } from './gamepad.js';

const JOY_RADIUS = 55;

export class Controls {
  constructor(canvas) {
    this.canvas = canvas;
    this.enabled = false;
    this.isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;

    this.moveX = 0;          // strafe  (-1..1) — joystick only
    this.moveZ = 0;          // forward (-1..1)
    this.lookDelta = 0;      // accumulated yaw drag (consumed each frame)
    this.pitchDelta = 0;

    this.onAttack = null;
    this.onPowerDown = null;
    this.onPowerUp = null;
    this.onSwitch = null;

    this.keys = new Set();
    this.joyPointer = null;
    this.lookPointer = null;
    this.joyOrigin = { x: 0, y: 0 };

    this.joyEl = document.getElementById('joystick');
    this.knobEl = document.getElementById('joy-knob');

    // game controller: same callbacks as the keyboard, plus menu navigation
    this.pad = new GamepadInput();
    this.padActions = {
      attack: () => this.enabled && this.onAttack?.(),
      powerDown: () => this.enabled && this.onPowerDown?.(),
      powerUp: () => this.onPowerUp?.(),
      switch: () => this.onSwitch?.(),
    };
    this.lastPoll = performance.now();

    this.bind();
  }

  bind() {
    window.addEventListener('keydown', (e) => {
      if (!this.enabled) return;
      if (e.code === 'Tab') e.preventDefault();
      if (e.repeat) return;
      this.keys.add(e.code);
      if (e.code === 'KeyM') this.onAttack?.();
      if (e.code === 'Space') { e.preventDefault(); this.onPowerDown?.(); }
      if (e.code === 'Tab') this.onSwitch?.();
    });
    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.code);
      if (e.code === 'Space' && this.enabled) this.onPowerUp?.();
    });
    window.addEventListener('blur', () => { this.keys.clear(); this.onPowerUp?.(); });

    const onDown = (e) => {
      if (!this.enabled) return;
      if (e.target !== this.canvas) return;
      this.canvas.setPointerCapture?.(e.pointerId);
      if (this.isTouch) {
        // First finger anywhere = joystick; a second finger steers the camera.
        if (this.joyPointer === null) {
          this.joyPointer = e.pointerId;
          this.joyOrigin = { x: e.clientX, y: e.clientY };
          this.showJoystick(e.clientX, e.clientY, 0, 0);
        } else if (this.lookPointer === null) {
          this.lookPointer = e.pointerId;
          this.lastLook = { x: e.clientX, y: e.clientY };
        }
      } else {
        this.lookPointer = e.pointerId;
        this.lastLook = { x: e.clientX, y: e.clientY };
      }
    };

    const onMove = (e) => {
      if (!this.enabled) return;
      if (e.pointerId === this.joyPointer) {
        let dx = e.clientX - this.joyOrigin.x;
        let dy = e.clientY - this.joyOrigin.y;
        const len = Math.hypot(dx, dy);
        if (len > JOY_RADIUS) { dx = (dx / len) * JOY_RADIUS; dy = (dy / len) * JOY_RADIUS; }
        this.moveX = clamp(dx / JOY_RADIUS, -1, 1);
        this.moveZ = clamp(-dy / JOY_RADIUS, -1, 1);
        this.showJoystick(this.joyOrigin.x, this.joyOrigin.y, dx, dy);
      } else if (e.pointerId === this.lookPointer) {
        this.lookDelta += (e.clientX - this.lastLook.x) * 0.0045;
        this.pitchDelta += (e.clientY - this.lastLook.y) * 0.003;
        this.lastLook = { x: e.clientX, y: e.clientY };
      }
    };

    const onUp = (e) => {
      if (e.pointerId === this.joyPointer) {
        this.joyPointer = null;
        this.moveX = 0; this.moveZ = 0;
        this.joyEl.classList.add('hidden');
      }
      if (e.pointerId === this.lookPointer) this.lookPointer = null;
    };

    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);

    // Static action buttons (mobile)
    const attackEl = document.getElementById('attack-btn');
    attackEl.addEventListener('pointerdown', (e) => {
      e.preventDefault(); e.stopPropagation();
      if (this.enabled) this.onAttack?.();
    });
    const powerEl = document.getElementById('poweruse-btn');
    powerEl.addEventListener('pointerdown', (e) => {
      e.preventDefault(); e.stopPropagation();
      if (this.enabled) this.onPowerDown?.();
    });
    const powerRelease = (e) => {
      e.preventDefault();
      if (this.enabled) this.onPowerUp?.();
    };
    powerEl.addEventListener('pointerup', powerRelease);
    powerEl.addEventListener('pointercancel', powerRelease);
    powerEl.addEventListener('pointerleave', powerRelease);
  }

  showJoystick(ox, oy, dx, dy) {
    this.joyEl.classList.remove('hidden');
    this.joyEl.style.left = '0px';
    this.joyEl.style.top = '0px';
    const base = this.joyEl.querySelector('.joy-base');
    base.style.left = ox + 'px';
    base.style.top = oy + 'px';
    this.knobEl.style.left = (ox + dx) + 'px';
    this.knobEl.style.top = (oy + dy) + 'px';
  }

  // Keyboard state folded in each frame. Desktop: W/S move, A/D turn.
  poll() {
    let turn = 0;
    if (!this.isTouch || this.joyPointer === null) {
      let z = 0;
      if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) z += 1;
      if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) z -= 1;
      if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) turn -= 1;
      if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) turn += 1;
      if (!this.isTouch) {
        this.moveX = 0;
        this.moveZ = z;
      } else if (z) {
        this.moveZ = z;
      }
    }
    let look = this.lookDelta;
    let pitch = this.pitchDelta;
    this.lookDelta = 0;
    this.pitchDelta = 0;

    // controller: plays when the HUD is up, drives the menus otherwise
    const t = performance.now();
    const dt = Math.min(0.1, (t - this.lastPoll) / 1000);
    this.lastPoll = t;
    const overlay = !document.getElementById('switch-overlay')?.classList.contains('hidden');
    const pad = this.pad.update(dt, this.enabled && !overlay ? 'play' : 'nav', this.padActions);
    let moveX = this.moveX, moveZ = this.moveZ, free = false;
    if (pad.moveX || pad.moveZ) {
      moveX = clamp(moveX + pad.moveX, -1, 1);
      moveZ = clamp(moveZ + pad.moveZ, -1, 1);
      free = true;   // stick movement: pulling back runs toward the camera
    }
    look += pad.look;
    pitch += pad.pitch;
    return { moveX, moveZ, turn, look, pitch, free, recenter: pad.recenter };
  }

  setEnabled(on) {
    this.enabled = on;
    if (!on) {
      this.keys.clear();
      this.moveX = 0; this.moveZ = 0;
      this.joyPointer = null; this.lookPointer = null;
      this.joyEl.classList.add('hidden');
    }
  }
}
