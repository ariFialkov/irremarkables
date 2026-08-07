// Central tuning knobs for the whole game.
export const CONFIG = {
  // ---- Betting / RTP ----
  RTP: 0.96,               // long-run return-to-player the director steers toward
  BETS: [1, 5, 10, 25, 50, 100],
  STARTING_WALLET: 1000,

  // Target-multiplier distribution brackets: [weight, min, max].
  // The director samples the round's payout multiplier from these, then
  // rescales so the expected value equals RTP exactly.
  MULT_BRACKETS: [
    [0.58, 0.05, 0.85],
    [0.26, 0.90, 1.80],
    [0.11, 1.80, 4.00],
    [0.042, 4.00, 12.0],
    [0.008, 12.0, 40.0],
  ],

  // ---- Economy (all values are multiples of the bet) ----
  TOKEN_VALUE: 0.006,      // idle token pickup
  KILL_VALUE_MIN: 0.05,    // bot kill bounty range
  KILL_VALUE_MAX: 0.16,

  // ---- Player ----
  PLAYER_SPEED: 9.5,
  PLAYER_HP: 100,
  HP_REGEN: 4,             // hp per second
  SWITCHES_PER_GAME: 3,
  ADRENALINE_COOLDOWN: 14, // seconds between cinematic near-death escapes

  // ---- Bots ----
  BOT_COUNT: 26,
  BOT_SPEED: 6.0,
  BOT_ATTACK_DPS: 16,
  BOT_ATTACK_RANGE: 2.6,
  NEMESIS_SPEED: 11.5,

  // ---- World ----
  WORLD_SIZE: 340,         // playable square edge length
  BLOCK: 22,               // city block size
  ROAD: 8,                 // road width
  WORLD_SHIFT_SECONDS: [55, 90],  // random interval between world regenerations
  TOKEN_COUNT: 170,
  PILL_COUNT: 6,
  POTION_COUNT: 6,

  // Pill spawn probabilities (must sum to 1)
  PILLS: [
    { id: 'absorb', name: 'Power Absorption', emblem: '\u{1F9EC}', p: 0.45, duration: 45 },
    { id: 'twopower', name: 'Two Powers', emblem: '\u{262F}', p: 0.30, duration: 30 },
    { id: 'extraswitch', name: 'Extra Switch', emblem: '\u{1F504}', p: 0.25, duration: 0 },
  ],
  // Potion spawn probabilities (must sum to 1)
  POTIONS: [
    { id: 'enlarge', name: 'Enlarge', emblem: '\u{1F9B9}', p: 0.40, duration: 15 },
    { id: 'fireball', name: 'Fireball', emblem: '\u{2604}', p: 0.40, duration: 0 },
    { id: 'landing', name: 'Superhero Landing', emblem: '\u{1F4A5}', p: 0.20, duration: 25 },
  ],
};
