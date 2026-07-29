-- ============================================================
-- Seed dati menu Chalet Gabriele
-- ============================================================

-- -----------------------------------------------
-- SEZIONI ALLA CARTA
-- -----------------------------------------------
INSERT INTO menu_sezioni (id, label, nota, tipo, ordine) VALUES
  ('fondute',         'Le fondute',          'Con prenotazione telefonica anticipata vi proponiamo i seguenti 4 piatti', 'alacarta', 1),
  ('antipasti',       'Antipasti',            NULL,  'alacarta', 2),
  ('primi',           'Primi Piatti',         NULL,  'alacarta', 3),
  ('secondi-polenta', 'Secondi con polenta',  NULL,  'alacarta', 4),
  ('secondi-ferri',   'Secondi ai ferri',     NULL,  'alacarta', 5),
  ('contorni',        'Contorni',             NULL,  'alacarta', 6),
  ('formaggi',        'Formaggi',             NULL,  'alacarta', 7),
  ('dolci',           'I nostri dolci',       NULL,  'alacarta', 8),
  ('torte',           'Le nostre torte',      'Torta cioccolato e pere · Tortino di mele e cannella · Torta di noci · Crostata con marmellata', 'alacarta', 9),
  ('bevande',         'Bevande',              NULL,  'alacarta', 10),
  ('supplementi',     'Supplementi',          NULL,  'alacarta', 11);

-- -----------------------------------------------
-- SEZIONI SELF SERVICE
-- -----------------------------------------------
INSERT INTO menu_sezioni (id, label, nota, tipo, ordine) VALUES
  ('self-antipasti', 'Antipasti e primi',  NULL, 'self', 1),
  ('self-secondi',   'Secondi con polenta', NULL, 'self', 2),
  ('self-dolci',     'Dolci e bevande',    NULL, 'self', 3);

-- -----------------------------------------------
-- PIATTI — fondute
-- -----------------------------------------------
INSERT INTO menu_piatti (sezione_id, nome, desc, prezzo, prezzi_multipli, special, ordine) VALUES
  ('fondute', 'La Chinoise',      'Sottili fettine di carne di manzo da cuocere in un gustoso brodo di carne e abbinare a deliziose salsine. Minimo 2 ospiti.', NULL, NULL, 0, 1),
  ('fondute', 'La Bourguignonne', 'Teneri dadini di carne di cavallo da friggere in olio e gustare con appetitose salsine. Minimo 2 ospiti.', NULL, NULL, 0, 2),
  ('fondute', 'Carbonade',        'Teneri dadini di carne di cavallo e salsiccia nostrana da cuocere alla brace ed abbinare a salsine e verdure grigliate. Minimo 6 ospiti — max 10 ospiti.', NULL, NULL, 0, 3),
  ('fondute', 'Il "Tóc"',         'Piatto di antica tradizione bellagina a base di farina di mais, burro e formaggio accompagnato da gallina lessata, missoltini e salamini misti.', NULL, NULL, 1, 4);

-- -----------------------------------------------
-- PIATTI — antipasti
-- -----------------------------------------------
INSERT INTO menu_piatti (sezione_id, nome, desc, prezzo, prezzi_multipli, special, ordine) VALUES
  ('antipasti', 'Bresaola, Salame, Pancetta, Sott''aceti e Cipolle in Agrodolce', NULL, '€ 8,00', NULL, 0, 1),
  ('antipasti', '"Tóc" Bellagino alla Piastra con Salami di Cervo, Cavallo e Maiale', NULL, '€ 10,00', NULL, 0, 2),
  ('antipasti', 'Carpaccio di Bresaola', NULL, '€ 8,00', NULL, 0, 3),
  ('antipasti', 'Bresaola con Caprino Stagionato o Fresco', NULL, '€ 9,00', NULL, 0, 4),
  ('antipasti', 'Lardo', NULL, '€ 7,00', NULL, 0, 5),
  ('antipasti', 'Sciatt', NULL, '€ 9,00', NULL, 0, 6),
  ('antipasti', 'Tagliere — Salame, bresaola, pancetta, miele, "quenelles" di polenta fritta, formaggi', NULL, '€ 12,00', NULL, 0, 7),
  ('antipasti', '"Tóc" Bellagino alla Piastra (4 fette)', NULL, '€ 9,00', NULL, 0, 8);

-- -----------------------------------------------
-- PIATTI — primi
-- -----------------------------------------------
INSERT INTO menu_piatti (sezione_id, nome, desc, prezzo, prezzi_multipli, special, ordine) VALUES
  ('primi', 'Gnocchetti',                                   'Pomodoro o burro e salvia', '€ 8,00', NULL, 0, 1),
  ('primi', 'Gnocchetti Panna e Speck',                     NULL, '€ 9,00', NULL, 0, 2),
  ('primi', 'Crespella Panna e Pomodoro con Prosciutto Cotto e Formaggio', NULL, '€ 9,00', NULL, 0, 3),
  ('primi', 'Crespella Panna e Funghi Porcini Trifolati(*) con Prosciutto Cotto e Formaggio', NULL, '€ 10,00', NULL, 0, 4),
  ('primi', 'Pizzoccheri',                                  NULL, '€ 9,00', NULL, 0, 5),
  ('primi', 'Busecca in Brodo',                             NULL, '€ 9,00', NULL, 0, 6),
  ('primi', 'Zuppa di Cipolla con Crostini di Pane Gratinato', NULL, '€ 9,00', NULL, 0, 7),
  ('primi', 'Tagliatelle Panna e Funghi Porcini Trifolati(*)', NULL, '€ 10,00', NULL, 0, 8),
  ('primi', 'Pasta Gluten Free', 'Al pomodoro / panna e speck / burro e zola / panna e funghi porcini trifolati(*)', '€ 9,00', NULL, 0, 9);

-- -----------------------------------------------
-- PIATTI — secondi-polenta
-- -----------------------------------------------
INSERT INTO menu_piatti (sezione_id, nome, desc, prezzo, prezzi_multipli, special, ordine) VALUES
  ('secondi-polenta', 'Polenta e Latte', NULL, '€ 6,00', NULL, 0, 1),
  ('secondi-polenta', 'Uova al Burro', NULL, '€ 6,00', NULL, 0, 2),
  ('secondi-polenta', 'Frittatina di Cipolle', NULL, '€ 6,00', NULL, 0, 3),
  ('secondi-polenta', 'Burro e Zola al Forno', NULL, '€ 7,00', NULL, 0, 4),
  ('secondi-polenta', 'Bocconcini di Brasato', NULL, '€ 9,50', NULL, 0, 5),
  ('secondi-polenta', 'Bocconcini di Cervo in Salmì(*)', NULL, '€ 9,50', NULL, 0, 6),
  ('secondi-polenta', 'Bocconcini di Brasato e Funghi Porcini Trifolati(*)', NULL, '€ 11,50', NULL, 0, 7),
  ('secondi-polenta', 'Funghi Porcini Trifolati(*)', NULL, '€ 11,00', NULL, 0, 8),
  ('secondi-polenta', 'Stinco di Maiale al Forno, Patate Fritte(*) e Spinaci al Burro(*)', NULL, '€ 12,00', NULL, 0, 9),
  ('secondi-polenta', 'Il Misto', 'Bocconcini di brasato, funghi porcini trifolati(*) e bocconcini di cervo in salmì(*)', '€ 13,00', NULL, 0, 10),
  ('secondi-polenta', 'Lo Chalet', 'Burro e zola al forno, funghi porcini trifolati(*) e salamella ai ferri', '€ 11,50', NULL, 0, 11),
  ('secondi-polenta', 'Uova al Burro con Tartufo e Polenta Abbrustolita', NULL, '€ 9,00', NULL, 0, 12),
  ('secondi-polenta', 'Polenta "Uncia" Bellagina', NULL, '€ 7,00', NULL, 0, 13);

-- -----------------------------------------------
-- PIATTI — secondi-ferri
-- -----------------------------------------------
INSERT INTO menu_piatti (sezione_id, nome, desc, prezzo, prezzi_multipli, special, ordine) VALUES
  ('secondi-ferri', 'Salamella con Polenta',                          NULL, '€ 8,00', NULL, 0, 1),
  ('secondi-ferri', 'Braciola di Maiale',                             NULL, '€ 9,00', NULL, 0, 2),
  ('secondi-ferri', 'Bistecca di Manzo',                              NULL, '€ 9,00', NULL, 0, 3),
  ('secondi-ferri', 'Bistecca di Cavallo',                            NULL, '€ 11,00', NULL, 0, 4),
  ('secondi-ferri', 'Grigliata di Carne con Polenta e Patate Fritte(*)', NULL, '€ 17,50', NULL, 0, 5);

-- -----------------------------------------------
-- PIATTI — contorni
-- -----------------------------------------------
INSERT INTO menu_piatti (sezione_id, nome, desc, prezzo, prezzi_multipli, special, ordine) VALUES
  ('contorni', 'Patate Fritte(*)', NULL, '€ 5,00', NULL, 0, 1),
  ('contorni', 'Insalata Verde',   NULL, '€ 4,00', NULL, 0, 2),
  ('contorni', 'Insalata Mista',   NULL, '€ 5,00', NULL, 0, 3),
  ('contorni', 'Spinaci(*)', 'Al burro o in agro', '€ 5,00', NULL, 0, 4),
  ('contorni', 'Lenticchie in Umido', NULL, '€ 6,00', NULL, 0, 5),
  ('contorni', 'Funghi Porcini Trifolati(*)', NULL, '€ 8,00', NULL, 0, 6),
  ('contorni', 'Verdure al Vapore o Grigliate', NULL, '€ 6,00', NULL, 0, 7),
  ('contorni', 'Polenta Tradizionale', NULL, '€ 3,00', NULL, 0, 8);

-- -----------------------------------------------
-- PIATTI — formaggi
-- -----------------------------------------------
INSERT INTO menu_piatti (sezione_id, nome, desc, prezzo, prezzi_multipli, special, ordine) VALUES
  ('formaggi', 'Taleggio o Valtellina o Gorgonzola', NULL, '€ 5,00', NULL, 0, 1),
  ('formaggi', 'Caprino Fresco o Stagionato',        NULL, '€ 6,00', NULL, 0, 2),
  ('formaggi', 'Misto Formaggi Locali con Mostarde', NULL, '€ 10,00', NULL, 0, 3);

-- -----------------------------------------------
-- PIATTI — dolci
-- -----------------------------------------------
INSERT INTO menu_piatti (sezione_id, nome, desc, prezzo, prezzi_multipli, special, ordine) VALUES
  ('dolci', 'Dolce Chalet "Polentamisù"',               'Con panna montata e cacao', '€ 6,00', NULL, 0, 1),
  ('dolci', 'Semifreddo',                                'Al Braulio oppure alle castagne con digestivo', '€ 8,00', NULL, 0, 2),
  ('dolci', 'Gelato',                                    'Cioccolato, vaniglia, limone', '€ 5,00', NULL, 0, 3),
  ('dolci', 'Sorbetto',                                  NULL, '€ 3,50', NULL, 0, 4),
  ('dolci', 'Sorbetto Corretto',                         NULL, '€ 5,00', NULL, 0, 5),
  ('dolci', 'Tiramisù',                                  NULL, '€ 5,00', NULL, 0, 6),
  ('dolci', 'Panna Cotta',                               NULL, '€ 5,00', NULL, 0, 7),
  ('dolci', 'Zabaione Bellagino Caldo',                  NULL, '€ 5,00', NULL, 0, 8),
  ('dolci', 'Castagne con Panna Montata e Caramello',    NULL, '€ 7,00', NULL, 0, 9),
  ('dolci', 'Nuvolette di Meringa con Panna e Cioccolato', NULL, '€ 5,00', NULL, 0, 10),
  ('dolci', 'Crème Caramel',                             NULL, '€ 5,00', NULL, 0, 11),
  ('dolci', 'Cheesecake',                                NULL, '€ 6,00', NULL, 0, 12),
  ('dolci', 'Fonduta di Cioccolato con Frutta Fresca',   NULL, '€ 8,00', NULL, 0, 13),
  ('dolci', 'Macedonia di Frutta Fresca',                NULL, '€ 5,00', NULL, 0, 14),
  ('dolci', 'Macedonia di Frutta Fresca con Gelato',     NULL, '€ 6,50', NULL, 0, 15);

-- -----------------------------------------------
-- PIATTI — torte
-- -----------------------------------------------
INSERT INTO menu_piatti (sezione_id, nome, desc, prezzo, prezzi_multipli, special, ordine) VALUES
  ('torte', 'Paradello Bellagino (4 fette)', NULL, '€ 5,00', NULL, 0, 1),
  ('torte', 'Paradello Bellagino (8 fette)', NULL, '€ 8,00', NULL, 0, 2);

-- -----------------------------------------------
-- PIATTI — bevande
-- -----------------------------------------------
INSERT INTO menu_piatti (sezione_id, nome, desc, prezzo, prezzi_multipli, special, ordine) VALUES
  ('bevande', '100 Vino Rosso — Dolcetto del Monferrato', '¼ lt · ½ lt · 1 lt', NULL, '["€ 3,50","€ 5,50","€ 10,00"]', 0, 1),
  ('bevande', '101 Vino Bianco — Verduzzo',               '¼ lt · ½ lt · 1 lt', NULL, '["€ 3,50","€ 5,50","€ 10,00"]', 0, 2),
  ('bevande', '102 Acqua Minerale Naturale o Frizzante',  '½ lt / 1 lt', '€ 1,50', NULL, 0, 3),
  ('bevande', '103 Birra Bionda',                         'Piccola · Media', NULL, '["€ 3,50","€ 4,00"]', 0, 4),
  ('bevande', '104 Birra Rossa',                          'Piccola · Media', NULL, '["€ 5,50","€ 6,00"]', 0, 5),
  ('bevande', '105 Bibite / Succhi di Frutta',            NULL, '€ 3,00', NULL, 0, 6),
  ('bevande', '106 Caffè',                                NULL, '€ 1,50', NULL, 0, 7),
  ('bevande', '107 Orzo / Ginseng / Decaffeinato',        NULL, '€ 2,00', NULL, 0, 8),
  ('bevande', '108 Orzo / Ginseng in Tazza Grande',       NULL, '€ 3,00', NULL, 0, 9),
  ('bevande', '109 Caffè Corretto',                       NULL, '€ 2,50', NULL, 0, 10),
  ('bevande', '110 Digestivi Italiani',                   NULL, '€ 4,50', NULL, 0, 11),
  ('bevande', '111 Digestivi Estero',                     NULL, '€ 5,50', NULL, 0, 12);

-- -----------------------------------------------
-- PIATTI — supplementi
-- -----------------------------------------------
INSERT INTO menu_piatti (sezione_id, nome, desc, prezzo, prezzi_multipli, special, ordine) VALUES
  ('supplementi', 'Supplemento Funghi Porcini Trifolati(*)', NULL, '€ 6,00', NULL, 0, 1),
  ('supplementi', 'Supplemento Polenta "Uncia" Bellagina',   NULL, '€ 5,00', NULL, 0, 2),
  ('supplementi', 'Supplemento "Tóc" Bellagino alla Piastra', NULL, '€ 5,00', NULL, 0, 3),
  ('supplementi', 'Pane & Coperto',                          NULL, '€ 2,50', NULL, 0, 4);

-- -----------------------------------------------
-- PIATTI SELF — self-antipasti
-- -----------------------------------------------
INSERT INTO menu_piatti (sezione_id, nome, desc, prezzo, prezzi_multipli, special, ordine) VALUES
  ('self-antipasti', 'Tagliere', 'Salame · bresaola · pancetta · polenta fritta · formaggi', '€ 12,00', NULL, 0, 1),
  ('self-antipasti', 'Bresaola & Caprino', NULL, '€ 9,00', NULL, 0, 2),
  ('self-antipasti', 'Crespelle panna e pomodoro con prosciutto cotto e formaggio', NULL, '€ 9,00', NULL, 0, 3),
  ('self-antipasti', 'Crespelle panna e funghi porcini trifolati con prosciutto cotto e formaggio', NULL, '€ 10,00', NULL, 0, 4),
  ('self-antipasti', 'Pizzoccheri', NULL, '€ 10,00', NULL, 0, 5),
  ('self-antipasti', 'Polenta "Uncia" Come una Volta', NULL, '€ 10,00', NULL, 0, 6),
  ('self-antipasti', '"Sciatt"', NULL, '€ 9,00', NULL, 0, 7),
  ('self-antipasti', 'Patate fritte', NULL, '€ 5,00', NULL, 0, 8);

-- -----------------------------------------------
-- PIATTI SELF — self-secondi
-- -----------------------------------------------
INSERT INTO menu_piatti (sezione_id, nome, desc, prezzo, prezzi_multipli, special, ordine) VALUES
  ('self-secondi', 'Formaggi misti della latteria con polenta', NULL, '€ 9,00', NULL, 0, 1),
  ('self-secondi', 'Burro e gorgonzola al forno', NULL, '€ 10,00', NULL, 0, 2),
  ('self-secondi', 'Salamella ai ferri', NULL, '€ 8,00', NULL, 0, 3),
  ('self-secondi', 'Bocconcini di brasato', NULL, '€ 12,00', NULL, 0, 4),
  ('self-secondi', 'Funghi porcini trifolati con polenta', NULL, '€ 14,00', NULL, 0, 5),
  ('self-secondi', 'Cervo in salmì con polenta', NULL, '€ 12,50', NULL, 0, 6),
  ('self-secondi', 'BIS di secondi in un piatto unico', NULL, '€ 14,50', NULL, 0, 7),
  ('self-secondi', 'MISTO: Bocconcini di brasato / Cervo in salmì / Funghi porcini trifolati', NULL, '€ 16,50', NULL, 0, 8),
  ('self-secondi', 'CHALET: Burro e zola al forno / Salamella ai ferri / Funghi porcini trifolati', NULL, '€ 15,00', NULL, 0, 9),
  ('self-secondi', 'COTOLETTA CON PATATE FRITTE (in sostituzione della polenta)', NULL, '€ 12,00', NULL, 0, 10);

-- -----------------------------------------------
-- PIATTI SELF — self-dolci
-- -----------------------------------------------
INSERT INTO menu_piatti (sezione_id, nome, desc, prezzo, prezzi_multipli, special, ordine) VALUES
  ('self-dolci', 'Macedonia', NULL, '€ 5,00', NULL, 0, 1),
  ('self-dolci', 'Torte caserecce', NULL, '€ 5,00', NULL, 0, 2),
  ('self-dolci', 'Tiramisù / Panna cotta', NULL, '€ 5,00', NULL, 0, 3),
  ('self-dolci', 'Castagne con panna montata e caramello', NULL, '€ 6,50', NULL, 0, 4),
  ('self-dolci', 'Birra', NULL, '€ 4,00', NULL, 0, 5),
  ('self-dolci', 'Bibite', NULL, '€ 3,00', NULL, 0, 6),
  ('self-dolci', 'Acqua ½ litro', NULL, '€ 1,50', NULL, 0, 7),
  ('self-dolci', 'Vino 0,250 cc', NULL, '€ 3,50', NULL, 0, 8),
  ('self-dolci', 'Caffè', NULL, '€ 1,50', NULL, 0, 9);

-- -----------------------------------------------
-- MENU FISSI
-- -----------------------------------------------
INSERT INTO menu_fissi (nome, prezzo, incluso, portate, ordine) VALUES
  (
    'Menu Piano Rancio',
    '€ 33,00',
    '["Caffè espresso","Acqua nat/gas","Pane e coperto inclusi","Vino escluso"]',
    '[{"label":"Antipasto","voci":["Tóc e salamini nostrani di maiale, cervo e cavallo","\"Sciatt\" valtellinesi"]},{"label":"Bis di Primi Piatti","voci":["Crespelle al pomodoro","Gnocchetti con panna e speck"]},{"label":"Secondo a scelta con Polenta","voci":["Stinco di maiale al forno con patate e spinaci","Misto: brasato, cervo in salmì & funghi porcini trifolati","Chalet: zola al forno con salsiccia ai ferri e funghi porcini trifolati","Polenta \"Uncia\""]},{"label":"Bis di Dolci Caserecci Bellagini","voci":["\"Paradell\"","Zabaione"]}]',
    1
  ),
  (
    'Menu Monte San Primo',
    '€ 36,00',
    '["Caffè espresso","Acqua nat/gas","Pane e coperto inclusi","Vino escluso"]',
    '[{"label":"Antipasto","voci":["Salumi misti nostrani","Fonduta di Zola con quenelles di polenta fritte","Giardiniera"]},{"label":"Bis di Primi Piatti","voci":["Crespelle panna e funghi porcini trifolati con prosciutto cotto e formaggio","Pizzoccheri alla valtellinese"]},{"label":"Secondo a scelta con Polenta","voci":["Stinco di maiale al forno con patate fritte e spinaci al burro","Misto: brasato, cervo in salmì & funghi porcini trifolati","Chalet: zola al forno con salamella ai ferri e funghi porcini trifolati","Polenta \"Uncia\"","Uova al burro con crostone di polenta"]},{"label":"Bis di Dolci Caserecci Bellagini","voci":["\"Paradell\"","Zabaione","Castagne con panna montata fresca e caramello"]}]',
    2
  );
