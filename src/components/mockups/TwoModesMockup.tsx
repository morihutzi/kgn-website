import { ChildviewMockup } from "./ChildviewMockup";
import { ConnectDevicesMockup } from "./ConnectDevicesMockup";

const NATIVE_WIDTH = 220;
const PHONE_FULL_HEIGHT = Math.round(220 * (20 / 9.5)); // 463
const PHONE_VISIBLE_HEIGHT = 175;
// Gesamthöhe bleibt fix auf PHONE_FULL_HEIGHT, damit der Two-Modes-Stack
// oben/unten bündig mit den einzelnen Phones (Schritt 2 & 3) abschließt.
// Die durch das kürzere PHONE_VISIBLE_HEIGHT frei werdende Höhe geht in den
// Abstand zwischen den beiden Hälften → klarerer Split.
const NATIVE_HEIGHT = PHONE_FULL_HEIGHT; // 463

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
 * NATIVE_HEIGHT = PHONE_FULL_HEIGHT (463 px), sodass der gesamte Stack bei
 * gleichem Scale dieselbe visuelle Höhe hat wie ein einzelner
 * ChildviewMockup in Schritt 3 oder ein ConnectDevicesMockup in Schritt 2.
 */
export function TwoModesMockup() {
  // Oberes Phone bündig oben (top=0), unteres Phone bündig unten — so schließt
  // der Stack oben/unten exakt mit den Einzel-Phones (Schritt 2 & 3) ab.
  const bottomPhoneTop = NATIVE_HEIGHT - PHONE_VISIBLE_HEIGHT;
  // Beschriftungen + Divider sitzen mittig im Spalt zwischen den Hälften.
  const middleTop = PHONE_VISIBLE_HEIGHT;
  const middleHeight = NATIVE_HEIGHT - 2 * PHONE_VISIBLE_HEIGHT;

  return (
    <div
      className="relative"
      style={{ width: NATIVE_WIDTH, height: NATIVE_HEIGHT }}
    >
      <PhoneWindow top={0} half="top">
        <ConnectDevicesMockup />
      </PhoneWindow>

      <div
        className="absolute inset-x-0"
        style={{ top: middleTop, height: middleHeight }}
      >
        {/* Elterngerät — an der Unterkante des oberen Phones (links);
            Pfeil daneben zeigt hoch aufs Handy. */}
        <div className="absolute left-2 top-4 flex items-center gap-5">
          <span className="text-[12px] font-extrabold uppercase leading-none tracking-[0.08em] text-foreground/80">
            Elterngerät
          </span>
          <CurvedArrow direction="up" />
        </div>

        {/* Kindgerät — an der Oberkante des unteren Phones (rechts);
            Pfeil daneben zeigt runter aufs Handy. */}
        <div className="absolute right-2 bottom-4 flex items-center gap-5">
          <CurvedArrow direction="down" />
          <span className="text-[12px] font-extrabold uppercase leading-none tracking-[0.08em] text-foreground/80">
            Kindgerät
          </span>
        </div>
      </div>

      <PhoneWindow top={bottomPhoneTop} half="bottom">
        <ChildviewMockup />
      </PhoneWindow>
    </div>
  );
}

type PhoneWindowProps = {
  top: number;
  half: "top" | "bottom";
  children: React.ReactNode;
};

function PhoneWindow({ top, half, children }: PhoneWindowProps) {
  const innerOffsetY =
    half === "bottom" ? -(PHONE_FULL_HEIGHT - PHONE_VISIBLE_HEIGHT) : 0;

  return (
    <div
      className="absolute left-0 right-0 flex flex-col items-center"
      style={{ top }}
    >
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
            ...(half === "top" ? { bottom: 0 } : { top: 0 }),
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

/**
 * Geschwungener, handgezeichnet wirkender Annotations-Pfeil.
 * - "up": zeigt nach oben (Elterngerät → oberes Phone)
 * - "down": zeigt nach unten (Kindgerät → unteres Phone)
 */
function CurvedArrow({ direction }: { direction: "up" | "down" }) {
  return (
    <svg
      width={44}
      height={31}
      viewBox="0 0 56 40"
      fill="none"
      aria-hidden
      className="text-brand-yellow"
      style={direction === "down" ? { transform: "rotate(180deg)" } : undefined}
    >
      <g
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {/* durchgehender, sanft geschwungener Bogen, der senkrecht (90°)
            aufs Handy ausläuft */}
        <path d="M6 28 C 18 33, 43 30, 43 10" />
        {/* angesetzte, symmetrische Spitze – Scheitel = Bogenende */}
        <path d="M36 17 L 43 10 L 50 17" />
      </g>
    </svg>
  );
}

export const TWO_MODES_NATIVE_WIDTH = NATIVE_WIDTH;
export const TWO_MODES_NATIVE_HEIGHT = NATIVE_HEIGHT;
