import Link from "next/link";
import {
  brandFarbeClasses,
  getKategorieBySlug,
  type ElternratgeberKategorieSlug,
} from "@/content/elternratgeber/kategorien";

type Props = {
  slug: ElternratgeberKategorieSlug;
  size?: "sm" | "md";
  asLink?: boolean;
  className?: string;
};

export function KategorieBadge({
  slug,
  size = "sm",
  asLink = false,
  className = "",
}: Props) {
  const kategorie = getKategorieBySlug(slug);
  if (!kategorie) return null;
  const c = brandFarbeClasses[kategorie.brandFarbe];

  const sizeClasses =
    size === "md" ? "px-3.5 py-1.5 text-xs" : "px-2.5 py-1 text-[11px]";

  const baseClasses = `inline-flex items-center gap-1.5 rounded-full border-2 bg-white font-extrabold uppercase tracking-wide ${c.border} ${c.text} ${sizeClasses} ${className}`;

  const content = <span className={baseClasses}>{kategorie.name}</span>;

  if (asLink) {
    return (
      <Link
        href={`/elternratgeber/${kategorie.slug}`}
        className="inline-block transition-opacity hover:opacity-80"
      >
        {content}
      </Link>
    );
  }
  return content;
}
