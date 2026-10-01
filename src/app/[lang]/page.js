import { getDictionary } from '@/i18n/dictionaries';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { pageMetadata } from '@/lib/site';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return pageMetadata(lang, '', 'Polentoteca Chalet Gabriele', dict.home.hero.text);
}

export default async function HomePage({ params }) {
  const lang = (await params)?.lang || 'it';
  const dict = await getDictionary(lang);
  
  const localizeUrl = (path) => (path === '/' ? `/${lang}` : `/${lang}${path}`);

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroShell}>
          <div className={styles.heroBackground}>
            <Image
              src="/images/hero.webp"
              alt="Vista panoramica sul lago di Como"
              className={styles.heroImage}
              width={800}
              height={600}
              preload
              sizes="100vw"
            />
            <div className={styles.heroOverlay} />
          </div>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <p className={styles.heroEyebrow}>{dict.home.hero.eyebrow}</p>
              <h1 className={styles.heroTitle}>
                {dict.home.hero.title}
              </h1>
              <p className={styles.heroText}>
                {dict.home.hero.text}
              </p>
              <div className={styles.heroButtons}>
                <a href="tel:031963624" className={styles.primaryButton}>{dict.home.hero.btnPrimary}</a>
                <Link href={localizeUrl("/chi-siamo")} className={styles.secondaryButton}>{dict.home.hero.btnSecondary}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO EDITORIALE ── */}
      <section className={styles.intro}>
        <div className={`container ${styles.introGrid}`}>
          <div className={styles.introText}>
            <p className={styles.eyebrow}>{dict.home.intro.eyebrow}</p>
            <h2 className={styles.introTitle}>{dict.home.intro.title}</h2>
            <p className={styles.introPara}>
              {dict.home.intro.text1}
            </p>
            <p className={styles.introPara}>
              {dict.home.intro.text2}
            </p>
            <Link href={localizeUrl("/chi-siamo")} className={styles.btnOutline}>{dict.home.intro.btn}</Link>
          </div>
          <div className={styles.introImage}>
            <Image
              src="/images/luogoAutentico.webp"
              alt="Chalet di montagna al tramonto"
              width={550}
              height={413}
              loading="lazy"
              className={styles.introImg}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── PIATTO FORTE ── */}
      <section className={styles.signature}>
        <div className={`container ${styles.signatureGrid}`}>
          <div className={styles.signatureImage}>
            <Image
              src="/images/polenta.webp"
              alt="Polenta con ragù della tradizione"
              width={2000}
              height={1500}
              loading="lazy"
              className={styles.signatureImg}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className={styles.signatureText}>
            <p className={styles.eyebrow}>{dict.home.signature.eyebrow}</p>
            <h2 className={styles.signatureTitle}>{dict.home.signature.title}</h2>
            <p className={styles.signaturePara}>
              {dict.home.signature.text1}
            </p>
            <p className={styles.signaturePara}>
              {dict.home.signature.text2}
            </p>
            <Link href={localizeUrl("/contatti")} className={styles.btnOutline}>{dict.home.signature.btn}</Link>
          </div>
        </div>
      </section>

      {/* ── NUMERI / INFO ── */}
      <section className={styles.facts}>
        <div className={`container ${styles.factsGrid}`}>
          <div className={styles.factItem}>
            <strong>1957</strong>
            <span>{dict.home.facts.year}</span>
          </div>
          <div className={styles.factDivider} />
          <div className={styles.factItem}>
            <strong>1012 m</strong>
            <span>{dict.home.facts.height}</span>
          </div>
          <div className={styles.factDivider} />
          <div className={styles.factItem}>
            <strong>Lago di Como</strong>
            <span>{dict.home.facts.view}</span>
          </div>
          <div className={styles.factDivider} />
          <div className={styles.factItem}>
            <strong>12 km</strong>
            <span>{dict.home.facts.distance}</span>
          </div>
        </div>
      </section>

      {/* ── VISTA PANORAMICA ── */}
      <section className={styles.panorama}>
        <div className={styles.panoramaShell}>
          <Image
            src="/images/vista.webp"
            alt="Terrazza con vista sul lago di Como"
            width={3000}
            height={1688}
            loading="lazy"
            className={styles.panoramaBg}
            sizes="100vw"
          />
          <div className={styles.panoramaOverlay} />
          <div className={styles.panoramaContent}>
            <p className={styles.eyebrowLight}>{dict.home.panorama.eyebrow}</p>
            <h2 className={styles.panoramaTitle}>{dict.home.panorama.title}</h2>
            <p className={styles.panoramaSub}>
              {dict.home.panorama.text}
            </p>
            <a href="tel:031963624" className={styles.btnHero}>
              {dict.home.panorama.btn}
            </a>
          </div>
        </div>
      </section>

      {/* ── INFO PRATICHE ── */}
      <section className={styles.info}>
        <div className={`container ${styles.infoGrid}`}>
          <div className={styles.infoCard}>
            <p className={styles.infoIcon}>📍</p>
            <p className={styles.infoLabel}>{dict.home.info.where}</p>
            <p className={styles.infoValue} dangerouslySetInnerHTML={{ __html: dict.home.info.whereText }}></p>
          </div>
          <div className={styles.infoCard}>
            <p className={styles.infoIcon}>🕐</p>
            <p className={styles.infoLabel}>{dict.home.info.hours}</p>
            <p className={styles.infoValue} dangerouslySetInnerHTML={{ __html: dict.home.info.hoursText }}></p>
          </div>
          <div className={styles.infoCard}>
            <p className={styles.infoIcon}>📞</p>
            <p className={styles.infoLabel}>{dict.home.info.booking}</p>
            <p className={styles.infoValue}>
              <a href="tel:031963624" className={styles.infoPhone}>031 963624</a>
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
