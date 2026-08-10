-- ============================================================
-- Migrazione: aggiunge colonne multilingua alle tabelle menu
-- Eseguire con:
--   (locale)  npx wrangler d1 execute DB --file=./src/lib/menu-migration-i18n.sql --local
--   (remote)  npx wrangler d1 execute DB --file=./src/lib/menu-migration-i18n.sql --remote
-- ============================================================

-- Sezioni: label e nota in EN, ES, DE
ALTER TABLE menu_sezioni ADD COLUMN label_en TEXT;
ALTER TABLE menu_sezioni ADD COLUMN label_es TEXT;
ALTER TABLE menu_sezioni ADD COLUMN label_de TEXT;
ALTER TABLE menu_sezioni ADD COLUMN nota_en TEXT;
ALTER TABLE menu_sezioni ADD COLUMN nota_es TEXT;
ALTER TABLE menu_sezioni ADD COLUMN nota_de TEXT;

-- Piatti: nome e descrizione in EN, ES, DE
ALTER TABLE menu_piatti ADD COLUMN nome_en TEXT;
ALTER TABLE menu_piatti ADD COLUMN nome_es TEXT;
ALTER TABLE menu_piatti ADD COLUMN nome_de TEXT;
ALTER TABLE menu_piatti ADD COLUMN desc_en TEXT;
ALTER TABLE menu_piatti ADD COLUMN desc_es TEXT;
ALTER TABLE menu_piatti ADD COLUMN desc_de TEXT;

-- Menu fissi: nome, incluso e portate in EN, ES, DE
ALTER TABLE menu_fissi ADD COLUMN nome_en TEXT;
ALTER TABLE menu_fissi ADD COLUMN nome_es TEXT;
ALTER TABLE menu_fissi ADD COLUMN nome_de TEXT;
ALTER TABLE menu_fissi ADD COLUMN incluso_en TEXT;
ALTER TABLE menu_fissi ADD COLUMN incluso_es TEXT;
ALTER TABLE menu_fissi ADD COLUMN incluso_de TEXT;
ALTER TABLE menu_fissi ADD COLUMN portate_en TEXT;
ALTER TABLE menu_fissi ADD COLUMN portate_es TEXT;
ALTER TABLE menu_fissi ADD COLUMN portate_de TEXT;
