import Link from 'next/link';
import styles from './Nav.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/chi-siamo', label: 'Chi siamo' },
  { href: '/menu', label: 'Menu' },
  { href: '/webcam', label: 'Webcam' },
  { href: '/news', label: 'News' },
  { href: '/contatti', label: 'Contatti' }
];

export default function Nav() {
  return (
    <nav className={styles.mainNav} aria-label="Navigazione principale">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className={styles.navLink}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
