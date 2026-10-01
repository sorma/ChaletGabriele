import test from 'node:test';
import assert from 'node:assert/strict';
import { site, siteUrl, pageMetadata, publicPaths } from '../src/lib/site.js';

test('metadata never invents a domain when site configuration is incomplete', () => {
  const previous = site.url;
  try {
    site.url = '';
    assert.equal(siteUrl(), null);
    assert.equal(pageMetadata('it', '/menu', 'Menu', 'Description').alternates, undefined);
    assert.deepEqual(pageMetadata('it', '', 'Chalet', 'Description').title, { absolute: 'Chalet' });
  } finally { site.url = previous; }
});
test('canonical and hreflang use the configured domain and matching page', () => {
  const previous = site.url;
  try {
    site.url = 'https://example.com/';
    const metadata = pageMetadata('de', '/menu', 'Speisekarte', 'Description');
    assert.equal(metadata.alternates.canonical, 'https://example.com/de/menu');
    assert.equal(metadata.alternates.languages.en, 'https://example.com/en/menu');
    assert.equal(metadata.alternates.languages['x-default'], 'https://example.com/it/menu');
    assert.equal(metadata.openGraph.url, metadata.alternates.canonical);
  } finally { site.url = previous; }
});
test('unfinished pages are excluded from public sitemap paths', () => {
  assert.ok(!publicPaths.includes('/news') && !publicPaths.includes('/webcam'));
  assert.ok(publicPaths.includes('/menu') && publicPaths.includes('/contatti'));
});
