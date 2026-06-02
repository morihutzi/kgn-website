import type { Metadata } from "next";
import { NewsletterOverlay } from "@/components/newsletter/NewsletterOverlay";

export const metadata: Metadata = {
  title: "Anmeldung bestätigt – Willkommen!",
  description: "Deine Newsletter-Anmeldung bei Kidgonet ist bestätigt. Du erhältst ab sofort unsere Updates.",
  alternates: { canonical: "/newsletter/confirmed" },
  robots: { index: false },
};

export default function NewsletterConfirmedPage() {
  return (
    <div className="min-h-screen">
      <NewsletterOverlay variant="confirmed" />
    </div>
  );
}
