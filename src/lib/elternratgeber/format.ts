const dtf = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export function formatDate(iso: string | undefined): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return dtf.format(d);
}

export function formatLesezeit(min: number | undefined): string {
  if (!min) return "";
  return `${min} Min. Lesezeit`;
}
