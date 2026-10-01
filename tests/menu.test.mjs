import test, { beforeEach, afterEach, mock } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
import { getMenuFromDB } from '../src/lib/db-menu.js';
import { missingTranslations } from '../scripts/db-schema.mjs';

beforeEach(() => mock.method(console, 'warn', () => {}));
afterEach(() => mock.restoreAll());

function fixture() {
  const database = new DatabaseSync(':memory:');
  database.exec(readFileSync(new URL('../src/lib/menu-schema.sql', import.meta.url), 'utf8'));
  for (const table of ['menu_sezioni', 'menu_piatti', 'menu_fissi']) {
    const columns = database.prepare(`PRAGMA table_info(${table})`).all().map(row => row.name);
    for (const column of missingTranslations(table, columns)) database.exec(`ALTER TABLE ${table} ADD COLUMN ${column} TEXT`);
    assert.deepEqual(missingTranslations(table, database.prepare(`PRAGMA table_info(${table})`).all().map(row => row.name)), []);
  }
  database.exec(readFileSync(new URL('../src/lib/menu-seed.sql', import.meta.url), 'utf8'));
  database.exec(readFileSync(new URL('../src/lib/menu-seed-i18n.sql', import.meta.url), 'utf8'));
  const db = { prepare: query => ({ all: async () => ({ success: true, results: database.prepare(query).all() }) }) };
  return { database, db };
}

test('schema, seed and translations produce a usable menu in every language', async () => {
  const { database, db } = fixture();
  try {
    for (const lang of ['it', 'en', 'es', 'de']) {
      const menu = await getMenuFromDB(db, lang);
      assert.ok(menu.alacarta.length && menu.self.length && menu.fissi.length);
      for (const fixed of menu.fissi) assert.ok(fixed.portate.every(course => Array.isArray(course.voci)));
    }
  } finally { database.close(); }
});

test('missing/empty translated text falls back to Italian', async () => {
  const { database, db } = fixture();
  try {
    database.exec("UPDATE menu_sezioni SET label_en = ''; UPDATE menu_piatti SET nome_en = NULL;");
    const translated = await getMenuFromDB(db, 'en');
    const italian = await getMenuFromDB(db, 'it');
    const names = menu => [...menu.alacarta, ...menu.self].map(s => ({ label: s.label, dishes: s.piatti.map(p => p.nome) }));
    assert.deepEqual(names(translated), names(italian));
  } finally { database.close(); }
});

test('unsupported language uses Italian in the data layer', async () => {
  const { database, db } = fixture();
  try { assert.deepEqual(await getMenuFromDB(db, '__proto__'), await getMenuFromDB(db, 'it')); }
  finally { database.close(); }
});

test('invalid translated JSON falls back to the valid Italian courses', async () => {
  const { database, db } = fixture();
  try {
    database.exec("UPDATE menu_fissi SET portate_en = '{}', incluso_en = 'not-json';");
    const translated = await getMenuFromDB(db, 'en');
    const italian = await getMenuFromDB(db, 'it');
    assert.deepEqual(translated.fissi.map(m => m.portate), italian.fissi.map(m => m.portate));
    assert.deepEqual(translated.fissi.map(m => m.incluso), italian.fissi.map(m => m.incluso));
  } finally { database.close(); }
});

test('one broken fixed menu does not remove the other categories', async () => {
  const { database, db } = fixture();
  try {
    database.exec("UPDATE menu_fissi SET portate = '[{}]'; UPDATE menu_piatti SET prezzi_multipli = '{}';");
    const menu = await getMenuFromDB(db, 'it');
    assert.equal(menu.fissi.length, 0);
    assert.ok(menu.alacarta.length && menu.self.length);
    assert.equal(menu.alacarta[0].piatti[0].prezziMultipli, undefined);
  } finally { database.close(); }
});

test('empty database is reported as unavailable', async () => {
  const { database, db } = fixture();
  try {
    database.exec('DELETE FROM menu_piatti; DELETE FROM menu_fissi;');
    await assert.rejects(getMenuFromDB(db), /empty/);
  } finally { database.close(); }
});

test('missing binding, failed queries and incompatible schema are reported', async () => {
  await assert.rejects(getMenuFromDB(undefined), /binding/);
  await assert.rejects(getMenuFromDB({ prepare: () => ({ all: async () => ({ success: false, results: [] }) }) }), /Invalid D1/);
  await assert.rejects(getMenuFromDB({ prepare: () => ({ all: async () => { throw new Error('missing column'); } }) }), /missing column/);
});
