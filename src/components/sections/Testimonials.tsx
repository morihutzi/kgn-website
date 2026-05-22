import Image from "next/image";
import { Section, SectionHeading } from "@/components/layout/Section";
import { testimonials } from "@/content/home";

function StarRow() {
  return (
    <div className="flex gap-1 text-brand-yellow" aria-label="5 von 5 Sternen">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <Section maxWidth={1100}>
      <SectionHeading align="center">{testimonials.headline}</SectionHeading>

      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.items.map((t) => (
          <li
            key={t.name}
            className="flex flex-col items-center rounded-[20px] border border-neutral-200 bg-white p-8 text-center shadow-sm"
          >
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <Image
                src={t.avatar}
                alt={t.name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <cite className="mt-3 block text-sm font-semibold not-italic text-text-dark">
              {t.name}
            </cite>
            <StarRow />
            <blockquote className="mt-4 flex-1 text-sm text-text-dark">
              {t.quote}
            </blockquote>
          </li>
        ))}
      </ul>
    </Section>
  );
}
