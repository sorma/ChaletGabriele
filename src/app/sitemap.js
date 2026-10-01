import { locales } from '@/i18n/config';
import { publicPaths, siteUrl } from '@/lib/site';

export default function sitemap() {
  const base = siteUrl();
  if (!base) return [];
  return publicPaths.flatMap(path => locales.map(lang => ({
    url: `${base}/${lang}${path}`,
    alternates: { languages: Object.fromEntries(locales.map(locale => [locale, `${base}/${locale}${path}`])) },
  })));
}
