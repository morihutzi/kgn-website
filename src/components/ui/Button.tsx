import Link from "next/link";
import { type ComponentProps, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-yellow text-white hover:bg-[#e09e00] focus-visible:outline-brand-yellow",
  secondary:
    "bg-brand-orange text-white hover:bg-[#e04a00] focus-visible:outline-brand-orange",
  outline:
    "border-2 border-brand-yellow text-text-dark hover:bg-brand-yellow hover:text-white focus-visible:outline-brand-yellow",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-[12px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentProps<"a">, "className" | "children" | "href">;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<ComponentProps<"button">, "className" | "children">;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    children,
  } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, external, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    void _v;
    void _s;
    void _c;
    void _ch;
    if (external || href.startsWith("http")) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;
  void _v;
  void _s;
  void _c;
  void _ch;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
