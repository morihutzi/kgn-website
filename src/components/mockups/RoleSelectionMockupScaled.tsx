import {
  RoleSelectionMockup,
  ROLE_SELECTION_NATIVE_HEIGHT,
  ROLE_SELECTION_NATIVE_WIDTH,
} from "./RoleSelectionMockup";

type RoleSelectionMockupScaledProps = {
  /** Sichtbare Breite des Phones in Pixeln. Default 220 (Native-Größe). */
  width?: number;
  className?: string;
};

/**
 * Skalierbares Wrapper-Komponent für den Role-Selection-Mockup.
 *
 * Verwendung:
 *   <RoleSelectionMockupScaled width={185} />
 */
export function RoleSelectionMockupScaled({
  width = 220,
  className,
}: RoleSelectionMockupScaledProps) {
  const scale = width / ROLE_SELECTION_NATIVE_WIDTH;
  const height = ROLE_SELECTION_NATIVE_HEIGHT * scale;
  return (
    <div className={className} style={{ width, height, position: "relative" }}>
      <div
        style={{
          width: ROLE_SELECTION_NATIVE_WIDTH,
          height: ROLE_SELECTION_NATIVE_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <RoleSelectionMockup />
      </div>
    </div>
  );
}
