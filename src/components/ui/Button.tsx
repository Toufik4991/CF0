import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:brightness-110 disabled:bg-[var(--color-muted)] disabled:text-[var(--color-surface)] disabled:opacity-70",
  secondary:
    "bg-[var(--color-surface)] text-[var(--color-foreground)] border border-[var(--color-border)] hover:bg-[var(--color-border)]",
  ghost: "bg-transparent text-[var(--color-foreground)] hover:bg-[var(--color-surface)]",
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-[var(--radius-theme)] px-6 py-3 text-base font-semibold tracking-wide transition-all duration-200 disabled:cursor-not-allowed ${VARIANTS[variant]} ${className}`}
      {...props}
    />
  );
}
