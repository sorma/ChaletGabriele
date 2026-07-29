import { getCloudflareContext } from '@opennextjs/cloudflare';
import { NextResponse } from 'next/server';

/**
 * GET /api/menu
 * Restituisce tutto il menu letto da Cloudflare D1.
 *
 * Struttura risposta:
 * {
 *   alacarta: [ { id, label, nota, piatti: [...] } ],
 *   self:     [ { id, label, nota, piatti: [...] } ],
 *   fissi:    [ { id, nome, prezzo, incluso, portate } ]
 * }
 */
export async function GET() {
  try {
    const { env } = await getCloudflareContext({ async: true });
    const db = env.DB;

    // Carica sezioni e piatti in parallelo
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

    return NextResponse.json({
      alacarta: buildSezioni('alacarta'),
      self: buildSezioni('self'),
      fissi,
    });
  } catch (err) {
    console.error('[/api/menu] Errore:', err);
    return NextResponse.json(
      { error: 'Errore nel caricamento del menu' },
      { status: 500 }
    );
  }
}
