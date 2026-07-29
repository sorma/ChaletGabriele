/**
 * db-menu.js
 * Helper condiviso per leggere il menu da Cloudflare D1.
 * Può essere usato direttamente da un Server Component o da un API route.
 *
 * @param {D1Database} db  — istanza del binding D1 (env.DB)
 * @returns {{ alacarta: Array, self: Array, fissi: Array }}
 */
export async function getMenuFromDB(db) {
  // Carica sezioni, piatti e menu fissi in parallelo
  const [sezioniRes, piattiRes, fissiRes] = await Promise.all([
    db
      .prepare('SELECT id, label, nota, tipo FROM menu_sezioni ORDER BY tipo, ordine')
      .all(),
    db
      .prepare(
        'SELECT sezione_id, nome, desc, prezzo, prezzi_multipli, special FROM menu_piatti ORDER BY sezione_id, ordine'
      )
      .all(),
    db
      .prepare('SELECT id, nome, prezzo, incluso, portate FROM menu_fissi ORDER BY ordine')
      .all(),
  ]);

  // Raggruppa i piatti per sezione_id
  const piattiPerSezione = {};
  for (const piatto of piattiRes.results) {
    const sid = piatto.sezione_id;
    if (!piattiPerSezione[sid]) piattiPerSezione[sid] = [];
    piattiPerSezione[sid].push({
      nome: piatto.nome,
      desc: piatto.desc || undefined,
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
        label: s.label,
        nota: s.nota || undefined,
        piatti: piattiPerSezione[s.id] || [],
      }));

  // Deserializza i menu fissi
  const fissi = fissiRes.results.map((m) => ({
    nome: m.nome,
    prezzo: m.prezzo,
    incluso: JSON.parse(m.incluso),
    portate: JSON.parse(m.portate),
  }));

  return {
    alacarta: buildSezioni('alacarta'),
    self: buildSezioni('self'),
    fissi,
  };
}
