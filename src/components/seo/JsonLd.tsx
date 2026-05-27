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
  name: "Kidgonet",
  legalName: "Kidgonet GmbH",
  url: "https://www.kidgonet.de",
  logo: "https://www.kidgonet.de/brand/logo.png",
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
  sameAs: [
    "https://www.instagram.com/kidgonet",
    "https://www.facebook.com/kidgonet",
  ],
};

export const websiteSchema: JsonLdData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kidgonet",
  url: "https://www.kidgonet.de",
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
  offers: {
    "@type": "Offer",
    price: "2.99",
    priceCurrency: "EUR",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
  },
  description:
    "Kindersicherungs-App für iOS und Android. Bildschirmzeit begrenzen, Webfilter einrichten, Standort verfolgen und Apps sperren.",
  url: "https://www.kidgonet.de",
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
