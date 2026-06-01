import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { comparison } from "@/content/home";

const BRAND_GREEN = "#C6C500";
const BADGE_GRAY = "#C9C9C9";
const CARD_BORDER = "#F9B000";
const ROW_BORDER = "#F0F0F0";

function CheckBadge() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      role="img"
      aria-label="Enthalten"
      style={{ display: "block", margin: "0 auto" }}
    >
      <rect x="1" y="1" width="22" height="22" rx="5" fill={BRAND_GREEN} />
      <path
        d="M6.5 12.5 L10 16 L17.5 8"
        fill="none"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossBadge() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      role="img"
      aria-label="Nicht enthalten"
      style={{ display: "block", margin: "0 auto" }}
    >
      <rect x="1" y="1" width="22" height="22" rx="5" fill={BADGE_GRAY} />
      <path
        d="M7.5 7.5 L16.5 16.5 M16.5 7.5 L7.5 16.5"
        fill="none"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Comparison() {
  return (
    <div className="w-full bg-[#F4F0EB]">
      <Section maxWidth={880}>
        <h2 className="mx-auto max-w-[600px] text-balance text-center text-xl font-extrabold leading-tight text-brand-yellow md:text-[28px] md:leading-[1.15]">
          {comparison.headline}
        </h2>

      <div
        className="mt-10 overflow-hidden rounded-[20px] bg-white"
        style={{
          boxShadow: `0 0 0 2px ${CARD_BORDER}, 0 2px 8px rgba(0,0,0,0.04)`,
        }}
      >
        <table className="w-full text-sm md:text-base">
          <thead>
            <tr>
              <th scope="col" className="px-5 py-6 md:px-7" />
              <th scope="col" className="px-3 py-6 text-center md:px-4">
                {/* Offizielles Kidgonet App-Icon (aus dem App Store). */}
                <Image
                  src="/brand/app-icon.png"
                  alt="Kidgonet App"
                  width={1024}
                  height={1024}
                  className="mx-auto h-9 w-9 max-w-none rounded-[9px] md:h-10 md:w-10 md:rounded-[11px]"
                />
              </th>
              <th
                scope="col"
                className="px-3 py-6 text-center font-semibold text-text-dark/55 md:px-4"
              >
                {comparison.columns.others}
              </th>
            </tr>
          </thead>
          <tbody>
            {comparison.features.map((feature) => (
              <tr
                key={feature.label}
                style={{ borderTop: `1px solid ${ROW_BORDER}` }}
              >
                <th
                  scope="row"
                  className="px-5 py-5 text-left font-bold text-text-dark md:px-7"
                >
                  {feature.label}
                </th>
                <td className="px-3 py-5 md:px-4">
                  <CheckBadge />
                </td>
                <td className="px-3 py-5 md:px-4">
                  {feature.others ? <CheckBadge /> : <CrossBadge />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </Section>
    </div>
  );
}
