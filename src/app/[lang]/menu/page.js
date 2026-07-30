// Server Component — nessun 'use client'
// I dati vengono letti direttamente da Cloudflare D1 (nessuna fetch HTTP interna).

import Link from 'next/link';
import styles from './page.module.css';
import { MenuAlaCartaClient, MenuSelfClient } from './MenuClient';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { getMenuFromDB } from '@/lib/db-menu';
import { getDictionary } from '@/i18n/dictionaries';
export const dynamic = 'force-dynamic';

/**
 * Carica il menu direttamente dal binding D1.
 * Funziona sia in locale (via wrangler dev proxy) sia su Cloudflare Workers.
 * Elimina la dipendenza da fetch HTTP interna che non funziona su Workers.
 */
async function getMenu() {
  try {
    const { env } = await getCloudflareContext({ async: true });
    return await getMenuFromDB(env.DB);
  } catch (err) {
    console.error('[menu/page] Impossibile caricare il menu dal DB:', err);
    // Ritorna strutture vuote: la pagina si renderizza senza errori
    return { alacarta: [], self: [], fissi: [] };
  }
}

export default async function Page({ params }) {
  const { alacarta, self: selfCategorie, fissi: menuFissi } = await getMenu();
  const lang = (await params)?.lang || 'it';
  const dict = await getDictionary(lang);
  const localizeUrl = (path) => (path === '/' ? `/${lang}` : `/${lang}${path}`);

  return (
    <main className={styles.page}>

      <section className={styles.opening}>
        <div className={`container ${styles.openingInner}`}>
          <p className={styles.eyebrow}>{dict.menu.opening.eyebrow}</p>
          <h1 className={styles.openingTitle}>{dict.menu.opening.title}</h1>
          <p className={styles.openingLead}>
            {dict.menu.opening.lead}
          </p>
          <p className={styles.openingNote}>
            {dict.menu.opening.note}
            <a href="tel:031963624" className={styles.openingPhone}>031 963624</a>
          </p>
        </div>
      </section>

      <section className={styles.alaCartaSection}>
        <div className="container">
          <p className={styles.eyebrow}>{dict.menu.alacarta.eyebrow}</p>
          <h2 className={styles.sectionTitle}>{dict.menu.alacarta.title}</h2>
          {alacarta.length > 0 && (
            <MenuAlaCartaClient categorie={alacarta} />
          )}
        </div>
      </section>

      <section className={styles.fissiSection}>
        <div className="container">
          <p className={styles.eyebrow}>{dict.menu.fissi.eyebrow}</p>
          <h2 className={styles.sectionTitle}>{dict.menu.fissi.title}</h2>
          <p className={styles.sectionSub}>
            {dict.menu.fissi.sub}
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
                  {dict.menu.fissi.btn}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.selfSection}>
        <div className="container">
          <p className={styles.eyebrow}>{dict.menu.self.eyebrow}</p>
          <h2 className={styles.sectionTitle}>{dict.menu.self.title}</h2>
          <p className={styles.sectionSub}>{dict.menu.self.sub}</p>
          {selfCategorie.length > 0 && (
            <MenuSelfClient selfCategorie={selfCategorie} />
          )}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div className={styles.ctaText}>
            <p className={styles.eyebrow}>{dict.menu.cta.eyebrow}</p>
            <h2 className={styles.ctaTitle}>{dict.menu.cta.title}</h2>
            <p className={styles.ctaPara}>
              {dict.menu.cta.para}
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a href="tel:031963624" className={styles.ctaBtn}>📞 031 963624</a>
            <Link href={localizeUrl("/contatti")} className={styles.ctaBtnGhost}>{dict.menu.cta.btnGhost}</Link>
          </div>
        </div>
      </section>

    </main>
  );
}