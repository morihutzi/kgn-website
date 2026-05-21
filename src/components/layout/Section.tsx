import { type ReactNode } from "react";
import { Container } from "@/components/layout/Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  background?: "white" | "muted" | "dark" | "brand";
  width?: "default" | "narrow";
  id?: string;
  "aria-labelledby"?: string;
};

const bgClasses = {
  white: "bg-white text-text-dark",
  muted: "bg-surface-muted text-text-dark",
  dark: "bg-text-dark text-white",
  brand: "bg-brand-yellow text-text-dark",
};

export function Section({
  children,
  className = "",
  background = "white",
  width = "default",
  id,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${bgClasses[background]} ${className}`}
      {...rest}
    >
      <Container width={width}>{children}</Container>
    </section>
  );
}
