import { ElternportalMockup } from "./ElternportalMockup";

const NATIVE_WIDTH = 180;
const ASPECT = 20 / 9.5;

type Props = {
  width?: number;
  className?: string;
};

/**
 * Skalierter Wrapper fuer ElternportalMockup. Native Render bei 180px,
 * via CSS-Transform proportional auf jede Zielbreite skaliert.
 */
export function ElternportalMockupScaled({ width = 125, className }: Props) {
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
        <ElternportalMockup />
      </div>
    </div>
  );
}
