'use client';

import { useState } from 'react';
import styles from './page.module.css';

/* ─────────────────────────────────────────────
   TabNav — barra di navigazione per le tab
   ───────────────────────────────────────────── */
function TabNav({ tabs, activeId, onSelect }) {
  return (
    <div className={styles.tabWrapper}>
      <nav className={styles.tabNav} aria-label="Categorie menu">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`${styles.tabBtn} ${activeId === tab.id ? styles.tabBtnActive : ''}`}
            onClick={() => onSelect(tab.id)}
            aria-pressed={activeId === tab.id}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PiattoRow — singola riga di piatto
   ───────────────────────────────────────────── */
function PiattoRow({ nome, prezzo, prezziMultipli, desc, note, special }) {
  return (
    <div className={`${styles.piattoRow} ${special ? styles.piattoSpecial : ''}`}>
      <div className={styles.piattoInfo}>
        <p className={styles.piattoNome}>{nome}</p>
        {desc && <p className={styles.piattoDesc}>{desc}</p>}
        {note && <p className={styles.piattoNote}>{note}</p>}
      </div>
      <div className={styles.prezzoArea}>
        {prezziMultipli
          ? prezziMultipli.map((p, i) => <span key={i} className={styles.piattoPrezzo}>{p}</span>)
          : prezzo && <span className={styles.piattoPrezzo}>{prezzo}</span>
        }
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MenuSlider — tab selector + lista piatti
   ───────────────────────────────────────────── */
function MenuSlider({ tabs, defaultId }) {
  const [activeId, setActiveId] = useState(defaultId);
  const tab = tabs.find((t) => t.id === activeId) ?? tabs[0];
  if (!tab) return null;
  return (
    <div className={styles.menuBox}>
      <TabNav tabs={tabs} activeId={activeId} onSelect={setActiveId} />
      <div className={styles.tabPanel}>
        {tab.nota && <p className={styles.panelNota}>{tab.nota}</p>}
        <div className={styles.piattoList}>
          {tab.piatti.map((p, i) => <PiattoRow key={i} {...p} />)}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MenuAlaCartaClient — esporta il menu alla carta
   ───────────────────────────────────────────── */
export function MenuAlaCartaClient({ categorie }) {
  return <MenuSlider tabs={categorie} defaultId={categorie[0]?.id} />;
}

/* ─────────────────────────────────────────────
   MenuSelfClient — esporta il menu self service
   ───────────────────────────────────────────── */
export function MenuSelfClient({ selfCategorie }) {
  return <MenuSlider tabs={selfCategorie} defaultId={selfCategorie[0]?.id} />;
}
