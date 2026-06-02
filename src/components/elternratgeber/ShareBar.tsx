"use client";

import { useState } from "react";

type Props = {
  url: string;
  title: string;
};

export function ShareBar({ url, title }: Props) {
  const [copied, setCopied] = useState(false);
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const linkClass =
    "rounded-full bg-brand-yellow px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-[#e09e00]";

  return (
    <div className="mx-auto flex w-full max-w-[760px] flex-wrap items-center gap-3 px-5 pb-8 sm:px-8">
      <span className="text-sm font-extrabold uppercase tracking-wide text-text-dark">
        Teilen:
      </span>
      <a
        href={`https://wa.me/?text=${encodedTitle}%20${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        WhatsApp
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        Facebook
      </a>
      <a
        href={`mailto:?subject=${encodedTitle}&body=${encoded}`}
        className={linkClass}
      >
        Mail
      </a>
      <button type="button" onClick={copy} className={linkClass}>
        {copied ? "Link kopiert" : "Link kopieren"}
      </button>
    </div>
  );
}
