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

  return (
    <div className="mx-auto flex w-full max-w-[760px] flex-wrap items-center gap-3 px-5 pb-8 sm:px-8">
      <span className="text-sm font-semibold text-text-dark/70">Teilen:</span>
      <a
        href={`https://wa.me/?text=${encodedTitle}%20${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-[var(--color-border)] px-4 py-1.5 text-sm font-semibold text-text-dark hover:border-brand-yellow hover:text-brand-yellow transition-colors"
      >
        WhatsApp
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-[var(--color-border)] px-4 py-1.5 text-sm font-semibold text-text-dark hover:border-brand-yellow hover:text-brand-yellow transition-colors"
      >
        Facebook
      </a>
      <a
        href={`mailto:?subject=${encodedTitle}&body=${encoded}`}
        className="rounded-full border border-[var(--color-border)] px-4 py-1.5 text-sm font-semibold text-text-dark hover:border-brand-yellow hover:text-brand-yellow transition-colors"
      >
        Mail
      </a>
      <button
        type="button"
        onClick={copy}
        className="rounded-full border border-[var(--color-border)] px-4 py-1.5 text-sm font-semibold text-text-dark hover:border-brand-yellow hover:text-brand-yellow transition-colors"
      >
        {copied ? "Link kopiert" : "Link kopieren"}
      </button>
    </div>
  );
}
