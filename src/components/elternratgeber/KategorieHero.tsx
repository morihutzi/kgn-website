import type { ElternratgeberKategorie } from "@/content/elternratgeber/kategorien";

type Props = {
  kategorie: ElternratgeberKategorie;
  count: number;
};

export function KategorieHero({ kategorie, count }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-border)] bg-white">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1.5"
        style={{ backgroundColor: kategorie.farbe }}
      />
      <div className="mx-auto w-full max-w-[1100px] px-5 py-12 sm:px-8 md:py-16">
        <p
          className="text-xs font-bold uppercase tracking-wider"
          style={{ color: kategorie.farbe }}
        >
          Elternratgeber
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-text-dark md:text-5xl md:leading-[1.1]">
          {kategorie.name}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-dark/80 md:text-lg">
          {kategorie.beschreibung}
        </p>
        <p className="mt-3 text-sm text-text-dark/60">
          {count} {count === 1 ? "Beitrag" : "Beiträge"}
        </p>
      </div>
    </section>
  );
}
