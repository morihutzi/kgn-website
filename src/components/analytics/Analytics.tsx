"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { readConsent, type ConsentState } from "@/lib/consent";

// Build-Zeit-Konstanten aus Umgebungsvariablen (NEXT_PUBLIC_ = im Client-Bundle verfügbar)
const MATOMO_URL = (process.env.NEXT_PUBLIC_MATOMO_URL ?? "").replace(
  /\/$/,
  "",
);
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID ?? "";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID ?? "";

/**
 * Lädt Analytics-Scripts ausschließlich nach erteilter Einwilligung.
 * Reagiert auf Einwilligungsänderungen innerhalb derselben Sitzung.
 *
 * Kategorien:
 *   analytics = Matomo + Google Analytics (GA4)
 *   marketing  = Google Ads + Conversion-Tracking
 */
export function Analytics() {
  // Startet mit null (kein SSR-Mismatch), wird client-seitig gesetzt
  const [consent, setConsent] = useState<ConsentState | null>(null);

  useEffect(() => {
    setConsent(readConsent());

    const handler = (e: Event) => {
      setConsent((e as CustomEvent<ConsentState>).detail);
    };
    window.addEventListener("kgn:consent-changed", handler);
    return () => window.removeEventListener("kgn:consent-changed", handler);
  }, []);

  if (!consent) return null;

  const loadMatomo = consent.analytics && !!MATOMO_URL && !!MATOMO_SITE_ID;
  const loadGA = consent.analytics && !!GA_ID;
  const loadGAds = consent.marketing && !!GADS_ID;
  const loadGtag = loadGA || loadGAds;
  const gtagBootstrapId = GA_ID || GADS_ID;

  return (
    <>
      {/* Matomo (self-hosted) */}
      {loadMatomo && (
        <Script
          id="matomo"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
var _paq = window._paq = window._paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="${MATOMO_URL}/";
  _paq.push(['setTrackerUrl', u+'matomo.php']);
  _paq.push(['setSiteId', '${MATOMO_SITE_ID}']);
  var d=document,g=d.createElement('script'),s=d.getElementsByTagName('script')[0];
  g.async=true;g.src=u+'matomo.js';s.parentNode.insertBefore(g,s);
})();`,
          }}
        />
      )}

      {/* Google Analytics 4 + Google Ads (gemeinsamer gtag.js) */}
      {loadGtag && (
        <>
          <Script
            id="gtag-lib"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtagBootstrapId}`}
            strategy="afterInteractive"
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
${loadGA ? `gtag('config','${GA_ID}');` : ""}
${loadGAds ? `gtag('config','${GADS_ID}');` : ""}`,
            }}
          />
        </>
      )}
    </>
  );
}
