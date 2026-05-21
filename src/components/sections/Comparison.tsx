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
      <path
        d="M5 13l4 4L19 7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Cross() {
  return (
    <svg
      aria-label="Nicht enthalten"
      role="img"
      viewBox="0 0 24 24"
      className="mx-auto h-6 w-6 text-text-muted"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export function Comparison() {
  return (
    <Section background="white">
      <h2 className="text-balance text-center text-3xl font-bold text-text-dark md:text-4xl">
        {comparison.headline}
      </h2>

      <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-card border border-black/10">
        <table className="w-full text-sm md:text-base">
          <thead>
            <tr className="bg-brand-yellow/20">
              <th scope="col" className="px-4 py-4 text-left font-semibold">
                Funktion
              </th>
              <th
                scope="col"
                className="px-4 py-4 text-center font-bold text-brand-green"
              >
                {comparison.columns.ours}
              </th>
              <th
                scope="col"
                className="px-4 py-4 text-center font-semibold text-text-dark/70"
              >
                {comparison.columns.others}
              </th>
            </tr>
          </thead>
          <tbody>
            {comparison.features.map((feature, idx) => (
              <tr
                key={feature}
                className={idx % 2 === 0 ? "bg-white" : "bg-surface-muted"}
              >
                <th
                  scope="row"
                  className="px-4 py-3 text-left font-medium text-text-dark"
                >
                  {feature}
                </th>
                <td className="px-4 py-3">
                  <Check />
                </td>
                <td className="px-4 py-3">
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
