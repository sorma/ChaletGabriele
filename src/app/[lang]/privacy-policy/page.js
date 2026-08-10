import styles from './page.module.css';
import { getDictionary } from '@/i18n/dictionaries';

export async function generateMetadata({ params }) {
  const lang = (await params)?.lang || 'it';
  const dict = await getDictionary(lang);
  return {
    title: `${dict.privacy.title} | Polentoteca Chalet Gabriele`,
    description: dict.privacy.lead,
  };
}

export default async function Page({ params }) {
  const lang = (await params)?.lang || 'it';
  const dict = await getDictionary(lang);

  return (
    <section className={styles.page}>
      <div className="container">
        <div className={styles.hero}>
          <p className="eyebrow">{dict.privacy.eyebrow}</p>
          <h1 className={styles.title}>{dict.privacy.title}</h1>
          <p className={styles.lead}>{dict.privacy.lead}</p>
        </div>
        <div className={styles.layout}>
          <article className={styles.mainCard}>
            <h2>{dict.privacy.cardTitle}</h2>
            <p>{dict.privacy.cardText}</p>
          </article>
          <aside className={styles.sideCard}>
            <p className="eyebrow">{dict.privacy.sideEyebrow}</p>
            <h3>{dict.privacy.sideTitle}</h3>
            <p>{dict.privacy.sideText}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
