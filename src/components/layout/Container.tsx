import { type ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  width?: "default" | "narrow";
};

export function Container({
  children,
  className = "",
  width = "default",
}: ContainerProps) {
  const maxWidth = width === "narrow" ? "max-w-[700px]" : "max-w-[1200px]";
  return (
    <div className={`${maxWidth} mx-auto w-full px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
