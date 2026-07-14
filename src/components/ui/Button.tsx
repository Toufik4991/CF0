import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-lg shadow-[var(--color-primary)]/25 hover:brightness-110 disabled:bg-[var(--color-muted)] disabled:text-[var(--color-surface)] disabled:opacity-70 disabled:shadow-none",
  secondary:
    "bg-[var(--color-surface)] text-[var(--color-foreground)] border-2 border-[var(--color-border)] hover:bg-[var(--color-border)]",
  ghost: "bg-transparent text-[var(--color-foreground)] hover:bg-[var(--color-surface)]",
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-[var(--button-radius)] px-7 py-3.5 text-base font-bold tracking-wide transition-all duration-200 active:scale-95 disabled:cursor-not-allowed disabled:active:scale-100 ${VARIANTS[variant]} ${className}`}
      {...props}
    />
  );
}
