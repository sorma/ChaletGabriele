import styles from './page.module.css';
import { getDictionary } from '@/i18n/dictionaries';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const lang = (await params)?.lang || 'it';
  const dict = await getDictionary(lang);
  return {
    title: `${dict.news.title} | Polentoteca Chalet Gabriele`,
    description: dict.news.lead,
  };
}

export default async function NewsPage({ params }) {
  const lang = (await params)?.lang || 'it';
  const dict = await getDictionary(lang);
  const localizeUrl = (path) => (path === '/' ? `/${lang}` : `/${lang}${path}`);

  return (
    <section className={styles.page}>
      <div className="container">

        <div className={styles.hero}>
          <p className="eyebrow">{dict.news.eyebrow}</p>
          <h1 className={styles.title}>{dict.news.title}</h1>
          <p className={styles.lead}>{dict.news.lead}</p>
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

              <h2 className={styles.emptyTitle}>{dict.news.emptyTitle}</h2>

              <p className={styles.emptyText}>{dict.news.emptyText}</p>

              <Link href={localizeUrl('/contatti')} className={styles.emptyBtn}>
                {dict.news.emptyBtn}
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
              </Link>
            </div>
          </main>

          <aside className={styles.sidebar}>
            <div className={styles.sideCard}>
              <p className="eyebrow">{dict.news.sideWhereEyebrow}</p>
              <h3 className={styles.sideTitle}>{dict.news.sideWhereTitle}</h3>
              <p className={styles.sideText}>{dict.news.sideWhereText}</p>
              <Link href={localizeUrl('/contatti')} className={styles.sideLink}>
                {dict.news.sideWhereLink}
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
              </Link>
            </div>

            <div className={styles.sideCardAlt}>
              <p className="eyebrow">{dict.news.sideBookEyebrow}</p>
              <h3 className={styles.sideTitle}>{dict.news.sideBookTitle}</h3>
              <p className={styles.sideText}>{dict.news.sideBookText}</p>
              <a href="tel:031963624" className={styles.sideLink}>
                {dict.news.sideBookLink}
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