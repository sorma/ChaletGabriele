import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';
import { defaultLocale } from './src/i18n/config.js';
import { publicPaths, futurePaths } from './src/config/routes.js';

export default async function nextConfig(phase) {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    const { initOpenNextCloudflareForDev } = await import('@opennextjs/cloudflare');
    await initOpenNextCloudflareForDev();
  }
  return {
    reactStrictMode: true,
    poweredByHeader: false,
    async redirects() {
      return [...publicPaths, ...futurePaths].map(path => ({
        source: path || '/', destination: `/${defaultLocale}${path}`, permanent: true,
      }));
    },
    async headers() {
      return [{ source: '/:path*', headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ] }];
    },
  };
}
