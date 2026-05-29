import {
  StandortMockup,
  STANDORT_NATIVE_HEIGHT,
  STANDORT_NATIVE_WIDTH,
} from "./StandortMockup";

type StandortMockupScaledProps = {
  /** Sichtbare Breite des Mockups in Pixeln. Default 220. */
  width?: number;
  className?: string;
};

/**
 * Skalierbares Wrapper-Komponent für den StandortMockup. Native Render bei
 * 220px, via CSS-Transform proportional auf jede Zielbreite skaliert.
 */
export function StandortMockupScaled({
  width = 220,
  className,
}: StandortMockupScaledProps) {
  const scale = width / STANDORT_NATIVE_WIDTH;
  const height = STANDORT_NATIVE_HEIGHT * scale;
  return (
    <div className={className} style={{ width, height, position: "relative" }}>
      <div
        style={{
          width: STANDORT_NATIVE_WIDTH,
          height: STANDORT_NATIVE_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <StandortMockup />
      </div>
    </div>
  );
}
