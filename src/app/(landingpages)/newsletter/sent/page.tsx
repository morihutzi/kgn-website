import type { Metadata } from "next";
import { NewsletterOverlay } from "@/components/newsletter/NewsletterOverlay";

export const metadata: Metadata = {
  title: "Fast geschafft – Bitte bestätige deine E-Mail",
  description: "Wir haben dir eine Bestätigungs-E-Mail geschickt. Klicke auf den Link darin, um deine Newsletter-Anmeldung abzuschliessen.",
  alternates: { canonical: "/newsletter/sent" },
  robots: { index: false },
};

export default function NewsletterSentPage() {
  return (
    <div className="min-h-screen">
      <NewsletterOverlay variant="sent" />
    </div>
  );
}
