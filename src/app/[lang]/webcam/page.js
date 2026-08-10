import styles from './page.module.css';
import { getDictionary } from '@/i18n/dictionaries';

export async function generateMetadata({ params }) {
  const lang = (await params)?.lang || 'it';
  const dict = await getDictionary(lang);
  return {
    title: `${dict.webcam.title} | Polentoteca Chalet Gabriele`,
    description: dict.webcam.lead,
  };
}

export default async function Page({ params }) {
  const lang = (await params)?.lang || 'it';
  const dict = await getDictionary(lang);

  return (
    <section className={styles.page}>
      <div className="container">
        <div className={styles.hero}>
          <p className="eyebrow">{dict.webcam.eyebrow}</p>
          <h1 className={styles.title}>{dict.webcam.title}</h1>
          <p className={styles.lead}>{dict.webcam.lead}</p>
        </div>
        <div className={styles.layout}>
          <article className={styles.mainCard}>
            <h2>{dict.webcam.cardTitle}</h2>
            <p>{dict.webcam.cardText}</p>
          </article>
          <aside className={styles.sideCard}>
            <p className="eyebrow">{dict.webcam.sideEyebrow}</p>
            <h3>{dict.webcam.sideTitle}</h3>
            <p>{dict.webcam.sideText}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
