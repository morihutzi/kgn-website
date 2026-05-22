import Link from "next/link";
import {
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

  const sizeClasses =
    size === "md"
      ? "px-3 py-1.5 text-sm"
      : "px-2.5 py-1 text-[11px] tracking-wide";

  const baseClasses = `inline-flex items-center gap-1.5 rounded-full font-bold uppercase ${sizeClasses} ${className}`;

  const content = (
    <span
      className={baseClasses}
      style={{
        backgroundColor: `${kategorie.farbe}15`,
        color: kategorie.farbe,
      }}
    >
      {kategorie.name}
    </span>
  );

  if (asLink) {
    return (
      <Link
        href={`/elternratgeber/${kategorie.slug}`}
        className="inline-block hover:opacity-80 transition-opacity"
      >
        {content}
      </Link>
    );
  }
  return content;
}
