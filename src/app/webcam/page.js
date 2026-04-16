import styles from './page.module.css';

export const metadata = { title: 'Webcam | Polentoteca Chalet Gabriele' };

export default function Page() {
  return (
    <section className={styles.page}>
      <div className="container">
        <div className={styles.hero}>
          <p className="eyebrow">Webcam</p>
          <h1 className={styles.title}>Webcam</h1>
          <p className={styles.lead}>Sezione pensata per valorizzare il panorama in tempo reale con un impianto grafico più curato.</p>
        </div>
        <div className={styles.layout}>
          <article className={styles.mainCard}>
            <h2>Sezione pronta da sviluppare</h2>
            <p>Qui puoi inserire embed, immagine live, collegamenti esterni o moduli informativi dedicati alla visuale del territorio.</p>
            <p>Il CSS separato ti permette di trasformare questa pagina in un elemento distintivo del sito.</p>
          </article>
          <aside className={styles.sideCard}>
            <p className="eyebrow">Base CSS dedicata</p>
            <h3>File separato per questa pagina</h3>
            <p>Questa cartella include sia <strong>page.js</strong> sia <strong>page.module.css</strong>, così puoi lavorare sezione per sezione.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
