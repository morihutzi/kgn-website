export const featuresPage = {
  hero: {
    headline: "Go online. Aber sicher!",
    subheadline: "Deshalb wirst du Kidgonet lieben!",
    bullets: [
      "Bildschirmzeiten ganz einfach festlegen, für alle Geräte",
      "Browserunabhängiger Internetfilter zum Schutz vor unangemessenen Seiten & Inhalten",
      "Geräteortung: immer wissen wo Deine Kinder sind",
      "Musik- & Lernapps während der Pause freigeben",
      "Privatsphäre Deiner Kinder bleibt geschützt",
    ],
    ctaLabel: "Hol dir Kidgonet",
  },

  featureGrid: {
    headline: "Das kann die Kidgonet Kinderschutz App",
    ctaLabel: "Damit Deine Kinder sicher surfen – jetzt App 14 Tage kostenlos testen!",
    ctaButton: "Jetzt downloaden!",
    cards: [
      {
        title: "Sekundengenaue Zeiterfassung",
        body: "Sekundengenaue Zeiterfassung des Kindgeräts. Es werden sowohl online Aktivitäten als auch Offline Aktivitäten erfasst.",
        icon: "timer",
      },
      {
        title: "Geräteübergreifend",
        body: "Weil Kidgonet geräteübergreifend funktioniert, werden die Online Zeiten von Handy und Tablet addiert. Kidgonet läuft auf bis zu 5 Geräten.",
        icon: "devices",
      },
      {
        title: "Apps während Pause freigeben",
        body: "Bestimmte Apps wie Notfall Apps oder Lern Apps können auch während der Bildschirmzeit Pause freigegeben werden.",
        icon: "apps",
      },
      {
        title: "Browserunabhängiger Internetfilter",
        body: "Kidgonets Internetfilter wirkt systemweit, unabhängig vom Browser. Unerwünschte Inhalte werden zuverlässig auf allen Geräten und in allen Apps gefiltert.",
        icon: "filter",
      },
    ] as const,
  },

  privacy: {
    headline: "Kidgonet spioniert dein Kind nicht aus!",
    intro:
      "Die Privatsphäre der Kinder ist uns wichtig und liegt uns sehr am Herzen, denn Kinder haben ein Recht auf Privatsphäre.",
    bullets: [
      {
        title: "Kein personenbezogenes Tracking",
        body: "Das Online-Verhalten der Kinder und Jugendlichen wird nicht personenbezogen gespeichert.",
      },
      {
        title: "Keine Weitergabe an Dritte",
        body: "Daten werden nicht an Dritte weitergeleitet. Sie dienen ausschließlich der Identifizierung des Gerätes.",
      },
      {
        title: "Keine Ausspionierung",
        body: "Mit unserer App werden die Kinder nicht ausspioniert.",
      },
      {
        title: "Absoluter Datenschutz",
        body: "Kidgonet respektiert die Privatsphäre deines Kindes.",
      },
    ] as const,
  },

  webfilter: {
    headline: "Altersgerechter Webfilter",
    intro:
      "Mit der Kidgonet App kannst Du Dein Kind vor gefährlichen Seiten schützen, die z.B. Pornographie oder Gewalt zum Thema haben.",
    typeCards: [
      {
        title: "Browserunabhängiger Webfilter",
        body: "Wir bieten einen browserunabhängigen Webfilter, der mit Deinem Kind mitwächst und sich dem Alter des Kindes anpasst.",
      },
      {
        title: "Intelligente Filterung",
        body: "Die App sieht nur die angeforderte Webadresse Ihres Kindes. Diese wird durch unsere Jugendschutzliste (Blacklist) geprüft und freigegeben bzw. gesperrt.",
      },
      {
        title: "Altersabhängige Filterintensität",
        body: "Je nach Altersgruppe werden unterschiedlich viele Kategorien gesperrt – angepasst an den Entwicklungsstand Deines Kindes.",
      },
    ] as const,
    ageGroups: [
      {
        id: "0-8",
        label: "0 – 8 Jahre",
        description: "Strenge Filterung für junge Kinder",
      },
      {
        id: "9-12",
        label: "9 – 12 Jahre",
        description: "Moderate Filterung für Grundschüler",
      },
      {
        id: "13-15",
        label: "13 – 15 Jahre",
        description: "Grundlegende Filterung für Jugendliche",
      },
    ] as const,
    tableHeadline: "Filterkategorien im Überblick",
    categories: [
      { name: "Ads (Werbung + Tracking)", "0-8": true, "9-12": true, "13-15": true },
      { name: "Banking (Bank- + Finanzdienste)", "0-8": true, "9-12": false, "13-15": false },
      { name: "Blasphemie", "0-8": true, "9-12": true, "13-15": true },
      { name: "Chanology", "0-8": true, "9-12": true, "13-15": true },
      { name: "Schleichhandel (Alkohol / Tabak / Drogen)", "0-8": true, "9-12": true, "13-15": true },
      { name: "CP (mutmaßlich illegale Inhalte)", "0-8": true, "9-12": true, "13-15": true },
      { name: "Cryptojack", "0-8": true, "9-12": true, "13-15": true },
      { name: "Dating", "0-8": true, "9-12": true, "13-15": true },
      { name: "Dyn (Dynamisches DNS)", "0-8": true, "9-12": true, "13-15": true },
      { name: "Facebook", "0-8": true, "9-12": false, "13-15": false },
      { name: "Datei (anonymes Upload + Sharing)", "0-8": true, "9-12": true, "13-15": true },
      { name: "Freeweb (kostenlose Hosting-Dienste)", "0-8": true, "9-12": false, "13-15": false },
      { name: "Glücksspiel (Poker / Casinos)", "0-8": true, "9-12": true, "13-15": true },
      { name: "Gaming", "0-8": true, "9-12": false, "13-15": false },
      { name: "Gov (.Gov-TLD)", "0-8": true, "9-12": true, "13-15": false },
      { name: "Bild (Bildhosting)", "0-8": true, "9-12": false, "13-15": false },
      { name: "Bösartig (bedrohliche Websites)", "0-8": true, "9-12": true, "13-15": true },
      { name: "Pharma (Pharmazeutika + Medikamente)", "0-8": true, "9-12": true, "13-15": true },
      { name: "Piraterie", "0-8": true, "9-12": true, "13-15": true },
      { name: "Pornografie", "0-8": true, "9-12": true, "13-15": true },
      { name: "Proxies (Filter-Umgehung)", "0-8": true, "9-12": true, "13-15": true },
      { name: "Rassismus (bigotte Inhalte)", "0-8": true, "9-12": true, "13-15": true },
      { name: "Social Media", "0-8": true, "9-12": false, "13-15": false },
      { name: "Terrorismus", "0-8": true, "9-12": true, "13-15": true },
      { name: "URL-Kürzung", "0-8": true, "9-12": false, "13-15": false },
      { name: "Video (Video-Websites)", "0-8": true, "9-12": false, "13-15": false },
      { name: "Waffen (Gewalt + Feuerwaffen)", "0-8": true, "9-12": true, "13-15": true },
    ] as const,
  },

  screenTime: {
    headline: "Bildschirmzeitregulierung",
    body: "Die Bildschirmzeit kann über das benutzerfreundliche Elternportal einfach von der Ferne gesteuert werden.",
    bullets: [
      "Sekundengenaue Zeiterfassung",
      "Online & Offline Aktivitäten werden erfasst",
      "Eltern-Portal für Android & iOS",
      "Gesamtonlinezeit pro Tag wird nicht überschritten",
    ],
    screenshots: [
      { label: "Onlinepausen einstellen" },
      { label: "Handy gesperrt" },
      { label: "Unbegrenzte Bildschirmzeit" },
      { label: "Pause" },
    ] as const,
    subFeatures: [
      {
        title: "SOS Button",
        body: "Bei Bedarf kann per SOS-Button sofort der Internet-Zugang auf allen Geräten des Kindes gesperrt werden.",
      },
      {
        title: "Unbegrenzter Zugriff",
        body: "Ebenso können die Eltern die Onlinezeit unbegrenzt freigeben, zum Beispiel in den Ferien oder bei langen Autofahrten.",
      },
      {
        title: "Pause",
        body: "Es können auch Pausen wie z.B. um Schularbeiten zu erledigen festgelegt werden.",
      },
    ] as const,
    ctaLabel: "Damit Deine Kinder sicher surfen – jetzt App 14 Tage kostenlos testen!",
    ctaButton: "Jetzt downloaden!",
  },

  portal: {
    headline: "Benutzerfreundliches Elternportal",
    intro:
      "Übersichtliches und einfach zu bedienendes Elternportal (Gratis als App für iOS und Android vorhanden).",
    licenseExample: {
      headline: "Überblick der Einstellungen",
      description:
        "Ein Abo beinhaltet 5 Lizenzen (1 Gerät = 1 Lizenz). Beispiel: Kind 1 hat ein Smartphone (1 Lizenz), Kind 2 hat Smartphone und Tablet (2 Lizenzen) – zusammen 3 Lizenzen.",
    },
    settingsBullets: [
      "Kind (neu) anmelden",
      "Gesamtonlinezeit festlegen",
      "Internetpausen bestimmen",
      "Sperrbildschirm an/ausschalten",
      "Onlinezeit unbegrenzt freigeben",
      "Extra Onlinezeit hinzufügen",
      "Alle Internetverbindungen sperren (SOS Button)",
      "Support",
      "Standortbestimmung des Kindgeräts",
      "Deaktivierungscode einsehen / bearbeiten",
      "Übersicht geschützter Geräte",
      "Übersicht installierter Apps auf Kindgerät",
    ] as const,
  },

  nummerGegenKummer: {
    headline: "Nummer gegen Kummer",
    intro:
      "In der Kidgonet Jugendschutz App gibt es im Menü einen Link zu NummergegenKummer, falls dein Kind Sorgen oder Probleme hat.",
    mission:
      "Wir von Kidgonet möchten damit Nummer gegen Kummer e.V. unterstützen und Kinder bzw. Jugendliche darüber informieren, wo sie eine vertrauliche, kostenlose und professionelle Online-Beratung bekommen.",
    subHeadline: "Was ist Nummer gegen Kummer?",
    quote:
      "Nummer gegen Kummer e.V. hat sich zum Ziel gesetzt, Kindern, Jugendlichen und Eltern ein kompetenter Ansprechpartner zu sein bei kleinen und großen Sorgen.",
    url: "https://www.nummergegenkummer.de/",
    urlLabel: "Mehr über Nummer gegen Kummer e.V.",
  },

  moreInfo: {
    headline: "Weitere Informationen",
    cards: [
      {
        title: "Privatsphäre des Kindes",
        body: "Die Privatsphäre der Kinder ist uns wichtig. Keine personenbezogenen Speicherungen, keine Datenauswertungen für Eltern, keine Weitergabe an Dritte.",
      },
      {
        title: "Deinstallationsschutz",
        body: "Die Kidgonet App kann vom Kind nicht deinstalliert werden. Nur Eltern können die App mit einem 4-stelligen Code entfernen.",
      },
      {
        title: "Geräteortung",
        body: "Die App ermöglicht eine Ortung, um das eigene Kind im Elternportal zu lokalisieren. Kinder ab 15 Jahren können diese Funktion eigenständig deaktivieren.",
      },
      {
        title: "Performance",
        body: "Kidgonet verzichtet auf unnötige Funktionen und ist deshalb für Eltern und Kinder sehr einfach zu bedienen und sehr schnell.",
      },
      {
        title: "SOS-Button",
        body: "Bei Bedarf können Eltern per SOS-Button sofort den Internet-Zugang auf allen Geräten des Kindes sperren. Nur Telefonate und SMS bleiben möglich.",
      },
      {
        title: "Extra Zeit hinzufügen",
        body: "Braucht dein Kind spontan noch ein paar Minuten mehr Onlinezeit, ist das schnell und unkompliziert möglich – mit nur einem Klick für alle Geräte.",
      },
    ] as const,
  },
} as const;
