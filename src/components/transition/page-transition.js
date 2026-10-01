'use client';

import { useEffect, useState } from 'react';
import styles from './page-transition.module.css';

export default function PageTransition() {
  const [phase, setPhase] = useState('hidden');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    try {
      if (sessionStorage.getItem('intro-shown')) return;
    } catch {
      // If storage is disabled, skip the optional introduction.
      return;
    }
    const start = requestAnimationFrame(() => setPhase('visible'));
    const t1 = setTimeout(() => setPhase('leaving'), 900);
    const t2 = setTimeout(() => {
      setPhase('hidden');
      try { sessionStorage.setItem('intro-shown', '1'); } catch { /* optional storage */ }
    }, 2100);

    return () => {
      cancelAnimationFrame(start);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === 'hidden') return null;

  return (
    <div
      className={styles.curtain}
      data-leaving={phase === 'leaving' ? 'true' : undefined}
      aria-hidden="true"
    >
      <span className={styles.brand}>Chalet Gabriele</span>
    </div>
  );
}
