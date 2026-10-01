import { site, siteUrl } from '@/lib/site';

export default function robots() {
  const base = siteUrl();
  if (!base || !site.privacy.approved || !site.termsApproved) return { rules: { userAgent: '*', disallow: '/' } };
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/', '/*/news', '/*/webcam'] },
    sitemap: `${base}/sitemap.xml`,
  };
}
