import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Anmeldung bestätigt – Willkommen!",
  description: "Deine Newsletter-Anmeldung bei Kidgonet ist bestätigt. Du erhältst ab sofort unsere Updates.",
  alternates: { canonical: "/newsletter/confirmed" },
  robots: { index: false },
};

export default function NewsletterConfirmedPage() {
  return (
    <section className="flex flex-1 items-center py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <div className="mb-6 flex justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F9B000]">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
            </span>
          </div>

          <h1 className="mb-4 text-3xl font-extrabold text-[#4A4A49] md:text-4xl">
            Du bist dabei!
          </h1>

          <p className="mb-3 text-lg text-[#4A4A49]/80">
            Deine Anmeldung ist bestätigt.
          </p>
          <p className="mb-10 text-base text-[#4A4A49]/60">
            Ab sofort hältst du dich mit unseren Updates rund um Kidgonet auf
            dem Laufenden. Du kannst dich jederzeit über den Link in unseren
            E-Mails abmelden.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#F9B000] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-105"
          >
            Zur Startseite
          </Link>
        </div>
      </Container>
    </section>
  );
}
