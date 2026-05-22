"use client";

import {
  TwoModesMockup,
  TWO_MODES_NATIVE_HEIGHT,
  TWO_MODES_NATIVE_WIDTH,
} from "./TwoModesMockup";

type TwoModesMockupScaledProps = {
  /**
   * Sichtbare Gesamtbreite der zwei Phones in Pixeln. Default 220.
   * Phones werden intern in Native-Größe (220 px breit, leicht versetzt
   * und gekippt) gerendert und per CSS-Transform skaliert.
   */
  width?: number;
  className?: string;
};

/**
 * Skalierbares Wrapper-Komponent für den Two-Modes-Mockup.
 *
 * Verwendung:
 *   <TwoModesMockupScaled width={220} />
 *   <TwoModesMockupScaled width={300} className="mx-auto" />
 */
export function TwoModesMockupScaled({
  width = 220,
  className,
}: TwoModesMockupScaledProps) {
  const scale = width / TWO_MODES_NATIVE_WIDTH;
  const height = TWO_MODES_NATIVE_HEIGHT * scale;
  return (
    <div
      className={className}
      style={{ width, height, position: "relative" }}
    >
      <div
        style={{
          width: TWO_MODES_NATIVE_WIDTH,
          height: TWO_MODES_NATIVE_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <TwoModesMockup />
      </div>
    </div>
  );
}
