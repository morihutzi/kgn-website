import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { comparison } from "@/content/home";

function Check() {
  return (
    <svg
      aria-label="Enthalten"
      role="img"
      viewBox="0 0 24 24"
      className="mx-auto h-6 w-6 text-brand-green"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Cross() {
  return (
    <svg
      aria-label="Nicht enthalten"
      role="img"
      viewBox="0 0 24 24"
      className="mx-auto h-6 w-6 text-text-dark/35"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Comparison() {
  return (
    <Section maxWidth={900}>
      <h2 className="text-balance text-center text-xl font-extrabold leading-tight text-brand-yellow md:text-[32px] md:leading-[1.2]">
        {comparison.headline}
      </h2>

      <div className="mt-10 overflow-hidden rounded-[20px] border border-neutral-200 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <table className="w-full text-sm md:text-base">
          <thead>
            <tr className="bg-[#FCEFD3]">
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
              <tr key={feature} className="border-t border-neutral-100">
                <th
                  scope="row"
                  className="px-5 py-5 text-left font-normal text-text-dark md:px-7"
                >
                  {feature}
                </th>
                <td className="px-3 py-5 md:px-4">
                  <Check />
                </td>
                <td className="px-3 py-5 md:px-4">
                  <Cross />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
