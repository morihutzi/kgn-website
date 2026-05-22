import Image from "next/image";
import { Check, X } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { comparison } from "@/content/home";

export function Comparison() {
  return (
    <Section maxWidth={900}>
      <h2 className="text-balance text-center text-xl font-extrabold leading-tight text-brand-yellow md:text-[32px] md:leading-[1.2]">
        {comparison.headline}
      </h2>

      <div
        className="mt-10 overflow-hidden rounded-[20px] bg-white"
        style={{
          border: "1px solid #E5E5E5",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        }}
      >
        <table className="w-full text-sm md:text-base">
          <thead>
            <tr style={{ backgroundColor: "#FCEFD3" }}>
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
                style={{ borderTop: "1px solid #F0F0F0" }}
              >
                <th
                  scope="row"
                  className="px-5 py-5 text-left font-normal text-text-dark md:px-7"
                >
                  {feature}
                </th>
                <td className="px-3 py-5 md:px-4">
                  <Check
                    className="mx-auto size-6 text-brand-green"
                    strokeWidth={3}
                    aria-label="Enthalten"
                  />
                </td>
                <td className="px-3 py-5 md:px-4">
                  <X
                    className="mx-auto size-6 text-text-dark/35"
                    strokeWidth={2.5}
                    aria-label="Nicht enthalten"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
