-- ============================================================
-- Seed traduzioni EN / ES / DE per menu_sezioni, menu_piatti, menu_fissi
-- Eseguire DOPO menu-migration-i18n.sql
-- Eseguire con:
--   (locale)  npx wrangler d1 execute DB --file=./src/lib/menu-seed-i18n.sql --local
--   (remote)  npx wrangler d1 execute DB --file=./src/lib/menu-seed-i18n.sql --remote
-- ============================================================

-- -----------------------------------------------
-- SEZIONI ALLA CARTA
-- -----------------------------------------------
UPDATE menu_sezioni SET
  label_en = 'The Fondues',
  label_es = 'Las Fondues',
  label_de = 'Die Fondues',
  nota_en  = 'With advance telephone booking we offer the following 4 dishes',
  nota_es  = 'Con reserva telefónica previa le ofrecemos los siguientes 4 platos',
  nota_de  = 'Mit telefonischer Voranmeldung bieten wir Ihnen die folgenden 4 Gerichte an'
WHERE id = 'fondute';

UPDATE menu_sezioni SET
  label_en = 'Starters',
  label_es = 'Entrantes',
  label_de = 'Vorspeisen'
WHERE id = 'antipasti';

UPDATE menu_sezioni SET
  label_en = 'First Courses',
  label_es = 'Primeros Platos',
  label_de = 'Erste Gänge'
WHERE id = 'primi';

UPDATE menu_sezioni SET
  label_en = 'Mains with Polenta',
  label_es = 'Segundos con Polenta',
  label_de = 'Hauptgerichte mit Polenta'
WHERE id = 'secondi-polenta';

UPDATE menu_sezioni SET
  label_en = 'Grilled Mains',
  label_es = 'Segundos a la Parrilla',
  label_de = 'Gegrillte Hauptgerichte'
WHERE id = 'secondi-ferri';

UPDATE menu_sezioni SET
  label_en = 'Side Dishes',
  label_es = 'Guarniciones',
  label_de = 'Beilagen'
WHERE id = 'contorni';

UPDATE menu_sezioni SET
  label_en = 'Cheeses',
  label_es = 'Quesos',
  label_de = 'Käse'
WHERE id = 'formaggi';

UPDATE menu_sezioni SET
  label_en = 'Our Desserts',
  label_es = 'Nuestros Postres',
  label_de = 'Unsere Desserts'
WHERE id = 'dolci';

UPDATE menu_sezioni SET
  label_en = 'Our Cakes',
  label_es = 'Nuestras Tartas',
  label_de = 'Unsere Kuchen',
  nota_en  = 'Chocolate and pear cake · Apple and cinnamon tart · Walnut cake · Jam tart',
  nota_es  = 'Tarta de chocolate y pera · Tartaleta de manzana y canela · Tarta de nueces · Crostata con mermelada',
  nota_de  = 'Schokoladen-Birnen-Kuchen · Apfel-Zimt-Törtchen · Walnusskuchen · Marmeladentarte'
WHERE id = 'torte';

UPDATE menu_sezioni SET
  label_en = 'Drinks',
  label_es = 'Bebidas',
  label_de = 'Getränke'
WHERE id = 'bevande';

UPDATE menu_sezioni SET
  label_en = 'Supplements',
  label_es = 'Suplementos',
  label_de = 'Zusätze'
WHERE id = 'supplementi';

-- -----------------------------------------------
-- SEZIONI SELF SERVICE
-- -----------------------------------------------
UPDATE menu_sezioni SET
  label_en = 'Starters and First Courses',
  label_es = 'Entrantes y Primeros',
  label_de = 'Vorspeisen und Erste Gänge'
WHERE id = 'self-antipasti';

UPDATE menu_sezioni SET
  label_en = 'Mains with Polenta',
  label_es = 'Segundos con Polenta',
  label_de = 'Hauptgerichte mit Polenta'
WHERE id = 'self-secondi';

UPDATE menu_sezioni SET
  label_en = 'Desserts and Drinks',
  label_es = 'Postres y Bebidas',
  label_de = 'Desserts und Getränke'
WHERE id = 'self-dolci';

-- -----------------------------------------------
-- PIATTI — fondute
-- -----------------------------------------------
UPDATE menu_piatti SET
  nome_en = 'La Chinoise',
  nome_es = 'La Chinoise',
  nome_de = 'La Chinoise',
  desc_en = 'Thin slices of beef cooked in a flavorful meat broth and served with delicious dipping sauces. Minimum 2 guests.',
  desc_es = 'Finas lonchas de ternera para cocer en un sabroso caldo de carne y acompañar con deliciosas salsas. Mínimo 2 personas.',
  desc_de = 'Dünne Rindfleischscheiben, in einer würzigen Fleischbrühe gegart und mit köstlichen Soßen serviert. Mindestens 2 Gäste.'
WHERE sezione_id = 'fondute' AND nome = 'La Chinoise';

UPDATE menu_piatti SET
  nome_en = 'La Bourguignonne',
  nome_es = 'La Bourguignonne',
  nome_de = 'La Bourguignonne',
  desc_en = 'Tender cubes of horse meat deep-fried in oil and enjoyed with tasty sauces. Minimum 2 guests.',
  desc_es = 'Tiernos daditos de carne de caballo fritos en aceite y para disfrutar con apetitosas salsas. Mínimo 2 personas.',
  desc_de = 'Zarte Pferdewürfel in Öl frittiert und mit leckeren Soßen serviert. Mindestens 2 Gäste.'
WHERE sezione_id = 'fondute' AND nome = 'La Bourguignonne';

UPDATE menu_piatti SET
  nome_en = 'Carbonade',
  nome_es = 'Carbonade',
  nome_de = 'Carbonade',
  desc_en = 'Tender cubes of horse meat and local sausage grilled over charcoal and served with dipping sauces and grilled vegetables. Minimum 6 guests — max 10 guests.',
  desc_es = 'Tiernos daditos de carne de caballo y salchicha local para cocinar a la brasa y acompañar con salsas y verduras a la parrilla. Mínimo 6 personas — máx. 10 personas.',
  desc_de = 'Zarte Pferde- und Hauswurstwürfel auf dem Grill gegart und mit Soßen und gegrilltem Gemüse serviert. Mindestens 6 Gäste — max. 10 Gäste.'
WHERE sezione_id = 'fondute' AND nome = 'Carbonade';

UPDATE menu_piatti SET
  nome_en = 'Il "Tóc"',
  nome_es = 'Il "Tóc"',
  nome_de = 'Il "Tóc"',
  desc_en = 'A dish of ancient Bellagio tradition made with cornmeal, butter and cheese, served with boiled hen, missoltini and mixed salami.',
  desc_es = 'Plato de antigua tradición bellagina a base de harina de maíz, mantequilla y queso acompañado de gallina hervida, missoltini y salamis variados.',
  desc_de = 'Ein Gericht aus alter Bellagioer Tradition aus Maismehl, Butter und Käse, serviert mit gekochtem Huhn, Missoltini und gemischten Salamis.'
WHERE sezione_id = 'fondute' AND nome LIKE '%Tóc%';

-- -----------------------------------------------
-- PIATTI — antipasti
-- -----------------------------------------------
UPDATE menu_piatti SET
  nome_en = 'Bresaola, Salami, Pancetta, Pickles and Sweet & Sour Onions',
  nome_es = 'Bresaola, Salami, Panceta, Encurtidos y Cebollas en Agridulce',
  nome_de = 'Bresaola, Salami, Speck, Sauergemüse und Süß-Saure Zwiebeln'
WHERE sezione_id = 'antipasti' AND nome LIKE 'Bresaola, Salame, Pancetta%';

UPDATE menu_piatti SET
  nome_en = '"Tóc" Bellagino on the Griddle with Venison, Horse and Pork Salami',
  nome_es = '"Tóc" Bellagino a la Plancha con Salamis de Venado, Caballo y Cerdo',
  nome_de = '"Tóc" Bellagino auf dem Grill mit Hirsch-, Pferde- und Schweinewurstwaren'
WHERE sezione_id = 'antipasti' AND nome LIKE '%Tóc%Bellagino%Salami%';

UPDATE menu_piatti SET
  nome_en = 'Bresaola Carpaccio',
  nome_es = 'Carpaccio de Bresaola',
  nome_de = 'Bresaola Carpaccio'
WHERE sezione_id = 'antipasti' AND nome = 'Carpaccio di Bresaola';

UPDATE menu_piatti SET
  nome_en = 'Bresaola with Aged or Fresh Goat Cheese',
  nome_es = 'Bresaola con Queso de Cabra Curado o Fresco',
  nome_de = 'Bresaola mit gereiftem oder frischem Ziegenkäse'
WHERE sezione_id = 'antipasti' AND nome = 'Bresaola con Caprino Stagionato o Fresco';

UPDATE menu_piatti SET
  nome_en = 'Lard',
  nome_es = 'Lardo',
  nome_de = 'Speck'
WHERE sezione_id = 'antipasti' AND nome = 'Lardo';

UPDATE menu_piatti SET
  nome_en = 'Sciatt',
  nome_es = 'Sciatt',
  nome_de = 'Sciatt'
WHERE sezione_id = 'antipasti' AND nome = 'Sciatt';

UPDATE menu_piatti SET
  nome_en = 'Charcuterie Board — Salami, bresaola, pancetta, honey, fried polenta "quenelles", cheeses',
  nome_es = 'Tabla — Salami, bresaola, panceta, miel, "quenelles" de polenta frita, quesos',
  nome_de = 'Schneidebrett — Salami, Bresaola, Speck, Honig, frittierte Polenta-Quenelles, Käse'
WHERE sezione_id = 'antipasti' AND nome LIKE 'Tagliere%';

UPDATE menu_piatti SET
  nome_en = '"Tóc" Bellagino on the Griddle (4 slices)',
  nome_es = '"Tóc" Bellagino a la Plancha (4 rebanadas)',
  nome_de = '"Tóc" Bellagino auf dem Grill (4 Scheiben)'
WHERE sezione_id = 'antipasti' AND nome LIKE '%Tóc%Bellagino%fette%';

-- -----------------------------------------------
-- PIATTI — primi
-- -----------------------------------------------
UPDATE menu_piatti SET
  nome_en = 'Gnocchetti',
  nome_es = 'Gnocchetti',
  nome_de = 'Gnocchetti',
  desc_en = 'Tomato or butter and sage',
  desc_es = 'Tomate o mantequilla y salvia',
  desc_de = 'Tomaten- oder Butter-Salbei-Soße'
WHERE sezione_id = 'primi' AND nome = 'Gnocchetti';

UPDATE menu_piatti SET
  nome_en = 'Gnocchetti with Cream and Speck',
  nome_es = 'Gnocchetti con Nata y Speck',
  nome_de = 'Gnocchetti mit Sahne und Speck'
WHERE sezione_id = 'primi' AND nome = 'Gnocchetti Panna e Speck';

UPDATE menu_piatti SET
  nome_en = 'Crêpe with Cream and Tomato with Cooked Ham and Cheese',
  nome_es = 'Crêpe con Nata y Tomate con Jamón Cocido y Queso',
  nome_de = 'Crêpe mit Sahne und Tomate mit gekochtem Schinken und Käse'
WHERE sezione_id = 'primi' AND nome LIKE 'Crespella Panna e Pomodoro%';

UPDATE menu_piatti SET
  nome_en = 'Crêpe with Cream and Sautéed Porcini Mushrooms(*) with Cooked Ham and Cheese',
  nome_es = 'Crêpe con Nata y Boletus Salteados(*) con Jamón Cocido y Queso',
  nome_de = 'Crêpe mit Sahne und gebratenen Steinpilzen(*) mit gekochtem Schinken und Käse'
WHERE sezione_id = 'primi' AND nome LIKE 'Crespella Panna e Funghi%';

UPDATE menu_piatti SET
  nome_en = 'Pizzoccheri',
  nome_es = 'Pizzoccheri',
  nome_de = 'Pizzoccheri'
WHERE sezione_id = 'primi' AND nome = 'Pizzoccheri';

UPDATE menu_piatti SET
  nome_en = 'Tripe Soup',
  nome_es = 'Sopa de Callos',
  nome_de = 'Kuttelsuppe'
WHERE sezione_id = 'primi' AND nome = 'Busecca in Brodo';

UPDATE menu_piatti SET
  nome_en = 'Onion Soup with Toasted Croutons',
  nome_es = 'Sopa de Cebolla con Crutones Gratinados',
  nome_de = 'Zwiebelsuppe mit gerösteten Croutons'
WHERE sezione_id = 'primi' AND nome LIKE 'Zuppa di Cipolla%';

UPDATE menu_piatti SET
  nome_en = 'Tagliatelle with Cream and Sautéed Porcini Mushrooms(*)',
  nome_es = 'Tagliatelle con Nata y Boletus Salteados(*)',
  nome_de = 'Tagliatelle mit Sahne und gebratenen Steinpilzen(*)'
WHERE sezione_id = 'primi' AND nome LIKE 'Tagliatelle%';

UPDATE menu_piatti SET
  nome_en = 'Gluten-Free Pasta',
  nome_es = 'Pasta Sin Gluten',
  nome_de = 'Glutenfreie Pasta',
  desc_en = 'With tomato / cream and speck / butter and gorgonzola / cream and sautéed porcini mushrooms(*)',
  desc_es = 'Con tomate / nata y speck / mantequilla y gorgonzola / nata y boletus salteados(*)',
  desc_de = 'Mit Tomaten / Sahne und Speck / Butter und Gorgonzola / Sahne und gebratenen Steinpilzen(*)'
WHERE sezione_id = 'primi' AND nome = 'Pasta Gluten Free';

-- -----------------------------------------------
-- PIATTI — secondi-polenta
-- -----------------------------------------------
UPDATE menu_piatti SET
  nome_en = 'Polenta and Milk',
  nome_es = 'Polenta con Leche',
  nome_de = 'Polenta mit Milch'
WHERE sezione_id = 'secondi-polenta' AND nome = 'Polenta e Latte';

UPDATE menu_piatti SET
  nome_en = 'Eggs in Butter',
  nome_es = 'Huevos con Mantequilla',
  nome_de = 'Eier in Butter'
WHERE sezione_id = 'secondi-polenta' AND nome = 'Uova al Burro';

UPDATE menu_piatti SET
  nome_en = 'Onion Omelette',
  nome_es = 'Tortilla de Cebolla',
  nome_de = 'Zwiebelomelett'
WHERE sezione_id = 'secondi-polenta' AND nome = 'Frittatina di Cipolle';

UPDATE menu_piatti SET
  nome_en = 'Baked Butter and Gorgonzola',
  nome_es = 'Mantequilla y Gorgonzola al Horno',
  nome_de = 'Gebackene Butter mit Gorgonzola'
WHERE sezione_id = 'secondi-polenta' AND nome = 'Burro e Zola al Forno';

UPDATE menu_piatti SET
  nome_en = 'Braised Beef Morsels',
  nome_es = 'Bocaditos de Estofado de Ternera',
  nome_de = 'Schmorfleisch-Häppchen'
WHERE sezione_id = 'secondi-polenta' AND nome = 'Bocconcini di Brasato';

UPDATE menu_piatti SET
  nome_en = 'Venison in Wine Sauce(*)',
  nome_es = 'Bocaditos de Venado en Salsa(*)',
  nome_de = 'Hirschragout in Weinsauce(*)'
WHERE sezione_id = 'secondi-polenta' AND nome = 'Bocconcini di Cervo in Salmì(*)';

UPDATE menu_piatti SET
  nome_en = 'Braised Beef Morsels with Sautéed Porcini Mushrooms(*)',
  nome_es = 'Bocaditos de Estofado con Boletus Salteados(*)',
  nome_de = 'Schmorbraten-Häppchen mit gebratenen Steinpilzen(*)'
WHERE sezione_id = 'secondi-polenta' AND nome = 'Bocconcini di Brasato e Funghi Porcini Trifolati(*)';

UPDATE menu_piatti SET
  nome_en = 'Sautéed Porcini Mushrooms(*)',
  nome_es = 'Boletus Salteados(*)',
  nome_de = 'Gebratene Steinpilze(*)'
WHERE sezione_id = 'secondi-polenta' AND nome = 'Funghi Porcini Trifolati(*)';

UPDATE menu_piatti SET
  nome_en = 'Baked Pork Shank, Fried Potatoes(*) and Buttered Spinach(*)',
  nome_es = 'Codillo de Cerdo al Horno, Patatas Fritas(*) y Espinacas con Mantequilla(*)',
  nome_de = 'Gebackene Schweinehaxe, Pommes(*) und Butterspinat(*)'
WHERE sezione_id = 'secondi-polenta' AND nome LIKE 'Stinco di Maiale%';

UPDATE menu_piatti SET
  nome_en = 'The Mixed Plate',
  nome_es = 'El Combinado',
  nome_de = 'Der Gemischte Teller',
  desc_en = 'Braised beef morsels, sautéed porcini mushrooms(*) and venison in wine sauce(*)',
  desc_es = 'Bocaditos de estofado, boletus salteados(*) y venado en salsa(*)',
  desc_de = 'Schmorbraten-Häppchen, gebratene Steinpilze(*) und Hirschragout(*)'
WHERE sezione_id = 'secondi-polenta' AND nome = 'Il Misto';

UPDATE menu_piatti SET
  nome_en = 'Lo Chalet',
  nome_es = 'Lo Chalet',
  nome_de = 'Lo Chalet',
  desc_en = 'Baked butter and gorgonzola, sautéed porcini mushrooms(*) and grilled sausage',
  desc_es = 'Mantequilla y gorgonzola al horno, boletus salteados(*) y salchicha a la parrilla',
  desc_de = 'Gebackene Butter mit Gorgonzola, gebratene Steinpilze(*) und gegrillte Salsiccia'
WHERE sezione_id = 'secondi-polenta' AND nome = 'Lo Chalet';

UPDATE menu_piatti SET
  nome_en = 'Eggs in Butter with Truffle and Toasted Polenta',
  nome_es = 'Huevos con Mantequilla, Trufa y Polenta Tostada',
  nome_de = 'Eier in Butter mit Trüffel und gerösteter Polenta'
WHERE sezione_id = 'secondi-polenta' AND nome LIKE 'Uova al Burro con Tartufo%';

UPDATE menu_piatti SET
  nome_en = 'Bellagio-Style "Uncia" Polenta',
  nome_es = 'Polenta "Uncia" al Estilo de Bellagio',
  nome_de = 'Bellagioer "Uncia" Polenta'
WHERE sezione_id = 'secondi-polenta' AND nome LIKE 'Polenta "Uncia"%';

-- -----------------------------------------------
-- PIATTI — secondi-ferri
-- -----------------------------------------------
UPDATE menu_piatti SET
  nome_en = 'Grilled Sausage with Polenta',
  nome_es = 'Salchicha a la Parrilla con Polenta',
  nome_de = 'Gegrillte Salsiccia mit Polenta'
WHERE sezione_id = 'secondi-ferri' AND nome = 'Salamella con Polenta';

UPDATE menu_piatti SET
  nome_en = 'Pork Chop',
  nome_es = 'Chuleta de Cerdo',
  nome_de = 'Schweinekotelett'
WHERE sezione_id = 'secondi-ferri' AND nome = 'Braciola di Maiale';

UPDATE menu_piatti SET
  nome_en = 'Beef Steak',
  nome_es = 'Filete de Ternera',
  nome_de = 'Rindersteak'
WHERE sezione_id = 'secondi-ferri' AND nome = 'Bistecca di Manzo';

UPDATE menu_piatti SET
  nome_en = 'Horse Steak',
  nome_es = 'Filete de Caballo',
  nome_de = 'Pferdesteak'
WHERE sezione_id = 'secondi-ferri' AND nome = 'Bistecca di Cavallo';

UPDATE menu_piatti SET
  nome_en = 'Mixed Meat Grill with Polenta and Fried Potatoes(*)',
  nome_es = 'Parrillada Mixta de Carnes con Polenta y Patatas Fritas(*)',
  nome_de = 'Gemischter Fleischgrill mit Polenta und Pommes(*)'
WHERE sezione_id = 'secondi-ferri' AND nome LIKE 'Grigliata di Carne%';

-- -----------------------------------------------
-- PIATTI — contorni
-- -----------------------------------------------
UPDATE menu_piatti SET
  nome_en = 'Fried Potatoes(*)',
  nome_es = 'Patatas Fritas(*)',
  nome_de = 'Pommes Frites(*)'
WHERE sezione_id = 'contorni' AND nome = 'Patate Fritte(*)';

UPDATE menu_piatti SET
  nome_en = 'Green Salad',
  nome_es = 'Ensalada Verde',
  nome_de = 'Grüner Salat'
WHERE sezione_id = 'contorni' AND nome = 'Insalata Verde';

UPDATE menu_piatti SET
  nome_en = 'Mixed Salad',
  nome_es = 'Ensalada Mixta',
  nome_de = 'Gemischter Salat'
WHERE sezione_id = 'contorni' AND nome = 'Insalata Mista';

UPDATE menu_piatti SET
  nome_en = 'Spinach(*)',
  nome_es = 'Espinacas(*)',
  nome_de = 'Spinat(*)',
  desc_en = 'Buttered or dressed with oil and lemon',
  desc_es = 'Con mantequilla o en agrio',
  desc_de = 'Mit Butter oder mit Öl und Zitrone'
WHERE sezione_id = 'contorni' AND nome = 'Spinaci(*)';

UPDATE menu_piatti SET
  nome_en = 'Stewed Lentils',
  nome_es = 'Lentejas Estofadas',
  nome_de = 'Geschmorte Linsen'
WHERE sezione_id = 'contorni' AND nome = 'Lenticchie in Umido';

UPDATE menu_piatti SET
  nome_en = 'Sautéed Porcini Mushrooms(*)',
  nome_es = 'Boletus Salteados(*)',
  nome_de = 'Gebratene Steinpilze(*)'
WHERE sezione_id = 'contorni' AND nome = 'Funghi Porcini Trifolati(*)';

UPDATE menu_piatti SET
  nome_en = 'Steamed or Grilled Vegetables',
  nome_es = 'Verduras al Vapor o a la Parrilla',
  nome_de = 'Gedämpftes oder gegrilltes Gemüse'
WHERE sezione_id = 'contorni' AND nome = 'Verdure al Vapore o Grigliate';

UPDATE menu_piatti SET
  nome_en = 'Traditional Polenta',
  nome_es = 'Polenta Tradicional',
  nome_de = 'Traditionelle Polenta'
WHERE sezione_id = 'contorni' AND nome = 'Polenta Tradizionale';

-- -----------------------------------------------
-- PIATTI — formaggi
-- -----------------------------------------------
UPDATE menu_piatti SET
  nome_en = 'Taleggio or Valtellina or Gorgonzola',
  nome_es = 'Taleggio o Valtellina o Gorgonzola',
  nome_de = 'Taleggio oder Valtellina oder Gorgonzola'
WHERE sezione_id = 'formaggi' AND nome LIKE 'Taleggio%';

UPDATE menu_piatti SET
  nome_en = 'Fresh or Aged Goat Cheese',
  nome_es = 'Queso de Cabra Fresco o Curado',
  nome_de = 'Frischer oder gereifter Ziegenkäse'
WHERE sezione_id = 'formaggi' AND nome LIKE 'Caprino%';

UPDATE menu_piatti SET
  nome_en = 'Assorted Local Cheeses with Mustards',
  nome_es = 'Surtido de Quesos Locales con Mostazas',
  nome_de = 'Gemischte lokale Käseplatte mit Senf'
WHERE sezione_id = 'formaggi' AND nome LIKE 'Misto Formaggi%';

-- -----------------------------------------------
-- PIATTI — dolci
-- -----------------------------------------------
UPDATE menu_piatti SET
  nome_en = 'Chalet Dessert "Polentamisù"',
  nome_es = 'Postre Chalet "Polentamisù"',
  nome_de = 'Chalet-Dessert "Polentamisù"',
  desc_en = 'With whipped cream and cocoa',
  desc_es = 'Con nata montada y cacao',
  desc_de = 'Mit Schlagsahne und Kakao'
WHERE sezione_id = 'dolci' AND nome LIKE 'Dolce Chalet%';

UPDATE menu_piatti SET
  nome_en = 'Semifreddo',
  nome_es = 'Semifreddo',
  nome_de = 'Semifreddo',
  desc_en = 'With Braulio liqueur or chestnut with digestif',
  desc_es = 'Al Braulio o de castañas con digestivo',
  desc_de = 'Mit Braulio-Likör oder Kastanien mit Digestif'
WHERE sezione_id = 'dolci' AND nome = 'Semifreddo';

UPDATE menu_piatti SET
  nome_en = 'Ice Cream',
  nome_es = 'Helado',
  nome_de = 'Eis',
  desc_en = 'Chocolate, vanilla, lemon',
  desc_es = 'Chocolate, vainilla, limón',
  desc_de = 'Schokolade, Vanille, Zitrone'
WHERE sezione_id = 'dolci' AND nome = 'Gelato';

UPDATE menu_piatti SET
  nome_en = 'Sorbet',
  nome_es = 'Sorbete',
  nome_de = 'Sorbet'
WHERE sezione_id = 'dolci' AND nome = 'Sorbetto';

UPDATE menu_piatti SET
  nome_en = 'Spiked Sorbet',
  nome_es = 'Sorbete Combinado',
  nome_de = 'Sorbet mit Schuss'
WHERE sezione_id = 'dolci' AND nome = 'Sorbetto Corretto';

UPDATE menu_piatti SET
  nome_en = 'Tiramisù',
  nome_es = 'Tiramisù',
  nome_de = 'Tiramisù'
WHERE sezione_id = 'dolci' AND nome = 'Tiramisù';

UPDATE menu_piatti SET
  nome_en = 'Panna Cotta',
  nome_es = 'Panna Cotta',
  nome_de = 'Panna Cotta'
WHERE sezione_id = 'dolci' AND nome = 'Panna Cotta';

UPDATE menu_piatti SET
  nome_en = 'Warm Bellagio-Style Zabaglione',
  nome_es = 'Zabaione Caliente al Estilo Bellagio',
  nome_de = 'Warmes Bellagioer Zabaione'
WHERE sezione_id = 'dolci' AND nome LIKE 'Zabaione%';

UPDATE menu_piatti SET
  nome_en = 'Chestnuts with Whipped Cream and Caramel',
  nome_es = 'Castañas con Nata Montada y Caramelo',
  nome_de = 'Kastanien mit Schlagsahne und Karamell'
WHERE sezione_id = 'dolci' AND nome LIKE 'Castagne%';

UPDATE menu_piatti SET
  nome_en = 'Meringue Clouds with Cream and Chocolate',
  nome_es = 'Nubes de Merengue con Nata y Chocolate',
  nome_de = 'Baiser-Wölkchen mit Sahne und Schokolade'
WHERE sezione_id = 'dolci' AND nome LIKE 'Nuvolette%';

UPDATE menu_piatti SET
  nome_en = 'Crème Caramel',
  nome_es = 'Crème Caramel',
  nome_de = 'Crème Caramel'
WHERE sezione_id = 'dolci' AND nome = 'Crème Caramel';

UPDATE menu_piatti SET
  nome_en = 'Cheesecake',
  nome_es = 'Cheesecake',
  nome_de = 'Käsekuchen'
WHERE sezione_id = 'dolci' AND nome = 'Cheesecake';

UPDATE menu_piatti SET
  nome_en = 'Chocolate Fondue with Fresh Fruit',
  nome_es = 'Fondue de Chocolate con Fruta Fresca',
  nome_de = 'Schokoladen-Fondue mit frischem Obst'
WHERE sezione_id = 'dolci' AND nome LIKE 'Fonduta di Cioccolato%';

UPDATE menu_piatti SET
  nome_en = 'Fresh Fruit Salad',
  nome_es = 'Macedonia de Fruta Fresca',
  nome_de = 'Frischer Obstsalat'
WHERE sezione_id = 'dolci' AND nome = 'Macedonia di Frutta Fresca';

UPDATE menu_piatti SET
  nome_en = 'Fresh Fruit Salad with Ice Cream',
  nome_es = 'Macedonia de Fruta Fresca con Helado',
  nome_de = 'Frischer Obstsalat mit Eis'
WHERE sezione_id = 'dolci' AND nome = 'Macedonia di Frutta Fresca con Gelato';

-- -----------------------------------------------
-- PIATTI — torte
-- -----------------------------------------------
UPDATE menu_piatti SET
  nome_en = 'Bellagio Paradello (4 slices)',
  nome_es = 'Paradello Bellagino (4 porciones)',
  nome_de = 'Bellagioer Paradello (4 Scheiben)'
WHERE sezione_id = 'torte' AND nome LIKE 'Paradello%4 fette%';

UPDATE menu_piatti SET
  nome_en = 'Bellagio Paradello (8 slices)',
  nome_es = 'Paradello Bellagino (8 porciones)',
  nome_de = 'Bellagioer Paradello (8 Scheiben)'
WHERE sezione_id = 'torte' AND nome LIKE 'Paradello%8 fette%';

-- -----------------------------------------------
-- PIATTI — bevande
-- -----------------------------------------------
UPDATE menu_piatti SET
  nome_en = '100 Red Wine — Dolcetto del Monferrato',
  nome_es = '100 Vino Tinto — Dolcetto del Monferrato',
  nome_de = '100 Rotwein — Dolcetto del Monferrato'
WHERE sezione_id = 'bevande' AND nome LIKE '100%';

UPDATE menu_piatti SET
  nome_en = '101 White Wine — Verduzzo',
  nome_es = '101 Vino Blanco — Verduzzo',
  nome_de = '101 Weißwein — Verduzzo'
WHERE sezione_id = 'bevande' AND nome LIKE '101%';

UPDATE menu_piatti SET
  nome_en = '102 Still or Sparkling Mineral Water',
  nome_es = '102 Agua Mineral Natural o con Gas',
  nome_de = '102 Stilles oder Sprudel-Mineralwasser'
WHERE sezione_id = 'bevande' AND nome LIKE '102%';

UPDATE menu_piatti SET
  nome_en = '103 Blonde Beer',
  nome_es = '103 Cerveza Rubia',
  nome_de = '103 Helles Bier'
WHERE sezione_id = 'bevande' AND nome LIKE '103%';

UPDATE menu_piatti SET
  nome_en = '104 Red Beer',
  nome_es = '104 Cerveza Roja',
  nome_de = '104 Rotes Bier'
WHERE sezione_id = 'bevande' AND nome LIKE '104%';

UPDATE menu_piatti SET
  nome_en = '105 Soft Drinks / Fruit Juices',
  nome_es = '105 Refrescos / Zumos de Fruta',
  nome_de = '105 Softdrinks / Fruchtsäfte'
WHERE sezione_id = 'bevande' AND nome LIKE '105%';

UPDATE menu_piatti SET
  nome_en = '106 Espresso Coffee',
  nome_es = '106 Café Expreso',
  nome_de = '106 Espresso'
WHERE sezione_id = 'bevande' AND nome LIKE '106%';

UPDATE menu_piatti SET
  nome_en = '107 Barley Coffee / Ginseng / Decaffeinated',
  nome_es = '107 Café de Cebada / Ginseng / Descafeinado',
  nome_de = '107 Gersten-Kaffee / Ginseng / Koffeinfreiheit'
WHERE sezione_id = 'bevande' AND nome LIKE '107%';

UPDATE menu_piatti SET
  nome_en = '108 Barley Coffee / Ginseng in Large Cup',
  nome_es = '108 Café de Cebada / Ginseng en Taza Grande',
  nome_de = '108 Gersten-Kaffee / Ginseng im großen Becher'
WHERE sezione_id = 'bevande' AND nome LIKE '108%';

UPDATE menu_piatti SET
  nome_en = '109 Espresso with Spirit',
  nome_es = '109 Café Combinado',
  nome_de = '109 Espresso mit Schnaps'
WHERE sezione_id = 'bevande' AND nome LIKE '109%';

UPDATE menu_piatti SET
  nome_en = '110 Italian Digestifs',
  nome_es = '110 Digestivos Italianos',
  nome_de = '110 Italienische Digestifs'
WHERE sezione_id = 'bevande' AND nome LIKE '110%';

UPDATE menu_piatti SET
  nome_en = '111 International Digestifs',
  nome_es = '111 Digestivos Internacionales',
  nome_de = '111 Ausländische Digestifs'
WHERE sezione_id = 'bevande' AND nome LIKE '111%';

-- -----------------------------------------------
-- PIATTI — supplementi
-- -----------------------------------------------
UPDATE menu_piatti SET
  nome_en = 'Sautéed Porcini Mushrooms Supplement(*)',
  nome_es = 'Suplemento Boletus Salteados(*)',
  nome_de = 'Aufpreis Steinpilze(*)'
WHERE sezione_id = 'supplementi' AND nome LIKE '%Funghi%';

UPDATE menu_piatti SET
  nome_en = 'Bellagio "Uncia" Polenta Supplement',
  nome_es = 'Suplemento Polenta "Uncia" de Bellagio',
  nome_de = 'Aufpreis Bellagioer "Uncia" Polenta'
WHERE sezione_id = 'supplementi' AND nome LIKE '%Polenta%Uncia%';

UPDATE menu_piatti SET
  nome_en = '"Tóc" Bellagino on the Griddle Supplement',
  nome_es = 'Suplemento "Tóc" Bellagino a la Plancha',
  nome_de = 'Aufpreis "Tóc" Bellagino auf dem Grill'
WHERE sezione_id = 'supplementi' AND nome LIKE '%Tóc%';

UPDATE menu_piatti SET
  nome_en = 'Bread & Cover Charge',
  nome_es = 'Pan y Cubierto',
  nome_de = 'Brot & Gedeck'
WHERE sezione_id = 'supplementi' AND nome LIKE 'Pane%';

-- -----------------------------------------------
-- PIATTI SELF — self-antipasti
-- -----------------------------------------------
UPDATE menu_piatti SET
  nome_en = 'Charcuterie Board',
  nome_es = 'Tabla de Embutidos',
  nome_de = 'Schneidebrett',
  desc_en = 'Salami · bresaola · pancetta · fried polenta · cheeses',
  desc_es = 'Salami · bresaola · panceta · polenta frita · quesos',
  desc_de = 'Salami · Bresaola · Speck · frittierte Polenta · Käse'
WHERE sezione_id = 'self-antipasti' AND nome = 'Tagliere';

UPDATE menu_piatti SET
  nome_en = 'Bresaola & Goat Cheese',
  nome_es = 'Bresaola y Queso de Cabra',
  nome_de = 'Bresaola & Ziegenkäse'
WHERE sezione_id = 'self-antipasti' AND nome LIKE 'Bresaola%Caprino%';

UPDATE menu_piatti SET
  nome_en = 'Crêpes with cream and tomato sauce with cooked ham and cheese',
  nome_es = 'Crêpes con nata y tomate con jamón cocido y queso',
  nome_de = 'Crêpes mit Sahne und Tomatensauce mit gekochtem Schinken und Käse'
WHERE sezione_id = 'self-antipasti' AND nome LIKE 'Crespelle panna e pomodoro%';

UPDATE menu_piatti SET
  nome_en = 'Crêpes with cream and sautéed porcini mushrooms with cooked ham and cheese',
  nome_es = 'Crêpes con nata y boletus salteados con jamón cocido y queso',
  nome_de = 'Crêpes mit Sahne und gebratenen Steinpilzen mit gekochtem Schinken und Käse'
WHERE sezione_id = 'self-antipasti' AND nome LIKE 'Crespelle panna e funghi%';

UPDATE menu_piatti SET
  nome_en = 'Pizzoccheri',
  nome_es = 'Pizzoccheri',
  nome_de = 'Pizzoccheri'
WHERE sezione_id = 'self-antipasti' AND nome = 'Pizzoccheri';

UPDATE menu_piatti SET
  nome_en = '"Uncia" Polenta Like the Old Days',
  nome_es = 'Polenta "Uncia" Como Antaño',
  nome_de = '"Uncia" Polenta wie früher'
WHERE sezione_id = 'self-antipasti' AND nome LIKE 'Polenta%Uncia%';

UPDATE menu_piatti SET
  nome_en = '"Sciatt"',
  nome_es = '"Sciatt"',
  nome_de = '"Sciatt"'
WHERE sezione_id = 'self-antipasti' AND nome LIKE '%Sciatt%';

UPDATE menu_piatti SET
  nome_en = 'Fried Potatoes',
  nome_es = 'Patatas Fritas',
  nome_de = 'Pommes Frites'
WHERE sezione_id = 'self-antipasti' AND nome = 'Patate fritte';

-- -----------------------------------------------
-- PIATTI SELF — self-secondi
-- -----------------------------------------------
UPDATE menu_piatti SET
  nome_en = 'Mixed dairy cheeses with polenta',
  nome_es = 'Quesos mixtos de la lechería con polenta',
  nome_de = 'Gemischte Molkerei-Käse mit Polenta'
WHERE sezione_id = 'self-secondi' AND nome LIKE 'Formaggi misti%';

UPDATE menu_piatti SET
  nome_en = 'Baked butter and gorgonzola',
  nome_es = 'Mantequilla y gorgonzola al horno',
  nome_de = 'Gebackene Butter mit Gorgonzola'
WHERE sezione_id = 'self-secondi' AND nome = 'Burro e gorgonzola al forno';

UPDATE menu_piatti SET
  nome_en = 'Grilled sausage',
  nome_es = 'Salchicha a la parrilla',
  nome_de = 'Gegrillte Salsiccia'
WHERE sezione_id = 'self-secondi' AND nome = 'Salamella ai ferri';

UPDATE menu_piatti SET
  nome_en = 'Braised beef morsels',
  nome_es = 'Bocaditos de estofado de ternera',
  nome_de = 'Schmorbraten-Häppchen'
WHERE sezione_id = 'self-secondi' AND nome = 'Bocconcini di brasato';

UPDATE menu_piatti SET
  nome_en = 'Sautéed porcini mushrooms with polenta',
  nome_es = 'Boletus salteados con polenta',
  nome_de = 'Gebratene Steinpilze mit Polenta'
WHERE sezione_id = 'self-secondi' AND nome LIKE 'Funghi porcini%';

UPDATE menu_piatti SET
  nome_en = 'Venison in wine sauce with polenta',
  nome_es = 'Venado en salsa con polenta',
  nome_de = 'Hirschragout mit Polenta'
WHERE sezione_id = 'self-secondi' AND nome LIKE 'Cervo in salmì%';

UPDATE menu_piatti SET
  nome_en = 'DUO of mains on a single plate',
  nome_es = 'DÚO de segundos en un solo plato',
  nome_de = 'DUO von Hauptgerichten auf einem Teller'
WHERE sezione_id = 'self-secondi' AND nome LIKE 'BIS di secondi%';

UPDATE menu_piatti SET
  nome_en = 'MIXED: Braised beef / Venison in wine sauce / Sautéed porcini mushrooms',
  nome_es = 'MIXTO: Estofado de ternera / Venado en salsa / Boletus salteados',
  nome_de = 'GEMISCHT: Schmorbraten / Hirschragout / Gebratene Steinpilze'
WHERE sezione_id = 'self-secondi' AND nome LIKE 'MISTO:%';

UPDATE menu_piatti SET
  nome_en = 'CHALET: Baked butter and gorgonzola / Grilled sausage / Sautéed porcini mushrooms',
  nome_es = 'CHALET: Mantequilla y gorgonzola al horno / Salchicha a la parrilla / Boletus salteados',
  nome_de = 'CHALET: Gebackene Butter mit Gorgonzola / Gegrillte Salsiccia / Gebratene Steinpilze'
WHERE sezione_id = 'self-secondi' AND nome LIKE 'CHALET:%';

UPDATE menu_piatti SET
  nome_en = 'BREADED VEAL CUTLET WITH FRIES (instead of polenta)',
  nome_es = 'COTOLETTA EMPANADA CON PATATAS FRITAS (en sustitución de la polenta)',
  nome_de = 'SCHNITZEL MIT POMMES (anstelle von Polenta)'
WHERE sezione_id = 'self-secondi' AND nome LIKE 'COTOLETTA%';

-- -----------------------------------------------
-- PIATTI SELF — self-dolci
-- -----------------------------------------------
UPDATE menu_piatti SET
  nome_en = 'Fruit Salad',
  nome_es = 'Macedonia',
  nome_de = 'Obstsalat'
WHERE sezione_id = 'self-dolci' AND nome = 'Macedonia';

UPDATE menu_piatti SET
  nome_en = 'Homemade Cakes',
  nome_es = 'Tartas caseras',
  nome_de = 'Hausgemachte Kuchen'
WHERE sezione_id = 'self-dolci' AND nome = 'Torte caserecce';

UPDATE menu_piatti SET
  nome_en = 'Tiramisù / Panna cotta',
  nome_es = 'Tiramisù / Panna cotta',
  nome_de = 'Tiramisù / Panna cotta'
WHERE sezione_id = 'self-dolci' AND nome LIKE 'Tiramisù%';

UPDATE menu_piatti SET
  nome_en = 'Chestnuts with whipped cream and caramel',
  nome_es = 'Castañas con nata montada y caramelo',
  nome_de = 'Kastanien mit Schlagsahne und Karamell'
WHERE sezione_id = 'self-dolci' AND nome LIKE 'Castagne%';

UPDATE menu_piatti SET
  nome_en = 'Beer',
  nome_es = 'Cerveza',
  nome_de = 'Bier'
WHERE sezione_id = 'self-dolci' AND nome = 'Birra';

UPDATE menu_piatti SET
  nome_en = 'Soft drinks',
  nome_es = 'Refrescos',
  nome_de = 'Softdrinks'
WHERE sezione_id = 'self-dolci' AND nome = 'Bibite';

UPDATE menu_piatti SET
  nome_en = 'Water ½ litre',
  nome_es = 'Agua ½ litro',
  nome_de = 'Wasser ½ Liter'
WHERE sezione_id = 'self-dolci' AND nome = 'Acqua ½ litro';

UPDATE menu_piatti SET
  nome_en = 'Wine 0.250 ml',
  nome_es = 'Vino 0,250 cc',
  nome_de = 'Wein 0,250 ml'
WHERE sezione_id = 'self-dolci' AND nome LIKE 'Vino%';

UPDATE menu_piatti SET
  nome_en = 'Espresso',
  nome_es = 'Café',
  nome_de = 'Espresso'
WHERE sezione_id = 'self-dolci' AND nome = 'Caffè';

-- -----------------------------------------------
-- MENU FISSI
-- -----------------------------------------------
UPDATE menu_fissi SET
  nome_en = 'Piano Rancio Menu',
  nome_es = 'Menú Piano Rancio',
  nome_de = 'Menü Piano Rancio',
  incluso_en = '["Espresso coffee","Still/sparkling water","Bread and cover included","Wine excluded"]',
  incluso_es = '["Café expreso","Agua nat/gas","Pan y cubierto incluidos","Vino excluido"]',
  incluso_de = '["Espresso-Kaffee","Still-/Sprudelwasser","Brot und Gedeck inklusive","Wein exklusive"]',
  portate_en = '[{"label":"Starter","voci":["Tóc and local pork, venison and horse salami","Valtellina \"Sciatt\""]},{"label":"Duo of First Courses","voci":["Tomato crêpes","Gnocchetti with cream and speck"]},{"label":"Main of your choice with Polenta","voci":["Baked pork shank with potatoes and spinach","Mixed: braised beef, venison in wine sauce & sautéed porcini mushrooms","Chalet: baked gorgonzola with grilled sausage and sautéed porcini mushrooms","\"Uncia\" Polenta"]},{"label":"Duo of Traditional Bellagio Desserts","voci":["\"Paradell\"","Zabaglione"]}]',
  portate_es = '[{"label":"Entrante","voci":["Tóc y salamis locales de cerdo, venado y caballo","\"Sciatt\" de Valtellina"]},{"label":"Dúo de Primeros Platos","voci":["Crêpes al tomate","Gnocchetti con nata y speck"]},{"label":"Segundo a elegir con Polenta","voci":["Codillo de cerdo al horno con patatas y espinacas","Mixto: estofado, venado en salsa & boletus salteados","Chalet: gorgonzola al horno con salchicha a la parrilla y boletus salteados","Polenta \"Uncia\""]},{"label":"Dúo de Postres Caseros de Bellagio","voci":["\"Paradell\"","Zabaione"]}]',
  portate_de = '[{"label":"Vorspeise","voci":["Tóc mit lokalen Schweine-, Hirsch- und Pferdewurstwaren","Valtellinese \"Sciatt\""]},{"label":"Duo von Ersten Gängen","voci":["Tomatencre\u0302pes","Gnocchetti mit Sahne und Speck"]},{"label":"Hauptgang nach Wahl mit Polenta","voci":["Gebackene Schweinehaxe mit Kartoffeln und Spinat","Gemischt: Schmorbraten, Hirschragout & gebratene Steinpilze","Chalet: gebackener Gorgonzola mit gegrillter Salsiccia und gebratenen Steinpilzen","\"Uncia\" Polenta"]},{"label":"Duo Bellagioer Hausdesserts","voci":["\"Paradell\"","Zabaione"]}]'
WHERE nome = 'Menu Piano Rancio';

UPDATE menu_fissi SET
  nome_en = 'Monte San Primo Menu',
  nome_es = 'Menú Monte San Primo',
  nome_de = 'Menü Monte San Primo',
  incluso_en = '["Espresso coffee","Still/sparkling water","Bread and cover included","Wine excluded"]',
  incluso_es = '["Café expreso","Agua nat/gas","Pan y cubierto incluidos","Vino excluido"]',
  incluso_de = '["Espresso-Kaffee","Still-/Sprudelwasser","Brot und Gedeck inklusive","Wein exklusive"]',
  portate_en = '[{"label":"Starter","voci":["Local mixed cold cuts","Gorgonzola fondue with fried polenta quenelles","Giardiniera pickles"]},{"label":"Duo of First Courses","voci":["Crêpes with cream and sautéed porcini mushrooms, cooked ham and cheese","Valtellina-style Pizzoccheri"]},{"label":"Main of your choice with Polenta","voci":["Baked pork shank with fried potatoes and buttered spinach","Mixed: braised beef, venison in wine sauce & sautéed porcini mushrooms","Chalet: baked gorgonzola with grilled sausage and sautéed porcini mushrooms","\"Uncia\" Polenta","Eggs in butter with toasted polenta crostino"]},{"label":"Duo of Traditional Bellagio Desserts","voci":["\"Paradell\"","Zabaglione","Chestnuts with fresh whipped cream and caramel"]}]',
  portate_es = '[{"label":"Entrante","voci":["Embutidos mixtos locales","Fondue de gorgonzola con quenelles de polenta frita","Giardiniera"]},{"label":"Dúo de Primeros Platos","voci":["Crêpes con nata y boletus salteados con jamón cocido y queso","Pizzoccheri al estilo de Valtellina"]},{"label":"Segundo a elegir con Polenta","voci":["Codillo de cerdo al horno con patatas fritas y espinacas con mantequilla","Mixto: estofado, venado en salsa & boletus salteados","Chalet: gorgonzola al horno con salchicha a la parrilla y boletus salteados","Polenta \"Uncia\"","Huevos con mantequilla y crostino de polenta tostada"]},{"label":"Dúo de Postres Caseros de Bellagio","voci":["\"Paradell\"","Zabaione","Castañas con nata montada fresca y caramelo"]}]',
  portate_de = '[{"label":"Vorspeise","voci":["Gemischte lokale Wurstwaren","Gorgonzola-Fondue mit frittierten Polenta-Quenelles","Giardiniera-Pickles"]},{"label":"Duo von Ersten Gängen","voci":["Crêpes mit Sahne und gebratenen Steinpilzen, gekochtem Schinken und Käse","Valtellinese Pizzoccheri"]},{"label":"Hauptgang nach Wahl mit Polenta","voci":["Gebackene Schweinehaxe mit Pommes und Butterspinat","Gemischt: Schmorbraten, Hirschragout & gebratene Steinpilze","Chalet: gebackener Gorgonzola mit gegrillter Salsiccia und gebratenen Steinpilzen","\"Uncia\" Polenta","Eier in Butter mit geröstetem Polentacrostino"]},{"label":"Duo Bellagioer Hausdesserts","voci":["\"Paradell\"","Zabaione","Kastanien mit frischer Schlagsahne und Karamell"]}]'
WHERE nome = 'Menu Monte San Primo';
