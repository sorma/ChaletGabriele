import Link from 'next/link';
import styles from './page.module.css';

export const metadata = { title: 'Contatti | Polentoteca Chalet Gabriele' };

const giorniApertura = [
  { giorno: 'Lunedì',    stato: 'solo-pranzo' },
  { giorno: 'Martedì',   stato: 'chiuso'      },
  { giorno: 'Mercoledì', stato: 'solo-pranzo' },
  { giorno: 'Giovedì',   stato: 'solo-pranzo' },
  { giorno: 'Venerdì',   stato: 'aperto'      },
  { giorno: 'Sabato',    stato: 'aperto'      },
  { giorno: 'Domenica',  stato: 'aperto'      },
];

const orariLabel = {
  'aperto':      'Pranzo · Cena',
  'solo-pranzo': 'Solo pranzo',
  'chiuso':      'Chiuso',
};

const infoPratiche = [
  {
    titolo: 'Fondute e Carbonade',
    testo: 'Richiedono prenotazione telefonica anticipata. La Chinoise e la Bourguignonne: minimo 2 ospiti. La Carbonade: minimo 6, massimo 10 ospiti.',
  },
  {
    titolo: 'Menu a prezzo fisso',
    testo: 'I menu Piano Rancio e Monte San Primo sono riservati a gruppi e compagnie e richiedono prenotazione anticipata. Nel prezzo è escluso il vino.',
  },
  {
    titolo: 'Tavoli con vista',
    testo: 'I tavoli alla vetrata con panorama sul Lago di Como vengono assegnati in ordine di prenotazione. Chiamaci in anticipo per assicurartelo.',
  },
  {
    titolo: 'Asporto tutto l\'anno',
    testo: 'Tutti i piatti del menu sono disponibili anche da asporto, tutto l\'anno. Contattaci telefonicamente per ordinare.',
  },
];

export default function Page() {
  return (
    <main className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.eyebrow}>Contatti</p>
          <h1 className={styles.heroTitle}>Vieni a trovarci</h1>
          <p className={styles.heroLead}>
            Siamo a Piano Rancio, a 1012 m s.l.m., ai piedi del Monte San Primo.
            Un locale caratteristico in sasso e legno, con vetrate affacciate
            sul Lago di Como e sulla catena delle Alpi.
          </p>
          <p className={styles.heroNote}>
            Prenotazioni solo telefonicamente:{' '}
            <a href="tel:031963624" className={styles.heroPhone}>031 963624</a>
          </p>
        </div>
      </section>

      {/* ── TRE CARD INFO ── */}
      <section className={styles.infoSection}>
        <div className="container">
          <div className={styles.infoGrid}>

            <a href="tel:031963624" className={`${styles.infoCard} ${styles.infoCardDark}`}>
              <p className={styles.infoLabel}>Telefono</p>
              <p className={styles.infoValue}>031&nbsp;963624</p>
              <p className={styles.infoNote}>Prenotazioni solo telefonicamente</p>
            </a>

            <div className={styles.infoCard}>
              <p className={styles.infoLabel}>Orari</p>
              <div className={styles.orariTable}>
                {giorniApertura.map(({ giorno, stato }) => (
                  <div key={giorno} className={`${styles.orariRow} ${stato === 'chiuso' ? styles.orariRowChiuso : ''}`}>
                    <span className={styles.orariGiorno}>{giorno}</span>
                    <span className={`${styles.orariStato} ${styles[`orariStato__${stato.replace('-', '')}`]}`}>
                      {orariLabel[stato]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.infoCard}>
              <p className={styles.infoLabel}>Dove siamo</p>
              <p className={styles.infoValue}>Piano Rancio</p>
              <p className={styles.infoNote}>
                Bellagio (CO) · 1012 m s.l.m.<br />
                A 12 km da Bellagio
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── COME ARRIVARE + MAPPA ── */}
      <section className={styles.arrivoSection}>
        <div className="container">
          <div className={styles.arrivoGrid}>

            <div className={styles.arrivoText}>
              <p className={styles.eyebrow}>Come raggiungerci</p>
              <h2 className={styles.arrivoTitle}>Tra lago e montagna</h2>
              <p className={styles.arrivoPara}>
                Il ristorante sorge a Piano Rancio, piccola località ai piedi del Monte
                San Primo. Le vetrate delle due sale si affacciano sul Lago di Como e sulla
                catena delle Alpi che contorna i due rami del Lario.
              </p>
              <p className={styles.arrivoPara}>
                Facilmente raggiungibile con ogni mezzo, sia in auto attraverso la strada
                provinciale sia a piedi percorrendo i sentieri del bosco. A disposizione
                degli ospiti un ampio parcheggio gratuito.
              </p>
              <div className={styles.arrivoStats}>
                <div className={styles.arrivoStat}>
                  <span className={styles.arrivoStatLabel}>Altitudine</span>
                  <span className={styles.arrivoStatValue}>1012 m</span>
                </div>
                <div className={styles.arrivoStatDivider} />
                <div className={styles.arrivoStat}>
                  <span className={styles.arrivoStatLabel}>Da Bellagio</span>
                  <span className={styles.arrivoStatValue}>12 km</span>
                </div>
                <div className={styles.arrivoStatDivider} />
                <div className={styles.arrivoStat}>
                  <span className={styles.arrivoStatLabel}>Parcheggio</span>
                  <span className={styles.arrivoStatValue}>Gratuito</span>
                </div>
              </div>
            </div>

            <div className={styles.mapWrapper}>
              <iframe
                src="https://maps.google.com/maps?q=Polentoteca+Chalet+Gabriele+Piano+Rancio+Bellagio&output=embed&z=14"
                className={styles.mapFrame}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Polentoteca Chalet Gabriele"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── INFO PRATICHE ── */}
      <section className={styles.infoSection2}>
        <div className="container">
          <p className={styles.eyebrow}>Prima di venire</p>
          <h2 className={styles.infoSection2Title}>Cose utili da sapere</h2>
          <div className={styles.infoSection2Grid}>
            {infoPratiche.map((item) => (
              <div key={item.titolo} className={styles.infoSection2Card}>
                <h3 className={styles.infoSection2CardTitolo}>{item.titolo}</h3>
                <p className={styles.infoSection2CardTesto}>{item.testo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaInner}`}>
          <div className={styles.ctaText}>
            <p className={styles.eyebrow}>Prenota il tuo tavolo</p>
            <h2 className={styles.ctaTitle}>Chiamaci direttamente</h2>
            <p className={styles.ctaPara}>
              Le prenotazioni si effettuano esclusivamente per telefono. Per fondute,
              carbonade e menu fissi è obbligatoria la prenotazione anticipata.
              I tavoli con vista sul lago vengono assegnati in ordine di prenotazione.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a href="tel:031963624" className={styles.ctaBtn}>📞 031 963624</a>
            <Link href="/menu" className={styles.ctaBtnGhost}>Vedi il menu →</Link>
          </div>
        </div>
      </section>

    </main>
  );
}