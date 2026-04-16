import styles from './page.module.css';

export const metadata = { title: 'Privacy Policy | Polentoteca Chalet Gabriele' };

export default function Page() {
  return (
    <section className={styles.page}>
      <div className="container">
        <div className={styles.hero}>
          <p className="eyebrow">Privacy Policy</p>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lead}>Pagina tecnica pronta a ospitare il testo completo dell’informativa privacy del sito.</p>
        </div>
        <div className={styles.layout}>
          <article className={styles.mainCard}>
            <h2>Sezione pronta da sviluppare</h2>
            <p>La struttura è semplice e leggibile, così puoi inserirvi facilmente contenuti legali anche molto lunghi.</p>
            <p>Anche la pagina tecnica ha ora il suo CSS separato nella cartella dedicata.</p>
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
