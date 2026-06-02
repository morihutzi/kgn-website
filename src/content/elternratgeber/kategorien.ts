export type ElternratgeberKategorieSlug =
  | "expert-talk"
  | "medientipps"
  | "smartphones-tablets";

export type BrandFarbeKey = "yellow" | "green" | "dark";

export type ElternratgeberKategorie = {
  slug: ElternratgeberKategorieSlug;
  name: string;
  beschreibung: string;
  brandFarbe: BrandFarbeKey;
};

/**
 * Kategorien-Akzentfarben aus der Brand-Palette ohne brand-orange
 * (wirkt zu rot).
 *  - yellow = brand-yellow (#f9b000)
 *  - green  = brand-green  (#c6c500)
 *  - dark   = text-dark    (#4a4a49)
 */
export const elternratgeberKategorien: ElternratgeberKategorie[] = [
  {
    slug: "expert-talk",
    name: "Expert Talk",
    beschreibung:
      "Interviews und Gespräche mit Fachleuten zu Medienerziehung, digitalem Familienalltag und Kinderschutz.",
    brandFarbe: "dark",
  },
  {
    slug: "medientipps",
    name: "Medientipps",
    beschreibung:
      "Praktische Tipps und Hintergrundwissen für den sicheren Umgang mit Medien in der Familie.",
    brandFarbe: "yellow",
  },
  {
    slug: "smartphones-tablets",
    name: "Smartphones & Tablets",
    beschreibung:
      "Alles rund um Auswahl, Einstellungen und Sicherheit von Smartphones und Tablets für Kinder.",
    brandFarbe: "green",
  },
];

export function getKategorieBySlug(
  slug: string,
): ElternratgeberKategorie | undefined {
  return elternratgeberKategorien.find((k) => k.slug === slug);
}

export const brandFarbeClasses: Record<
  BrandFarbeKey,
  {
    text: string;
    border: string;
    bg: string;
  }
> = {
  yellow: {
    text: "text-brand-yellow",
    border: "border-brand-yellow",
    bg: "bg-brand-yellow",
  },
  green: {
    text: "text-brand-green",
    border: "border-brand-green",
    bg: "bg-brand-green",
  },
  dark: {
    text: "text-text-dark",
    border: "border-text-dark",
    bg: "bg-text-dark",
  },
};
