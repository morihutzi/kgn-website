export type FeatureGridIcon = "timer" | "devices" | "apps" | "filter";

export type FeatureCard = {
  id: string;
  title: string;
  body: string;
  icon: FeatureGridIcon;
  image: { src: string; alt: string };
};

export type PrivacyBullet = { id: string; title: string; body: string };

export type AgeGroup = {
  id: "0-8" | "9-12" | "13-15";
  label: string;
  short: string;
  description: string;
};

export const featuresPage = {
  hero: {
    sectionId: "intro",
    eyebrow: "Sicher online unterwegs",
    headlineLead: "Go online.",
    headlineEmphasis: "Aber sicher.",
    subheadline: "Deshalb wirst du Kidgonet lieben.",
    bullets: [
      {
        id: "hero-bildschirmzeit",
        text: "Bildschirmzeiten ganz einfach festlegen, für alle Geräte",
      },
      {
        id: "hero-webfilter",
        text: "Browserunabhängiger Internetfilter zum Schutz vor unangemessenen Seiten und Inhalten",
      },
      {
        id: "hero-ortung",
        text: "Geräteortung: immer wissen, wo deine Kinder sind",
      },
      {
        id: "hero-pause",
        text: "Musik und Lernapps während der Pause freigeben",
      },
      {
        id: "hero-privacy",
        text: "Privatsphäre deiner Kinder bleibt geschützt",
      },
    ],
    ctaLabel: "Jetzt 7 Tage gratis testen",
    ctaSecondaryLabel: "Funktionen ansehen",
    image: {
      src: "/images/hero/portal.webp",
      alt: "Kidgonet Elternportal auf dem Smartphone",
    },
  },

  featureGrid: {
    sectionId: "funktionen",
    eyebrow: "Funktionen",
    headline: "Das kann die Kidgonet Kinderschutz App",
    sub: "Vier Kernfunktionen, die im Familienalltag den Unterschied machen.",
    ctaLabel: "Damit deine Kinder sicher surfen.",
    ctaSub: "Jetzt App 7 Tage kostenlos testen.",
    ctaButton: "Jetzt downloaden",
    cards: [
      {
        id: "grid-timer",
        title: "Sekundengenaue Zeiterfassung",
        body: "Online und Offline Aktivitäten werden sekundengenau erfasst. Du siehst auf einen Blick, wie viel Bildschirmzeit dein Kind heute hatte.",
        icon: "timer",
        image: { src: "/images/hero/sanduhr.webp", alt: "Sanduhr Zeitanzeige" },
      },
      {
        id: "grid-devices",
        title: "Geräteübergreifend",
        body: "Online Zeiten von Handy und Tablet werden addiert. Bis zu fünf Geräte pro Abo, kein Tageslimit wird durch Gerätewechsel umgangen.",
        icon: "devices",
        image: { src: "/images/hero/portal.webp", alt: "Elternportal" },
      },
      {
        id: "grid-apps",
        title: "Apps während der Pause freigeben",
        body: "Notfall und Lernapps können während der Bildschirmzeit Pause gezielt freigegeben werden. Du entscheidest, was wichtig bleibt.",
        icon: "apps",
        image: { src: "/images/hero/block.webp", alt: "App freigegeben" },
      },
      {
        id: "grid-filter",
        title: "Browserunabhängiger Internetfilter",
        body: "Der Filter wirkt systemweit, unabhängig vom Browser. Unerwünschte Inhalte werden auf allen Geräten und in allen Apps zuverlässig gefiltert.",
        icon: "filter",
        image: {
          src: "/images/hero/internetsperre.webp",
          alt: "Internetsperre",
        },
      },
    ] satisfies readonly FeatureCard[],
  },

  privacy: {
    sectionId: "datenschutz",
    eyebrow: "Datenschutz",
    headline: "Kidgonet spioniert dein Kind nicht aus.",
    intro:
      "Die Privatsphäre der Kinder ist uns wichtig und liegt uns sehr am Herzen, denn auch Kinder haben ein Recht auf Privatsphäre.",
    bullets: [
      {
        id: "privacy-tracking",
        title: "Kein personenbezogenes Tracking",
        body: "Das Online Verhalten der Kinder wird nicht personenbezogen gespeichert. Eltern erhalten keine detaillierten Auswertungen.",
      },
      {
        id: "privacy-thirdparty",
        title: "Keine Weitergabe an Dritte",
        body: "Daten werden nicht weitergeleitet. Sie dienen ausschließlich der Identifizierung des Geräts.",
      },
      {
        id: "privacy-spying",
        title: "Keine Ausspionierung",
        body: "Wir reduzieren unsere Features auf die wichtigsten Einstellungsmöglichkeiten. Keine Chatverläufe, keine Browser Historie.",
      },
      {
        id: "privacy-absolute",
        title: "Absoluter Datenschutz",
        body: "DSGVO konform, Hosting in deutschen Rechenzentren, keine Tracking Pixel, kein Profiling.",
      },
    ] satisfies readonly PrivacyBullet[],
  },

  webfilter: {
    sectionId: "webfilter",
    eyebrow: "Webfilter",
    headline: "Ein Internetfilter, der mit dem Alter mitwächst.",
    intro:
      "Mit der Kidgonet App schützt du dein Kind vor Seiten mit Pornografie, Gewalt oder anderen gefährlichen Inhalten. Der Filter passt sich automatisch dem Alter deines Kindes an, damit nichts blockiert wird, was altersgerecht ist.",
    ageGroups: [
      {
        id: "0-8",
        label: "0 bis 8 Jahre",
        short: "Kleinkind",
        description: "Strenge Filterung, weiter Schutzschirm",
      },
      {
        id: "9-12",
        label: "9 bis 12 Jahre",
        short: "Grundschule",
        description: "Moderate Filterung, mehr Freiraum",
      },
      {
        id: "13-15",
        label: "13 bis 15 Jahre",
        short: "Jugendlich",
        description: "Grundlegende Filterung, mehr Eigenverantwortung",
      },
    ] satisfies readonly AgeGroup[],
  },

  screenTime: {
    sectionId: "bildschirmzeit",
    eyebrow: "Bildschirmzeit",
    headline: "Bildschirmzeit Regulierung",
    body: "Steuere die Bildschirmzeit deines Kindes aus der Ferne. Du bestimmst, wie lange dein Kind online sein darf, planst Pausen oder sperrst den Internet Zugang komplett.",
    bullets: [
      { id: "st-sekunden", text: "Sekundengenaue Zeiterfassung" },
      { id: "st-online-offline", text: "Online und Offline Aktivitäten werden erfasst" },
      { id: "st-portal", text: "Eltern Portal für Android und iOS" },
      { id: "st-limit", text: "Gesamtonlinezeit pro Tag wird nicht überschritten" },
    ],
    image: {
      src: "/images/hero/internetsperre.webp",
      alt: "Internetsperre in der Kidgonet App",
    },
    subFeatures: [
      {
        id: "sub-sos",
        title: "SOS Button",
        body: "Ein Klick im Elternportal blockiert sofort den Internet Zugang auf allen Geräten des Kindes.",
      },
      {
        id: "sub-unlimited",
        title: "Unbegrenzter Zugriff",
        body: "Für Ferien oder lange Autofahrten kannst du die Zeitbegrenzung temporär aufheben.",
      },
      {
        id: "sub-pause",
        title: "Pausen planen",
        body: "Plane wiederkehrende Pausen für Hausaufgaben, Mahlzeiten oder Schlafenszeit.",
      },
    ],
    ctaLabel: "Damit deine Kinder sicher surfen.",
    ctaSub: "Jetzt App 7 Tage kostenlos testen.",
    ctaButton: "Jetzt downloaden",
  },

  portal: {
    sectionId: "elternportal",
    eyebrow: "Elternportal",
    headline: "Benutzerfreundliches Elternportal",
    intro:
      "Übersichtliches und einfach zu bedienendes Elternportal, gratis als App für iOS und Android. Damit verwaltest du Zeitlimits, Auszeiten und vieles mehr.",
    licenseExample: {
      headline: "Lizenz Beispiel",
      description:
        "Ein Abo beinhaltet fünf Lizenzen (1 Gerät = 1 Lizenz). Beispiel: Kind 1 hat ein Smartphone (1 Lizenz), Kind 2 hat Smartphone und Tablet (2 Lizenzen). Zusammen brauchst du 3 Lizenzen, denn auf jedem internetfähigen Gerät wird die Kidgonet App installiert.",
    },
    settingsHeadline: "Überblick der Einstellungen",
    settingsBullets: [
      { id: "set-kind", text: "Kind neu anmelden" },
      { id: "set-time", text: "Gesamtonlinezeit festlegen" },
      { id: "set-pause", text: "Internetpausen bestimmen" },
      { id: "set-sperr", text: "Sperrbildschirm an und ausschalten" },
      { id: "set-unbegrenzt", text: "Onlinezeit unbegrenzt freigeben" },
      { id: "set-extra", text: "Extra Onlinezeit hinzufügen" },
      { id: "set-sos", text: "Alle Internetverbindungen sperren (SOS)" },
      { id: "set-support", text: "Support kontaktieren" },
      { id: "set-standort", text: "Standortbestimmung des Kindgeräts" },
      { id: "set-code", text: "Deaktivierungscode einsehen und bearbeiten" },
      { id: "set-geraete", text: "Übersicht geschützter Geräte" },
      { id: "set-apps", text: "Übersicht installierter Apps" },
    ],
  },

  nummerGegenKummer: {
    sectionId: "nummer-gegen-kummer",
    eyebrow: "Partner",
    headline: "Nummer gegen Kummer",
    intro:
      "In der Kidgonet Jugendschutz App findet dein Kind einen Link zu NummergegenKummer, falls Sorgen oder Probleme aufkommen. Wir unterstützen den Verein und machen das Angebot für Kinder sichtbar.",
    subHeadline: "Was ist Nummer gegen Kummer?",
    quote:
      "Nummer gegen Kummer e.V. hat sich zum Ziel gesetzt, Kindern, Jugendlichen und Eltern ein kompetenter Ansprechpartner zu sein bei kleinen und großen Sorgen.",
    quoteContext:
      "Täglich rund 1500 Anrufe. Liebeskummer, Schulprobleme oder ernste Notlagen. Anonym, kostenlos und professionell.",
    url: "https://www.nummergegenkummer.de/",
    urlLabel: "Mehr über Nummer gegen Kummer e.V.",
  },

  moreInfo: {
    sectionId: "weitere-informationen",
    eyebrow: "Weitere Informationen",
    headline: "Was Kidgonet sonst noch können muss",
    cards: [
      {
        id: "more-privacy",
        title: "Privatsphäre des Kindes",
        body: "Keine personenbezogenen Speicherungen, keine Datenauswertungen für Eltern, keine Weitergabe an Dritte.",
      },
      {
        id: "more-deinstall",
        title: "Deinstallationsschutz",
        body: "Die Kidgonet App kann vom Kind nicht deinstalliert werden. Nur Eltern können die App mit einem 4-stelligen Code entfernen.",
      },
      {
        id: "more-ortung",
        title: "Geräteortung",
        body: "Die App ermöglicht eine Ortung im Elternportal. Kinder ab 15 Jahren können diese Funktion eigenständig deaktivieren.",
      },
      {
        id: "more-performance",
        title: "Performance",
        body: "Kidgonet verzichtet auf unnötige Funktionen und ist deshalb sehr schnell. Einstellungen werden sofort am Gerät übernommen.",
      },
      {
        id: "more-sos",
        title: "SOS Button",
        body: "Per Klick alle Geräte des Kindes offline schalten. Nur Telefonate und SMS bleiben möglich. Optional Musikhören erlaubt.",
      },
      {
        id: "more-extra",
        title: "Extra Zeit hinzufügen",
        body: "Spontan ein paar Minuten mehr Onlinezeit? Schnell und unkompliziert mit einem Klick für alle Geräte möglich.",
      },
    ],
  },
} as const;
