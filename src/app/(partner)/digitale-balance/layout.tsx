import type { Metadata } from "next";
import { Header } from "@/components/partner/hans-dorfner/layout/header";
import { Footer } from "@/components/partner/hans-dorfner/layout/footer";
import { StickyCta } from "@/components/partner/hans-dorfner/layout/sticky-cta";
import { dorfnerConfig } from "@/components/partner/hans-dorfner/config";

const tenant = dorfnerConfig;

export const metadata: Metadata = {
  title: { absolute: tenant.meta.title },
  description: tenant.meta.description,
  openGraph: {
    title: tenant.meta.title,
    description: tenant.meta.description,
    type: "website",
    locale: "de_DE",
  },
};

/**
 * Eigenständige Partner-Landingpage mit Co-Brand-Chrome (Kidgonet × Hans
 * Dorfner). Die globale Kidgonet-Navigation wird über [[SiteChrome]] auf
 * dieser Route ausgeblendet.
 *
 * Die Komponenten sind 1:1 aus HansDorfnerInitative/web übernommen. Dort ist
 * `--color-surface` ein warmes Beige (#f7f5f2), in kgn-website jedoch Weiß.
 * Wir überschreiben den Token lokal auf diesem Wrapper, damit die Sektionen
 * ihren Original-Ton behalten, ohne den globalen Token zu verändern.
 */
const surfaceScope = {
  "--color-surface": "#f7f5f2",
  "--radius-2xl": "1.25rem",
  "--radius-3xl": "1.75rem",
} as React.CSSProperties;

export default function DigitaleBalanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={surfaceScope}>
      <Header tenant={tenant} />
      <main>{children}</main>
      <Footer tenant={tenant} />
      <StickyCta tenant={tenant} />
    </div>
  );
}
