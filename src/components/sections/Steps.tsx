import Image from "next/image";
import { Section, SectionHeading } from "@/components/layout/Section";
import { steps } from "@/content/home";

export function Steps() {
  return (
    <Section>
      <SectionHeading size="small" align="center">
        {steps.headline}
      </SectionHeading>

      <ol className="mt-7 grid gap-6 md:grid-cols-3 md:gap-4">
        {steps.items.map((item) => (
          <li
            key={item.text}
            className="flex flex-col items-center text-center"
          >
            <div className="relative h-40 w-40 md:h-48 md:w-48">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="192px"
                className="object-contain"
              />
            </div>
            <p className="mt-3 max-w-[240px] text-xs text-text-dark md:text-sm">
              {item.text}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
