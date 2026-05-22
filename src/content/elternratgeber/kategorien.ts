export type ElternratgeberKategorieSlug =
  | "expert-talk"
  | "medientipps"
  | "smartphones-tablets";

export type ElternratgeberKategorie = {
  slug: ElternratgeberKategorieSlug;
  name: string;
  beschreibung: string;
  farbe: string;
  icon: "talk" | "tip" | "phone";
};

export const elternratgeberKategorien: ElternratgeberKategorie[] = [
  {
    slug: "expert-talk",
    name: "Expert Talk",
    beschreibung:
      "Interviews und Gespräche mit Fachleuten zu Medienerziehung, digitalem Familienalltag und Kinderschutz.",
    farbe: "#7C3AED",
    icon: "talk",
  },
  {
    slug: "medientipps",
    name: "Medientipps",
    beschreibung:
      "Praktische Tipps und Hintergrundwissen für den sicheren Umgang mit Medien in der Familie.",
    farbe: "#0EA5E9",
    icon: "tip",
  },
  {
    slug: "smartphones-tablets",
    name: "Smartphones & Tablets",
    beschreibung:
      "Alles rund um Auswahl, Einstellungen und Sicherheit von Smartphones und Tablets für Kinder.",
    farbe: "#F97316",
    icon: "phone",
  },
];

export function getKategorieBySlug(
  slug: string,
): ElternratgeberKategorie | undefined {
  return elternratgeberKategorien.find((k) => k.slug === slug);
}
