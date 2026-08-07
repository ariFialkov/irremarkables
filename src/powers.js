// The ten superpowers. `counter` is what the RTP director prefers to send
// against you when your round is due to end — a power that reads as a
// believable hard-counter to the one you're holding.
export const POWERS = [
  {
    id: 'flight', name: 'Flight', emblem: '\u{1FAB6}', color: 0x8ecbff, rare: false,
    desc: 'Take to the sky. Toggle to soar above the city and dive back down.',
    cooldown: 1.2, counter: 'telekinesis',
  },
  {
    id: 'speed', name: 'Super Speed', emblem: '\u{26A1}', color: 0xffe45c, rare: false,
    desc: 'A blinding burst of speed. Cross whole blocks before anyone reacts.',
    cooldown: 5, counter: 'cryo',
  },
  {
    id: 'invisibility', name: 'Invisibility', emblem: '\u{1F441}', color: 0xbfc7de, rare: false,
    desc: 'Fade out completely. Enemies lose track of you while you stalk them.',
    cooldown: 10, counter: 'xray',
  },
  {
    id: 'telekinesis', name: 'Telekinesis', emblem: '\u{1F52E}', color: 0xc07bff, rare: false,
    desc: 'HOLD to seize the nearest enemy or object, reel it in, and hurl it where you aim. Release early to drop it.',
    cooldown: 6, counter: 'teleport',
  },
  {
    id: 'pyro', name: 'Pyrokinesis', emblem: '\u{1F525}', color: 0xff7a3c, rare: true,
    desc: 'Channel a roaring cone of flame that incinerates everything ahead.',
    cooldown: 6, counter: 'cryo',
  },
  {
    id: 'cryo', name: 'Cryokinesis', emblem: '\u{2744}', color: 0x9df2ff, rare: true,
    desc: 'Release a freezing nova. Frozen enemies shatter with a single hit.',
    cooldown: 9, counter: 'pyro',
  },
  {
    id: 'teleport', name: 'Teleportation', emblem: '\u{1F300}', color: 0x7dffca, rare: false,
    desc: 'Blink instantly through space in the direction you are moving.',
    cooldown: 3, counter: 'speed',
  },
  {
    id: 'xray', name: 'X-Ray Vision', emblem: '\u{1F9FF}', color: 0xd0ff5c, rare: false,
    desc: 'See through the city itself. Enemies and loot glow behind every wall.',
    cooldown: 8, counter: 'invisibility',
  },
  {
    id: 'shapeshift', name: 'Shapeshifting', emblem: '\u{1F3AD}', color: 0xff9de2, rare: false,
    desc: 'Wear an enemy’s face. Walk among them, then strike for an instant kill.',
    cooldown: 12, counter: 'xray',
  },
  {
    id: 'duplication', name: 'Duplication', emblem: '\u{1F465}', color: 0xffb27d, rare: false,
    desc: 'Split into a squad of clones that hunt everything around you.',
    cooldown: 15, counter: 'pyro',
  },
];

export const powerById = (id) => POWERS.find((p) => p.id === id);

export function counterPowerFor(id) {
  const p = powerById(id);
  return powerById(p?.counter) || POWERS[Math.floor(Math.random() * POWERS.length)];
}
