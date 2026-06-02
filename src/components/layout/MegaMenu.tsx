"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type {
  MegaMenuColumn,
  MegaMenuIcon,
  MegaMenuItem,
} from "@/content/megaMenu";

type MegaMenuProps = {
  triggerLabel: string;
  triggerHref: string;
  triggerBadge?: string;
  features: MegaMenuColumn;
  abos: MegaMenuColumn;
};

const OPEN_DELAY_MS = 80;
const CLOSE_DELAY_MS = 140;

export function MegaMenu({
  triggerLabel,
  triggerHref,
  triggerBadge,
  features,
  abos,
}: MegaMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const clearTimers = () => {
    if (openTimer.current) {
      clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleOpen = () => {
    clearTimers();
    openTimer.current = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
  };

  const scheduleClose = () => {
    clearTimers();
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY_MS);
  };

  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  useEffect(() => () => clearTimers(), []);

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.relatedTarget as Node | null)
    ) {
      setOpen(false);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={scheduleOpen}
      onMouseLeave={scheduleClose}
      onFocus={scheduleOpen}
      onBlur={handleBlur}
    >
      <Link
        href={triggerHref}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={panelId}
        className={`inline-flex items-center gap-1 text-[15px] font-light transition-colors ${
          open ? "text-brand-yellow" : "text-text-dark hover:text-brand-yellow"
        }`}
      >
        {triggerLabel}
        {triggerBadge && (
          <span className="ml-1 rounded-full bg-brand-yellow px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black">
            {triggerBadge}
          </span>
        )}
        <svg
          aria-hidden="true"
          viewBox="0 0 12 12"
          width="10"
          height="10"
          className={`ml-1 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M2 4l4 4 4-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      {open && (
        <>
          <div
            aria-hidden="true"
            className="fixed inset-x-0 top-20 z-40 hidden h-px lg:block"
          />
          <div
            id={panelId}
            role="region"
            aria-label={triggerLabel}
            className="fixed left-1/2 top-[calc(5rem+0.75rem)] z-50 hidden w-[min(1100px,calc(100vw-3rem))] -translate-x-1/2 rounded-[20px] border border-neutral-200 bg-white p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.18)] lg:block"
          >
            <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
              <MegaMenuFeatures column={features} />
              <MegaMenuAbos column={abos} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function MegaMenuFeatures({ column }: { column: MegaMenuColumn }) {
  return (
    <div>
      <h3 className="border-b border-neutral-200 pb-3 text-center text-base font-medium text-text-dark">
        {column.headline}
      </h3>
      <ul className="mt-5 grid gap-x-8 gap-y-5 md:grid-cols-2">
        {column.items.map((item) => (
          <li key={item.title}>
            <MegaMenuLink item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function MegaMenuAbos({ column }: { column: MegaMenuColumn }) {
  return (
    <div className="rounded-[16px] bg-surface-muted p-6 lg:bg-transparent lg:p-0">
      <h3 className="border-b border-neutral-200 pb-3 text-base font-medium text-text-dark">
        {column.headline}
      </h3>
      <ul className="mt-5 grid gap-5">
        {column.items.map((item) => (
          <li key={item.title}>
            <MegaMenuLink item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function MegaMenuLink({ item }: { item: MegaMenuItem }) {
  const isExternal = /^https?:\/\//.test(item.href);
  const className =
    "group flex gap-3 rounded-[12px] p-2 -mx-2 -my-2 transition-colors hover:bg-surface-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow";

  const content = (
    <>
      <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center text-brand-yellow">
        <MegaMenuIconSvg name={item.icon} />
      </span>
      <span className="flex flex-col">
        <span className="flex items-center gap-2 text-sm font-bold text-text-dark group-hover:text-brand-yellow">
          {item.title}
          {item.badge && (
            <span className="text-xs font-normal text-text-muted">
              ({item.badge})
            </span>
          )}
        </span>
        <span className="mt-0.5 text-xs leading-snug text-text-muted">
          {item.description}
        </span>
      </span>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className}>
      {content}
    </Link>
  );
}

function MegaMenuIconSvg({ name }: { name: MegaMenuIcon }) {
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "phone":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <rect x="6" y="3" width="12" height="18" rx="2.5" {...stroke} />
          <line x1="11" y1="18" x2="13" y2="18" {...stroke} />
        </svg>
      );
    case "filter":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <path d="M4 5h16l-6 8v6l-4-2v-4z" {...stroke} />
        </svg>
      );
    case "pin":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <path
            d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z"
            {...stroke}
          />
          <circle cx="12" cy="9" r="2.5" {...stroke} />
        </svg>
      );
    case "support":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <path
            d="M5 11a7 7 0 0 1 14 0v4a2 2 0 0 1-2 2h-1v-6h3M5 11v4a2 2 0 0 0 2 2h1v-6H5"
            {...stroke}
          />
        </svg>
      );
    case "portal":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" {...stroke} />
          <line x1="7" y1="9" x2="11" y2="9" {...stroke} />
          <line x1="7" y1="12" x2="15" y2="12" {...stroke} />
          <line x1="7" y1="15" x2="13" y2="15" {...stroke} />
        </svg>
      );
    case "lock":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <rect x="5" y="11" width="14" height="9" rx="2" {...stroke} />
          <path d="M8 11V8a4 4 0 1 1 8 0v3" {...stroke} />
        </svg>
      );
    case "medal":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <circle cx="12" cy="14" r="5" {...stroke} />
          <path d="M9 9.5L6 3h5l1.5 4M15 9.5L18 3h-5l-1.5 4" {...stroke} />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <path d="M5 12.5l4.5 4.5L19 7.5" {...stroke} />
        </svg>
      );
  }
}
