import type { AnchorHTMLAttributes, ReactNode } from "react";

const variants = {
  outline: "border border-accent text-accent hover:bg-accent/10",
  ghost: "text-ink hover:text-highlight",
} as const;

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: keyof typeof variants;
  icon?: ReactNode;
};

export function ButtonLink({
  variant = "outline",
  icon,
  className = "",
  children,
  ...props
}: Props) {
  return (
    <a
      className={`inline-flex items-center gap-2 rounded-md px-5 py-3 font-mono text-sm transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </a>
  );
}
