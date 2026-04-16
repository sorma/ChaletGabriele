import styles from './page.module.css';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroShell}>
          <div className={styles.heroBackground}>
            <img
              src="/images/hero.webp"
              alt="Vista panoramica sul lago di Como"
              className={styles.heroImage}
              width="4992"
              height="3328"
              loading="eager"
            />
            <div className={styles.heroOverlay} />
          </div>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <p className={styles.heroEyebrow}>Piano Rancio · 1012 m s.l.m.</p>
              <h1 className={styles.heroTitle}>
                Tra lago<br />e montagne
              </h1>
              <p className={styles.heroText}>
                Dal 1957, cucina autentica con vista sul lago di Como e sulle Alpi.
                Polenta, tradizione e un panorama che toglie il fiato.
              </p>
              <div className={styles.heroButtons}>
                <a href="tel:031963624" className={styles.primaryButton}>Prenota un tavolo</a>
                <Link href="/chi-siamo" className={styles.secondaryButton}>Scopri lo chalet</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO EDITORIALE ── */}
      <section className={styles.intro}>
        <div className={`container ${styles.introGrid}`}>
          <div className={styles.introText}>
            <p className={styles.eyebrow}>La nostra storia</p>
            <h2 className={styles.introTitle}>Un luogo autentico,<br />costruito con passione</h2>
            <p className={styles.introPara}>
              La Polentoteca Chalet Gabriele sorge a Piano Rancio, ai piedi del monte San Primo.
              Costruito nel 1957 da Nuccia e Gabriele, il ristorante ha sempre avuto come obiettivo
              la semplicità, la qualità e la cortesia.
            </p>
            <p className={styles.introPara}>
              Due sale da pranzo con vetrate che si affacciano sul lago di Como e sulla catena
              delle Alpi. Un posto dove il tempo rallenta.
            </p>
            <Link href="/chi-siamo" className={styles.btnOutline}>Chi siamo →</Link>
          </div>
          <div className={styles.introImage}>
            <img
              src="/images/luogoAutentico.webp"
              alt="Chalet di montagna al tramonto"
              width="1470"
              height="980"
              loading="lazy"
              className={styles.introImg}
            />
          </div>
        </div>
      </section>

      {/* ── PIATTO FORTE ── */}
      <section className={styles.signature}>
        <div className={`container ${styles.signatureGrid}`}>
          <div className={styles.signatureImage}>
            <img
              src="/images/polenta.webp"
              alt="Polenta con ragù della tradizione"
              width="1024"
              height="683"
              loading="lazy"
              className={styles.signatureImg}
            />
          </div>
          <div className={styles.signatureText}>
            <p className={styles.eyebrow}>Il piatto forte</p>
            <h2 className={styles.signatureTitle}>La polenta,<br />regina della tavola</h2>
            <p className={styles.signaturePara}>
              La polenta è la protagonista indiscussa del nostro menu. Preparata secondo
              la ricetta di famiglia, servita con sughi ricchi e sapori autentici della
              tradizione lombarda di montagna.
            </p>
            <p className={styles.signaturePara}>
              Accanto alla polenta, un menu ricco di specialità locali per soddisfare
              ogni palato, dalle carni ai formaggi di malga.
            </p>
            <Link href="/contatti" className={styles.btnOutline}>Sfoglia il menu →</Link>
          </div>
        </div>
      </section>

      {/* ── NUMERI / INFO ── */}
      <section className={styles.facts}>
        <div className={`container ${styles.factsGrid}`}>
          <div className={styles.factItem}>
            <strong>1957</strong>
            <span>Anno di fondazione</span>
          </div>
          <div className={styles.factDivider} />
          <div className={styles.factItem}>
            <strong>1012 m</strong>
            <span>Quota sul mare</span>
          </div>
          <div className={styles.factDivider} />
          <div className={styles.factItem}>
            <strong>Lago di Como</strong>
            <span>Vista panoramica</span>
          </div>
          <div className={styles.factDivider} />
          <div className={styles.factItem}>
            <strong>12 km</strong>
            <span>Da Bellagio</span>
          </div>
        </div>
      </section>

      {/* ── VISTA PANORAMICA ── */}
      {/* ── VISTA PANORAMICA ── */}
      <section className={styles.panorama}>
        <div className={styles.panoramaShell}>
          <img
            src="/images/vista.webp"
            alt="Terrazza con vista sul lago di Como"
            width="4417"
            height="2945"
            loading="lazy"
            className={styles.panoramaBg}
          />
          <div className={styles.panoramaOverlay} />
          <div className={styles.panoramaContent}>
            <p className={styles.eyebrowLight}>Una vista unica</p>
            <h2 className={styles.panoramaTitle}>Il lago, le Alpi,<br />la tua tavola</h2>
            <p className={styles.panoramaSub}>
              Dopo pranzo, passeggia tra i boschi o scendi a Bellagio per ammirare il lago.
            </p>
            <a href="tel:031963624" className={styles.btnHero}>
              Riserva il tuo posto — 031 963624
            </a>
          </div>
        </div>
      </section>

      {/* ── INFO PRATICHE ── */}
      <section className={styles.info}>
        <div className={`container ${styles.infoGrid}`}>
          <div className={styles.infoCard}>
            <p className={styles.infoIcon}>📍</p>
            <p className={styles.infoLabel}>Dove siamo</p>
            <p className={styles.infoValue}>Piano Rancio, Bellagio (CO)<br />Facilmente raggiungibile, ampio parcheggio</p>
          </div>
          <div className={styles.infoCard}>
            <p className={styles.infoIcon}>🕐</p>
            <p className={styles.infoLabel}>Orari</p>
            <p className={styles.infoValue}>Chiuso il lunedì a cena<br />e il martedì tutto il giorno</p>
          </div>
          <div className={styles.infoCard}>
            <p className={styles.infoIcon}>📞</p>
            <p className={styles.infoLabel}>Prenotazioni</p>
            <p className={styles.infoValue}>
              <a href="tel:031963624" className={styles.infoPhone}>031 963624</a>
            </p>
          </div>
        </div>
      </section>

    </>
  );
}