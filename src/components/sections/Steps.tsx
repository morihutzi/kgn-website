import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { steps } from "@/content/home";

export function Steps() {
  return (
    <Section background="muted">
      <h2 className="text-center text-3xl font-bold text-text-dark md:text-4xl">
        {steps.headline}
      </h2>

      <ol className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
        {steps.items.map((item, idx) => (
          <li
            key={item.text}
            className="relative flex flex-col items-center rounded-card bg-white p-6 text-center shadow-sm"
          >
            <span
              aria-hidden="true"
              className="absolute -top-5 flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow text-lg font-bold text-black"
            >
              {idx + 1}
            </span>
            <div className="relative mt-2 h-32 w-32">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="128px"
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-sm text-text-dark md:text-base">
              {item.text}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
