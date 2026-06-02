import {
  brandFarbeClasses,
  type ElternratgeberKategorie,
} from "@/content/elternratgeber/kategorien";
import { Container } from "@/components/layout/Container";

type Props = {
  kategorie: ElternratgeberKategorie;
  count: number;
};

export function KategorieHero({ kategorie, count }: Props) {
  const c = brandFarbeClasses[kategorie.brandFarbe];
  return (
    <section className="bg-white">
      <Container>
        <div className={`border-l-[6px] ${c.border} py-12 pl-8 md:py-16`}>
          <p
            className={`text-xs font-extrabold uppercase tracking-[0.2em] ${c.text}`}
          >
            Elternratgeber
          </p>
          <h1 className="mt-2 text-4xl font-extrabold leading-[1.05] text-brand-yellow md:text-6xl">
            {kategorie.name}
          </h1>
          <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-text-dark md:text-lg">
            {kategorie.beschreibung}
          </p>
          <p
            className={`mt-4 inline-flex rounded-full border bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-wide ${c.border} ${c.text}`}
          >
            {count} {count === 1 ? "Beitrag" : "Beiträge"}
          </p>
        </div>
      </Container>
    </section>
  );
}
