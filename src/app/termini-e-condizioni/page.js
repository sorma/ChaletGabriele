import styles from './page.module.css';

export const metadata = { title: 'Termini e condizioni | Polentoteca Chalet Gabriele' };

export default function Page() {
  return (
    <section className={styles.page}>
      <div className="container">
        <div className={styles.hero}>
          <p className="eyebrow">Termini e condizioni</p>
          <h1 className={styles.title}>Termini e condizioni</h1>
          <p className={styles.lead}>Pagina tecnica predisposta per condizioni d’uso, policy prenotazioni e testi legali.</p>
        </div>
        <div className={styles.layout}>
          <article className={styles.mainCard}>
            <h2>Sezione pronta da sviluppare</h2>
            <p>Il layout è coerente con il resto del progetto e mantiene una lettura ordinata anche per contenuti formali.</p>
            <p>La separazione dei fogli di stile ti aiuta a gestire meglio anche queste sezioni.</p>
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
