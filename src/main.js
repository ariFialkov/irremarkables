import '@fontsource/bangers';
import { Game } from './game.js';

const canvas = document.getElementById('gl');
const game = new Game(canvas);
window.__game = game; // console/testing hook

function resize() {
  game.resize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', resize);
window.addEventListener('orientationchange', () => setTimeout(resize, 250));
resize();

let last = performance.now();
function frame(t) {
  const dt = (t - last) / 1000;
  last = t;
  game.update(dt);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

// PWA service worker (only over https / production builds)
if ('serviceWorker' in navigator && location.protocol === 'https:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}
