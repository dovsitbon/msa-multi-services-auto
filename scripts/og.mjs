// Génère public/og.png (1200x630) et public/apple-touch-icon.png (180x180). Usage : node scripts/og.mjs
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';

const font = (f) => readFileSync(new URL(`../node_modules/@fontsource/barlow-condensed/files/${f}`, import.meta.url)).toString('base64');
const css = `@font-face{font-family:B;font-weight:900;src:url(data:font/woff2;base64,${font('barlow-condensed-latin-900-normal.woff2')})}
@font-face{font-family:B;font-weight:800;src:url(data:font/woff2;base64,${font('barlow-condensed-latin-800-normal.woff2')})}
*{margin:0;box-sizing:border-box}body{font-family:B;text-transform:uppercase;color:#1F1F1D}
.c{background:#C4161C;color:#fff;border:4px solid #fff;outline:4px solid #C4161C;border-radius:8px;padding:4px 18px;font-weight:800;line-height:1}`;

const og = `<style>${css}</style><div style="width:1200px;height:630px;background:#F2C200;padding:28px;position:relative">
<div style="border:6px solid #1F1F1D;height:100%;padding:44px 56px;display:flex;flex-direction:column;justify-content:space-between">
<div style="display:flex;align-items:flex-end;gap:36px"><span style="font-size:300px;font-weight:900;line-height:.74">16</span>
<span style="display:flex;flex-direction:column;gap:14px"><span class="c" style="font-size:120px">RN1</span><span style="font-size:44px;font-weight:800">Route de Calais, Groslay</span></span></div>
<div><div style="font-size:92px;font-weight:900;line-height:.9">MSA Multi Services Auto</div>
<div style="font-size:42px;font-weight:800;margin-top:12px">Pièces auto d'occasion et atelier · 01 39 84 17 91</div></div></div>
<div style="position:absolute;left:0;right:0;bottom:0;height:14px;background:repeating-linear-gradient(-45deg,#1F1F1D 0 18px,#F2C200 18px 36px)"></div></div>`;

const icon = `<style>${css}</style><div style="width:180px;height:180px;background:#F2C200;padding:10px"><div style="border:6px solid #1F1F1D;height:100%;display:flex;align-items:center;justify-content:center"><span class="c" style="font-size:64px">N1</span></div></div>`;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1200, height: 630 });
await page.setContent(og);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'public/og.png' });
await page.setViewportSize({ width: 180, height: 180 });
await page.setContent(icon);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'public/apple-touch-icon.png' });
await browser.close();
console.log('public/og.png, public/apple-touch-icon.png');
