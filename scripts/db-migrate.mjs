import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdtempSync, unlinkSync, rmdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { requiredColumns, missingTranslations, translationColumns } from './db-schema.mjs';
import { getMenuFromDB } from '../src/lib/db-menu.js';

const require = createRequire(import.meta.url);
const cli = join(dirname(require.resolve('wrangler/package.json')), 'bin', 'wrangler.js');
const args = process.argv.slice(2);
if (args.some(arg => !['--remote', '--local', '--check', '--seed'].includes(arg)) || (args.includes('--local') && args.includes('--remote'))) {
  throw new Error('Opzioni ammesse: --local oppure --remote, --check, --seed');
}
if (args.includes('--check') && args.includes('--seed')) throw new Error('--check e --seed sono alternativi');
const target = args.includes('--remote') ? '--remote' : '--local';
function sql(command) {
  const directory = mkdtempSync(join(tmpdir(), 'chalet-menu-'));
  const file = join(directory, 'query.sql');
  writeFileSync(file, command, 'utf8');
  let result;
  try {
    // Remote file imports do not return SELECT rows. Use --command for
    // single-line inspections and --file for schema/seed SQL with newlines.
    const input = /[\r\n]/.test(command) ? ['--file', file] : ['--command', command];
    result = spawnSync(process.execPath, [cli, 'd1', 'execute', 'DB', target, ...input, '--json', '--yes'], {
      encoding: 'utf8', env: { ...process.env, WRANGLER_SEND_METRICS: 'false' }, windowsHide: true,
    });
  } finally { unlinkSync(file); rmdirSync(directory); }
  if (result.status !== 0) throw new Error(result.stderr || result.stdout || 'Wrangler non riuscito');
  try { return JSON.parse(result.stdout); } catch { throw new Error('Risposta JSON Wrangler non valida'); }
}
const rows = result => result.flatMap(item => item.results ?? []);
if (!args.includes('--check')) {
  sql(readFileSync(new URL('../src/lib/menu-schema.sql', import.meta.url), 'utf8'));
}
for (const [table, baseColumns] of Object.entries(requiredColumns)) {
  const existing = rows(sql(`PRAGMA table_info(${table});`)).map(row => row.name);
  if (baseColumns.some(column => !existing.includes(column))) throw new Error(`Schema ${table} assente o incompatibile`);
  const missing = missingTranslations(table, existing);
  if (missing.length && args.includes('--check')) throw new Error(`Migrazioni mancanti: ${table}: ${missing.join(', ')}`);
  for (const column of missing) sql(`ALTER TABLE ${table} ADD COLUMN ${column} TEXT;`);
  if (missing.length) console.log(`${table}: aggiunte ${missing.length} colonne multilingua`);
}
if (args.includes('--seed')) {
  const count = rows(sql('SELECT (SELECT COUNT(*) FROM menu_sezioni) + (SELECT COUNT(*) FROM menu_piatti) + (SELECT COUNT(*) FROM menu_fissi) AS total;'))[0].total;
  if (count !== 0) throw new Error('Seed rifiutato: il database contiene già dati. Nessun contenuto è stato sovrascritto.');
  sql(readFileSync(new URL('../src/lib/menu-seed.sql', import.meta.url), 'utf8'));
  sql(readFileSync(new URL('../src/lib/menu-seed-i18n.sql', import.meta.url), 'utf8'));
}
for (const table of Object.keys(requiredColumns)) {
  const columns = rows(sql(`PRAGMA table_info(${table});`)).map(row => row.name);
  if (translationColumns(table).some(column => !columns.includes(column))) throw new Error(`Schema incompleto: ${table}`);
}
if (args.includes('--check')) {
  const count = rows(sql('SELECT (SELECT COUNT(*) FROM menu_piatti) + (SELECT COUNT(*) FROM menu_fissi) AS total;'))[0].total;
  if (!count) throw new Error('Il menu non contiene dati.');
  for (const { field, table } of [
    { table: 'menu_piatti', field: 'prezzi_multipli' },
    ...['incluso', 'portate'].flatMap(field => [field, ...['en', 'es', 'de'].map(lang => `${field}_${lang}`)].map(field => ({ table: 'menu_fissi', field }))),
  ]) {
    const invalid = rows(sql(`SELECT COUNT(*) AS total FROM ${table} WHERE ${field} IS NOT NULL AND ${field} != '' AND NOT json_valid(${field});`))[0].total;
    if (invalid) throw new Error(`JSON non valido: ${table}.${field}`);
  }
  const adapter = { prepare: command => ({ all: async () => ({ success: true, results: rows(sql(command)) }) }) };
  const fixedCount = rows(sql('SELECT COUNT(*) AS total FROM menu_fissi;'))[0].total;
  for (const lang of ['it', 'en', 'es', 'de']) {
    const menu = await getMenuFromDB(adapter, lang);
    if (menu.fissi.length !== fixedCount) throw new Error(`Dati dei menu fissi incompatibili: ${lang}`);
  }
  const multiPrices = rows(sql("SELECT prezzi_multipli FROM menu_piatti WHERE prezzi_multipli IS NOT NULL AND prezzi_multipli != '';"));
  for (const { prezzi_multipli } of multiPrices) {
    const values = JSON.parse(prezzi_multipli);
    if (!Array.isArray(values) || !values.every(value => typeof value === 'string')) throw new Error('prezzi_multipli deve contenere un array di prezzi testuali');
  }
}
console.log(`Database ${target}: verifica completata.`);
