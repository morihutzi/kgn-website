import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import type { Author } from "@/lib/elternratgeber/types";

type Props = {
  author: Author;
  className?: string;
};

/**
 * Autor-Byline am Anfang eines Artikels.
 * E-E-A-T-Signal: zeigt sichtbar wer den Artikel verfasst hat.
 */
export function AuthorByline({ author, className = "" }: Props) {
  const initials = author.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  const inner = (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={[
          "relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full text-sm font-extrabold text-white",
          // Yellow-Background nur wenn KEIN Avatar gesetzt ist —
          // sonst kollidiert er mit dem gelben Brand-Smiley.
          author.avatar ? "" : "bg-brand-yellow",
        ].join(" ")}
      >
        {author.avatar ? (
          <ExportedImage
            src={author.avatar}
            alt={author.name}
            fill
            sizes="40px"
            className="object-cover"
          />
        ) : (
          initials
        )}
      </div>
      <div className="text-sm leading-tight">
        <p className="font-bold text-text-dark">Von {author.name}</p>
        {author.role && (
          <p className="text-xs text-text-dark/60">{author.role}</p>
        )}
      </div>
    </div>
  );

  if (author.url) {
    return (
      <Link
        href={author.url}
        className="group inline-flex hover:opacity-90"
      >
        {inner}
      </Link>
    );
  }

  return inner;
}
