# Irremarkables

A third-person, open-world, **simulated-multiplayer** superhero betting game, playable as a PWA on desktop and mobile.

Pick a superpower, place your bet, and drop into a continuous lobby battle royale (think agar.io / slither.io, but 3D and third-person). Grow your total by eliminating other "players" and hoovering up idle tokens — and try to stay alive while the lobby hunts each other around you.

## How the game works

- **Simulated multiplayer** — the lobby is filled with named bots that roam, fight, fly, blink, and kill each other. A live leaderboard and kill feed keep the lobby feeling occupied. When a "player" dies, another one joins.
- **Betting / RTP director** (`src/rtp.js`) — each round you place a bet. The director samples a hidden target payout multiplier from a bracketed distribution whose expected value is normalized to exactly `CONFIG.RTP` (0.96 by default). Your winnings (kills + tokens) are clamped so the final pickup lands exactly on target — and the instant you hit it, a **nemesis** carrying a counter to your current power is dispatched to end your run. Long-run return trends to the configured RTP while every round plays and reads as skill.
- **Regenerating world** — the map periodically shifts between a sunny suburban neighbourhood and a nighttime downtown metropolis, both procedurally generated.

## Superpowers

Flight, Super Speed, Invisibility, Telekinesis, Pyrokinesis (rare), Cryokinesis (rare), Teleportation, X-Ray Vision, Shapeshifting, Duplication. You can switch powers a limited number of times per game (3 by default).

## Collectibles

- **Pills** — Power Absorption (45%), Two Powers (30%), Extra Switch (25%)
- **Potions** — Enlarge (40%), Fireball (40%), Superhero Landing (20%)
- **Idle tokens** — low-value coins spawning constantly across the map

## Controls

| | Move | Attack | Use power | Switch power | Camera |
|---|---|---|---|---|---|
| **Mobile** | dynamic joystick (touch anywhere) | ATTACK button | power button | SWITCH button | second finger drag |
| **Desktop** | WASD / arrows | M | Space | Tab | mouse drag |

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # generates PWA icons + production build in dist/
npm run preview   # serve the production build
```

Tuning knobs (RTP, bet sizes, spawn probabilities, bot counts, world size, etc.) live in `src/config.js`.

## PWA

`public/manifest.webmanifest` + `public/sw.js` make the production build installable and playable offline once cached (service worker registers over HTTPS). Icons are generated at build time by `scripts/gen-icons.mjs` with no image dependencies.
