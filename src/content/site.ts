export const siteConfig = {
  name: "Kidgonet",
  tagline: "Go online. Aber sicher!",
  legalName: "Kidgonet GmbH",
  portalLoginUrl: "https://portal.kidgonet.de/#!/login",
  portalRegisterUrl: "https://portal.kidgonet.de/#!/register",
  portalWelcomeUrl: "https://portal.kidgonet.de/welcome",
  appStoreUrl: "https://apps.apple.com/us/app/kidgonet/id6759919131",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=de.kidgonet.app",
};

export type NavLink = {
  label: string;
  href: string;
  badge?: string;
  external?: boolean;
};

export const primaryNav: NavLink[] = [
  { label: "Was kann die App", href: "/was-kann-die-app", badge: "NEU" },
  { label: "Preise", href: "/preise" },
  { label: "Hilfe", href: "/hilfe" },
  { label: "Elternratgeber", href: "/elternratgeber" },
  { label: "Über uns", href: "/ueber-uns" },
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
    { label: "Datenschutz App", href: "/datenschutz-app" },
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
