import styles from './page.module.css';
import { getDictionary } from '@/i18n/dictionaries';
import Image from 'next/image';
import { pageMetadata } from '@/lib/site';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return pageMetadata(lang, '/chi-siamo', dict.nav.chiSiamo, dict.about.opening.lead);
}

export default async function Page({ params }) {
  const lang = (await params)?.lang || 'it';
  const dict = await getDictionary(lang);

  return (
    <div className={styles.page}>

      {/* ── APERTURA EDITORIALE ── */}
      <section className={styles.opening}>
        <div className={`container ${styles.openingInner}`}>
          <p className={styles.eyebrow}>{dict.about.opening.eyebrow}</p>
          <h1 className={styles.openingTitle} dangerouslySetInnerHTML={{ __html: dict.about.opening.title }}></h1>
          <p className={styles.openingLead}>
            {dict.about.opening.lead}
          </p>
        </div>
      </section>

      {/* ── STORIA — Fondatori ── */}
      <section className={styles.story}>
        <div className={`container ${styles.storyGrid}`}>

          <div className={styles.storyImage}>
            <Image
              src="/images/fondatori.webp"
              alt="Nuccia e Gabriele, fondatori dello chalet negli anni '60"
              width={300}
              height={170}
              loading="lazy"
              className={styles.storyImg}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className={styles.storyImageCaption}>
              {dict.about.story.caption}
            </div>
          </div>

          <div className={styles.storyText}>
            <p className={styles.eyebrow}>{dict.about.story.eyebrow}</p>
            <h2 className={styles.storyTitle} dangerouslySetInnerHTML={{ __html: dict.about.story.title }}></h2>
            <p className={styles.storyPara} dangerouslySetInnerHTML={{ __html: dict.about.story.p1 }}></p>
            <p className={styles.storyPara}>
              {dict.about.story.p2}
            </p>
            <p className={styles.storyPara}>
              {dict.about.story.p3}
            </p>
          </div>

        </div>
      </section>

      {/* ── CITAZIONE ── */}
      <section className={styles.quote}>
        <div className="container">
          <blockquote className={styles.quoteBlock}>
            <p className={styles.quoteText}>
              {dict.about.quote.text}
            </p>
            <cite className={styles.quoteCite}>{dict.about.quote.cite}</cite>
          </blockquote>
        </div>
      </section>

      {/* ── IL TÓC ── */}
      <section className={styles.toc}>
        <div className={`container ${styles.tocGrid}`}>

          <div className={styles.tocText}>
            <p className={styles.eyebrow}>{dict.about.toc.eyebrow}</p>
            <h2 className={styles.tocTitle} dangerouslySetInnerHTML={{ __html: dict.about.toc.title }}></h2>
            <p className={styles.tocPara} dangerouslySetInnerHTML={{ __html: dict.about.toc.p1 }}></p>
            <p className={styles.tocPara} dangerouslySetInnerHTML={{ __html: dict.about.toc.p2 }}></p>
            <p className={styles.tocPara}>
              {dict.about.toc.p3}
            </p>

            <div className={styles.tocAccompagnamento}>
              <p className={styles.tocAccLabel}>{dict.about.toc.accLabel}</p>
              <ul className={styles.tocAccList}>
                <li>{dict.about.toc.acc1}</li>
                <li>{dict.about.toc.acc2}</li>
                <li>{dict.about.toc.acc3}</li>
                <li>{dict.about.toc.acc4}</li>
              </ul>
            </div>
          </div>

        <div className={styles.tocImageWrap}>
          <Image
            src="/images/toc.webp"
            alt="Il Tóc nel paiolo di rame, piatto tipico bellagino"
            width={1030}
            height={743}
            loading="lazy"
            className={styles.tocImg}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <p className={styles.tocNote}>
          <span className={styles.tocNoteDot} />
          {dict.about.toc.note}
        </p>

        </div>
      </section>

      {/* ── IDENTITÀ — 3 pilastri ── */}
      <section className={styles.identity}>
        <div className="container">
          <p className={styles.eyebrow}>{dict.about.identity.eyebrow}</p>
          <h2 className={styles.identityTitle}>{dict.about.identity.title}</h2>
          <div className={styles.identityGrid}>

            <div className={styles.identityCard}>
              <span className={styles.identityNumber}>01</span>
              <h3>{dict.about.identity.c1Title}</h3>
              <p>
                {dict.about.identity.c1Text}
              </p>
            </div>

            <div className={styles.identityCard}>
              <span className={styles.identityNumber}>02</span>
              <h3>{dict.about.identity.c2Title}</h3>
              <p>
                {dict.about.identity.c2Text}
              </p>
            </div>

            <div className={styles.identityCard}>
              <span className={styles.identityNumber}>03</span>
              <h3>{dict.about.identity.c3Title}</h3>
              <p>
                {dict.about.identity.c3Text}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── CHIUSURA NARRATIVA ── */}
      <section className={styles.closing}>
        <div className={`container ${styles.closingInner}`}>
          <div className={styles.closingText}>
            <p className={styles.eyebrow}>{dict.about.closing.eyebrow}</p>
            <h2 className={styles.closingTitle} dangerouslySetInnerHTML={{ __html: dict.about.closing.title }}></h2>
            <p className={styles.closingPara}>
              {dict.about.closing.p1}
            </p>
            <p className={styles.closingPara}>
              {dict.about.closing.p2}
            </p>
          </div>
          <div className={styles.closingImage}>
            <Image
              src="/images/vistaTerrazza.webp"
              alt="Chalet Gabriele visto dall'esterno"
              width={1280}
              height={720}
              loading="lazy"
              className={styles.closingImg}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
