import assert from 'node:assert/strict';
import { spawn, spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { setTimeout } from 'node:timers/promises';

const require = createRequire(import.meta.url);
const cli = join(dirname(require.resolve('wrangler/package.json')), 'bin', 'wrangler.js');
const origin = 'http://127.0.0.1:8788';
const child = spawn(process.execPath, [cli, 'dev', '--local', '--ip=127.0.0.1', '--port=8788'], {
  stdio: ['ignore', 'pipe', 'pipe'], windowsHide: true,
  env: { ...process.env, WRANGLER_SEND_METRICS: 'false' },
});
let logs = '';
child.stdout.on('data', chunk => { logs = (logs + chunk).slice(-12000); });
child.stderr.on('data', chunk => { logs = (logs + chunk).slice(-12000); });
let startupError;
child.on('error', error => { startupError = error; });
try {
  let ready = false;
  for (let attempt = 0; attempt < 60; attempt++) {
    if (startupError || child.exitCode !== null) throw new Error('Preview non avviata: ' + (startupError?.message ?? logs));
    try {
      const response = await fetch(origin + '/robots.txt', { signal: AbortSignal.timeout(1500) });
      if (response.status === 200) { ready = true; break; }
    } catch { /* Wait for the preview to start. */ }
    await setTimeout(1000);
  }
  assert.ok(ready, 'Preview non pronta entro 60 secondi: ' + logs);
  const get = async path => fetch(origin + path, { redirect: 'manual', signal: AbortSignal.timeout(15000) });
  const root = await get('/');
  assert.equal(root.status, 308);
  assert.equal(new URL(root.headers.get('location'), origin).pathname, '/it');
  for (const lang of ['it', 'en', 'es', 'de']) {
    for (const path of ['', '/chi-siamo', '/menu', '/contatti', '/privacy-policy', '/termini-e-condizioni', '/news', '/webcam']) {
      const response = await get(`/${lang}${path}`);
      assert.equal(response.status, 200, `${lang}${path}`);
      const html = await response.text();
      assert.ok(html.includes(`<html lang="${lang}"`), `html lang: ${lang}${path}`);
      assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
      assert.equal(response.headers.get('x-powered-by'), null);
      if (path === '/news' || path === '/webcam') {
        const main = html.match(/<main id="contenuto">([\s\S]*?)<\/main>/)?.[1];
        assert.equal(main?.replace(/<!--[\s\S]*?-->/g, '').trim(), '', 'La pagina futura deve essere vuota');
        assert.ok(html.includes('noindex'));
      }
      if (path === '/contatti') assert.ok(!/<iframe\b/.test(html), 'La mappa non deve caricarsi automaticamente');
      if (path === '/menu') assert.ok(!html.includes('role="status"'), 'Il menu con database inizializzato deve essere disponibile');
    }
    const api = await get(`/api/menu?lang=${lang}`);
    assert.equal(api.status, 200);
    const menu = await api.json();
    assert.ok(menu.alacarta.length && menu.self.length && menu.fissi.length);
    console.log(`${lang}: pagine e API menu verificate`);
  }
  for (const path of ['/fr', '/fr/menu', '/it/constructor/menu', '/it/inesistente']) assert.equal((await get(path)).status, 404, path);
  const optimizedImage = await get('/_next/image?url=%2Fimages%2Fhero.webp&w=640&q=75');
  assert.equal(optimizedImage.status, 200, 'Ottimizzazione immagini nel Worker');
  assert.ok(optimizedImage.headers.get('content-type')?.startsWith('image/'));
  assert.ok((await optimizedImage.arrayBuffer()).byteLength > 0);
  assert.equal((await get('/icon.svg')).status, 200);
  const fallbackMenu = await get('/api/menu?lang=fr');
  assert.equal(fallbackMenu.status, 200);
  assert.deepEqual(await fallbackMenu.json(), await (await get('/api/menu?lang=it')).json());
  assert.equal((await get('/sitemap.xml')).status, 200);
  console.log('Redirect, 404, pagine vuote, immagini e servizi esterni verificati.');
} catch (error) {
  console.error(logs);
  throw error;
} finally {
  if (child.exitCode === null && child.pid) {
    if (process.platform === 'win32') spawnSync('taskkill.exe', ['/PID', String(child.pid), '/T', '/F'], { windowsHide: true, stdio: 'ignore' });
    else child.kill('SIGTERM');
  }
}
