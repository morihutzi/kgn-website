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
    <section className={`${c.bg}`}>
      <Container>
        <div className="py-12 md:py-16">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/85">
            Elternratgeber
          </p>
          <h1 className="mt-2 text-4xl font-extrabold leading-[1.05] text-white md:text-6xl">
            {kategorie.name}
          </h1>
          <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-white md:text-lg">
            {kategorie.beschreibung}
          </p>
          <p className="mt-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-text-dark">
            {count} {count === 1 ? "Beitrag" : "Beiträge"}
          </p>
        </div>
      </Container>
    </section>
  );
}
