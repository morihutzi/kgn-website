"use client";

import { DualModeMockup } from "./DualModeMockup";

const NATIVE_WIDTH = 220;
const ASPECT = 20 / 9.5;

type DualModeMockupScaledProps = {
  /**
   * Sichtbare Breite des Phones in Pixeln. Default 120.
   * Phone wird intern in 220 px (Dorfner-Native) gerendert und per CSS-
   * Transform skaliert, damit alle Innen-Texte sauber proportioniert bleiben.
   */
  width?: number;
  className?: string;
};

/**
 * Skalierbares Wrapper-Komponent für den Dual-Mode-Mockup.
 *
 * Verwendung:
 *   <DualModeMockupScaled width={120} />
 *   <DualModeMockupScaled width={180} className="mx-auto" />
 */
export function DualModeMockupScaled({
  width = 120,
  className,
}: DualModeMockupScaledProps) {
  const scale = width / NATIVE_WIDTH;
  const height = width * ASPECT;
  return (
    <div
      className={className}
      style={{ width, height, position: "relative" }}
    >
      <div
        style={{
          width: NATIVE_WIDTH,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <DualModeMockup />
      </div>
    </div>
  );
}
