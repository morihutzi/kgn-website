'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'
import { Button } from '@/components/partner/hans-dorfner/ui/button'
import type { TenantConfig } from '@/components/partner/hans-dorfner/types'

type StickyCtaProps = {
  tenant: TenantConfig
}

/**
 * Mobiler Sticky-CTA am unteren Rand. Erscheint, sobald der Hero (#top) den
 * Viewport verlassen hat. Ab sm übernimmt der Header-CTA (header.tsx zeigt
 * den Button dort bereits, mit genau diesem Pendant-Kommentar).
 */
export function StickyCta({ tenant }: StickyCtaProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('top')
    if (!hero) return
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting)
    })
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      // inert nimmt den Button im versteckten Zustand aus Tab-Reihenfolge und
      // Accessibility-Tree (aria-hidden allein liesse ihn fokussierbar).
      inert={!visible}
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white px-5 pt-3 transition-transform duration-200 motion-reduce:transition-none sm:hidden',
        visible ? 'translate-y-0' : 'pointer-events-none translate-y-full'
      )}
      style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
    >
      <Button
        href={tenant.hero.primaryCta.href}
        external={tenant.hero.primaryCta.external}
        size="lg"
        className="w-full"
      >
        {tenant.hero.primaryCta.label}
      </Button>
    </div>
  )
}
