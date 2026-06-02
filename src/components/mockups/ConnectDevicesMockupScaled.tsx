import {
  ConnectDevicesMockup,
  CONNECT_DEVICES_NATIVE_HEIGHT,
  CONNECT_DEVICES_NATIVE_WIDTH,
} from "./ConnectDevicesMockup";

type ConnectDevicesMockupScaledProps = {
  /**
   * Sichtbare Breite des Mockups in Pixeln. Default 125 (entspricht der
   * Schritt-3-Visualbreite). Mockup wird intern in Native-Größe gerendert
   * und per CSS-Transform skaliert.
   */
  width?: number;
  className?: string;
};

/**
 * Skalierbares Wrapper-Komponent für den ConnectDevicesMockup.
 *
 * Verwendung:
 *   <ConnectDevicesMockupScaled width={125} />
 *   <ConnectDevicesMockupScaled width={220} className="mx-auto" />
 */
export function ConnectDevicesMockupScaled({
  width = 125,
  className,
}: ConnectDevicesMockupScaledProps) {
  const scale = width / CONNECT_DEVICES_NATIVE_WIDTH;
  const height = CONNECT_DEVICES_NATIVE_HEIGHT * scale;
  return (
    <div
      className={className}
      style={{ width, height, position: "relative" }}
    >
      <div
        style={{
          width: CONNECT_DEVICES_NATIVE_WIDTH,
          height: CONNECT_DEVICES_NATIVE_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <ConnectDevicesMockup />
      </div>
    </div>
  );
}
