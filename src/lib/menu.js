import 'server-only';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { getMenuFromDB } from './db-menu';
import { defaultLocale, isLocale } from '../i18n/config';

export async function getMenu(lang = defaultLocale) {
  if (!isLocale(lang)) lang = defaultLocale;
  const { env, ctx } = await getCloudflareContext({ async: true });
  const cache = globalThis.caches?.default;
  const key = new Request(`https://menu-cache.internal/v2/${lang}`);
  if (cache) {
    try {
      const cached = await cache.match(key);
      if (cached) return await cached.json();
    } catch { console.warn('[menu] Cache read failed.'); }
  }
  const menu = await getMenuFromDB(env.DB, lang);
  if (cache) {
    const response = Response.json(menu, { headers: { 'Cache-Control': 'public, max-age=60' } });
    const pending = cache.put(key, response).catch(() => console.warn('[menu] Cache write failed.'));
    if (ctx?.waitUntil) ctx.waitUntil(pending);
    else await pending;
  }
  return menu;
}
