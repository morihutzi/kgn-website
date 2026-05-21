import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { faq } from "@/content/home";

export function FAQ() {
  return (
    <Section background="muted">
      <div className="flex flex-col items-center text-center">
        <Image
          src="/images/icons/smiley-orange.png"
          alt=""
          width={64}
          height={64}
          className="h-16 w-16"
        />
        <h2 className="mt-4 text-3xl font-bold text-text-dark md:text-4xl">
          {faq.headline}
        </h2>
      </div>

      <ul className="mx-auto mt-12 max-w-3xl space-y-3">
        {faq.items.map((item) => (
          <li key={item.question}>
            <details className="group rounded-card border border-black/10 bg-white p-5 shadow-sm open:shadow-md">
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
              <p className="mt-3 text-text-dark/85">{item.answer}</p>
            </details>
          </li>
        ))}
      </ul>
    </Section>
  );
}
