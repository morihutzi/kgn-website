import { Container } from "@/components/layout/Container";

export default function HomePage() {
  return (
    <Container className="py-24">
      <h1 className="text-4xl font-bold text-text-dark md:text-5xl">
        Deine Kinder surfen sicher – mit Kidgonet
      </h1>
      <p className="mt-4 text-lg text-text-dark/80">
        Nur 3 Klicks für mehr Sicherheit im Netz.
      </p>
      <p className="mt-8 text-sm text-text-muted">
        (Inhalt folgt in Phase 2 — aktuell nur Layout-Shell.)
      </p>
    </Container>
  );
}
