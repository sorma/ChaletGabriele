import Link from 'next/link';
import styles from './page.module.css';
import { getDictionary } from '@/i18n/dictionaries';
import Map from '@/components/map/Map';
import { pageMetadata } from '@/lib/site';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return pageMetadata(lang, '/contatti', dict.contact.hero.eyebrow, dict.contact.hero.lead);
}

const giorniApertura = [
  { giornoKey: 'Lunedì',    stato: 'solo-pranzo' },
  { giornoKey: 'Martedì',   stato: 'chiuso'      },
  { giornoKey: 'Mercoledì', stato: 'solo-pranzo' },
  { giornoKey: 'Giovedì',   stato: 'solo-pranzo' },
  { giornoKey: 'Venerdì',   stato: 'aperto'      },
  { giornoKey: 'Sabato',    stato: 'aperto'      },
  { giornoKey: 'Domenica',  stato: 'aperto'      },
];

export default async function Page({ params }) {
  const lang = (await params)?.lang || 'it';
  const dict = await getDictionary(lang);
  const localizeUrl = (path) => (path === '/' ? `/${lang}` : `/${lang}${path}`);

  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.eyebrow}>{dict.contact.hero.eyebrow}</p>
          <h1 className={styles.heroTitle}>{dict.contact.hero.title}</h1>
          <p className={styles.heroLead}>
            {dict.contact.hero.lead}
          </p>
          <p className={styles.heroNote}>
            {dict.contact.hero.note}{' '}
            <a href="tel:031963624" className={styles.heroPhone}>031 963624</a>
          </p>
        </div>
      </section>

      {/* ── TRE CARD INFO ── */}
      <section className={styles.infoSection}>
        <div className="container">
          <div className={styles.infoGrid}>

            <a href="tel:031963624" className={`${styles.infoCard} ${styles.infoCardDark}`}>
              <p className={styles.infoLabel}>{dict.contact.cards.phoneTitle}</p>
              <p className={styles.infoValue}>031&nbsp;963624</p>
              <p className={styles.infoNote}>{dict.contact.cards.phoneNote}</p>
            </a>

            <div className={styles.infoCard}>
              <p className={styles.infoLabel}>{dict.contact.cards.hoursTitle}</p>
              <div className={styles.orariTable}>
                {giorniApertura.map(({ giornoKey, stato }) => (
                  <div key={giornoKey} className={`${styles.orariRow} ${stato === 'chiuso' ? styles.orariRowChiuso : ''}`}>
                    <span className={styles.orariGiorno}>{dict.contact.cards.hoursDays[giornoKey]}</span>
                    <span className={`${styles.orariStato} ${styles[`orariStato__${stato.replace('-', '')}`]}`}>
                      {dict.contact.cards.hoursStates[stato]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.infoCard}>
              <p className={styles.infoLabel}>{dict.contact.cards.whereTitle}</p>
              <p className={styles.infoValue}>{dict.contact.cards.whereValue}</p>
              <p className={styles.infoNote} dangerouslySetInnerHTML={{ __html: dict.contact.cards.whereNote }}></p>
            </div>

          </div>
        </div>
      </section>

      {/* ── COME ARRIVARE + MAPPA ── */}
      <section className={styles.arrivoSection}>
        <div className="container">
          <div className={styles.arrivoGrid}>

            <div className={styles.arrivoText}>
              <p className={styles.eyebrow}>{dict.contact.arrive.eyebrow}</p>
              <h2 className={styles.arrivoTitle}>{dict.contact.arrive.title}</h2>
              <p className={styles.arrivoPara}>
                {dict.contact.arrive.p1}
              </p>
              <p className={styles.arrivoPara}>
                {dict.contact.arrive.p2}
              </p>
              <div className={styles.arrivoStats}>
                <div className={styles.arrivoStat}>
                  <span className={styles.arrivoStatLabel}>{dict.contact.arrive.statAlt}</span>
                  <span className={styles.arrivoStatValue}>1012 m</span>
                </div>
                <div className={styles.arrivoStatDivider} />
                <div className={styles.arrivoStat}>
                  <span className={styles.arrivoStatLabel}>{dict.contact.arrive.statDist}</span>
                  <span className={styles.arrivoStatValue}>12 km</span>
                </div>
                <div className={styles.arrivoStatDivider} />
                <div className={styles.arrivoStat}>
                  <span className={styles.arrivoStatLabel}>{dict.contact.arrive.statPark}</span>
                  <span className={styles.arrivoStatValue}>{dict.contact.arrive.statParkVal}</span>
                </div>
              </div>
            </div>

            <div className={styles.mapWrapper}>
              <Map labels={dict.map} />
            </div>

          </div>
        </div>
      </section>

      {/* ── INFO PRATICHE ── */}
      <section className={styles.infoSection2}>
        <div className="container">
          <p className={styles.eyebrow}>{dict.contact.rules.eyebrow}</p>
          <h2 className={styles.infoSection2Title}>{dict.contact.rules.title}</h2>
          <div className={styles.infoSection2Grid}>
            {dict.contact.rules.items.map((item, index) => (
              <div key={index} className={styles.infoSection2Card}>
                <h3 className={styles.infoSection2CardTitolo}>{item.title}</h3>
                <p className={styles.infoSection2CardTesto}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaInner}`}>
          <div className={styles.ctaText}>
            <p className={styles.eyebrow}>{dict.contact.cta.eyebrow}</p>
            <h2 className={styles.ctaTitle}>{dict.contact.cta.title}</h2>
            <p className={styles.ctaPara}>
              {dict.contact.cta.para}
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a href="tel:031963624" className={styles.ctaBtn}>📞 031 963624</a>
            <Link href={localizeUrl("/menu")} className={styles.ctaBtnGhost}>{dict.contact.cta.btnGhost}</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
