export type ElternratgeberKategorieSlug =
  | "expert-talk"
  | "medientipps"
  | "smartphones-tablets";

export type BrandFarbeKey = "yellow" | "orange" | "green";

export type ElternratgeberKategorie = {
  slug: ElternratgeberKategorieSlug;
  name: string;
  beschreibung: string;
  brandFarbe: BrandFarbeKey;
};

/**
 * Kategorien-Farben kommen ausschließlich aus der Kidgonet-Brand-Palette.
 * - yellow = brand-yellow (#f9b000)
 * - orange = brand-orange (#fc5802)
 * - green  = brand-green  (#c6c500)
 */
export const elternratgeberKategorien: ElternratgeberKategorie[] = [
  {
    slug: "expert-talk",
    name: "Expert Talk",
    beschreibung:
      "Interviews und Gespräche mit Fachleuten zu Medienerziehung, digitalem Familienalltag und Kinderschutz.",
    brandFarbe: "orange",
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
    bg: string;
    text: string;
    border: string;
  }
> = {
  yellow: {
    bg: "bg-brand-yellow",
    text: "text-brand-yellow",
    border: "border-brand-yellow",
  },
  orange: {
    bg: "bg-brand-orange",
    text: "text-brand-orange",
    border: "border-brand-orange",
  },
  green: {
    bg: "bg-brand-green",
    text: "text-brand-green",
    border: "border-brand-green",
  },
};
