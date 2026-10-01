import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { releaseRequirements } from '../scripts/release-requirements.mjs';

const valid = {
  url: 'https://example.com',
  business: { legalName: 'Test', address: 'Test address', privacyEmail: 'privacy@example.com', vatId: '12345678901' },
  privacy: { retention: 'Confirmed', legalBasis: 'Confirmed', internationalTransfers: 'Confirmed', approved: true },
  termsApproved: true,
};
test('release requires real configuration and approved documents', () => {
  assert.deepEqual(releaseRequirements(valid), []);
  assert.ok(releaseRequirements({}).length >= 8);
  assert.ok(releaseRequirements({ ...valid, privacy: { ...valid.privacy, approved: false } }).some(item => item.includes('approved')));
});
test('invalid domains and privacy email are rejected', () => {
  for (const url of ['http://example.com', 'https://example.com/path', 'https://example.com?x=1', 'https://user:password@example.com']) {
    assert.ok(releaseRequirements({ ...valid, url }).some(item => item.startsWith('url:')));
  }
  assert.ok(releaseRequirements({ ...valid, business: { ...valid.business, privacyEmail: 'not-an-email' } }).length);
});
function keys(value, prefix = '') {
  return Object.entries(value).flatMap(([key, item]) => item && typeof item === 'object' && !Array.isArray(item) ? keys(item, `${prefix}${key}.`) : [`${prefix}${key}`]).sort();
}
test('all dictionaries keep the same translation keys', () => {
  const dictionaries = ['it', 'en', 'es', 'de'].map(lang => JSON.parse(readFileSync(new URL(`../src/i18n/locales/${lang}.json`, import.meta.url), 'utf8')));
  for (const dictionary of dictionaries) assert.deepEqual(keys(dictionary), keys(dictionaries[0]));
});
