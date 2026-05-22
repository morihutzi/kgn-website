import { BildschirmzeitMockup } from "./BildschirmzeitMockup";
import { ElternportalMockup } from "./ElternportalMockup";

const NATIVE_WIDTH = 180;
// Native-Höhe matched die Höhe eines einzelnen PhoneFrame bei 180 wide
// (180 × 20/9.5 = 379). Dadurch entspricht der gesamte 2-Phones-Stack
// visuell der Höhe eines einzelnen PhoneFrame in Schritt 3.
const CAPTION_HEIGHT = 14;
const GAP_BETWEEN = 25;
const PHONE_VISIBLE_HEIGHT = 163;
const NATIVE_HEIGHT =
  CAPTION_HEIGHT * 2 + GAP_BETWEEN + PHONE_VISIBLE_HEIGHT * 2; // 379

/**
 * Two-Modes-Mockup: Zwei Kidgonet-App-Komponenten vertikal übereinander
 * gestapelt, jeweils zur Hälfte abgeschnitten. Über jedem Phone eine
 * Caption, in der Mitte ein Divider als Geräte-Trenner.
 *
 * Nutzt die wiederverwendbaren Mockup-Components:
 *  - [[ElternportalMockup]] für Elterngerät (Portal-UI mit Kind-Profil)
 *  - [[BildschirmzeitMockup]] für Kindgerät (Hallo Franziska + Wave-Fill)
 *
 * Gesamt-Visual-Größe identisch zum Schritt-3-Phone (ChildviewMockup)
 * bei gleichem Scale-Faktor. Wird per [[TwoModesMockupScaled]] skaliert.
 */
export function TwoModesMockup() {
  const dividerCenter =
    CAPTION_HEIGHT + PHONE_VISIBLE_HEIGHT + GAP_BETWEEN / 2;
  return (
    <div
      className="relative"
      style={{ width: NATIVE_WIDTH, height: NATIVE_HEIGHT }}
    >
      <DeviceBlock label="Elterngerät" top={0}>
        <ElternportalMockup />
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
      >
        <BildschirmzeitMockup />
      </DeviceBlock>
    </div>
  );
}

function DeviceBlock({
  label,
  top,
  children,
}: {
  label: string;
  top: number;
  children: React.ReactNode;
}) {
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
        {children}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-12"
          style={{
            background:
              "linear-gradient(to top, rgba(252,250,247,1) 0%, rgba(252,250,247,0) 100%)",
          }}
          aria-hidden
        />
      </div>
    </div>
  );
}

export const TWO_MODES_NATIVE_WIDTH = NATIVE_WIDTH;
export const TWO_MODES_NATIVE_HEIGHT = NATIVE_HEIGHT;
