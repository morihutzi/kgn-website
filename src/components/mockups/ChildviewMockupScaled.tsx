"use client";

import { ChildviewMockup } from "./ChildviewMockup";

const NATIVE_WIDTH = 220;
const ASPECT = 20 / 9.5;

type ChildviewMockupScaledProps = {
  /**
   * Sichtbare Breite des Phones in Pixeln. Default 120.
   * Der Mockup wird intern in seiner Dorfner-Originalgröße (220 px) gerendert
   * und per CSS-Transform skaliert. So bleiben alle Innen-Texte sauber
   * proportioniert, auch bei kleinen Größen.
   */
  width?: number;
  className?: string;
};

/**
 * Skalierbares Wrapper-Komponent für den Childview-Mockup.
 *
 * Verwendung:
 *   <ChildviewMockupScaled width={120} />
 *   <ChildviewMockupScaled width={180} className="mx-auto" />
 */
export function ChildviewMockupScaled({
  width = 120,
  className,
}: ChildviewMockupScaledProps) {
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
        <ChildviewMockup />
      </div>
    </div>
  );
}
