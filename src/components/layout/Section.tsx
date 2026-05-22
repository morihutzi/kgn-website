import { type ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  maxWidth?: number;
  "aria-labelledby"?: string;
};

/**
 * Section wrapper: default 800px max-width, centered, with horizontal padding.
 */
export function Section({
  children,
  className = "",
  id,
  maxWidth = 800,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full px-4 py-5 md:py-7 ${className}`}
      style={{ maxWidth: `${maxWidth}px` }}
      {...rest}
    >
      {children}
    </section>
  );
}

type SectionHeadingProps = {
  children: ReactNode;
  level?: 2 | 3;
  size?: "default" | "small";
  align?: "left" | "center" | "right";
  className?: string;
};

/**
 * Standard heading style for sections: 33px, weight 800, brand-yellow.
 * Per live-site spec.
 */
export function SectionHeading({
  children,
  level = 2,
  size = "default",
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const Tag = level === 2 ? "h2" : "h3";
  const sizeClasses =
    size === "small"
      ? "text-lg font-black md:text-[18px] md:leading-tight"
      : "text-xl font-extrabold md:text-[28px] md:leading-[1.15]";
  const alignClasses =
    align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left";
  return (
    <Tag className={`text-brand-yellow ${sizeClasses} ${alignClasses} ${className}`}>
      {children}
    </Tag>
  );
}
