"use client";

import { useEffect } from "react";

type Props = {
  slug: string;
  kategorie: string;
};

declare global {
  interface Window {
    _paq?: unknown[];
  }
}

export function ScrollTracker({ slug, kategorie }: Props) {
  useEffect(() => {
    let fired = false;
    const handler = () => {
      if (fired) return;
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop || 0;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = scrollTop / docHeight;
      if (pct >= 0.75) {
        fired = true;
        if (Array.isArray(window._paq)) {
          window._paq.push([
            "trackEvent",
            "Elternratgeber",
            "ArticleRead",
            `${kategorie}/${slug}`,
          ]);
        }
        window.removeEventListener("scroll", handler);
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [slug, kategorie]);

  return null;
}
