import { siteConfig } from "@/content/site";

type JsonLdData = Record<string, unknown>;

export function JsonLd({ data }: { data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema: JsonLdData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.kidgonet.de/#organization",
  name: "Kidgonet",
  legalName: "Kidgonet GmbH",
  url: "https://www.kidgonet.de",
  logo: {
    "@type": "ImageObject",
    url: "https://www.kidgonet.de/brand/logo.png",
    width: 200,
    height: 60,
  },
  foundingDate: "2022",
  foundingLocation: {
    "@type": "Place",
    addressCountry: "DE",
    addressLocality: "Brunnthal",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@kidgonet.de",
    contactType: "customer service",
    availableLanguage: "German",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Eugen-Sänger-Ring 13",
    addressLocality: "Brunnthal",
    postalCode: "85649",
    addressCountry: "DE",
  },
  award: "Bayerischer Digitalpreis 2025",
  sameAs: [
    "https://www.instagram.com/kidgonet",
    "https://www.facebook.com/kidgonet",
    "https://www.linkedin.com/company/kidgonet-jugenschutzapp",
    siteConfig.appStoreUrl,
    siteConfig.playStoreUrl,
  ],
};

export const websiteSchema: JsonLdData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.kidgonet.de/#website",
  name: "Kidgonet",
  url: "https://www.kidgonet.de",
  inLanguage: "de-DE",
  publisher: { "@id": "https://www.kidgonet.de/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://www.kidgonet.de/elternratgeber?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const softwareApplicationSchema: JsonLdData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Kidgonet",
  operatingSystem: "iOS, Android",
  applicationCategory: "UtilitiesApplication",
  offers: [
    {
      "@type": "Offer",
      name: "Monatsabo",
      price: "6.99",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      description: `${siteConfig.trialDays} Tage kostenlos testen, monatlich kündbar, gilt für die ganze Familie`,
    },
    {
      "@type": "Offer",
      name: "Jahresabo",
      price: "49.99",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      description: `${siteConfig.trialDays} Tage kostenlos testen, jährlich abgerechnet, gilt für die ganze Familie`,
    },
  ],
  description:
    "DSGVO-konforme Kindersicherungs-App für iOS und Android, in Deutschland entwickelt mit Servern und Datenspeicherung ausschließlich in Deutschland. Bildschirmzeit begrenzen, Webfilter einrichten, Standort verfolgen und Apps sperren.",
  inLanguage: "de-DE",
  countryOfOrigin: {
    "@type": "Country",
    name: "Deutschland",
  },
  author: { "@id": "https://www.kidgonet.de/#organization" },
  publisher: { "@id": "https://www.kidgonet.de/#organization" },
  url: "https://www.kidgonet.de",
  downloadUrl: [siteConfig.appStoreUrl, siteConfig.playStoreUrl],
  featureList: [
    "Altersgerechter, browserunabhängiger Webfilter",
    "Bildschirmzeitsteuerung geräteübergreifend",
    "App-Sperrung und App-Freigabe",
    "Geräteortung in Echtzeit",
    "Bildschirmpausen mit Ausnahmen für Lern- und Musik-Apps",
    "SOS-Funktion für Kinder",
    "Zentrales Elternportal",
    "DSGVO-konform, Hosting in Deutschland",
  ],
  award: "Bayerischer Digitalpreis 2025",
};

export function faqPageSchema(
  items: Array<{ question: string; answer: string }>,
): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function howToSchema({
  name,
  description,
  totalTime,
  steps,
  image,
}: {
  name: string;
  description: string;
  /** ISO 8601 duration, e.g. "PT5M" für 5 Minuten */
  totalTime?: string;
  steps: Array<{ name: string; text: string; image?: string }>;
  image?: string;
}): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    ...(totalTime ? { totalTime } : {}),
    ...(image ? { image } : {}),
    step: steps.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: s.name,
      text: s.text,
      ...(s.image ? { image: s.image } : {}),
    })),
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>,
): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
