import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav({ dict, lang = 'it' }) {
  const links = [
    { href: '/', labelKey: 'home' },
    { href: '/chi-siamo', labelKey: 'chiSiamo' },
    { href: '/menu', labelKey: 'menu' },
    { href: '/webcam', labelKey: 'webcam' },
    { href: '/news', labelKey: 'news' },
    { href: '/contatti', labelKey: 'contatti' }
  ];

  return (
    <nav className={styles.mainNav} aria-label="Navigazione principale">
      {links.map((link) => {
        // Base route starts with lang, e.g. /en or /en/menu
        const localizedHref = link.href === '/' ? `/${lang}` : `/${lang}${link.href}`;
        return (
          <Link key={link.href} href={localizedHref} className={styles.navLink}>
            {dict?.nav?.[link.labelKey] || link.labelKey}
          </Link>
        );
      })}
    </nav>
  );
}
