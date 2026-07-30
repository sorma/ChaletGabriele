'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import styles from './LanguageSelector.module.css';

const languages = [
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' }
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef(null);

  // Initialize selected language from pathname if available, fallback to IT
  const currentCode = pathname ? pathname.split('/')[1] : 'it';
  const initialLang = languages.find(l => l.code === currentCode) || languages[0];
  
  const [selected, setSelected] = useState(initialLang);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOpen = () => setIsOpen(!isOpen);
  
  const selectLanguage = (lang) => {
    setSelected(lang);
    setIsOpen(false);
    
    if (!pathname) return;
    const segments = pathname.split('/');
    
    // Check if the first segment is an existing language code
    if (languages.some(l => l.code === segments[1])) {
      segments[1] = lang.code;
    } else {
      // If it's not a known code, insert it
      segments.splice(1, 0, lang.code);
    }
    
    router.push(segments.join('/') || '/');
  };

  return (
    <div className={styles.langSelector} ref={dropdownRef}>
      <button 
        className={styles.langToggle} 
        onClick={toggleOpen}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Cambia lingua"
      >
        <span className={styles.flag}>{selected.flag}</span>
        <span className={styles.code}>{selected.label}</span>
        <span className={styles.arrow}>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      {isOpen && (
        <ul className={styles.langMenu} role="listbox">
          {languages.map((lang) => (
            <li key={lang.code} role="none">
              <button 
                className={`${styles.langOption} ${selected.code === lang.code ? styles.selected : ''}`}
                onClick={() => selectLanguage(lang)}
                role="option"
                aria-selected={selected.code === lang.code}
              >
                <span className={styles.flag}>{lang.flag}</span>
                <span className={styles.label}>{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
