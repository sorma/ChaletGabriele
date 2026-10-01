import site from '../config/site.json' with { type: 'json' };
import { locales } from '../i18n/config.js';
export { publicPaths } from '../config/routes.js';

export { site };
export function siteUrl() {
  if (!site.url) return null;
  const url = new URL(site.url);
  if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash || url.pathname !== '/') {
    throw new Error('site.url deve essere un dominio HTTPS senza percorso, query o credenziali.');
  }
  return url.origin;
}
export function pageMetadata(lang, path, title, description) {
  const base = siteUrl();
  return {
    title: path === '' ? { absolute: title } : title, description,
    ...(base ? {
      alternates: {
        canonical: `${base}/${lang}${path}`,
        languages: Object.fromEntries([...locales.map(locale => [locale, `${base}/${locale}${path}`]), ['x-default', `${base}/it${path}`]]),
      },
      openGraph: { title, description, url: `${base}/${lang}${path}`, siteName: 'Polentoteca Chalet Gabriele', type: 'website' },
      twitter: { card: 'summary', title, description },
    } : {}),
  };
}
