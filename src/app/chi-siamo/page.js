import styles from './page.module.css';

export const metadata = { title: 'Chi siamo | Polentoteca Chalet Gabriele' };

export default function Page() {
  return (
    <main className={styles.page}>

      {/* ── APERTURA EDITORIALE ── */}
      <section className={styles.opening}>
        <div className={`container ${styles.openingInner}`}>
          <p className={styles.eyebrow}>Chi siamo</p>
          <h1 className={styles.openingTitle}>
            Un luogo costruito<br />con le mani e il cuore
          </h1>
          <p className={styles.openingLead}>
            Non è solo un ristorante. È un posto che esiste da quasi settant'anni,
            costruito pietra su pietra da una famiglia di montagna, rimasto fedele
            a sé stesso quando tutto intorno cambiava.
          </p>
        </div>
      </section>

      {/* ── STORIA — Fondatori ── */}
      <section className={styles.story}>
        <div className={`container ${styles.storyGrid}`}>

          <div className={styles.storyImage}>
            <img
              src="/images/fondatori.webp"
              alt="Nuccia e Gabriele, fondatori dello chalet negli anni '60"
              width="900"
              height="600"
              loading="lazy"
              className={styles.storyImg}
            />
            <div className={styles.storyImageCaption}>
              Mariuccia e Gabriele, anni '60
            </div>
          </div>

          <div className={styles.storyText}>
            <p className={styles.eyebrow}>Le origini · 1957</p>
            <h2 className={styles.storyTitle}>
              Gabriele e Nuccia,<br />una storia di famiglia
            </h2>
            <p className={styles.storyPara}>
              Era il 1957 quando <strong>Gabriele Galli</strong>, figlio di contadini
              di Bellagio, decise di aprire un piccolo bar a Piano Rancio.
              Accanto a lui, <strong>Mariuccia Sala</strong> — per tutti Nuccia —
              milanese di nascita ma di montagna nell'anima.
            </p>
            <p className={styles.storyPara}>
              Quello che nacque come un bar di paese si trasformò lentamente,
              stagione dopo stagione, in un ristorante. Non per ambizione, ma per
              necessità: la gente saliva fin quassù, si sedeva, chiedeva da mangiare.
              E Nuccia cucinava.
            </p>
            <p className={styles.storyPara}>
              Il loro obiettivo era semplice e non è mai cambiato: semplicità,
              qualità e cortesia. Tre parole che ancora oggi guidano ogni
              giornata di lavoro.
            </p>
          </div>

        </div>
      </section>

      {/* ── CITAZIONE ── */}
      <section className={styles.quote}>
        <div className="container">
          <blockquote className={styles.quoteBlock}>
            <p className={styles.quoteText}>
              "La semplicità, la qualità e la cortesia. Sempre."
            </p>
            <cite className={styles.quoteCite}>— Gabriele Galli, fondatore</cite>
          </blockquote>
        </div>
      </section>

      {/* ── IL TÓC ── */}
      <section className={styles.toc}>
        <div className={`container ${styles.tocGrid}`}>

          <div className={styles.tocText}>
            <p className={styles.eyebrow}>Il piatto simbolo</p>
            <h2 className={styles.tocTitle}>
              Il Tóc, anima<br />di Bellagio
            </h2>
            <p className={styles.tocPara}>
              Il <strong>Tóc</strong> è il piatto della tradizione bellagina per eccellenza,
              con oltre 150 anni di storia. Il nome viene dal dialetto comasco
              <em> "Tucà"</em> — toccare — perché si mangia così: con le mani,
              direttamente dal paiolo, in compagnia.
            </p>
            <p className={styles.tocPara}>
              Polenta di farina di mais, burro genuino e formaggio d'alpeggio
              amalgamati lentamente fino a ottenere un composto cremoso e omogeneo.
              Una preparazione che richiede tempo, pazienza e la mano esperta
              di un vero <em>tocchista</em>. Se si sbaglia un passaggio, il Tóc
              rilascia il burro e non è più mangiabile.
            </p>
            <p className={styles.tocPara}>
              Per secoli veniva preparato solo in occasione di matrimoni e
              battesimi. Oggi lo portiamo in tavola per gruppi su prenotazione,
              con il rito intatto: il paiolo di rame al centro, i cucchiai di
              legno, le risate tutt'intorno.
            </p>

            <div className={styles.tocAccompagnamento}>
              <p className={styles.tocAccLabel}>Si serve con</p>
              <ul className={styles.tocAccList}>
                <li>Missoltini del Lago di Como</li>
                <li>Salametti e salumi nostrani</li>
                <li>Gallina nostrana lessata</li>
                <li>Ragèl — il digestivo nel paiolo</li>
              </ul>
            </div>
          </div>

        <div className={styles.tocImageWrap}>
          <img
            src="/images/toc.webp"
            alt="Il Tóc nel paiolo di rame, piatto tipico bellagino"
            width="900"
            height="600"
            loading="lazy"
            className={styles.tocImg}
          />
        </div>
        <p className={styles.tocNote}>
          <span className={styles.tocNoteDot} />
          Disponibile su prenotazione per gruppi di aleno 8 persone
        </p>

        </div>
      </section>

      {/* ── IDENTITÀ — 3 pilastri ── */}
      <section className={styles.identity}>
        <div className="container">
          <p className={styles.eyebrow}>Chi siamo davvero</p>
          <h2 className={styles.identityTitle}>Tre cose che non cambieranno mai</h2>
          <div className={styles.identityGrid}>

            <div className={styles.identityCard}>
              <span className={styles.identityNumber}>01</span>
              <h3>La famiglia</h3>
              <p>
                Siamo una famiglia che cucina per le famiglie degli altri.
                Dal 1957 la stessa mano, la stessa cura, lo stesso modo
                di stare in sala: come se ogni tavolo fosse quello di casa nostra.
              </p>
            </div>

            <div className={styles.identityCard}>
              <span className={styles.identityNumber}>02</span>
              <h3>La ricetta</h3>
              <p>
                Il Tóc non si prepara leggendo un foglio. Si impara guardando,
                si affina nel tempo, si porta avanti con rispetto per chi l'ha
                inventato. Solo un vero tocchista sa quando è pronto.
              </p>
            </div>

            <div className={styles.identityCard}>
              <span className={styles.identityNumber}>03</span>
              <h3>La compagnia</h3>
              <p>
                Qui non si mangia mai soli nel senso vero della parola. Il ristorante
                è sempre pieno, i tavoli vicini, le risate che si mescolano. Una
                domenica alla Polentoteca sa di festa anche quando non lo è.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── CHIUSURA NARRATIVA ── */}
      <section className={styles.closing}>
        <div className={`container ${styles.closingInner}`}>
          <div className={styles.closingText}>
            <p className={styles.eyebrow}>Oggi</p>
            <h2 className={styles.closingTitle}>
              Quasi settant'anni<br />e lo stesso paiolo
            </h2>
            <p className={styles.closingPara}>
              Gabriele e Nuccia non ci sono più, ma lo spirito con cui hanno
              aperto questo posto è rimasto intatto. La cucina funziona ancora
              come funzionava allora: materie prime vere, ricette di territorio,
              nessuna scorciatoia.
            </p>
            <p className={styles.closingPara}>
              Chi sale fin qui lo sa. Non si viene alla Polentoteca per caso.
              Si viene perché si è sentito dire che vale la salita.
              E ogni volta si riparte con la sensazione di aver mangiato
              qualcosa di vero.
            </p>
          </div>
          <div className={styles.closingImage}>
            <img
              src="/images/vistaTerrazza.webp"
              alt="Chalet Gabriele visto dall'esterno"
              width="1024"
              height="683"
              loading="lazy"
              className={styles.closingImg}
            />
          </div>
        </div>
      </section>

    </main>
  );
}