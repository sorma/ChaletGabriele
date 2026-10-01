import { defaultLocale, isLocale } from '../i18n/config.js';

function jsonArray(raw, validItem) {
  if (!raw) return null;
  try {
    const value = JSON.parse(raw);
    if (!Array.isArray(value) || !value.every(validItem)) throw new Error('Invalid array');
    return value;
  } catch {
    console.warn('[menu] Invalid JSON field; using fallback.');
    return null;
  }
}
const isText = value => typeof value === 'string';
const isCourse = value => value && typeof value.label === 'string' && Array.isArray(value.voci) && value.voci.every(isText);

export async function getMenuFromDB(db, lang = defaultLocale) {
  if (!db?.prepare) throw new Error('Missing D1 DB binding');
  if (!isLocale(lang)) lang = defaultLocale;
  const [sezioni, piatti, fissi] = await Promise.all([
    db.prepare('SELECT id, label, label_en, label_es, label_de, nota, nota_en, nota_es, nota_de, tipo FROM menu_sezioni ORDER BY tipo, ordine').all(),
    db.prepare('SELECT sezione_id, nome, nome_en, nome_es, nome_de, desc, desc_en, desc_es, desc_de, prezzo, prezzi_multipli, special FROM menu_piatti ORDER BY sezione_id, ordine').all(),
    db.prepare('SELECT id, nome, nome_en, nome_es, nome_de, prezzo, incluso, incluso_en, incluso_es, incluso_de, portate, portate_en, portate_es, portate_de FROM menu_fissi ORDER BY ordine').all(),
  ]);
  for (const result of [sezioni, piatti, fissi]) {
    if (result.success === false || !Array.isArray(result.results)) throw new Error('Invalid D1 result');
  }
  const t = (row, field) => (lang !== defaultLocale && row[field + '_' + lang]) || row[field] || null;
  const grouped = Object.create(null);
  for (const row of piatti.results) {
    (grouped[row.sezione_id] ??= []).push({
      nome: t(row, 'nome'),
      desc: t(row, 'desc') || undefined,
      prezzo: row.prezzo || undefined,
      prezziMultipli: jsonArray(row.prezzi_multipli, isText) ?? undefined,
      special: row.special === 1 ? true : undefined,
    });
  }
  const sections = tipo => sezioni.results.filter(s => s.tipo === tipo && grouped[s.id]?.length).map(s => ({
    id: s.id, label: t(s, 'label'), nota: t(s, 'nota') || undefined, piatti: grouped[s.id],
  }));
  const menu = {
    alacarta: sections('alacarta'), self: sections('self'),
    fissi: fissi.results.flatMap(row => {
      const incluso = jsonArray(t(row, 'incluso'), isText) ?? jsonArray(row.incluso, isText);
      const portate = jsonArray(t(row, 'portate'), isCourse) ?? jsonArray(row.portate, isCourse);
      if (!incluso || !portate?.length) return [];
      return [{ id: row.id, nome: t(row, 'nome'), prezzo: row.prezzo, incluso, portate }];
    }),
  };
  if (!menu.alacarta.length && !menu.self.length && !menu.fissi.length) throw new Error('Menu is empty');
  return menu;
}
