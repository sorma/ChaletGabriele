'use client';

import Link from 'next/link';
import Nav from '@/components/nav/Nav';
import LanguageSelector from '@/components/language-selector/LanguageSelector';
import styles from './Header.module.css';

export default function Header({ dict, lang }) {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerInner}>

        <Link href={`/${lang}`} className={styles.brand} aria-label="Polentoteca Chalet Gabriele home">
          <span className={styles.brandMark}>
            CG
          </span>
          <span className={styles.brandText}>
            <strong>Polentoteca</strong>
            <small>Chalet Gabriele</small>
          </span>
        </Link>

        <Nav dict={dict} lang={lang} />

        <div className={styles.headerActions}>
          <LanguageSelector />
        </div>

      </div>
    </header>
  );
}
