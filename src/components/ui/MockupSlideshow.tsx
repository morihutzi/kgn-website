"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChildviewMockupScaled } from "@/components/mockups/ChildviewMockupScaled";
import { ConnectDevicesMockupScaled } from "@/components/mockups/ConnectDevicesMockupScaled";
import { InternetfilterMockupScaled } from "@/components/mockups/InternetfilterMockupScaled";

/** Phone-Aspect-Ratio (Breite / Höhe) — identisch zu allen *MockupScaled. */
const PHONE_ASPECT = "9.5 / 20";

/**
 * Rotierende Mockups im Hero-Phone — decken drei Kern-Features ab:
 * Kindermodus-Countdown, Webfilter, Eltern-Dashboard.
 *
 * Die Liste lebt hier (Client-Component), weil Render-Funktionen nicht von
 * einer Server-Component an eine Client-Component übergeben werden dürfen.
 */
const MOCKUPS: ReadonlyArray<(width: number) => React.ReactNode> = [
  (w) => <ChildviewMockupScaled width={w} className="mockup-grow" />,
  (w) => <InternetfilterMockupScaled width={w} className="mockup-grow" />,
  (w) => <ConnectDevicesMockupScaled width={w} className="mockup-grow" />,
];

type Props = {
  className?: string;
  intervalMs?: number;
  /**
   * Start-Breite in px für das Server-Rendering, damit das Phone schon im
   * initialen HTML steht (kein leerer Slot, kein "Erscheinen"). Der
   * ResizeObserver korrigiert direkt danach auf die exakte Slot-Breite.
   * Sollte ≤ der kleinstmöglichen Slot-Breite sein, damit nichts überläuft.
   */
  initialWidth?: number;
};

// SSR-sicherer Layout-Effect (kein Warnen auf dem Server).
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Cross-Fade-Slideshow für unsere echten Mockup-Komponenten (statt Bild-Slides).
 *
 * Die `*MockupScaled`-Komponenten brauchen eine numerische Pixel-Breite, der
 * Hero-Phone-Slot ist aber fluid (z. B. `w-[28vw]`). Deshalb misst diese
 * Slideshow ihre eigene Breite per ResizeObserver und reicht sie an die
 * Mockups durch — so bleiben sie fluid und gestochen scharf.
 *
 * Positionierung kommt vom `className` des Callers (mobile: `relative …`,
 * desktop: `absolute …`); die Fade-Layer liegen `absolute inset-0` darin.
 */
export function MockupSlideshow({
  className = "",
  intervalMs = 3500,
  initialWidth = 200,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(initialWidth);
  const [index, setIndex] = useState(0);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % MOCKUPS.length),
      intervalMs,
    );
    return () => clearInterval(timer);
  }, [intervalMs]);

  return (
    <div ref={ref} className={className} style={{ aspectRatio: PHONE_ASPECT }}>
      {width > 0 && (
        <div className="absolute inset-0">
          {MOCKUPS.map((render, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: i === index ? 1 : 0 }}
              aria-hidden={i !== index}
            >
              {render(width)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
