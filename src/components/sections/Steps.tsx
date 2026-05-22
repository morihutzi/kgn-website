import Image from "next/image";
import { Section, SectionHeading } from "@/components/layout/Section";
import { PhoneSlideshow } from "@/components/ui/PhoneSlideshow";
import { hero, steps } from "@/content/home";

export function Steps() {
  return (
    <Section className="relative">
      {/* Phone slideshow overhanging UP into the yellow block (section 1) above */}
      <PhoneSlideshow
        slides={hero.icons}
        className="pointer-events-none absolute left-6 top-[-260px] z-10 hidden w-[170px] md:block lg:left-12 lg:top-[-300px] lg:w-[200px]"
      />

      <SectionHeading size="small" align="center">
        {steps.headline}
      </SectionHeading>

      <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-6">
        {steps.items.map((item) => (
          <li
            key={item.text}
            className="flex flex-col items-center text-center"
          >
            <div className="relative h-56 w-56 md:h-64 md:w-64">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="256px"
                className="object-contain"
              />
            </div>
            <p className="mt-4 max-w-[260px] text-sm text-text-dark md:text-base">
              {item.text}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
