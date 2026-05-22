import { ChildviewMockup } from "./ChildviewMockup";
import { ConnectDevicesMockup } from "./ConnectDevicesMockup";

const NATIVE_WIDTH = 220;
const PHONE_FULL_HEIGHT = Math.round(220 * (20 / 9.5)); // 463
const CAPTION_HEIGHT = 16;
const GAP_BETWEEN = 31;
const PHONE_VISIBLE_HEIGHT = 200;
const NATIVE_HEIGHT =
  CAPTION_HEIGHT * 2 + GAP_BETWEEN + PHONE_VISIBLE_HEIGHT * 2; // 463

/**
 * Two-Modes-Mockup: Zwei Phones vertikal übereinander gestapelt, jeweils
 * zur Hälfte abgeschnitten und so zusammengesetzt, dass sie wie zwei
 * komplementäre Hälften eines Geräts wirken.
 *
 * - Oben: [[ConnectDevicesMockup]] (Elterngerät, Eltern-Dashboard).
 *   Untere Hälfte abgeschnitten → man sieht den Header, Summary-Row und
 *   die ersten ChildCards.
 * - Unten: [[ChildviewMockup]] (Kindgerät, Kindermodus mit Wave-Fill-
 *   Countdown). Obere Hälfte abgeschnitten → man sieht den großen
 *   Countdown-Kreis am Boden des Phones.
 *
 * Beide bei NATIVE_WIDTH 220 px gerendert und cropped via
 * overflow:hidden mit absolutem Inner-Offset. Gradient-Fades kaschieren
 * die jeweilige Crop-Kante.
 *
 * Wird per [[TwoModesMockupScaled]] auf eine Zielbreite skaliert.
 */
export function TwoModesMockup() {
  const dividerCenter =
    CAPTION_HEIGHT + PHONE_VISIBLE_HEIGHT + GAP_BETWEEN / 2;
  return (
    <div
      className="relative"
      style={{ width: NATIVE_WIDTH, height: NATIVE_HEIGHT }}
    >
      <DeviceBlock label="Elterngerät" top={0} half="top">
        <ConnectDevicesMockup />
      </DeviceBlock>

      <div
        className="absolute inset-x-0 flex items-center gap-1.5 px-3"
        style={{ top: dividerCenter - 5, height: 10 }}
        aria-hidden
      >
        <div className="h-px flex-1 bg-foreground/20" />
        <div className="size-1 rounded-full bg-foreground/35" />
        <div className="h-px flex-1 bg-foreground/20" />
      </div>

      <DeviceBlock
        label="Kindgerät"
        top={CAPTION_HEIGHT + PHONE_VISIBLE_HEIGHT + GAP_BETWEEN}
        half="bottom"
      >
        <ChildviewMockup />
      </DeviceBlock>
    </div>
  );
}

type DeviceBlockProps = {
  label: string;
  top: number;
  half: "top" | "bottom";
  children: React.ReactNode;
};

function DeviceBlock({ label, top, half, children }: DeviceBlockProps) {
  const innerOffsetY =
    half === "bottom" ? -(PHONE_FULL_HEIGHT - PHONE_VISIBLE_HEIGHT) : 0;

  return (
    <div
      className="absolute left-0 right-0 flex flex-col items-center"
      style={{ top }}
    >
      <span className="mb-1 text-[7px] font-extrabold uppercase tracking-[0.14em] text-foreground/55">
        {label}
      </span>
      <div
        className="relative"
        style={{
          width: NATIVE_WIDTH,
          height: PHONE_VISIBLE_HEIGHT,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: innerOffsetY,
            left: 0,
            width: NATIVE_WIDTH,
          }}
        >
          {children}
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 h-12"
          style={{
            ...(half === "top"
              ? { bottom: 0 }
              : { top: 0 }),
            background:
              half === "top"
                ? "linear-gradient(to top, rgba(252,250,247,1) 0%, rgba(252,250,247,0) 100%)"
                : "linear-gradient(to bottom, rgba(252,250,247,1) 0%, rgba(252,250,247,0) 100%)",
          }}
          aria-hidden
        />
      </div>
    </div>
  );
}

export const TWO_MODES_NATIVE_WIDTH = NATIVE_WIDTH;
export const TWO_MODES_NATIVE_HEIGHT = NATIVE_HEIGHT;
