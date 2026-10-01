const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src', 'i18n', 'locales');

// We will load the existing dictionaries, inject the new keys, and save them back.
const dictionaries = {
  it: require('./src/i18n/locales/it.json'),
  en: require('./src/i18n/locales/en.json'),
  es: require('./src/i18n/locales/es.json'),
  de: require('./src/i18n/locales/de.json')
};

// --- ABOUT (Chi Siamo) ---
const aboutIt = {
  opening: {
    eyebrow: "Chi siamo",
    title: "Un luogo costruito con le mani e il cuore",
    lead: "Non è solo un ristorante. È un posto che esiste da quasi settant'anni, costruito pietra su pietra da una famiglia di montagna, rimasto fedele a sé stesso quando tutto intorno cambiava."
  },
  story: {
    caption: "Mariuccia e Gabriele, anni '60",
    eyebrow: "Le origini · 1957",
    title: "Gabriele e Nuccia, una storia di famiglia",
    p1: "Era il 1957 quando <strong>Gabriele Galli</strong>, figlio di contadini di Bellagio, decise di aprire un piccolo bar a Piano Rancio. Accanto a lui, <strong>Mariuccia Sala</strong> — per tutti Nuccia — milanese di nascita ma di montagna nell'anima.",
    p2: "Quello che nacque come un bar di paese si trasformò lentamente, stagione dopo stagione, in un ristorante. Non per ambizione, ma per necessità: la gente saliva fin quassù, si sedeva, chiedeva da mangiare. E Nuccia cucinava.",
    p3: "Il loro obiettivo era semplice e non è mai cambiato: semplicità, qualità e cortesia. Tre parole che ancora oggi guidano ogni giornata di lavoro."
  },
  quote: {
    text: "\"La semplicità, la qualità e la cortesia. Sempre.\"",
    cite: "— Gabriele Galli, fondatore"
  },
  toc: {
    eyebrow: "Il piatto simbolo",
    title: "Il Tóc, anima di Bellagio",
    p1: "Il <strong>Tóc</strong> è il piatto della tradizione bellagina per eccellenza, con oltre 150 anni di storia. Il nome viene dal dialetto comasco <em> \"Tucà\"</em> — toccare — perché si mangia così: con le mani, direttamente dal paiolo, in compagnia.",
    p2: "Polenta di farina di mais, burro genuino e formaggio d'alpeggio amalgamati lentamente fino a ottenere un composto cremoso e omogeneo. Una preparazione che richiede tempo, pazienza e la mano esperta di un vero <em>tocchista</em>. Se si sbaglia un passaggio, il Tóc rilascia il burro e non è più mangiabile.",
    p3: "Per secoli veniva preparato solo in occasione di matrimoni e battesimi. Oggi lo portiamo in tavola per gruppi su prenotazione, con il rito intatto: il paiolo di rame al centro, i cucchiai di legno, le risate tutt'intorno.",
    accLabel: "Si serve con",
    acc1: "Missoltini del Lago di Como",
    acc2: "Salametti e salumi nostrani",
    acc3: "Gallina nostrana lessata",
    acc4: "Ragèl — il digestivo nel paiolo",
    note: "Disponibile su prenotazione per gruppi di almeno 8 persone"
  },
  identity: {
    eyebrow: "Chi siamo davvero",
    title: "Tre cose che non cambieranno mai",
    c1Title: "La famiglia",
    c1Text: "Siamo una famiglia che cucina per le famiglie degli altri. Dal 1957 la stessa mano, la stessa cura, lo stesso modo di stare in sala: come se ogni tavolo fosse quello di casa nostra.",
    c2Title: "La ricetta",
    c2Text: "Il Tóc non si prepara leggendo un foglio. Si impara guardando, si affina nel tempo, si porta avanti con rispetto per chi l'ha inventato. Solo un vero tocchista sa quando è pronto.",
    c3Title: "La compagnia",
    c3Text: "Qui non si mangia mai soli nel senso vero della parola. Il ristorante è sempre pieno, i tavoli vicini, le risate che si mescolano. Una domenica alla Polentoteca sa di festa anche quando non lo è."
  },
  closing: {
    eyebrow: "Oggi",
    title: "Quasi settant'anni e lo stesso paiolo",
    p1: "Gabriele e Nuccia non ci sono più, ma lo spirito con cui hanno aperto questo posto è rimasto intatto. La cucina funziona ancora come funzionava allora: materie prime vere, ricette di territorio, nessuna scorciatoia.",
    p2: "Chi sale fin qui lo sa. Non si viene alla Polentoteca per caso. Si viene perché si è sentito dire che vale la salita. E ogni volta si riparte con la sensazione di aver mangiato qualcosa di vero."
  }
};

const aboutEn = {
  opening: {
    eyebrow: "About Us",
    title: "A place built with hands and heart",
    lead: "It's not just a restaurant. It's a place that has existed for almost seventy years, built stone by stone by a mountain family, remaining true to itself when everything around was changing."
  },
  story: {
    caption: "Mariuccia and Gabriele, 1960s",
    eyebrow: "The origins · 1957",
    title: "Gabriele and Nuccia, a family story",
    p1: "It was 1957 when <strong>Gabriele Galli</strong>, son of farmers from Bellagio, decided to open a small bar in Piano Rancio. Alongside him, <strong>Mariuccia Sala</strong> — known to all as Nuccia — Milanese by birth but with a mountain soul.",
    p2: "What started as a village bar slowly transformed, season after season, into a restaurant. Not out of ambition, but out of necessity: people came up here, sat down, and asked for food. And Nuccia cooked.",
    p3: "Their goal was simple and has never changed: simplicity, quality, and courtesy. Three words that still guide every working day today."
  },
  quote: {
    text: "\"Simplicity, quality, and courtesy. Always.\"",
    cite: "— Gabriele Galli, founder"
  },
  toc: {
    eyebrow: "The signature dish",
    title: "Il Tóc, the soul of Bellagio",
    p1: "<strong>Tóc</strong> is the traditional dish of Bellagio par excellence, with over 150 years of history. The name comes from the local dialect <em> \"Tucà\"</em> — to touch — because it is eaten with hands, directly from the cauldron, together.",
    p2: "Cornmeal polenta, genuine butter, and alpine cheese slowly mixed to obtain a creamy and homogeneous mixture. A preparation that requires time, patience, and the expert hand of a true <em>tocchista</em>. If a step is missed, the Tóc releases the butter and is no longer edible.",
    p3: "For centuries it was prepared only for weddings and baptisms. Today we bring it to the table for groups upon reservation, with the ritual intact: the copper cauldron in the center, wooden spoons, and laughter all around.",
    accLabel: "Served with",
    acc1: "Missoltini from Lake Como",
    acc2: "Local salami and cold cuts",
    acc3: "Boiled local hen",
    acc4: "Ragèl — the digestive in the cauldron",
    note: "Available upon reservation for groups of at least 8 people"
  },
  identity: {
    eyebrow: "Who we really are",
    title: "Three things that will never change",
    c1Title: "Family",
    c1Text: "We are a family cooking for other families. Since 1957, the same hand, the same care, the same way of being in the dining room: as if every table were our home.",
    c2Title: "The recipe",
    c2Text: "Tóc is not prepared by reading a piece of paper. You learn by watching, refine it over time, carry it forward with respect for those who invented it. Only a true tocchista knows when it's ready.",
    c3Title: "The company",
    c3Text: "Here you never eat alone in the true sense of the word. The restaurant is always full, the tables close, laughter mixing. A Sunday at the Polentoteca feels like a party even when it's not."
  },
  closing: {
    eyebrow: "Today",
    title: "Almost seventy years and the same cauldron",
    p1: "Gabriele and Nuccia are no longer here, but the spirit with which they opened this place has remained intact. The kitchen still works as it did then: real raw materials, local recipes, no shortcuts.",
    p2: "Those who come up here know it. You don't come to the Polentoteca by chance. You come because you heard it's worth the climb. And every time you leave with the feeling of having eaten something real."
  }
};

const aboutEs = {
  opening: {
    eyebrow: "Quiénes somos",
    title: "Un lugar construido con las manos y el corazón",
    lead: "No es solo un restaurante. Es un lugar que existe desde hace casi setenta años, construido piedra a piedra por una familia de montaña, manteniéndose fiel a sí mismo cuando todo alrededor cambiaba."
  },
  story: {
    caption: "Mariuccia y Gabriele, años 60",
    eyebrow: "Los orígenes · 1957",
    title: "Gabriele y Nuccia, una historia familiar",
    p1: "Era 1957 cuando <strong>Gabriele Galli</strong>, hijo de agricultores de Bellagio, decidió abrir un pequeño bar en Piano Rancio. Junto a él, <strong>Mariuccia Sala</strong> — conocida por todos como Nuccia — milanesa de nacimiento pero con alma de montaña.",
    p2: "Lo que comenzó como un bar de pueblo se transformó lentamente, temporada tras temporada, en un restaurante. No por ambición, sino por necesidad: la gente subía aquí, se sentaba y pedía comida. Y Nuccia cocinaba.",
    p3: "Su objetivo era simple y nunca ha cambiado: sencillez, calidad y cortesía. Tres palabras que todavía guían cada día de trabajo hoy."
  },
  quote: {
    text: "\"Sencillez, calidad y cortesía. Siempre.\"",
    cite: "— Gabriele Galli, fundador"
  },
  toc: {
    eyebrow: "El plato estrella",
    title: "El Tóc, el alma de Bellagio",
    p1: "El <strong>Tóc</strong> es el plato tradicional de Bellagio por excelencia, con más de 150 años de historia. El nombre proviene del dialecto local <em> \"Tucà\"</em> — tocar — porque se come con las manos, directamente de la olla, juntos.",
    p2: "Polenta de harina de maíz, mantequilla genuina y queso de los Alpes mezclados lentamente para obtener una mezcla cremosa y homogénea. Una preparación que requiere tiempo, paciencia y la mano experta de un verdadero <em>tocchista</em>. Si se salta un paso, el Tóc suelta la mantequilla y ya no se puede comer.",
    p3: "Durante siglos solo se preparaba para bodas y bautizos. Hoy lo llevamos a la mesa para grupos con reserva previa, con el ritual intacto: la olla de cobre en el centro, cucharas de madera y risas alrededor.",
    accLabel: "Se sirve con",
    acc1: "Missoltini del Lago de Como",
    acc2: "Embutidos y salamis locales",
    acc3: "Gallina local hervida",
    acc4: "Ragèl — el digestivo en la olla",
    note: "Disponible con reserva previa para grupos de al menos 8 personas"
  },
  identity: {
    eyebrow: "Quiénes somos realmente",
    title: "Tres cosas que nunca cambiarán",
    c1Title: "La familia",
    c1Text: "Somos una familia que cocina para otras familias. Desde 1957, la misma mano, el mismo cuidado, la misma forma de estar en el comedor: como si cada mesa fuera nuestro hogar.",
    c2Title: "La receta",
    c2Text: "El Tóc no se prepara leyendo un papel. Se aprende observando, se perfecciona con el tiempo, se lleva adelante con respeto por quienes lo inventaron. Solo un verdadero tocchista sabe cuándo está listo.",
    c3Title: "La compañía",
    c3Text: "Aquí nunca se come solo en el verdadero sentido de la palabra. El restaurante siempre está lleno, las mesas cerca, las risas mezclándose. Un domingo en la Polentoteca se siente como una fiesta, incluso cuando no lo es."
  },
  closing: {
    eyebrow: "Hoy",
    title: "Casi setenta años y la misma olla",
    p1: "Gabriele y Nuccia ya no están, pero el espíritu con el que abrieron este lugar se ha mantenido intacto. La cocina sigue funcionando como entonces: materias primas reales, recetas locales, sin atajos.",
    p2: "Quienes suben aquí lo saben. No vienes a la Polentoteca por casualidad. Vienes porque escuchaste que vale la pena subir. Y cada vez te vas con la sensación de haber comido algo real."
  }
};

const aboutDe = {
  opening: {
    eyebrow: "Über uns",
    title: "Ein mit Händen und Herz erbauter Ort",
    lead: "Es ist nicht nur ein Restaurant. Es ist ein Ort, der seit fast siebzig Jahren existiert, Stein für Stein von einer Bergfamilie erbaut, und der sich selbst treu geblieben ist, während sich alles um ihn herum veränderte."
  },
  story: {
    caption: "Mariuccia und Gabriele, 1960er Jahre",
    eyebrow: "Die Ursprünge · 1957",
    title: "Gabriele und Nuccia, eine Familiengeschichte",
    p1: "Es war 1957, als <strong>Gabriele Galli</strong>, Sohn von Bauern aus Bellagio, beschloss, eine kleine Bar in Piano Rancio zu eröffnen. An seiner Seite <strong>Mariuccia Sala</strong> — von allen Nuccia genannt — gebürtige Mailänderin, aber mit einer Bergseele.",
    p2: "Was als Dorfbar begann, verwandelte sich langsam, Saison für Saison, in ein Restaurant. Nicht aus Ehrgeiz, sondern aus Notwendigkeit: Die Leute kamen hierherauf, setzten sich und baten um Essen. Und Nuccia kochte.",
    p3: "Ihr Ziel war einfach und hat sich nie geändert: Einfachheit, Qualität und Höflichkeit. Drei Worte, die auch heute noch jeden Arbeitstag leiten."
  },
  quote: {
    text: "\"Einfachheit, Qualität und Höflichkeit. Immer.\"",
    cite: "— Gabriele Galli, Gründer"
  },
  toc: {
    eyebrow: "Das Spezialgericht",
    title: "Il Tóc, die Seele von Bellagio",
    p1: "Der <strong>Tóc</strong> ist das traditionelle Gericht von Bellagio schlechthin, mit über 150 Jahren Geschichte. Der Name stammt aus dem lokalen Dialekt <em> \"Tucà\"</em> — berühren — weil er so gegessen wird: mit den Händen, direkt aus dem Kupferkessel, zusammen.",
    p2: "Maispolenta, echte Butter und Alpenkäse langsam gemischt, um eine cremige und homogene Mischung zu erhalten. Eine Zubereitung, die Zeit, Geduld und die erfahrene Hand eines wahren <em>Tocchista</em> erfordert. Wenn ein Schritt übersprungen wird, löst sich die Butter aus dem Tóc und er ist nicht mehr genießbar.",
    p3: "Jahrhundertelang wurde er nur für Hochzeiten und Taufen zubereitet. Heute bringen wir ihn für Gruppen auf Vorbestellung auf den Tisch, mit intaktem Ritual: der Kupferkessel in der Mitte, Holzlöffel und Lachen ringsum.",
    accLabel: "Serviert mit",
    acc1: "Missoltini vom Comer See",
    acc2: "Lokale Salami und Wurstwaren",
    acc3: "Gekochte einheimische Henne",
    acc4: "Ragèl — der Digestif im Kessel",
    note: "Auf Vorbestellung für Gruppen von mindestens 8 Personen erhältlich"
  },
  identity: {
    eyebrow: "Wer wir wirklich sind",
    title: "Drei Dinge, die sich nie ändern werden",
    c1Title: "Die Familie",
    c1Text: "Wir sind eine Familie, die für andere Familien kocht. Seit 1957 dieselbe Hand, dieselbe Sorgfalt, dieselbe Art, im Speisesaal zu sein: als wäre jeder Tisch unser Zuhause.",
    c2Title: "Das Rezept",
    c2Text: "Tóc bereitet man nicht durch Lesen eines Zettels zu. Man lernt durch Zuschauen, verfeinert es im Laufe der Zeit, führt es mit Respekt für die Erfinder weiter. Nur ein wahrer Tocchista weiß, wann es fertig ist.",
    c3Title: "Die Gesellschaft",
    c3Text: "Hier isst man im wahrsten Sinne des Wortes nie alleine. Das Restaurant ist immer voll, die Tische nah, das Lachen mischt sich. Ein Sonntag in der Polentoteca fühlt sich an wie ein Fest, auch wenn es keines ist."
  },
  closing: {
    eyebrow: "Heute",
    title: "Fast siebzig Jahre und derselbe Kessel",
    p1: "Gabriele und Nuccia sind nicht mehr hier, aber der Geist, mit dem sie diesen Ort eröffnet haben, ist intakt geblieben. Die Küche funktioniert immer noch wie damals: echte Rohstoffe, lokale Rezepte, keine Abkürzungen.",
    p2: "Wer hierherauf kommt, weiß es. Man kommt nicht zufällig in die Polentoteca. Man kommt, weil man gehört hat, dass sich der Aufstieg lohnt. Und jedes Mal geht man mit dem Gefühl, etwas Echtes gegessen zu haben."
  }
};

// --- CONTATTI (Contatti) ---
const contactIt = {
  hero: {
    eyebrow: "Contatti",
    title: "Vieni a trovarci",
    lead: "Siamo a Piano Rancio, a 1012 m s.l.m., ai piedi del Monte San Primo. Un locale caratteristico in sasso e legno, con vetrate affacciate sul Lago di Como e sulla catena delle Alpi.",
    note: "Prenotazioni solo telefonicamente:"
  },
  cards: {
    phoneTitle: "Telefono",
    phoneNote: "Prenotazioni solo telefonicamente",
    hoursTitle: "Orari",
    hoursDays: {
      "Lunedì": "Lunedì",
      "Martedì": "Martedì",
      "Mercoledì": "Mercoledì",
      "Giovedì": "Giovedì",
      "Venerdì": "Venerdì",
      "Sabato": "Sabato",
      "Domenica": "Domenica"
    },
    hoursStates: {
      "aperto": "Pranzo · Cena",
      "solo-pranzo": "Solo pranzo",
      "chiuso": "Chiuso"
    },
    whereTitle: "Dove siamo",
    whereValue: "Piano Rancio",
    whereNote: "Bellagio (CO) · 1012 m s.l.m.<br />A 12 km da Bellagio"
  },
  arrive: {
    eyebrow: "Come raggiungerci",
    title: "Tra lago e montagna",
    p1: "Il ristorante sorge a Piano Rancio, piccola località ai piedi del Monte San Primo. Le vetrate delle due sale si affacciano sul Lago di Como e sulla catena delle Alpi che contorna i due rami del Lario.",
    p2: "Facilmente raggiungibile con ogni mezzo, sia in auto attraverso la strada provinciale sia a piedi percorrendo i sentieri del bosco. A disposizione degli ospiti un ampio parcheggio gratuito.",
    statAlt: "Altitudine",
    statDist: "Da Bellagio",
    statPark: "Parcheggio",
    statParkVal: "Gratuito"
  },
  rules: {
    eyebrow: "Prima di venire",
    title: "Cose utili da sapere",
    items: [
      {
        title: "Fondute e Carbonade",
        text: "Richiedono prenotazione telefonica anticipata. La Chinoise e la Bourguignonne: minimo 2 ospiti. La Carbonade: minimo 6, massimo 10 ospiti."
      },
      {
        title: "Menu a prezzo fisso",
        text: "I menu Piano Rancio e Monte San Primo sono riservati a gruppi e compagnie e richiedono prenotazione anticipata. Nel prezzo è escluso il vino."
      },
      {
        title: "Tavoli con vista",
        text: "I tavoli alla vetrata con panorama sul Lago di Como vengono assegnati in ordine di prenotazione. Chiamaci in anticipo per assicurartelo."
      },
      {
        title: "Asporto tutto l'anno",
        text: "Tutti i piatti del menu sono disponibili anche da asporto, tutto l'anno. Contattaci telefonicamente per ordinare."
      }
    ]
  },
  cta: {
    eyebrow: "Prenota il tuo tavolo",
    title: "Chiamaci direttamente",
    para: "Le prenotazioni si effettuano esclusivamente per telefono. Per fondute, carbonade e menu fissi è obbligatoria la prenotazione anticipata. I tavoli con vista sul lago vengono assegnati in ordine di prenotazione.",
    btnGhost: "Vedi il menu →"
  }
};

const contactEn = {
  hero: {
    eyebrow: "Contact",
    title: "Come and visit us",
    lead: "We are located in Piano Rancio, at 1012 m a.s.l., at the foot of Mount San Primo. A characteristic stone and wood restaurant with windows overlooking Lake Como and the Alps.",
    note: "Telephone reservations only:"
  },
  cards: {
    phoneTitle: "Phone",
    phoneNote: "Telephone reservations only",
    hoursTitle: "Opening hours",
    hoursDays: {
      "Lunedì": "Monday",
      "Martedì": "Tuesday",
      "Mercoledì": "Wednesday",
      "Giovedì": "Thursday",
      "Venerdì": "Friday",
      "Sabato": "Saturday",
      "Domenica": "Sunday"
    },
    hoursStates: {
      "aperto": "Lunch · Dinner",
      "solo-pranzo": "Lunch only",
      "chiuso": "Closed"
    },
    whereTitle: "Where we are",
    whereValue: "Piano Rancio",
    whereNote: "Bellagio (CO) · 1012 m a.s.l.<br />12 km from Bellagio"
  },
  arrive: {
    eyebrow: "How to reach us",
    title: "Between lake and mountain",
    p1: "The restaurant is located in Piano Rancio, a small town at the foot of Mount San Primo. The windows of the two dining rooms overlook Lake Como and the Alps surrounding the two branches of the lake.",
    p2: "Easily accessible by any means, either by car along the provincial road or on foot along the forest paths. A large free car park is available for guests.",
    statAlt: "Altitude",
    statDist: "From Bellagio",
    statPark: "Parking",
    statParkVal: "Free"
  },
  rules: {
    eyebrow: "Before coming",
    title: "Useful things to know",
    items: [
      {
        title: "Fondues and Carbonade",
        text: "Require advance telephone reservation. Chinoise and Bourguignonne: minimum 2 guests. Carbonade: minimum 6, maximum 10 guests."
      },
      {
        title: "Set menus",
        text: "The Piano Rancio and Monte San Primo menus are reserved for groups and parties and require advance booking. Wine is not included in the price."
      },
      {
        title: "Tables with a view",
        text: "Tables by the window with a view of Lake Como are assigned in order of booking. Call us in advance to secure yours."
      },
      {
        title: "Takeaway all year round",
        text: "All menu dishes are also available for takeaway all year round. Contact us by phone to order."
      }
    ]
  },
  cta: {
    eyebrow: "Book your table",
    title: "Call us directly",
    para: "Reservations are made exclusively by telephone. Advance booking is mandatory for fondues, carbonade, and set menus. Tables with lake views are assigned in order of booking.",
    btnGhost: "See the menu →"
  }
};

const contactEs = {
  hero: {
    eyebrow: "Contacto",
    title: "Ven a visitarnos",
    lead: "Estamos situados en Piano Rancio, a 1012 m s.n.m., a los pies del monte San Primo. Un restaurante característico de piedra y madera con ventanales al lago de Como y a los Alpes.",
    note: "Reservas solo por teléfono:"
  },
  cards: {
    phoneTitle: "Teléfono",
    phoneNote: "Reservas solo por teléfono",
    hoursTitle: "Horario",
    hoursDays: {
      "Lunedì": "Lunes",
      "Martedì": "Martes",
      "Mercoledì": "Miércoles",
      "Giovedì": "Jueves",
      "Venerdì": "Viernes",
      "Sabato": "Sábado",
      "Domenica": "Domingo"
    },
    hoursStates: {
      "aperto": "Almuerzo · Cena",
      "solo-pranzo": "Solo almuerzo",
      "chiuso": "Cerrado"
    },
    whereTitle: "Dónde estamos",
    whereValue: "Piano Rancio",
    whereNote: "Bellagio (CO) · 1012 m s.n.m.<br />A 12 km de Bellagio"
  },
  arrive: {
    eyebrow: "Cómo llegar",
    title: "Entre lago y montaña",
    p1: "El restaurante se encuentra en Piano Rancio, una pequeña localidad a los pies del monte San Primo. Los ventanales de los dos comedores asoman al lago de Como y a la cadena de los Alpes que rodea los dos ramales del lago.",
    p2: "Fácilmente accesible por cualquier medio, ya sea en coche por la carretera comarcal o a pie por los senderos del bosque. Hay un amplio aparcamiento gratuito para los clientes.",
    statAlt: "Altitud",
    statDist: "Desde Bellagio",
    statPark: "Aparcamiento",
    statParkVal: "Gratis"
  },
  rules: {
    eyebrow: "Antes de venir",
    title: "Cosas útiles que saber",
    items: [
      {
        title: "Fondues y Carbonade",
        text: "Requieren reserva telefónica previa. La Chinoise y la Bourguignonne: mínimo 2 personas. La Carbonade: mínimo 6, máximo 10 personas."
      },
      {
        title: "Menús a precio fijo",
        text: "Los menús Piano Rancio y Monte San Primo están reservados para grupos y requieren reserva previa. El vino no está incluido en el precio."
      },
      {
        title: "Mesas con vista",
        text: "Las mesas junto a la ventana con vistas al lago de Como se asignan por orden de reserva. Llámanos con antelación para asegurarte la tuya."
      },
      {
        title: "Para llevar todo el año",
        text: "Todos los platos del menú están disponibles para llevar todo el año. Contáctanos por teléfono para hacer un pedido."
      }
    ]
  },
  cta: {
    eyebrow: "Reserva tu mesa",
    title: "Llámanos directamente",
    para: "Las reservas se hacen exclusivamente por teléfono. La reserva previa es obligatoria para fondues, carbonade y menús fijos. Las mesas con vistas al lago se asignan por orden de reserva.",
    btnGhost: "Ver el menú →"
  }
};

const contactDe = {
  hero: {
    eyebrow: "Kontakt",
    title: "Kommen Sie uns besuchen",
    lead: "Wir befinden uns in Piano Rancio, 1012 m ü. M., am Fuße des Monte San Primo. Ein charakteristisches Restaurant aus Stein und Holz mit Fenstern mit Blick auf den Comer See und die Alpen.",
    note: "Reservierungen nur telefonisch:"
  },
  cards: {
    phoneTitle: "Telefon",
    phoneNote: "Reservierungen nur telefonisch",
    hoursTitle: "Öffnungszeiten",
    hoursDays: {
      "Lunedì": "Montag",
      "Martedì": "Dienstag",
      "Mercoledì": "Mittwoch",
      "Giovedì": "Donnerstag",
      "Venerdì": "Freitag",
      "Sabato": "Samstag",
      "Domenica": "Sonntag"
    },
    hoursStates: {
      "aperto": "Mittagessen · Abendessen",
      "solo-pranzo": "Nur Mittagessen",
      "chiuso": "Geschlossen"
    },
    whereTitle: "Wo wir sind",
    whereValue: "Piano Rancio",
    whereNote: "Bellagio (CO) · 1012 m ü. M.<br />12 km von Bellagio"
  },
  arrive: {
    eyebrow: "Wie Sie uns erreichen",
    title: "Zwischen See und Bergen",
    p1: "Das Restaurant befindet sich in Piano Rancio, einem kleinen Ort am Fuße des Monte San Primo. Die Fenster der beiden Speisesäle blicken auf den Comer See und die Alpenkette, die die beiden Arme des Sees umgibt.",
    p2: "Leicht erreichbar mit allen Verkehrsmitteln, sei es mit dem Auto über die Kantonsstraße oder zu Fuß über die Waldwege. Ein großer kostenloser Parkplatz steht den Gästen zur Verfügung.",
    statAlt: "Höhe",
    statDist: "Von Bellagio",
    statPark: "Parkplatz",
    statParkVal: "Kostenlos"
  },
  rules: {
    eyebrow: "Bevor Sie kommen",
    title: "Nützliche Dinge zu wissen",
    items: [
      {
        title: "Fondues und Carbonade",
        text: "Erfordern vorherige telefonische Reservierung. Die Chinoise und die Bourguignonne: mindestens 2 Gäste. Die Carbonade: mindestens 6, maximal 10 Gäste."
      },
      {
        title: "Festpreis-Menüs",
        text: "Die Menüs Piano Rancio und Monte San Primo sind für Gruppen reserviert und erfordern eine vorherige Reservierung. Wein ist nicht im Preis inbegriffen."
      },
      {
        title: "Tische mit Aussicht",
        text: "Tische am Fenster mit Blick auf den Comer See werden in der Reihenfolge der Buchung vergeben. Rufen Sie uns rechtzeitig an, um sich Ihren Platz zu sichern."
      },
      {
        title: "Zum Mitnehmen das ganze Jahr",
        text: "Alle Gerichte auf der Speisekarte können das ganze Jahr über zum Mitnehmen bestellt werden. Kontaktieren Sie uns telefonisch, um zu bestellen."
      }
    ]
  },
  cta: {
    eyebrow: "Buchen Sie Ihren Tisch",
    title: "Rufen Sie uns direkt an",
    para: "Reservierungen werden ausschließlich telefonisch entgegengenommen. Für Fondues, Carbonade und Festpreis-Menüs ist eine Vorabbuchung zwingend erforderlich. Tische mit Seeblick werden in der Reihenfolge der Buchung vergeben.",
    btnGhost: "Siehe das Menü →"
  }
};

dictionaries.it.about = aboutIt;
dictionaries.en.about = aboutEn;
dictionaries.es.about = aboutEs;
dictionaries.de.about = aboutDe;

dictionaries.it.contact = contactIt;
dictionaries.en.contact = contactEn;
dictionaries.es.contact = contactEs;
dictionaries.de.contact = contactDe;

fs.writeFileSync(path.join(localesDir, 'it.json'), JSON.stringify(dictionaries.it, null, 2));
fs.writeFileSync(path.join(localesDir, 'en.json'), JSON.stringify(dictionaries.en, null, 2));
fs.writeFileSync(path.join(localesDir, 'es.json'), JSON.stringify(dictionaries.es, null, 2));
fs.writeFileSync(path.join(localesDir, 'de.json'), JSON.stringify(dictionaries.de, null, 2));

console.log("Translations successfully updated.");
