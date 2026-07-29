-- ============================================================
-- Schema menu Chalet Gabriele
-- ============================================================

-- Sezioni del menu (tabs)
CREATE TABLE IF NOT EXISTS menu_sezioni (
  id      TEXT    PRIMARY KEY,   -- es. 'fondute', 'self-antipasti'
  label   TEXT    NOT NULL,      -- nome visualizzato nella tab
  nota    TEXT,                  -- nota opzionale sotto il titolo sezione
  tipo    TEXT    NOT NULL,      -- 'alacarta' | 'self'
  ordine  INTEGER NOT NULL DEFAULT 0
);

-- Piatti / voci di ciascuna sezione
CREATE TABLE IF NOT EXISTS menu_piatti (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  sezione_id      TEXT    NOT NULL REFERENCES menu_sezioni(id) ON DELETE CASCADE,
  nome            TEXT    NOT NULL,
  desc            TEXT,          -- descrizione opzionale
  prezzo          TEXT,          -- es. '€ 9,00'
  prezzi_multipli TEXT,          -- JSON array es. '["€ 3,50","€ 5,50","€ 10,00"]'
  special         INTEGER NOT NULL DEFAULT 0,  -- 1 = piatto evidenziato
  ordine          INTEGER NOT NULL DEFAULT 0
);

-- Menu fissi (Piano Rancio, Monte San Primo, ecc.)
CREATE TABLE IF NOT EXISTS menu_fissi (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  nome     TEXT    NOT NULL,
  prezzo   TEXT    NOT NULL,
  incluso  TEXT    NOT NULL,  -- JSON array es. '["Caffè","Acqua"]'
  portate  TEXT    NOT NULL,  -- JSON array di {label, voci[]}
  ordine   INTEGER NOT NULL DEFAULT 0
);

-- Indici utili
CREATE INDEX IF NOT EXISTS idx_piatti_sezione ON menu_piatti(sezione_id, ordine);
CREATE INDEX IF NOT EXISTS idx_sezioni_tipo   ON menu_sezioni(tipo, ordine);
