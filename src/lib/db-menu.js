/**
 * db-menu.js
 * Helper condiviso per leggere il menu da Cloudflare D1.
 * Può essere usato direttamente da un Server Component o da un API route.
 *
 * @param {D1Database} db   — istanza del binding D1 (env.DB)
 * @param {string}     lang — codice lingua: 'it' | 'en' | 'es' | 'de' (default: 'it')
 * @returns {{ alacarta: Array, self: Array, fissi: Array }}
 */
export async function getMenuFromDB(db, lang = 'it') {
  // Carica sezioni, piatti e menu fissi in parallelo
  const [sezioniRes, piattiRes, fissiRes] = await Promise.all([
    db
      .prepare('SELECT id, label, label_en, label_es, label_de, nota, nota_en, nota_es, nota_de, tipo FROM menu_sezioni ORDER BY tipo, ordine')
      .all(),
    db
      .prepare(
        'SELECT sezione_id, nome, nome_en, nome_es, nome_de, desc, desc_en, desc_es, desc_de, prezzo, prezzi_multipli, special FROM menu_piatti ORDER BY sezione_id, ordine'
      )
      .all(),
    db
      .prepare('SELECT id, nome, nome_en, nome_es, nome_de, prezzo, incluso, incluso_en, incluso_es, incluso_de, portate, portate_en, portate_es, portate_de FROM menu_fissi ORDER BY ordine')
      .all(),
  ]);

  /**
   * Ritorna il valore tradotto per un campo, con fallback all'italiano.
   * @param {object} row    - riga del DB
   * @param {string} field  - nome del campo base (es. 'nome', 'label', 'nota')
   * @param {string} l      - codice lingua
   */
  const t = (row, field, l) => {
    if (l === 'it' || !l) return row[field] ?? null;
    const translated = row[`${field}_${l}`];
    return (translated ?? row[field]) ?? null;
  };

  // Raggruppa i piatti per sezione_id
  const piattiPerSezione = {};
  for (const piatto of piattiRes.results) {
    const sid = piatto.sezione_id;
    if (!piattiPerSezione[sid]) piattiPerSezione[sid] = [];
    piattiPerSezione[sid].push({
      nome: t(piatto, 'nome', lang),
      desc: t(piatto, 'desc', lang) || undefined,
      prezzo: piatto.prezzo || undefined,
      prezziMultipli: piatto.prezzi_multipli
        ? JSON.parse(piatto.prezzi_multipli)
        : undefined,
      special: piatto.special === 1 ? true : undefined,
    });
  }

  // Costruisce le sezioni con i rispettivi piatti
  const buildSezioni = (tipo) =>
    sezioniRes.results
      .filter((s) => s.tipo === tipo)
      .map((s) => ({
        id: s.id,
        label: t(s, 'label', lang),
        nota: t(s, 'nota', lang) || undefined,
        piatti: piattiPerSezione[s.id] || [],
      }));

  // Deserializza i menu fissi con le traduzioni
  const fissi = fissiRes.results.map((m) => {
    const inclusoKey = lang !== 'it' ? `incluso_${lang}` : 'incluso';
    const portateKey = lang !== 'it' ? `portate_${lang}` : 'portate';
    const inclusoRaw = m[inclusoKey] || m.incluso;
    const portateRaw = m[portateKey] || m.portate;

    return {
      nome: t(m, 'nome', lang),
      prezzo: m.prezzo,
      incluso: JSON.parse(inclusoRaw),
      portate: JSON.parse(portateRaw),
    };
  });

  return {
    alacarta: buildSezioni('alacarta'),
    self: buildSezioni('self'),
    fissi,
  };
}
