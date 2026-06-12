import { ChevronDown } from 'lucide-react'
import { Container } from '@/components/partner/hans-dorfner/ui/container'
import { SectionHeading } from '@/components/partner/hans-dorfner/ui/section-heading'
import type { TenantConfig } from '@/components/partner/hans-dorfner/types'

type FaqProps = {
  tenant: TenantConfig
}

/**
 * FAQ-Sektion (z.B. Kampagnen-Fragen): native <details>/<summary>-Accordions,
 * bewusst ohne Client-JS. Rendert nichts, wenn der Tenant keinen faq-Block hat.
 */
export function Faq({ tenant }: FaqProps) {
  const faq = tenant.faq
  if (!faq) return null

  return (
    <section id="faq" className="bg-white py-16 sm:py-28">
      <Container width="prose">
        <SectionHeading eyebrow="Fragen" title={faq.headline} align="center" className="mx-auto" />

        <div className="mt-10 space-y-3 sm:mt-12">
          {faq.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-3xl bg-surface p-5 sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-foreground [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown
                  className="size-5 shrink-0 text-primary transition-transform motion-reduce:transition-none group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70 sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}
