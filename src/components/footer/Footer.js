import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer({ dict, lang = 'it' }) {
  const navLinks = [
    { href: '/', labelKey: 'home' },
    { href: '/chi-siamo', labelKey: 'chiSiamo' },
    { href: '/menu', labelKey: 'menu' },
    { href: '/webcam', labelKey: 'webcam' },
    { href: '/news', labelKey: 'news' },
    { href: '/contatti', labelKey: 'contatti' },
  ];

  const infoLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/termini-e-condizioni', label: 'Termini e condizioni' },
  ];

  const localizeUrl = (path) => (path === '/' ? `/${lang}` : `/${lang}${path}`);

  return (
    <footer className={styles.siteFooter}>

      <div className={styles.footerTop}>

        {/* Colonna 1 — Brand */}
        <div className={styles.col}>
          <span className={styles.brandMark}>CG</span>
          <p className={styles.brandName}>Polentoteca<br />Chalet Gabriele</p>
          <p className={styles.brandDesc}>
            Ristorante tipico di montagna a Piano Rancio,
            con vista panoramica sul lago di Como e le Alpi.
          </p>
        </div>

        {/* Colonna 2 — Navigazione */}
        <div className={styles.col}>
          <p className={styles.colTitle}>Navigazione</p>
          <div className={styles.linkList}>
            {navLinks.map((link) => (
              <Link key={link.href} href={localizeUrl(link.href)} className={styles.footerLink}>
                {dict?.nav?.[link.labelKey] || link.labelKey}
              </Link>
            ))}
          </div>
        </div>

        {/* Colonna 3 — Informazioni */}
        <div className={styles.col}>
          <p className={styles.colTitle}>Informazioni</p>
          <div className={styles.linkList}>
            {infoLinks.map((link) => (
              <Link key={link.href} href={localizeUrl(link.href)} className={styles.footerLink}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Colonna 4 — Contatti */}
        <div className={styles.col}>
          <p className={styles.colTitle}>Contatti</p>
          <div className={styles.contactList}>
            <a href="tel:031963624" className={styles.footerLink}>📞 031 963624</a>
            <p className={styles.address}>📍 Piano Rancio, Bellagio (CO)</p>
            <p className={styles.address}>🕐 Chiuso lun. sera e mar.</p>
          </div>
        </div>

      </div>

      {/* Barra copyright */}
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomInner}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Polentoteca Chalet Gabriele. Tutti i diritti riservati.
          </p>
          <div className={styles.footerLegal}>
            <Link href={localizeUrl("/privacy-policy")} className={styles.legalLink}>Privacy Policy</Link>
            <Link href={localizeUrl("/termini-e-condizioni")} className={styles.legalLink}>Termini e condizioni</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}