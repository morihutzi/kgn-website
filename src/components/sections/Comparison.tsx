import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { comparison } from "@/content/home";

const BRAND_GREEN = "#C6C500";
const ICON_GRAY = "rgba(74, 74, 73, 0.35)";
const BORDER_COLOR = "#E5E5E5";
const ROW_BORDER = "#F0F0F0";
const HEADER_BG = "#FCEFD3";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={BRAND_GREEN}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Enthalten"
      role="img"
      style={{ display: "block", margin: "0 auto" }}
    >
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ICON_GRAY}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Nicht enthalten"
      role="img"
      style={{ display: "block", margin: "0 auto" }}
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function Comparison() {
  return (
    <Section maxWidth={900}>
      <h2 className="text-balance text-center text-xl font-extrabold leading-tight text-brand-yellow md:text-[32px] md:leading-[1.2]">
        {comparison.headline}
      </h2>

      <div
        className="mt-10 overflow-hidden rounded-[20px] bg-white"
        style={{
          border: `1px solid ${BORDER_COLOR}`,
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        }}
      >
        <table className="w-full text-sm md:text-base">
          <thead>
            <tr style={{ backgroundColor: HEADER_BG }}>
              <th
                scope="col"
                className="px-5 py-5 text-left font-semibold text-text-dark md:px-7"
              >
                Funktion
              </th>
              <th scope="col" className="px-3 py-5 text-center md:px-4">
                <Image
                  src="/brand/logo.png"
                  alt="Kidgonet"
                  width={140}
                  height={19}
                  className="mx-auto h-5 w-auto md:h-6"
                />
              </th>
              <th
                scope="col"
                className="px-3 py-5 text-center font-semibold text-text-dark/55 md:px-4"
              >
                {comparison.columns.others}
              </th>
            </tr>
          </thead>
          <tbody>
            {comparison.features.map((feature) => (
              <tr
                key={feature}
                style={{ borderTop: `1px solid ${ROW_BORDER}` }}
              >
                <th
                  scope="row"
                  className="px-5 py-5 text-left font-normal text-text-dark md:px-7"
                >
                  {feature}
                </th>
                <td className="px-3 py-5 md:px-4">
                  <CheckIcon />
                </td>
                <td className="px-3 py-5 md:px-4">
                  <CrossIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
