export const siteConfig = {
  name: "Kidgonet",
  tagline: "Go online. Aber sicher!",
  legalName: "Kidgonet GmbH",
  portalLoginUrl: "https://portal.kidgonet.de/#!/login",
  portalRegisterUrl: "https://portal.kidgonet.de/#!/register",
  portalWelcomeUrl: "https://portal.kidgonet.de/welcome",
  appStoreUrl: "https://apps.apple.com/us/app/kidgonet/id6759919131",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=de.kidgonet.kidprotection.v2",
  /**
   * Medienführerschein — separates, einmalig kostenpflichtiges Programm.
   * Eigene Seite folgt; bis dahin zeigt der Link auf die Live-URL.
   * Später einfach auf den internen Pfad "/medienfuehrerschein" umstellbar.
   */
  medienfuehrerscheinUrl: "https://www.kidgonet.de/medienfuehrerschein/",
  /** Dauer der kostenlosen Testphase in Tagen */
  trialDays: 7,
};

/**
 * Zentral gehaltene Copy-Bausteine rund um die Testphase.
 * Alle Stellen auf der Website ziehen ihre Strings hier raus,
 * damit eine Verlaengerung/Verkuerzung nur an einer Stelle geaendert werden muss.
 */
export const trialCopy = {
  /** "7 Tage kostenlos testen" — Standard-CTA */
  cta: `${siteConfig.trialDays} Tage kostenlos testen`,
  /** "Jetzt 7 Tage kostenlos testen" — Section-Headline-Variante */
  ctaJetzt: `Jetzt ${siteConfig.trialDays} Tage kostenlos testen`,
  /** "Jetzt 7 Tage gratis testen" — alternative Phrasierung */
  ctaGratis: `Jetzt ${siteConfig.trialDays} Tage gratis testen`,
  /** Friction-Reducer-Subline unter CTAs */
  ctaSub: `${siteConfig.trialDays} Tage kostenlos testen, jederzeit kündbar.`,
  /** "7 Tage kostenlos" — Highlight-Title (Pricing-Page) */
  highlightTitle: `${siteConfig.trialDays} Tage kostenlos`,
  /** "Du hast jetzt 7 Tage kostenlos Zugang zu allen Funktionen." */
  trialStartCopy: `Du hast jetzt ${siteConfig.trialDays} Tage kostenlos Zugang zu allen Funktionen.`,
  /** Marker-Label fuer das Journey-Ende */
  afterMarker: `Nach ${siteConfig.trialDays} Tagen`,
  /** Headline der Preise-Seite */
  pageHeadline: `${siteConfig.trialDays} Tage kostenlos testen`,
  /** Lange Meta-Description-Variante */
  metaShort: `${siteConfig.trialDays} Tage kostenlos testen.`,
  /** "Jetzt App 7 Tage kostenlos testen." */
  ctaAppLong: `Jetzt App ${siteConfig.trialDays} Tage kostenlos testen.`,
};

export type NavLink = {
  label: string;
  href: string;
  badge?: string;
  external?: boolean;
};

export const primaryNav: NavLink[] = [
  { label: "Was kann die App", href: "/was-kann-die-app" },
  { label: "Preise", href: "/preise" },
  { label: "Hilfe", href: "/hilfe" },
  { label: "Elternratgeber", href: "/elternratgeber" },
  { label: "Über uns", href: "/ueber-uns" },
];

/**
 * SEO-Landing-Pages — werden im Footer eigenstaendig verlinkt, damit
 * sie nicht als Orphan-Pages enden und internen Linkjuice bekommen.
 */
export const landingPages: NavLink[] = [
  { label: "Kindersicherung Handy", href: "/kindersicherung-handy" },
  { label: "Kindersicherung iPhone", href: "/kindersicherung-iphone" },
  { label: "Kindersicherung Android", href: "/kindersicherung-android" },
  { label: "Bildschirmzeit-App", href: "/bildschirmzeit-app" },
  { label: "Kinderschutz-App aus Deutschland", href: "/kinderschutz-app-deutschland" },
  { label: "Glossar", href: "/glossar" },
];

export const footerLinks = {
  general: [
    { label: "Jobs", href: "/jobs" },
    { label: "Presse", href: "/presse" },
  ],
  legal: [
    { label: "AGB", href: "/agb" },
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "Datenschutz Android App", href: "/datenschutz-android-app" },
    { label: "Datenschutz iOS App", href: "/datenschutz-ios-app" },
  ],
  social: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/Kidgonet/",
      external: true as const,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/kidgonet/",
      external: true as const,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/kidgonet-jugenschutzapp",
      external: true as const,
    },
  ],
};
