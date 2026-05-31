"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { primaryNav, siteConfig } from "@/content/site";

/**
 * Mobile-Navigation — Hamburger-Button + aufklappendes Panel unter dem Header.
 * Sichtbar nur unterhalb von md (Desktop nutzt die Inline-Nav im Header).
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Body-Scroll sperren und Escape zum Schließen, solange das Menü offen ist.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-[6px] border-2 border-brand-yellow text-brand-yellow"
      >
        {open ? (
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 4l14 14M18 4L4 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 1h20M1 8h20M1 15h20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {open && (
        <>
          {/* Backdrop — schließt das Menü beim Tippen daneben */}
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-20 z-40 bg-black/30"
          />

          {/* Panel — unter dem Header eingeblendet */}
          <nav
            id="mobile-menu"
            aria-label="Hauptnavigation"
            className="fixed inset-x-0 top-20 z-50 border-b border-black/5 bg-white shadow-lg"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-text-dark transition-colors hover:bg-surface-muted hover:text-brand-yellow"
                  >
                    {item.label}
                    {item.badge && (
                      <span className="ml-2 rounded-full bg-brand-yellow px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={siteConfig.portalLoginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center rounded-lg px-3 py-3 text-base font-medium text-text-dark transition-colors hover:bg-surface-muted hover:text-brand-yellow"
                >
                  Login
                </Link>
              </li>
            </ul>

            <div className="px-4 pb-5">
              <Button
                href={siteConfig.portalWelcomeUrl}
                external
                size="lg"
                className="w-full"
              >
                Hol dir Kidgonet
              </Button>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}
