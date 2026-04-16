'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from '@/components/nav/Nav';
import styles from './Header.module.css';

export default function Header() {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerInner}>

        <Link href="/" className={styles.brand} aria-label="Polentoteca Chalet Gabriele home">
          <span className={styles.brandMark}>
            CG
          </span>
          <span className={styles.brandText}>
            <strong>Polentoteca</strong>
            <small>Chalet Gabriele</small>
          </span>
        </Link>

        <Nav />

        <button
          className={showPhone ? styles.btnPhone : styles.btnPrenota}
          onClick={() => setShowPhone(!showPhone)}
          aria-label={showPhone ? 'Chiudi numero' : 'Mostra numero per prenotare'}
        >
          {showPhone ? (
            <>
              <span className={styles.phoneIcon}>📞</span>
              031 963624
            </>
          ) : (
            'Prenota'
          )}
        </button>

      </div>
    </header>
  );
}