"use client";

import { usePathname } from "next/navigation";

type SiteChromeProps = {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
};

/**
 * Blendet die globale Kidgonet-Navigation (Header/Footer) auf Partner-
 * Landingpages aus, die ihr eigenes Co-Brand-Chrome mitbringen
 * (z.B. /digitale-balance). Auf allen anderen Routen unverändert.
 *
 * Header/Footer werden als bereits server-gerenderte Nodes übergeben, damit
 * sie Server-Komponenten bleiben — diese Wrapper-Komponente entscheidet nur
 * über das Rendern.
 */
const BARE_PREFIXES = ["/digitale-balance"];

export function SiteChrome({ header, footer, children }: SiteChromeProps) {
  const pathname = usePathname();
  const bare = BARE_PREFIXES.some((p) => pathname?.startsWith(p));

  if (bare) return <>{children}</>;

  return (
    <>
      {header}
      <main className="flex-1">{children}</main>
      {footer}
    </>
  );
}
