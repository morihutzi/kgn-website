import Image from "next/image";

const NATIVE_WIDTH = 160;
// Native-Höhe matched die Höhe eines einzelnen Screen-PNGs (Aspect 739:1587
// ≈ 1:2.15, also bei 160 wide ~344 tall). Dadurch entspricht der gesamte
// 2-Phones-Stack visuell der Höhe eines einzelnen PhoneFrame in Schritt 3.
const CAPTION_HEIGHT = 14;
const GAP_BETWEEN = 24;
const PHONE_VISIBLE_HEIGHT = 142;
const NATIVE_HEIGHT =
  CAPTION_HEIGHT * 2 + GAP_BETWEEN + PHONE_VISIBLE_HEIGHT * 2; // 336

const SCREENS = {
  parent: {
    src: "/images/screens/elternportal.png",
    alt: "Kidgonet Elternportal mit Annas Regeln und Internetsperren",
  },
  kid: {
    src: "/images/screens/bildschirmzeit.png",
    alt: "Kidgonet Kindermodus mit Hallo Anna und verbleibender Bildschirmzeit",
  },
} as const;

/**
 * Two-Modes-Mockup: Zwei echte Kidgonet-App-Screens vertikal übereinander
 * gestapelt, jeweils zur Hälfte abgeschnitten. Über jedem Screen eine
 * Caption, in der Mitte ein Divider.
 *
 * Nutzt die offiziellen Screens aus `public/images/screens/`:
 *  - `elternportal.png` für Elterngerät
 *  - `bildschirmzeit.png` für Kindgerät
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
      <DeviceBlock label="Elterngerät" top={0} screen={SCREENS.parent} />

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
        screen={SCREENS.kid}
      />
    </div>
  );
}

type Screen = { src: string; alt: string };

function DeviceBlock({
  label,
  top,
  screen,
}: {
  label: string;
  top: number;
  screen: Screen;
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
        <Image
          src={screen.src}
          alt={screen.alt}
          width={739}
          height={1587}
          sizes="160px"
          className="h-auto w-full"
          priority={false}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-10"
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
