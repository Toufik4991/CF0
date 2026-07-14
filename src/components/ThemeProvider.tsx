"use client";

import type { CSSProperties, ReactNode } from "react";
import type { ThemePreset } from "@/types/theme";

const GRAIN_TEXTURE_URL =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export function ThemeProvider({
  theme,
  children,
}: {
  theme: ThemePreset;
  children: ReactNode;
}) {
  const vars = {
    "--color-background": theme.colors.background,
    "--color-surface": theme.colors.surface,
    "--color-foreground": theme.colors.foreground,
    "--color-muted": theme.colors.muted,
    "--color-primary": theme.colors.primary,
    "--color-primary-foreground": theme.colors.primaryForeground,
    "--color-accent": theme.colors.accent,
    "--color-glow": theme.colors.glow,
    "--color-border": theme.colors.border,
    "--color-danger": theme.colors.danger,
    "--color-success": theme.colors.success,
    "--radius-theme": theme.radius,
    "--font-display": theme.fonts.display,
  } as CSSProperties;

  return (
    <div
      style={vars}
      className="relative flex min-h-full flex-1 flex-col bg-[var(--color-background)] text-[var(--color-foreground)]"
    >
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 mix-blend-overlay"
        style={{ opacity: theme.textureOpacity, backgroundImage: GRAIN_TEXTURE_URL }}
      />
      <div className="relative z-10 flex min-h-full flex-1 flex-col">{children}</div>
    </div>
  );
}
