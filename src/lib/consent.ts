export type ConsentState = {
  analytics: boolean;
  marketing: boolean;
};

const COOKIE_NAME = "kgn_consent_v1";

// 1 Jahr Laufzeit
const MAX_AGE = 365 * 24 * 60 * 60;

/**
 * Gibt die Cookie-Domain zurück.
 * Auf kidgonet.de und allen Subdomains: "kidgonet.de" (ohne führenden Punkt,
 * wird von Browsern als wildcard *.kidgonet.de interpretiert).
 * Lokal/andere Domain: kein explizites Domain-Attribut.
 */
function getCookieDomain(): string {
  if (typeof window === "undefined") return "";
  const { hostname } = window.location;
  if (hostname === "kidgonet.de" || hostname.endsWith(".kidgonet.de")) {
    return "kidgonet.de";
  }
  return "";
}

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = document.cookie.match(
    new RegExp("(?:^|;\\s*)" + escaped + "=([^;]*)"),
  );
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name: string, value: string): void {
  if (typeof document === "undefined") return;
  const domain = getCookieDomain();
  const domainAttr = domain ? `;domain=${domain}` : "";
  const secure = window.location.protocol === "https:" ? ";Secure" : "";
  document.cookie = [
    `${name}=${encodeURIComponent(value)}`,
    `path=/`,
    `max-age=${MAX_AGE}`,
    `SameSite=Lax`,
    domainAttr,
    secure,
  ]
    .filter(Boolean)
    .join(";");
}

/** Liest den Einwilligungsstatus aus dem subdomain-übergreifenden Cookie. */
export function readConsent(): ConsentState | null {
  try {
    const raw = readCookie(COOKIE_NAME);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as unknown;
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      typeof (parsed as Record<string, unknown>).analytics === "boolean" &&
      typeof (parsed as Record<string, unknown>).marketing === "boolean"
    ) {
      return parsed as ConsentState;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Speichert den Einwilligungsstatus als Cookie mit domain=kidgonet.de,
 * sodass er von www.kidgonet.de, portal.kidgonet.de usw. gelesen werden kann.
 */
export function writeConsent(state: ConsentState): void {
  writeCookie(COOKIE_NAME, JSON.stringify(state));
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent<ConsentState>("kgn:consent-changed", { detail: state }),
    );
  }
}

/** True, wenn der Nutzer bereits eine Entscheidung getroffen hat (egal welche). */
export function hasDecided(): boolean {
  return readConsent() !== null;
}

/** Öffnet den Cookie-Banner programmatisch (z.B. aus Footer oder Datenschutzseite). */
export function openConsentBanner(): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("kgn:consent-open"));
  }
}
