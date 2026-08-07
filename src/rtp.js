import { CONFIG } from './config.js';
import { rand } from './utils.js';

// The director controls the economics of a round. At round start it samples
// a target payout multiplier from a bracketed distribution whose expected
// value is normalized to exactly CONFIG.RTP. The player accrues winnings
// through play; the moment their total reaches the target, the director
// dispatches a nemesis — a bot carrying a counter-power — to end the round.
// The payout always lands on the target, so the long-run return trends to
// the configured RTP while every round still looks and feels skill-driven.

function bracketsMean() {
  let mean = 0;
  for (const [w, lo, hi] of CONFIG.MULT_BRACKETS) mean += w * (lo + hi) / 2;
  return mean;
}

const CALIBRATION = CONFIG.RTP / bracketsMean();

export function sampleTargetMultiplier() {
  let r = Math.random();
  let chosen = CONFIG.MULT_BRACKETS[CONFIG.MULT_BRACKETS.length - 1];
  for (const b of CONFIG.MULT_BRACKETS) {
    if (r < b[0]) { chosen = b; break; }
    r -= b[0];
  }
  const [, lo, hi] = chosen;
  return rand(lo, hi) * CALIBRATION;
}

export class Director {
  constructor() {
    this.bet = 0;
    this.targetMult = 1;
    this.total = 0;          // player's accrued winnings this round ($)
    this.phase = 'idle';     // idle | playing | nemesis | done
    this.nemesisDelay = 0;   // small dramatic pause before dispatch
  }

  startRound(bet) {
    this.bet = bet;
    this.targetMult = sampleTargetMultiplier();
    this.total = 0;
    this.phase = 'playing';
    this.nemesisDelay = rand(0.8, 2.2);
  }

  get target() { return this.bet * this.targetMult; }
  get mult() { return this.bet > 0 ? this.total / this.bet : 0; }

  // Add winnings, clamped so the total can never overshoot the scripted
  // payout — the last pickup/kill lands exactly on target.
  addWinnings(amount) {
    if (this.phase !== 'playing' && this.phase !== 'nemesis') return 0;
    const room = Math.max(0, this.target - this.total);
    const gain = Math.min(amount, room);
    this.total += gain;
    return gain;
  }

  get targetReached() { return this.total >= this.target - 1e-9; }

  // Called each frame while playing; returns true exactly once when it is
  // time to send the nemesis after the target has been hit.
  update(dt) {
    if (this.phase === 'playing' && this.targetReached) {
      this.nemesisDelay -= dt;
      if (this.nemesisDelay <= 0) {
        this.phase = 'nemesis';
        return true;
      }
    }
    return false;
  }

  endRound() {
    this.phase = 'done';
    return this.total;
  }
}
