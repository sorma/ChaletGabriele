import { NextResponse } from 'next/server';
import { getMenu } from '@/lib/menu';
import { defaultLocale, isLocale } from '@/i18n/config';

export const dynamic = 'force-dynamic';

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
    const requestedLang = searchParams.get('lang');
    const lang = isLocale(requestedLang) ? requestedLang : defaultLocale;
    const menu = await getMenu(lang);
    return NextResponse.json(menu, { headers: { 'Cache-Control': 'no-store' } });
  } catch (err) {
    console.error('[/api/menu] Errore:', err);
    return NextResponse.json(
      { error: 'Errore nel caricamento del menu' },
      { status: 503, headers: { 'Cache-Control': 'no-store', 'Retry-After': '60' } }
    );
  }
}
