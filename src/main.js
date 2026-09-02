import './font.css';
import { loadAnimLib } from './animlib.js';
import { Game } from './game.js';

const canvas = document.getElementById('gl');
const loading = document.getElementById('loading');

async function boot() {
  try {
    // the comic display font is drawn into canvas textures (impact words), so wait for it
    await Promise.all([
      loadAnimLib('./anims.json'),
      document.fonts?.load('96px Bangers').catch(() => {}),
    ]);
  } catch (e) {
    loading.textContent = 'Failed to load animations: ' + e.message;
    throw e;
  }
  loading.classList.add('hidden');

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
}
boot();

// PWA service worker (only over https / production builds)
if ('serviceWorker' in navigator && location.protocol === 'https:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}
