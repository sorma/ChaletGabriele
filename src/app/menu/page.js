// Server Component — nessun 'use client'
// I dati vengono letti da Cloudflare D1 tramite l'API route /api/menu.

import Link from 'next/link';
import styles from './page.module.css';
import { MenuAlaCartaClient, MenuSelfClient } from './MenuClient';

/**
 * Carica il menu dal database via API route interna.
 * In dev viene chiamata in modo assoluto; in produzione
 * l'URL viene costruito dall'header Host della request.
 */
async function getMenu() {
  try {
    // Next.js 13+ supporta fetch() nei Server Components con cache controllata.
    // revalidate: 0 → sempre fresh (il menu può cambiare spesso).
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/menu`,
      { cache: 'no-store' }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('[menu/page] Impossibile caricare il menu dal DB:', err);
    // Ritorna strutture vuote: la pagina si renderizza senza errori
    return { alacarta: [], self: [], fissi: [] };
  }
}

export default async function Page() {
  const { alacarta, self: selfCategorie, fissi: menuFissi } = await getMenu();

  return (
    <main className={styles.page}>

      <section className={styles.opening}>
        <div className={`container ${styles.openingInner}`}>
          <p className={styles.eyebrow}>La nostra cucina</p>
          <h1 className={styles.openingTitle}>Menu</h1>
          <p className={styles.openingLead}>
            Cucina tipica di montagna, materie prime del territorio,
            ricette tramandate di generazione in generazione.
            I nostri piatti si possono asportare tutto l&apos;anno.
          </p>
          <p className={styles.openingNote}>
            Pane &amp; coperto € 2,50 · Prenotazioni solo telefonicamente:{' '}
            <a href="tel:031963624" className={styles.openingPhone}>031 963624</a>
          </p>
        </div>
      </section>

      <section className={styles.alaCartaSection}>
        <div className="container">
          <p className={styles.eyebrow}>Alla carta</p>
          <h2 className={styles.sectionTitle}>I nostri piatti</h2>
          {alacarta.length > 0 && (
            <MenuAlaCartaClient categorie={alacarta} />
          )}
        </div>
      </section>

      <section className={styles.fissiSection}>
        <div className="container">
          <p className={styles.eyebrow}>Per gruppi e compagnie</p>
          <h2 className={styles.sectionTitle}>Menu a prezzo fisso</h2>
          <p className={styles.sectionSub}>
            I tavoli alla vetrata vengono assegnati in ordine di prenotazione.
            Nel prezzo è escluso il vino.
          </p>
          <div className={styles.fissiGrid}>
            {menuFissi.map((menu) => (
              <div key={menu.nome} className={styles.menuCard}>
                <div className={styles.menuCardTop}>
                  <h3 className={styles.menuCardNome}>{menu.nome}</h3>
                  <p className={styles.menuCardPrezzo}>{menu.prezzo}</p>
                </div>
                <div className={styles.menuCardPortate}>
                  {menu.portate.map((portata) => (
                    <div key={portata.label} className={styles.portata}>
                      <p className={styles.portataLabel}>{portata.label}</p>
                      <div className={styles.portataVoci}>
                        {portata.voci.map((voce, i) => (
                          <p key={i} className={styles.portataVoce}>{voce}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.menuCardIncluso}>
                  {menu.incluso.map((item, i) => (
                    <span key={i} className={styles.inclusoBadge}>{item}</span>
                  ))}
                </div>
                <a href="tel:031963624" className={styles.menuCardBtn}>
                  Prenota — 031 963624
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.selfSection}>
        <div className="container">
          <p className={styles.eyebrow}>Servizio informale</p>
          <h2 className={styles.sectionTitle}>Menu Self Service</h2>
          <p className={styles.sectionSub}>Ordine libero al banco. Disponibile anche da asporto.</p>
          {selfCategorie.length > 0 && (
            <MenuSelfClient selfCategorie={selfCategorie} />
          )}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div className={styles.ctaText}>
            <p className={styles.eyebrow}>Prenota il tuo tavolo</p>
            <h2 className={styles.ctaTitle}>Vieni a trovarci</h2>
            <p className={styles.ctaPara}>
              Per prenotazioni di gruppo, menu fissi e fondute contattaci direttamente per telefono.
              I tavoli con vista sul lago vengono assegnati in ordine di prenotazione.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a href="tel:031963624" className={styles.ctaBtn}>📞 031 963624</a>
            <Link href="/contatti" className={styles.ctaBtnGhost}>Contattaci →</Link>
          </div>
        </div>
      </section>

    </main>
  );
}