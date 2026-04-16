import Link from 'next/link';
import styles from './Footer.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/chi-siamo', label: 'Chi siamo' },
  { href: '/menu', label: 'Menu' },
  { href: '/webcam', label: 'Webcam' },
  { href: '/news', label: 'News' },
  { href: '/contatti', label: 'Contatti' },
];

const infoLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/termini-e-condizioni', label: 'Termini e condizioni' },
];

export default function Footer() {
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
              <Link key={link.href} href={link.href} className={styles.footerLink}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Colonna 3 — Informazioni */}
        <div className={styles.col}>
          <p className={styles.colTitle}>Informazioni</p>
          <div className={styles.linkList}>
            {infoLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.footerLink}>
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
            <Link href="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="/termini-e-condizioni" className={styles.legalLink}>Termini e condizioni</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}