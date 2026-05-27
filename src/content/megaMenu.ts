export type MegaMenuIcon =
  | "phone"
  | "filter"
  | "pin"
  | "support"
  | "portal"
  | "lock"
  | "medal"
  | "check";

export type MegaMenuItem = {
  title: string;
  description: string;
  icon: MegaMenuIcon;
  href: string;
  badge?: string;
};

export type MegaMenuColumn = {
  headline: string;
  items: MegaMenuItem[];
};

export const wasKannDieAppMega: {
  features: MegaMenuColumn;
  abos: MegaMenuColumn;
} = {
  features: {
    headline: "Die wichtigsten Funktionen im Überblick",
    items: [
      {
        title: "Bildschirmzeitregulierung",
        description:
          "Zuverlässige und geräteübergreifende Bildschirmzeitmessung.",
        icon: "phone",
        href: "/was-kann-die-app#bildschirmzeit",
      },
      {
        title: "Altersgerechter Webfilter",
        description:
          "Browserunabhängiger Webfilter, der mit dem Kind mitwächst und der sich dem Alter des Kindes anpasst.",
        icon: "filter",
        href: "/was-kann-die-app#webfilter",
      },
      {
        title: "Geräteortung",
        description: "Der Standort Ihres Kindes kann jederzeit eingesehen werden.",
        icon: "pin",
        href: "/was-kann-die-app#geraeteortung",
      },
      {
        title: "Nummer gegen Kummer",
        description:
          "In der Kidgonet App gibt es einen Link zu NummergegenKummer, falls das Kind Sorgen oder Probleme hat.",
        icon: "support",
        href: "/was-kann-die-app#nummer-gegen-kummer",
      },
      {
        title: "Benutzerfreundliches Elternportal",
        description:
          "Übersichtliches und einfach zu bedienendes Elternportal. Damit können ganz einfach Zeitlimits, Auszeiten u.v.m verwaltet werden.",
        icon: "portal",
        href: "/was-kann-die-app#elternportal",
      },
      {
        title: "Schutz der Privatsphäre",
        description:
          "Die Privatsphäre der Kinder ist uns wichtig und liegt uns sehr am Herzen.",
        icon: "lock",
        href: "/was-kann-die-app#privatsphaere",
      },
    ],
  },
  abos: {
    headline: "Abo",
    items: [
      {
        title: "Jahresabo",
        badge: "Empfohlen",
        description:
          "Unser Spar-Abo: Unbegrenzter Zugang und alle Funktionen zum besten Preis.",
        icon: "medal",
        href: "/preise#jahresabo",
      },
      {
        title: "Monatsabo",
        description:
          "Monatsabo: Unbegrenzter Zugang und alle Funktionen zum guten Preis.",
        icon: "check",
        href: "/preise#monatsabo",
      },
    ],
  },
};
