// Captures pleine page de chaque page à 390 px et 1440 px. Usage : npm run build && npm run captures
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { chromium } from 'playwright';

const PORT = 4401;
const BASE = `http://localhost:${PORT}`;
const pages = [
  ['accueil', '/'],
  ['mentions-legales', '/mentions-legales/'],
  ['confidentialite', '/confidentialite/'],
  ['404', '/page-inexistante'],
];
const sizes = [
  ['mobile', 390, 844],
  ['desktop', 1440, 900],
];

mkdirSync('captures', { recursive: true });
const server = spawn(`npx astro preview --port ${PORT}`, { shell: true, stdio: 'ignore' });

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(BASE);
      if (r.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error('Le serveur de preview ne répond pas');
}

try {
  await waitForServer();
  const browser = await chromium.launch();
  for (const [label, width, height] of sizes) {
    const ctx = await browser.newContext({ viewport: { width, height }, locale: 'fr-FR', timezoneId: 'Europe/Paris' });
    const page = await ctx.newPage();
    for (const [name, path] of pages) {
      await page.goto(BASE + path, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      if (overflow > 0) console.warn(`⚠ ${name} ${label} : débordement horizontal de ${overflow}px`);
      await page.screenshot({ path: `captures/${name}-${label}.png`, fullPage: true });
      console.log(`captures/${name}-${label}.png`);
    }
    await ctx.close();
  }
  await browser.close();
} finally {
  server.kill();
  if (process.platform === 'win32') spawn('taskkill', ['/pid', String(server.pid), '/T', '/F'], { stdio: 'ignore' });
}
