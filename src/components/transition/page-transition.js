'use client';

import { useEffect, useState } from 'react';
import styles from './page-transition.module.css';

export default function PageTransition() {
  const [show, setShow] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const already = sessionStorage.getItem('intro-shown');
    if (already) {
      setGone(true);
      return;
    }

    setShow(true);

    const t1 = setTimeout(() => setLeaving(true), 900);
    const t2 = setTimeout(() => {
      setGone(true);
      sessionStorage.setItem('intro-shown', '1');
    }, 2100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!show || gone) return null;

  return (
    <div
      className={styles.curtain}
      data-leaving={leaving ? 'true' : undefined}
      aria-hidden="true"
    >
      <span className={styles.brand}>Chalet Gabriele</span>
    </div>
  );
}