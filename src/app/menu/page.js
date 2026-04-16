'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const categorie = [
  {
    id: 'fondute',
    label: 'Le fondute',
    nota: 'Con prenotazione telefonica anticipata vi proponiamo i seguenti 4 piatti',
    piatti: [
      { nome: 'La Chinoise', desc: 'Sottili fettine di carne di manzo da cuocere in un gustoso brodo di carne e abbinare a deliziose salsine. Minimo 2 ospiti.' },
      { nome: 'La Bourguignonne', desc: 'Teneri dadini di carne di cavallo da friggere in olio e gustare con appetitose salsine. Minimo 2 ospiti.' },
      { nome: 'Carbonade', desc: 'Teneri dadini di carne di cavallo e salsiccia nostrana da cuocere alla brace ed abbinare a salsine e verdure grigliate. Minimo 6 ospiti — max 10 ospiti.' },
      { nome: 'Il "Tóc"', desc: 'Piatto di antica tradizione bellagina a base di farina di mais, burro e formaggio accompagnato da gallina lessata, missoltini e salamini misti.', special: true },
    ],
  },
  {
    id: 'antipasti',
    label: 'Antipasti',
    piatti: [
      { nome: "Bresaola, Salame, Pancetta, Sott'aceti e Cipolle in Agrodolce", prezzo: '€ 8,00' },
      { nome: '"Tóc" Bellagino alla Piastra con Salami di Cervo, Cavallo e Maiale', prezzo: '€ 10,00' },
      { nome: 'Carpaccio di Bresaola', prezzo: '€ 8,00' },
      { nome: 'Bresaola con Caprino Stagionato o Fresco', prezzo: '€ 9,00' },
      { nome: 'Lardo', prezzo: '€ 7,00' },
      { nome: 'Sciatt', prezzo: '€ 9,00' },
      { nome: 'Tagliere — Salame, bresaola, pancetta, miele, "quenelles" di polenta fritta, formaggi', prezzo: '€ 12,00' },
      { nome: '"Tóc" Bellagino alla Piastra (4 fette)', prezzo: '€ 9,00' },
    ],
  },
  {
    id: 'primi',
    label: 'Primi Piatti',
    piatti: [
      { nome: 'Gnocchetti', desc: 'Pomodoro o burro e salvia', prezzo: '€ 8,00' },
      { nome: 'Gnocchetti Panna e Speck', prezzo: '€ 9,00' },
      { nome: 'Crespella Panna e Pomodoro con Prosciutto Cotto e Formaggio', prezzo: '€ 9,00' },
      { nome: 'Crespella Panna e Funghi Porcini Trifolati(*) con Prosciutto Cotto e Formaggio', prezzo: '€ 10,00' },
      { nome: 'Pizzoccheri', prezzo: '€ 9,00' },
      { nome: 'Busecca in Brodo', prezzo: '€ 9,00' },
      { nome: 'Zuppa di Cipolla con Crostini di Pane Gratinato', prezzo: '€ 9,00' },
      { nome: 'Tagliatelle Panna e Funghi Porcini Trifolati(*)', prezzo: '€ 10,00' },
      { nome: 'Pasta Gluten Free', desc: 'Al pomodoro / panna e speck / burro e zola / panna e funghi porcini trifolati(*)', prezzo: '€ 9,00' },
    ],
  },
  {
    id: 'secondi-polenta',
    label: 'Secondi con polenta',
    piatti: [
      { nome: 'Polenta e Latte', prezzo: '€ 6,00' },
      { nome: 'Uova al Burro', prezzo: '€ 6,00' },
      { nome: 'Frittatina di Cipolle', prezzo: '€ 6,00' },
      { nome: 'Burro e Zola al Forno', prezzo: '€ 7,00' },
      { nome: 'Bocconcini di Brasato', prezzo: '€ 9,50' },
      { nome: 'Bocconcini di Cervo in Salmì(*)', prezzo: '€ 9,50' },
      { nome: 'Bocconcini di Brasato e Funghi Porcini Trifolati(*)', prezzo: '€ 11,50' },
      { nome: 'Funghi Porcini Trifolati(*)', prezzo: '€ 11,00' },
      { nome: 'Stinco di Maiale al Forno, Patate Fritte(*) e Spinaci al Burro(*)', prezzo: '€ 12,00' },
      { nome: 'Il Misto', desc: 'Bocconcini di brasato, funghi porcini trifolati(*) e bocconcini di cervo in salmì(*)', prezzo: '€ 13,00' },
      { nome: 'Lo Chalet', desc: 'Burro e zola al forno, funghi porcini trifolati(*) e salamella ai ferri', prezzo: '€ 11,50' },
      { nome: 'Uova al Burro con Tartufo e Polenta Abbrustolita', prezzo: '€ 9,00' },
      { nome: 'Polenta "Uncia" Bellagina', prezzo: '€ 7,00' },
    ],
  },
  {
    id: 'secondi-ferri',
    label: 'Secondi ai ferri',
    piatti: [
      { nome: 'Salamella con Polenta', prezzo: '€ 8,00' },
      { nome: 'Braciola di Maiale', prezzo: '€ 9,00' },
      { nome: 'Bistecca di Manzo', prezzo: '€ 9,00' },
      { nome: 'Bistecca di Cavallo', prezzo: '€ 11,00' },
      { nome: 'Grigliata di Carne con Polenta e Patate Fritte(*)', prezzo: '€ 17,50' },
    ],
  },
  {
    id: 'contorni',
    label: 'Contorni',
    piatti: [
      { nome: 'Patate Fritte(*)', prezzo: '€ 5,00' },
      { nome: 'Insalata Verde', prezzo: '€ 4,00' },
      { nome: 'Insalata Mista', prezzo: '€ 5,00' },
      { nome: 'Spinaci(*)', desc: 'Al burro o in agro', prezzo: '€ 5,00' },
      { nome: 'Lenticchie in Umido', prezzo: '€ 6,00' },
      { nome: 'Funghi Porcini Trifolati(*)', prezzo: '€ 8,00' },
      { nome: 'Verdure al Vapore o Grigliate', prezzo: '€ 6,00' },
      { nome: 'Polenta Tradizionale', prezzo: '€ 3,00' },
    ],
  },
  {
    id: 'formaggi',
    label: 'Formaggi',
    piatti: [
      { nome: 'Taleggio o Valtellina o Gorgonzola', prezzo: '€ 5,00' },
      { nome: 'Caprino Fresco o Stagionato', prezzo: '€ 6,00' },
      { nome: 'Misto Formaggi Locali con Mostarde', prezzo: '€ 10,00' },
    ],
  },
  {
    id: 'dolci',
    label: 'I nostri dolci',
    piatti: [
      { nome: 'Dolce Chalet "Polentamisù"', desc: 'Con panna montata e cacao', prezzo: '€ 6,00' },
      { nome: 'Semifreddo', desc: 'Al Braulio oppure alle castagne con digestivo', prezzo: '€ 8,00' },
      { nome: 'Gelato', desc: 'Cioccolato, vaniglia, limone', prezzo: '€ 5,00' },
      { nome: 'Sorbetto', prezzo: '€ 3,50' },
      { nome: 'Sorbetto Corretto', prezzo: '€ 5,00' },
      { nome: 'Tiramisù', prezzo: '€ 5,00' },
      { nome: 'Panna Cotta', prezzo: '€ 5,00' },
      { nome: 'Zabaione Bellagino Caldo', prezzo: '€ 5,00' },
      { nome: 'Castagne con Panna Montata e Caramello', prezzo: '€ 7,00' },
      { nome: 'Nuvolette di Meringa con Panna e Cioccolato', prezzo: '€ 5,00' },
      { nome: 'Crème Caramel', prezzo: '€ 5,00' },
      { nome: 'Cheesecake', prezzo: '€ 6,00' },
      { nome: 'Fonduta di Cioccolato con Frutta Fresca', prezzo: '€ 8,00' },
      { nome: 'Macedonia di Frutta Fresca', prezzo: '€ 5,00' },
      { nome: 'Macedonia di Frutta Fresca con Gelato', prezzo: '€ 6,50' },
    ],
  },
  {
    id: 'torte',
    label: 'Le nostre torte',
    nota: 'Torta cioccolato e pere · Tortino di mele e cannella · Torta di noci · Crostata con marmellata',
    piatti: [
      { nome: 'Paradello Bellagino (4 fette)', prezzo: '€ 5,00' },
      { nome: 'Paradello Bellagino (8 fette)', prezzo: '€ 8,00' },
    ],
  },
  {
    id: 'bevande',
    label: 'Bevande',
    piatti: [
      { nome: '100 Vino Rosso — Dolcetto del Monferrato', desc: '¼ lt · ½ lt · 1 lt', prezziMultipli: ['€ 3,50', '€ 5,50', '€ 10,00'] },
      { nome: '101 Vino Bianco — Verduzzo', desc: '¼ lt · ½ lt · 1 lt', prezziMultipli: ['€ 3,50', '€ 5,50', '€ 10,00'] },
      { nome: '102 Acqua Minerale Naturale o Frizzante', desc: '½ lt / 1 lt', prezzo: '€ 1,50' },
      { nome: '103 Birra Bionda', desc: 'Piccola · Media', prezziMultipli: ['€ 3,50', '€ 4,00'] },
      { nome: '104 Birra Rossa', desc: 'Piccola · Media', prezziMultipli: ['€ 5,50', '€ 6,00'] },
      { nome: '105 Bibite / Succhi di Frutta', prezzo: '€ 3,00' },
      { nome: '106 Caffè', prezzo: '€ 1,50' },
      { nome: '107 Orzo / Ginseng / Decaffeinato', prezzo: '€ 2,00' },
      { nome: '108 Orzo / Ginseng in Tazza Grande', prezzo: '€ 3,00' },
      { nome: '109 Caffè Corretto', prezzo: '€ 2,50' },
      { nome: '110 Digestivi Italiani', prezzo: '€ 4,50' },
      { nome: '111 Digestivi Estero', prezzo: '€ 5,50' },
    ],
  },
  {
    id: 'supplementi',
    label: 'Supplementi',
    piatti: [
      { nome: 'Supplemento Funghi Porcini Trifolati(*)', prezzo: '€ 6,00' },
      { nome: 'Supplemento Polenta "Uncia" Bellagina', prezzo: '€ 5,00' },
      { nome: 'Supplemento "Tóc" Bellagino alla Piastra', prezzo: '€ 5,00' },
      { nome: 'Pane & Coperto', prezzo: '€ 2,50' },
    ],
  },
];

const selfCategorie = [
  {
    id: 'self-antipasti',
    label: 'Antipasti e primi',
    piatti: [
      { nome: 'Tagliere', desc: 'Salame · bresaola · pancetta · polenta fritta · formaggi', prezzo: '€ 12,00' },
      { nome: 'Bresaola & Caprino', prezzo: '€ 9,00' },
      { nome: 'Crespelle panna e pomodoro con prosciutto cotto e formaggio', prezzo: '€ 9,00' },
      { nome: 'Crespelle panna e funghi porcini trifolati con prosciutto cotto e formaggio', prezzo: '€ 10,00' },
      { nome: 'Pizzoccheri', prezzo: '€ 10,00' },
      { nome: 'Polenta "Uncia" Come una Volta', prezzo: '€ 10,00' },
      { nome: '"Sciatt"', prezzo: '€ 9,00' },
      { nome: 'Patate fritte', prezzo: '€ 5,00' },
    ],
  },
  {
    id: 'self-secondi',
    label: 'Secondi con polenta',
    piatti: [
      { nome: 'Formaggi misti della latteria con polenta', prezzo: '€ 9,00' },
      { nome: 'Burro e gorgonzola al forno', prezzo: '€ 10,00' },
      { nome: 'Salamella ai ferri', prezzo: '€ 8,00' },
      { nome: 'Bocconcini di brasato', prezzo: '€ 12,00' },
      { nome: 'Funghi porcini trifolati con polenta', prezzo: '€ 14,00' },
      { nome: 'Cervo in salmì con polenta', prezzo: '€ 12,50' },
      { nome: 'BIS di secondi in un piatto unico', prezzo: '€ 14,50' },
      { nome: 'MISTO: Bocconcini di brasato / Cervo in salmì / Funghi porcini trifolati', prezzo: '€ 16,50' },
      { nome: 'CHALET: Burro e zola al forno / Salamella ai ferri / Funghi porcini trifolati', prezzo: '€ 15,00' },
      { nome: 'COTOLETTA CON PATATE FRITTE (in sostituzione della polenta)', prezzo: '€ 12,00' },
    ],
  },
  {
    id: 'self-dolci',
    label: 'Dolci e bevande',
    piatti: [
      { nome: 'Macedonia', prezzo: '€ 5,00' },
      { nome: 'Torte caserecce', prezzo: '€ 5,00' },
      { nome: 'Tiramisù / Panna cotta', prezzo: '€ 5,00' },
      { nome: 'Castagne con panna montata e caramello', prezzo: '€ 6,50' },
      { nome: 'Birra', prezzo: '€ 4,00' },
      { nome: 'Bibite', prezzo: '€ 3,00' },
      { nome: 'Acqua ½ litro', prezzo: '€ 1,50' },
      { nome: 'Vino 0,250 cc', prezzo: '€ 3,50' },
      { nome: 'Caffè', prezzo: '€ 1,50' },
    ],
  },
];

const menuFissi = [
  {
    nome: 'Menu Piano Rancio',
    prezzo: '€ 33,00',
    incluso: ['Caffè espresso', 'Acqua nat/gas', 'Pane e coperto inclusi', 'Vino escluso'],
    portate: [
      { label: 'Antipasto', voci: ['Tóc e salamini nostrani di maiale, cervo e cavallo', '"Sciatt" valtellinesi'] },
      { label: 'Bis di Primi Piatti', voci: ['Crespelle al pomodoro', 'Gnocchetti con panna e speck'] },
      { label: 'Secondo a scelta con Polenta', voci: ['Stinco di maiale al forno con patate e spinaci', 'Misto: brasato, cervo in salmì & funghi porcini trifolati', 'Chalet: zola al forno con salsiccia ai ferri e funghi porcini trifolati', 'Polenta "Uncia"'] },
      { label: 'Bis di Dolci Caserecci Bellagini', voci: ['"Paradell"', 'Zabaione'] },
    ],
  },
  {
    nome: 'Menu Monte San Primo',
    prezzo: '€ 36,00',
    incluso: ['Caffè espresso', 'Acqua nat/gas', 'Pane e coperto inclusi', 'Vino escluso'],
    portate: [
      { label: 'Antipasto', voci: ['Salumi misti nostrani', 'Fonduta di Zola con quenelles di polenta fritte', 'Giardiniera'] },
      { label: 'Bis di Primi Piatti', voci: ['Crespelle panna e funghi porcini trifolati con prosciutto cotto e formaggio', 'Pizzoccheri alla valtellinese'] },
      { label: 'Secondo a scelta con Polenta', voci: ['Stinco di maiale al forno con patate fritte e spinaci al burro', 'Misto: brasato, cervo in salmì & funghi porcini trifolati', 'Chalet: zola al forno con salamella ai ferri e funghi porcini trifolati', 'Polenta "Uncia"', 'Uova al burro con crostone di polenta'] },
      { label: 'Bis di Dolci Caserecci Bellagini', voci: ['"Paradell"', 'Zabaione', 'Castagne con panna montata fresca e caramello'] },
    ],
  },
];

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
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

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

function MenuSlider({ tabs, defaultId }) {
  const [activeId, setActiveId] = useState(defaultId);
  const tab = tabs.find((t) => t.id === activeId);
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

export default function Page() {
  return (
    <main className={styles.page}>

      <section className={styles.opening}>
        <div className={`container ${styles.openingInner}`}>
          <p className={styles.eyebrow}>La nostra cucina</p>
          <h1 className={styles.openingTitle}>Menu</h1>
          <p className={styles.openingLead}>
            Cucina tipica di montagna, materie prime del territorio,
            ricette tramandate di generazione in generazione.
            I nostri piatti si possono asportare tutto l&apos;anno.
          </p>
          <p className={styles.openingNote}>
            Pane &amp; coperto € 2,50 · Prenotazioni solo telefonicamente:{' '}
            <a href="tel:031963624" className={styles.openingPhone}>031 963624</a>
          </p>
        </div>
      </section>

      <section className={styles.alaCartaSection}>
        <div className="container">
          <p className={styles.eyebrow}>Alla carta</p>
          <h2 className={styles.sectionTitle}>I nostri piatti</h2>
          <MenuSlider tabs={categorie} defaultId="fondute" />
        </div>
      </section>

      <section className={styles.fissiSection}>
        <div className="container">
          <p className={styles.eyebrow}>Per gruppi e compagnie</p>
          <h2 className={styles.sectionTitle}>Menu a prezzo fisso</h2>
          <p className={styles.sectionSub}>
            I tavoli alla vetrata vengono assegnati in ordine di prenotazione.
            Nel prezzo è escluso il vino.
          </p>
          <div className={styles.fissiGrid}>
            {menuFissi.map((menu) => (
              <div key={menu.nome} className={styles.menuCard}>
                <div className={styles.menuCardTop}>
                  <h3 className={styles.menuCardNome}>{menu.nome}</h3>
                  <p className={styles.menuCardPrezzo}>{menu.prezzo}</p>
                </div>
                <div className={styles.menuCardPortate}>
                  {menu.portate.map((portata) => (
                    <div key={portata.label} className={styles.portata}>
                      <p className={styles.portataLabel}>{portata.label}</p>
                      <div className={styles.portataVoci}>
                        {portata.voci.map((voce, i) => (
                          <p key={i} className={styles.portataVoce}>{voce}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.menuCardIncluso}>
                  {menu.incluso.map((item, i) => (
                    <span key={i} className={styles.inclusoBadge}>{item}</span>
                  ))}
                </div>
                <a href="tel:031963624" className={styles.menuCardBtn}>
                  Prenota — 031 963624
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.selfSection}>
        <div className="container">
          <p className={styles.eyebrow}>Servizio informale</p>
          <h2 className={styles.sectionTitle}>Menu Self Service</h2>
          <p className={styles.sectionSub}>Ordine libero al banco. Disponibile anche da asporto.</p>
          <MenuSlider tabs={selfCategorie} defaultId="self-antipasti" />
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div className={styles.ctaText}>
            <p className={styles.eyebrow}>Prenota il tuo tavolo</p>
            <h2 className={styles.ctaTitle}>Vieni a trovarci</h2>
            <p className={styles.ctaPara}>
              Per prenotazioni di gruppo, menu fissi e fondute contattaci direttamente per telefono.
              I tavoli con vista sul lago vengono assegnati in ordine di prenotazione.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a href="tel:031963624" className={styles.ctaBtn}>📞 031 963624</a>
            <Link href="/contatti" className={styles.ctaBtnGhost}>Contattaci →</Link>
          </div>
        </div>
      </section>

    </main>
  );
}