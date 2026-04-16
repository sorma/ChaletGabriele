'use client';

import { usePathname } from 'next/navigation';
import styles from './route-transition.module.css';

export default function RouteTransition({ children }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className={styles.enter}>
      {children}
    </div>
  );
}