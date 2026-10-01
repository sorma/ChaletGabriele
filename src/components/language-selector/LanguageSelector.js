'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './LanguageSelector.module.css';

const languages = [
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
];
const labels = { it: 'Cambia lingua', en: 'Change language', es: 'Cambiar idioma', de: 'Sprache ändern' };

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() || '/it';
  const selected = languages.find(lang => lang.code === pathname.split('/')[1]) || languages[0];
  const dropdownRef = useRef(null);
  const toggleRef = useRef(null);
  useEffect(() => {
    function closeOutside(event) {
      if (!dropdownRef.current?.contains(event.target)) setIsOpen(false);
    }
    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, []);
  const hrefFor = code => {
    const segments = pathname.split('/');
    if (languages.some(lang => lang.code === segments[1])) segments[1] = code;
    else segments.splice(1, 0, code);
    return segments.join('/');
  };
  return <div className={styles.langSelector} ref={dropdownRef} onKeyDown={event => {
    if (event.key === 'Escape') {
      setIsOpen(false);
      toggleRef.current?.focus();
    }
  }} onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
  }}>
    <button ref={toggleRef} type="button" className={styles.langToggle}
      onClick={() => setIsOpen(open => !open)} aria-expanded={isOpen}
      aria-controls="language-options" aria-label={labels[selected.code]}>
      <span className={styles.flag} aria-hidden="true">{selected.flag}</span>
      <span className={styles.code}>{selected.label}</span>
      <span className={styles.arrow} aria-hidden="true">⌄</span>
    </button>
    {isOpen && <ul id="language-options" className={styles.langMenu}>
      {languages.map(lang => <li key={lang.code}>
        <Link href={hrefFor(lang.code)} hrefLang={lang.code} lang={lang.code}
          className={`${styles.langOption} ${selected.code === lang.code ? styles.selected : ''}`}
          aria-current={selected.code === lang.code ? 'true' : undefined}
          onClick={() => setIsOpen(false)}>
          <span className={styles.flag} aria-hidden="true">{lang.flag}</span>
          <span className={styles.label}>{lang.label}</span>
        </Link>
      </li>)}
    </ul>}
  </div>;
}
