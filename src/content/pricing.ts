import { trialCopy } from "@/content/site";

export const pricingPage = {
  hero: {
    headline: "Schütze Dein Kind jetzt und teste Kidgonet ohne Risiko",
    subheadline: trialCopy.ctaJetzt,
  },
  highlights: [
    {
      title: trialCopy.highlightTitle,
      description:
        "Voller Zugriff auf alle Funktionen während der Testphase. Bis zu fünf Geräte können angemeldet werden.",
    },
    {
      title: "30 Tage Geld zurück",
      description:
        "Du bist nicht zufrieden? Wir erstatten Dir den Beitrag innerhalb der ersten 30 Tage zurück — ohne Wenn und Aber.",
    },
    {
      title: "Jederzeit kündbar",
      description:
        "Nach der Testphase verlängert sich Dein Abo automatisch. Du kannst es jederzeit im Elternportal kündigen.",
    },
  ],
  includedFeatures: {
    headline: "Alle Tarife enthalten",
    items: [
      "Bildschirmzeitregulierung",
      "Altersgerechter Webfilter",
      "Geräteortung",
      "Nummer gegen Kummer",
      "Umfangreicher Support",
    ],
  },
} as const;
