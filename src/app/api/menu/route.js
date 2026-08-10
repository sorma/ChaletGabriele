import { getCloudflareContext } from '@opennextjs/cloudflare';
import { NextResponse } from 'next/server';
import { getMenuFromDB } from '@/lib/db-menu';

/**
 * GET /api/menu?lang=en
 * Restituisce tutto il menu letto da Cloudflare D1, nella lingua richiesta.
 * Lingue supportate: it (default), en, es, de
 *
 * Struttura risposta:
 * {
 *   alacarta: [ { id, label, nota, piatti: [...] } ],
 *   self:     [ { id, label, nota, piatti: [...] } ],
 *   fissi:    [ { id, nome, prezzo, incluso, portate } ]
 * }
 */
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const lang = ['it', 'en', 'es', 'de'].includes(searchParams.get('lang'))
      ? searchParams.get('lang')
      : 'it';
    const { env } = await getCloudflareContext({ async: true });
    const menu = await getMenuFromDB(env.DB, lang);
    return NextResponse.json(menu);
  } catch (err) {
    console.error('[/api/menu] Errore:', err);
    return NextResponse.json(
      { error: 'Errore nel caricamento del menu' },
      { status: 500 }
    );
  }
}
