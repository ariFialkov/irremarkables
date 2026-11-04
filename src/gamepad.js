// Game controller support (PlayStation, Xbox and anything the browser exposes
// with the "standard" layout). Polled once per frame by Controls.
//
// In play (third-person action layout):
//   left stick  move (tilt a little to walk, all the way to run)
//   right stick camera
//   Square / X, R1 / RB      attack
//   R2 / RT, Cross / A       power (hold for telekinesis)
//   Triangle / Y             switch power
//   L2 / LT (hold), R3       snap the camera behind your hero
// In menus: D-pad or left stick moves the highlight, Cross / A chooses,
// Circle / B backs out, L1 / R1 change the bet, Options / Menu drops in.

const B = {
  SOUTH: 0, EAST: 1, WEST: 2, NORTH: 3, L1: 4, R1: 5, L2: 6, R2: 7,
  SELECT: 8, START: 9, L3: 10, R3: 11, UP: 12, DOWN: 13, LEFT: 14, RIGHT: 15,
};

const DEADZONE = 0.18;
const LOOK_YAW = 3.1;     // rad/s at full right-stick deflection
const LOOK_PITCH = 1.7;
const NAV_DELAY = 0.38;   // s before a held direction starts repeating
const NAV_REPEAT = 0.14;

// radial deadzone, rescaled so the usable range still reaches 1
function stick(x, y) {
  const m = Math.hypot(x, y);
  if (m < DEADZONE) return [0, 0, 0];
  const k = Math.min(1, (m - DEADZONE) / (1 - DEADZONE));
  return [(x / m) * k, (y / m) * k, k];
}

const LABELS = {
  ps: { attack: '□', power: 'R2', switch: '△', ok: '✕', back: '○', bet: 'L1/R1', start: 'OPTIONS', recenter: 'L2' },
  xbox: { attack: 'X', power: 'RT', switch: 'Y', ok: 'A', back: 'B', bet: 'LB/RB', start: 'MENU', recenter: 'LT' },
};

export function padBrand(id = '') {
  // Xbox pads also call themselves "Wireless Controller", so rule them out first
  if (/xbox|045e|xinput/i.test(id)) return 'xbox';
  // Sony vendor id, or the bare "Wireless Controller" name a DualShock 4 reports
  if (/054c|dualsense|dualshock|playstation|^wireless controller/i.test(id)) return 'ps';
  return 'xbox';   // most other pads use the Xbox layout and names
}

export class GamepadInput {
  constructor() {
    this.index = null;          // which pad we listen to (the last one touched)
    this.active = false;        // the player is currently using a controller
    this.brand = 'xbox';
    this.prev = [];             // previous button states (edge detection)
    this.navHeld = null; this.navTimer = 0;
    this.focusIdx = -1; this.focusScreen = null;
    this.rumbleUntil = 0;
    this.recenterT = 0;         // R3 tap: keep swinging the camera round briefly
    this.onActiveChange = null; // (active, brand) => void

    window.addEventListener('gamepadconnected', (e) => {
      if (this.index === null) this.index = e.gamepad.index;
    });
    window.addEventListener('gamepaddisconnected', (e) => {
      if (e.gamepad.index === this.index) { this.index = null; this.setActive(false); }
    });
    // mouse, touch or keyboard hands control back: hide the menu highlight
    const toOther = () => this.setActive(false);
    window.addEventListener('pointerdown', toOther);
    window.addEventListener('keydown', toOther);
  }

  get labels() { return LABELS[this.brand]; }

  setActive(on) {
    if (this.active === on) return;
    this.active = on;
    if (!on) this.clearFocus();
    this.onActiveChange?.(on, this.brand);
  }

  pad() {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    // switch to whichever pad has a button down, so a second controller can take over
    for (const p of pads) {
      if (p && p.index !== this.index && p.buttons.some((b) => b.pressed)) {
        this.index = p.index; this.prev = [];
      }
    }
    return this.index !== null ? pads[this.index] : null;
  }

  // dt in seconds. mode: 'play' | 'nav' | 'off'. Returns analog input for play.
  update(dt, mode, actions) {
    const out = { moveX: 0, moveZ: 0, look: 0, pitch: 0, recenter: false, used: false };
    const gp = this.pad();
    if (!gp) return out;
    const down = gp.buttons.map((b) => b.pressed || b.value > 0.5);
    const pressed = (i) => down[i] && !this.prev[i];
    const released = (i) => !down[i] && this.prev[i];
    const [lx, ly, lm] = stick(gp.axes[0] || 0, gp.axes[1] || 0);
    const [rx, ry, rm] = stick(gp.axes[2] || 0, gp.axes[3] || 0);

    if (down.some(Boolean) || lm > 0 || rm > 0) {
      this.brand = padBrand(gp.id);
      this.setActive(true);
      out.used = true;
    }

    if (mode === 'play') {
      if (this.focusEl) this.clearFocus();   // menu highlight is gone once you drop in
      out.moveX = lx;
      out.moveZ = -ly;
      // response curve: fine aim near the centre, fast turns at the edge
      out.look = Math.sign(rx) * rx * rx * LOOK_YAW * dt;
      out.pitch = Math.sign(ry) * ry * ry * LOOK_PITCH * dt;
      if (pressed(B.R3)) this.recenterT = 0.45;
      this.recenterT = Math.max(0, this.recenterT - dt);
      out.recenter = down[B.L2] || this.recenterT > 0;
      if (pressed(B.WEST) || pressed(B.R1)) actions.attack?.();
      if (pressed(B.R2) || pressed(B.SOUTH)) actions.powerDown?.();
      const powerHeld = down[B.R2] || down[B.SOUTH];
      if ((released(B.R2) || released(B.SOUTH)) && !powerHeld) actions.powerUp?.();
      if (pressed(B.NORTH) || pressed(B.SELECT)) actions.switch?.();
    } else if (mode === 'nav') {
      // a power hold that ends while a menu is open must still be released
      if ((released(B.R2) || released(B.SOUTH)) && !(down[B.R2] || down[B.SOUTH])) actions.powerUp?.();
      this.navigate(dt, down, pressed, lx, ly, actions);
    }

    this.prev = down;
    return out;
  }

  // ---------- menu navigation ----------

  screen() {
    const shown = (id) => { const el = document.getElementById(id); return el && !el.classList.contains('hidden'); };
    if (shown('switch-overlay')) return 'switch';
    if (shown('results')) return 'results';
    if (shown('menu')) return 'menu';
    return null;
  }

  candidates(screen) {
    const sel = {
      menu: '#power-grid .pg-cell, #bet-options .bet-chip, #play-btn, #sound-btn',
      switch: '#switch-grid .switch-cell:not(.disabled), #switch-cancel',
      results: '#results-btn',
    }[screen];
    if (!sel) return [];
    return [...document.querySelectorAll(sel)].filter((el) => {
      const cs = getComputedStyle(el);
      return el.offsetParent !== null && cs.pointerEvents !== 'none' && cs.visibility !== 'hidden';
    });
  }

  defaultFocus(screen, list) {
    const pick = { menu: '.pg-cell.on', switch: '.switch-cell:not(.disabled)', results: '#results-btn' }[screen];
    const el = pick && document.querySelector(pick);
    const i = el ? list.indexOf(el) : -1;
    return i >= 0 ? i : 0;
  }

  navigate(dt, down, pressed, lx, ly, actions) {
    const screen = this.screen();
    const list = screen ? this.candidates(screen) : [];
    if (!list.length) { this.clearFocus(); return; }
    if (screen !== this.focusScreen || this.focusIdx < 0 || this.focusIdx >= list.length) {
      this.focusScreen = screen;
      this.focusIdx = this.defaultFocus(screen, list);
    }

    // direction from the D-pad or a firm push on the left stick, with key-repeat
    let dir = null;
    if (down[B.UP] || ly < -0.6) dir = 'up';
    else if (down[B.DOWN] || ly > 0.6) dir = 'down';
    else if (down[B.LEFT] || lx < -0.6) dir = 'left';
    else if (down[B.RIGHT] || lx > 0.6) dir = 'right';
    if (dir !== this.navHeld) { this.navHeld = dir; this.navTimer = NAV_DELAY; if (dir) this.move(list, dir); }
    else if (dir) { this.navTimer -= dt; if (this.navTimer <= 0) { this.navTimer = NAV_REPEAT; this.move(list, dir); } }

    if (this.active) this.showFocus(list[this.focusIdx]);

    if (pressed(B.SOUTH)) list[this.focusIdx]?.click();
    if (pressed(B.EAST)) {
      if (screen === 'switch') document.getElementById('switch-cancel')?.click();
      else if (screen === 'results') document.getElementById('results-btn')?.click();
    }
    if (screen === 'switch' && pressed(B.NORTH)) actions.switch?.();   // same button closes it
    if (screen === 'menu') {
      if (pressed(B.L1) || pressed(B.R1)) this.stepBet(pressed(B.R1) ? 1 : -1);
      if (pressed(B.START)) document.getElementById('play-btn')?.click();
    }
    if (screen === 'results' && pressed(B.START)) document.getElementById('results-btn')?.click();
  }

  move(list, dir) {
    const cur = list[this.focusIdx];
    if (!cur) return;
    const a = cur.getBoundingClientRect();
    const ax = a.left + a.width / 2, ay = a.top + a.height / 2;
    const [dx, dy] = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[dir];
    let best = -1, bestScore = Infinity;
    list.forEach((el, i) => {
      if (i === this.focusIdx) return;
      const r = el.getBoundingClientRect();
      const ox = r.left + r.width / 2 - ax, oy = r.top + r.height / 2 - ay;
      const along = ox * dx + oy * dy;
      if (along <= 4) return;
      const across = Math.abs(ox * dy - oy * dx);
      const score = along + across * 2.2;   // prefer straight lines over diagonals
      if (score < bestScore) { bestScore = score; best = i; }
    });
    if (best >= 0) this.focusIdx = best;
  }

  stepBet(d) {
    const chips = this.candidates('menu').filter((el) => el.classList.contains('bet-chip'));
    if (!chips.length) return;
    const cur = chips.findIndex((el) => el.classList.contains('on'));
    chips[Math.max(0, Math.min(chips.length - 1, cur + d))]?.click();
  }

  showFocus(el) {
    if (this.focusEl === el) return;
    this.focusEl?.classList.remove('gp-focus');
    this.focusEl = el;
    el?.classList.add('gp-focus');
  }

  clearFocus() {
    this.focusEl?.classList.remove('gp-focus');
    this.focusEl = null;
    this.focusIdx = -1;
    this.focusScreen = null;
  }

  // ---------- feedback ----------

  rumble(amount) {
    if (!this.active) return;
    const gp = this.pad();
    const act = gp?.vibrationActuator;
    if (!act?.playEffect) return;
    const t = performance.now();
    if (t < this.rumbleUntil - 40) return;   // let the current pulse finish
    const duration = Math.round(90 + Math.min(1, amount) * 220);
    this.rumbleUntil = t + duration;
    act.playEffect('dual-rumble', {
      duration,
      strongMagnitude: Math.min(1, amount * 0.9),
      weakMagnitude: Math.min(1, 0.25 + amount * 0.8),
    }).catch(() => {});
  }
}
