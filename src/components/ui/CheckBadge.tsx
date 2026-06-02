/**
 * Kidgonet Brand-Checkbox: solid green rounded square with white check.
 * Used in feature bullet lists across the site.
 */
export function CheckBadge({
  bordered = false,
}: {
  /** When true, adds a white border (for use on brand-yellow backgrounds). */
  bordered?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={`mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-[6px] bg-brand-green ${
        bordered ? "border-2 border-white" : ""
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
      >
        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
