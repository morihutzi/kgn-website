import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { steps } from "@/content/home";

export function Steps() {
  return (
    <Section background="white">
      <h2 className="text-center text-4xl font-extrabold text-text-dark md:text-5xl">
        {steps.headline}
      </h2>

      <ol className="mx-auto mt-16 grid max-w-6xl gap-12 md:grid-cols-3">
        {steps.items.map((item) => (
          <li
            key={item.text}
            className="flex flex-col items-center text-center"
          >
            <div className="relative h-64 w-64 md:h-72 md:w-72">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="288px"
                className="object-contain"
              />
            </div>
            <p className="mt-6 max-w-xs text-base text-text-dark md:text-lg">
              {item.text}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
