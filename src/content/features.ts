export const featuresPage = {
  hero: {
    headline: "Go online. Aber sicher!",
    subheadline:
      "Bildschirmzeit, Webfilter und Standort – alles zentral steuerbar, ohne Dein Kind auszuspionieren.",
  },

  overview: {
    headline: "Deshalb wirst Du Kidgonet lieben!",
    bullets: [
      "Bildschirmzeiten ganz einfach festlegen, für alle Geräte",
      "Browserunabhängiger Internetfilter zum Schutz vor unangemessenen Seiten & Inhalten",
      "Geräteortung – immer wissen wo Deine Kinder sind",
      "Musik- & Lernapps während der Pause freigeben",
      "Privatsphäre Deiner Kinder bleibt geschützt",
    ],
  },

  featureBlocks: [
    {
      title: "Sekundengenaue Zeiterfassung",
      body: "Kidgonet misst die Online-Zeit Deines Kindes sekundengenau und über alle Geräte hinweg. Die Daten werden im Elternportal aggregiert dargestellt — Du siehst auf einen Blick, wie viel Bildschirmzeit heute schon verbraucht wurde.",
    },
    {
      title: "Geräteübergreifend",
      body: "Online-Zeiten von Smartphone und Tablet werden addiert, damit das Tageslimit nicht durch Gerätewechsel umgangen werden kann. Pro Abo sind 5 Lizenzen enthalten — ideal für mehrere Kinder oder mehrere Geräte pro Kind.",
    },
    {
      title: "Apps während der Pause freigeben",
      body: "Auch in Bildschirmpausen oder nach Ablauf der Online-Zeit kannst Du gezielt einzelne Apps freigeben — z.B. eine Lern-App, einen Musik-Streamer oder den Notfall-Kontakt zu den Eltern.",
    },
    {
      title: "Browserunabhängiger Internetfilter",
      body: "Unser Filter wirkt systemweit — egal welcher Browser oder welche App genutzt wird. So lassen sich altersgerechte Schutzeinstellungen nicht durch einen Browserwechsel aushebeln.",
    },
  ],

  privacy: {
    headline: "Kidgonet spioniert Dein Kind nicht aus!",
    items: [
      {
        title: "Kein personenbezogenes Tracking",
        description:
          "Wir speichern das Online-Verhalten Deines Kindes nicht personenbezogen, sondern nur geräteweit aggregiert für die Bildschirmzeit.",
      },
      {
        title: "Keine Weitergabe an Dritte",
        description:
          "Die Daten Deines Kindes werden weder verkauft noch an Werbenetzwerke oder Analytics-Dienste weitergegeben.",
      },
      {
        title: "Keine Ausspionierung",
        description:
          "Eltern sehen Bildschirmzeit und installierte Apps — aber keine Chatverläufe, Browser-Historie oder Inhalte. Privatsphäre bleibt Privatsphäre.",
      },
      {
        title: "Absoluter Datenschutz",
        description:
          "Hosting ausschließlich in deutschen Rechenzentren, DSGVO-konform. Keine Trackingpixel, kein Profiling.",
      },
    ],
  },

  ageGroups: [
    { id: "0-8", label: "0 – 8 Jahre", description: "Strenge Filterung" },
    { id: "9-12", label: "9 – 12 Jahre", description: "Moderate Filterung" },
    {
      id: "13-15",
      label: "13 – 15 Jahre",
      description: "Grundlegende Filterung",
    },
  ],

  filterTable: {
    headline: "Altersgerechter Webfilter",
    intro:
      "Unser DNS-basierter Webfilter ist auf drei Altersgruppen abgestimmt. Mit zunehmendem Alter werden weniger Kategorien gesperrt — angepasst an den Entwicklungsstand Deines Kindes.",
    categories: [
      { name: "Pornografie", "0-8": true, "9-12": true, "13-15": true },
      { name: "Waffen", "0-8": true, "9-12": true, "13-15": true },
      { name: "Glücksspiel", "0-8": true, "9-12": true, "13-15": true },
      { name: "Rassismus", "0-8": true, "9-12": true, "13-15": true },
      { name: "Terrorismus", "0-8": true, "9-12": true, "13-15": true },
      { name: "Drogen", "0-8": true, "9-12": true, "13-15": true },
      { name: "Dating", "0-8": true, "9-12": true, "13-15": false },
      { name: "Piraterie", "0-8": true, "9-12": true, "13-15": false },
      { name: "Social Media", "0-8": true, "9-12": false, "13-15": false },
      { name: "Facebook", "0-8": true, "9-12": false, "13-15": false },
      { name: "Video-Plattformen", "0-8": true, "9-12": false, "13-15": false },
      { name: "Gaming", "0-8": true, "9-12": false, "13-15": false },
      { name: "Werbung", "0-8": true, "9-12": true, "13-15": true },
      { name: "Bösartige Inhalte", "0-8": true, "9-12": true, "13-15": true },
    ],
  },

  screenTime: {
    headline: "Bildschirmzeit zentral steuern",
    body: "Über das Elternportal legst Du fest, wie lange Dein Kind online sein darf — pro Tag, pro Woche, geräteübergreifend. Sperrzeiten wie Schule, Hausaufgaben oder Schlafenszeit sind als Standardprofile angelegt und können angepasst werden.",
    capabilities: [
      "Tageslimit für alle Geräte zusammen",
      "Sperrbildschirm bei abgelaufener Zeit (Telefon & SMS bleiben möglich)",
      "Spontane Extra-Zeit aus dem Portal freigeben",
      "Pausen für Hausaufgaben oder Schule einplanen",
    ],
  },

  controls: [
    {
      title: "SOS-Button",
      body: "Ein Klick im Elternportal blockiert sofort den Internet-Zugang auf allen Geräten Deines Kindes — z.B. wenn Du es zum Essen rufst oder die Hausaufgabenzeit beginnt.",
    },
    {
      title: "Unbegrenzter Zugriff",
      body: "Für Ferien, lange Autofahrten oder besondere Anlässe kannst Du die Zeitbegrenzung temporär aufheben — und genauso einfach wieder einschalten.",
    },
    {
      title: "Pause",
      body: "Plane wiederkehrende Pausen für Hausaufgaben, Mahlzeiten oder Schlafenszeit. Während dieser Pausen sind alle Apps gesperrt — außer Du gibst gezielt einzelne frei.",
    },
  ],

  portal: {
    headline: "Das Elternportal",
    intro:
      "Zentrale Steuerung für alle Funktionen — als Web-App im Browser und als kostenlose iOS-/Android-App.",
    features: [
      "Kinder und Geräte anmelden",
      "Gesamtonlinezeit pro Tag festlegen",
      "Internetpausen bestimmen",
      "Extra-Onlinezeit spontan hinzufügen",
      "Standort der Geräte abrufen",
      "Deaktivierungscode (4-stellig) verwalten",
      "Übersicht aller geschützten Geräte",
      "Übersicht aller installierten Apps",
    ],
  },

  nummerGegenKummer: {
    headline: "Partner: Nummer gegen Kummer",
    body: "In der Kidgonet-Kinder-App findet Dein Kind einen direkten Link zur Nummer gegen Kummer e.V. — eine vertrauliche, kostenlose und professionelle Beratung bei Sorgen, Problemen oder Ängsten. Themen reichen von Liebeskummer und Schulstress bis zu ernsten Notlagen.",
  },
} as const;
