import styles from './page.module.css';

export const metadata = {
  title: 'News | Polentoteca Chalet Gabriele',
  description: 'Novità, eventi stagionali e aggiornamenti dalla Polentoteca Chalet Gabriele.',
};

export default function NewsPage() {
  return (
    <section className={styles.page}>
      <div className="container">

        <div className={styles.hero}>
          <p className="eyebrow">News &amp; Aggiornamenti</p>
          <h1 className={styles.title}>Resta aggiornato</h1>
          <p className={styles.lead}>
            Qui trovi eventi stagionali, serate speciali e tutte le novità
            dello Chalet Gabriele. Torna a trovarci presto.
          </p>
        </div>

        <div className={styles.layout}>

          <main className={styles.main}>
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon} aria-hidden="true">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8L2 8v12a2 2 0 0 0 2 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="9" y1="13" x2="15" y2="13" />
                  <line x1="9" y1="17" x2="13" y2="17" />
                </svg>
              </div>

              <h2 className={styles.emptyTitle}>Presto qui le prime novità</h2>

              <p className={styles.emptyText}>
                Questa sezione è pronta ad accogliere articoli, aggiornamenti ed
                eventi. Nel frattempo puoi contattarci direttamente per qualsiasi
                informazione.
              </p>

              <a href="/contatti" className={styles.emptyBtn}>
                Contattaci
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </main>

          <aside className={styles.sidebar}>
            <div className={styles.sideCard}>
              <p className="eyebrow">Dove siamo</p>
              <h3 className={styles.sideTitle}>Vieni a trovarci</h3>
              <p className={styles.sideText}>
                Polentoteca Chalet Gabriele —<br />
                aperto nei fine settimana e nei giorni festivi.
              </p>
              <a href="/contatti" className={styles.sideLink}>
                Indicazioni &amp; orari
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className={styles.sideCardAlt}>
              <p className="eyebrow">Prenota</p>
              <h3 className={styles.sideTitle}>Riserva il tuo tavolo</h3>
              <p className={styles.sideText}>
                Per gruppi o serate speciali ti consigliamo di prenotare in anticipo.
                Chiamaci o scrivici: siamo sempre disponibili.
              </p>
              <a href="/contatti" className={styles.sideLink}>
                Prenota ora
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}