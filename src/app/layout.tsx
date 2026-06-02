import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SiteChrome } from "@/components/layout/SiteChrome";
import {
  JsonLd,
  organizationSchema,
  websiteSchema,
} from "@/components/seo/JsonLd";
import { CookieConsentBanner } from "@/components/consent/CookieConsentBanner";
import { Analytics } from "@/components/analytics/Analytics";
import { trialCopy } from "@/content/site";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kidgonet.de"),
  title: {
    default: "Kidgonet – Kinderschutz App für iOS & Android",
    template: "%s | Kidgonet",
  },
  description: `Kinderschutz-App für iOS & Android: Bildschirmzeit, Webfilter, Standort und App-Sperre — DSGVO-konform. ${trialCopy.metaShort}`,
  keywords: [
    "Kinderschutz App",
    "Kindersicherung App",
    "Bildschirmzeit begrenzen",
    "Internetfilter Kinder",
    "App-Blocker Kinder",
    "Elternkontrolle",
  ],
  icons: {
    icon: [
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/brand/favicon-180.png",
  },
  alternates: {
    languages: { de: "https://www.kidgonet.de" },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Kidgonet",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${openSans.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <SiteChrome header={<Header />} footer={<Footer />}>
          {children}
        </SiteChrome>
        <CookieConsentBanner />
        <Analytics />
      </body>
    </html>
  );
}
