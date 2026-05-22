import Image from "next/image";
import { Section, SectionHeading } from "@/components/layout/Section";
import { testimonials } from "@/content/home";

export function Testimonials() {
  return (
    <Section>
      <SectionHeading align="center">{testimonials.headline}</SectionHeading>

      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.items.map((t) => (
          <li
            key={t.name}
            className="flex flex-col items-start rounded-[20px] border border-black/5 bg-white p-6 shadow-sm"
          >
            <Image
              src={t.avatar}
              alt=""
              width={64}
              height={64}
              className="h-14 w-14 rounded-full object-cover"
            />
            <blockquote className="mt-3 flex-1 text-sm text-text-dark/90 md:text-base">
              &bdquo;{t.quote}&ldquo;
            </blockquote>
            <cite className="mt-3 block text-sm font-semibold not-italic text-text-dark">
              {t.name}
            </cite>
          </li>
        ))}
      </ul>
    </Section>
  );
}
