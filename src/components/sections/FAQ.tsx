import Image from "next/image";
import { Section, SectionHeading } from "@/components/layout/Section";
import { faq } from "@/content/home";

export function FAQ() {
  return (
    <Section>
      <div className="flex flex-col items-center text-center">
        <Image
          src="/images/icons/smiley-orange.png"
          alt=""
          width={56}
          height={56}
          className="h-14 w-14"
        />
        <SectionHeading align="center" className="mt-3">
          {faq.headline}
        </SectionHeading>
      </div>

      <ul className="mt-8 space-y-3">
        {faq.items.map((item) => (
          <li key={item.question}>
            <details className="group rounded-[20px] border border-neutral-200 bg-white p-5 open:shadow-md">
              <summary className="flex cursor-pointer items-start justify-between gap-4 text-left font-semibold text-text-dark marker:content-none [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="mt-1 text-brand-yellow transition-transform group-open:rotate-45"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-text-dark">{item.answer}</p>
            </details>
          </li>
        ))}
      </ul>
    </Section>
  );
}
