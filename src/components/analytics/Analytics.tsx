"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { readConsent, type ConsentState } from "@/lib/consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    _paq?: unknown[];
  }
}

const GTM_ID = "GTM-5KB8L2VZ";
const MATOMO_URL = "https://cdn.kidgonet.de";
const MATOMO_SITE_ID = "6";

/**
 * Sendet Consent Mode v2 Signale an GTM (window.dataLayer).
 * Funktioniert auch wenn GTM noch nicht geladen ist — GTM liest
 * dataLayer beim Start rückwirkend aus.
 */
function sendGtagConsent(
  type: "default" | "update",
  consent: ConsentState,
): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  // gtag-Funktion anlegen falls noch nicht vorhanden
  if (!window.gtag) {
    window.gtag = function (...args: unknown[]) {
      window.dataLayer!.push(args);
    };
  }
  window.gtag("consent", type, {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
  });
}

/**
 * Lädt Google Tag Manager und Matomo ausschließlich nach Einwilligung.
 *
 * GTM wird mit Consent Mode v2 betrieben:
 *   - Kein GTM-Request ohne mindestens eine Einwilligung
 *   - Consent-Signale werden vor dem GTM-Loader gesetzt
 *   - Bei Widerruf in derselben Sitzung: consent/update an GTM + Matomo opt-out
 */
export function Analytics() {
  const [consent, setConsent] = useState<ConsentState | null>(null);

  useEffect(() => {
    setConsent(readConsent());

    const handler = (e: Event) => {
      const updated = (e as CustomEvent<ConsentState>).detail;
      setConsent(updated);

      // Laufende GTM-Tags über Consent-Änderung informieren
      sendGtagConsent("update", updated);

      // Matomo opt-out bei Widerruf der Analytics-Einwilligung
      if (!updated.analytics && Array.isArray(window._paq)) {
        window._paq.push(["optOutUser"]);
      }
    };

    window.addEventListener("kgn:consent-changed", handler);
    return () => window.removeEventListener("kgn:consent-changed", handler);
  }, []);

  // Kein Consent gesetzt: kein Script, kein Request
  if (!consent) return null;

  const loadGTM = consent.analytics || consent.marketing;
  const analyticsVal = consent.analytics ? "granted" : "denied";
  const marketingVal = consent.marketing ? "granted" : "denied";

  return (
    <>
      {/* Google Tag Manager (inkl. Consent Mode v2) */}
      {loadGTM && (
        <>
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
window.dataLayer=window.dataLayer||[];
function gtag(){window.dataLayer.push(arguments);}
window.gtag=gtag;
/* Consent Mode v2: zuerst Default (denied), dann sofort auf tatsächlichen Stand aktualisieren */
gtag('consent','default',{'analytics_storage':'denied','ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied'});
gtag('consent','update',{'analytics_storage':'${analyticsVal}','ad_storage':'${marketingVal}','ad_user_data':'${marketingVal}','ad_personalization':'${marketingVal}'});
/* GTM laden */
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');
`.trim(),
            }}
          />
          {/* GTM noscript — nur wenn Einwilligung vorhanden */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        </>
      )}

      {/* Matomo (self-hosted, nur bei Analytics-Einwilligung) */}
      {consent.analytics && (
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
})();
`.trim(),
          }}
        />
      )}
    </>
  );
}
