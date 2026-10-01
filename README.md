# Polentoteca Chalet Gabriele

Sito Next.js App Router, quattro lingue (IT/EN/ES/DE), menu su Cloudflare D1 e pubblicazione su Cloudflare Workers tramite OpenNext.

## Avvio e verifiche

Richiede Node.js 22.17 o successivo. Per build e preview Cloudflare è consigliato Linux/WSL; la CI usa Ubuntu. In PowerShell usare `npm.cmd` se l'esecuzione di `npm.ps1` è disabilitata.

```sh
npm ci
npm run db:migrate
npm run db:seed       # solo database vuoto: non sovrascrive dati esistenti
npm run dev
```

```sh
npm run check         # lint senza warning, test e build Next.js
npm run build:worker  # bundle effettivo Cloudflare
npm run db:check
node scripts/smoke-worker.mjs  # preview locale temporanea, 32 pagine e 4 API
npm audit
```

`npm run preview` compila e avvia il Worker. `next start` non sostituisce la preview per verificare D1, Images e Cache API. La build Next.js non avvia il proxy Cloudflare: l'inizializzazione avviene soltanto con `next dev`.

## Struttura

- `src/app/[lang]`: pagine, layout, errori e lingue validate.
- `src/app/api/menu`: endpoint di sola lettura.
- `src/components`: componenti, mappa su richiesta, documenti legali.
- `src/i18n`: lingue supportate e dizionari.
- `src/lib/db-menu.js`: query e validazione dati; `menu.js`: cache Workers condivisa fra pagina e API, TTL 60 secondi per lingua e località Cloudflare. Dopo una modifica al menu, attendere fino a 60 secondi. Le risposte di errore non sono salvate.
- `src/config/site.json`: dominio e informazioni aziendali/legali.
- `scripts`: verifica rilascio, migrazioni ripetibili e controlli del Worker.
- `tests`: query reali SQLite, casi di dati corrotti, migrazioni e requisiti di rilascio.

## Database e migrazioni

Il binding `DB` e l'identificativo del D1 sono in `wrangler.jsonc`. Locale e remoto sono database distinti. `db:migrate` crea le tabelle mancanti e aggiunge soltanto le colonne multilingua assenti: può essere ripetuto anche su database creati con i vecchi SQL, senza cancellare dati. Non eseguire contemporaneamente due migrazioni. I vecchi file `menu-migration-i18n.sql` rimangono come riferimento; usare lo script per evitare errori di colonne duplicate.

Prima di modificare il database remoto, esportarlo:

```sh
npx wrangler d1 export DB --remote --output=menu-backup.sql
npm run db:migrate -- --remote
npm run db:check -- --remote
```

Se il D1 remoto è nuovo e vuoto, caricare i dati iniziali con `npm run db:seed -- --remote`, quindi ripetere `db:check`. Su un database popolato il seed si interrompe. I prezzi nei seed sono dati esistenti del progetto: devono essere confermati dall'azienda. I backup esportati non devono essere pubblicati o aggiunti al repository.

## Requisiti espliciti prima della pubblicazione

Completare `src/config/site.json` con:

1. `url`: dominio definitivo HTTPS, senza percorso.
2. `business.legalName`, `address`, `privacyEmail`, `vatId`: ragione sociale, indirizzo completo, contatto privacy e partita IVA confermati dall'azienda.
3. `privacy.retention`, `legalBasis`, `internationalTransfers`: periodi/criteri reali di conservazione, basi giuridiche e trasferimenti/garanzie verificati, inclusi hosting Cloudflare, log, contatti telefonici e servizio Google facoltativo. Aggiornare i testi dei quattro dizionari secondo quanto confermato.
4. `privacy.approved` e `termsApproved`: impostare `true` solo dopo approvazione dei documenti finali da parte del titolare. Le pagine attuali sono bozze, non informative definitive.

```sh
npm run release:check
```

Finché i requisiti sono incompleti, le pagine hanno `noindex`, `robots.txt` vieta la scansione e `deploy`/`upload` si interrompono. Il controllo non sostituisce la verifica legale e non impedisce la pubblicazione tramite comandi Wrangler eseguiti direttamente.

Con dominio configurato, metadata canonical/hreflang/Open Graph e sitemap vengono generati sulle pagine effettive. News e webcam hanno corpo vuoto, `noindex`, nessun collegamento di navigazione e non compaiono nella sitemap. Restano disponibili per il futuro inserimento dei contenuti.

## Pubblicazione e gestione

```sh
npm run deploy
```

Il comando controlla configurazione, lint, test, build OpenNext e schema/dati del D1 remoto prima del deploy. Le migrazioni remote sono esplicite e non vengono eseguite dal deploy. `upload` esegue gli stessi controlli prima di caricare una versione.

Prima del lancio confermare con l'azienda menu, prezzi, allergeni, orari (nei contatti: martedì chiuso; lunedì/mercoledì/giovedì solo pranzo), descrizioni e immagini. Verificare sul dominio finale HTTPS, collegamenti telefonici, navigazione e lingua su dispositivi mobili, e caricamento della mappa su richiesta. La scelta della mappa non è memorizzata e non genera richieste Google fino al click; chiuderla non cancella eventuali dati/cookie ricevuti dal fornitore.

I font sono locali. Il sito non integra analytics, form di contatto o prenotazioni online. `sessionStorage` memorizza soltanto l'introduzione per la sessione; se non disponibile, l'animazione viene saltata.

L'osservabilità Workers è abilitata: controllare gli errori con `npx wrangler tail`, configurare conservazione/accessi e un monitor esterno del sito/API. Dopo ogni rilascio eseguire un controllo del menu sul dominio pubblico. Per rollback usare la versione precedente del Worker dalla dashboard Cloudflare; le modifiche ai dati D1 richiedono un ripristino separato dal backup. Credenziali in `.dev.vars`/variabili Cloudflare, mai nel repository.

La workflow `.github/workflows/check.yml` verifica ogni push/PR su Linux senza pubblicare o modificare il database remoto. Il vecchio script `translate.cjs` è una utility storica: per modificare i contenuti correnti aggiornare direttamente i dizionari.
