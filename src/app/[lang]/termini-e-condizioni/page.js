import styles from './page.module.css';
import { getDictionary } from '@/i18n/dictionaries';

export async function generateMetadata({ params }) {
  const lang = (await params)?.lang || 'it';
  const dict = await getDictionary(lang);
  return {
    title: `${dict.termini.title} | Polentoteca Chalet Gabriele`,
    description: dict.termini.lead,
  };
}

export default async function Page({ params }) {
  const lang = (await params)?.lang || 'it';
  const dict = await getDictionary(lang);

  return (
    <section className={styles.page}>
      <div className="container">
        <div className={styles.hero}>
          <p className="eyebrow">{dict.termini.eyebrow}</p>
          <h1 className={styles.title}>{dict.termini.title}</h1>
          <p className={styles.lead}>{dict.termini.lead}</p>
        </div>
        <div className={styles.layout}>
          <article className={styles.mainCard}>
            <h2>{dict.termini.cardTitle}</h2>
            <p>{dict.termini.cardText}</p>
          </article>
          <aside className={styles.sideCard}>
            <p className="eyebrow">{dict.termini.sideEyebrow}</p>
            <h3>{dict.termini.sideTitle}</h3>
            <p>{dict.termini.sideText}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
