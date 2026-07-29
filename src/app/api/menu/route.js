import { getCloudflareContext } from '@opennextjs/cloudflare';
import { NextResponse } from 'next/server';
import { getMenuFromDB } from '@/lib/db-menu';

/**
 * GET /api/menu
 * Restituisce tutto il menu letto da Cloudflare D1.
 * Utile per debug, curl o accesso esterno.
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
    const menu = await getMenuFromDB(env.DB);
    return NextResponse.json(menu);
  } catch (err) {
    console.error('[/api/menu] Errore:', err);
    return NextResponse.json(
      { error: 'Errore nel caricamento del menu' },
      { status: 500 }
    );
  }
}
