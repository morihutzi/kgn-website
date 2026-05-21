import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { testimonials } from "@/content/home";

export function Testimonials() {
  return (
    <Section background="muted">
      <h2 className="text-center text-3xl font-bold text-text-dark md:text-4xl">
        {testimonials.headline}
      </h2>

      <ul className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
        {testimonials.items.map((t) => (
          <li
            key={t.name}
            className="flex flex-col rounded-card bg-white p-6 shadow-sm"
          >
            <Image
              src={t.avatar}
              alt=""
              width={80}
              height={80}
              className="h-16 w-16 rounded-full object-cover"
            />
            <blockquote className="mt-4 flex-1 text-text-dark/90">
              &bdquo;{t.quote}&ldquo;
            </blockquote>
            <cite className="mt-4 block font-semibold not-italic text-text-dark">
              {t.name}
            </cite>
          </li>
        ))}
      </ul>
    </Section>
  );
}
