import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Fast geschafft – Bitte bestätige deine E-Mail",
  description: "Wir haben dir eine Bestätigungs-E-Mail geschickt. Klicke auf den Link darin, um deine Newsletter-Anmeldung abzuschließen.",
  alternates: { canonical: "/newsletter/sent" },
  robots: { index: false },
};

export default function NewsletterSentPage() {
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
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </span>
          </div>

          <h1 className="mb-4 text-3xl font-extrabold text-[#4A4A49] md:text-4xl">
            Fast geschafft!
          </h1>

          <p className="mb-3 text-lg text-[#4A4A49]/80">
            Wir haben dir eine Bestätigungs-E-Mail geschickt.
          </p>
          <p className="mb-10 text-base text-[#4A4A49]/60">
            Klicke auf den Link in der E-Mail, um deine Anmeldung abzuschließen.
            Schau auch in deinem Spam-Ordner nach, falls die E-Mail nicht
            ankommt.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#F9B000] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-105"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </Container>
    </section>
  );
}
