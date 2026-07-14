import type { ThemeId, ThemePreset } from "@/types/theme";

export const DEFAULT_THEME_ID: ThemeId = "bois-minimaliste";

export const THEMES: Record<ThemeId, ThemePreset> = {
  "bois-minimaliste": {
    id: "bois-minimaliste",
    label: "Bois / Minimaliste",
    colors: {
      background: "#F4EBDC",
      surface: "#EADFC7",
      foreground: "#2E2A26",
      muted: "#7A6F5D",
      primary: "#C98A2C",
      primaryForeground: "#FFFBF2",
      accent: "#B5502D",
      glow: "#E8A33D",
      border: "#D8C9AC",
      danger: "#8B3A2B",
      success: "#4B6B3A",
    },
    fonts: {
      sans: "var(--font-sans)",
      display: "var(--font-display)",
    },
    radius: "0.5rem",
    textureOpacity: 0.05,
  },
  mystere: {
    id: "mystere",
    label: "Mystère / Enquête",
    colors: {
      background: "#181B22",
      surface: "#23272F",
      foreground: "#E8E6DF",
      muted: "#8B93A1",
      primary: "#B08D57",
      primaryForeground: "#181B22",
      accent: "#4A6670",
      glow: "#C9A45C",
      border: "#333944",
      danger: "#A14B3F",
      success: "#4F7A5B",
    },
    fonts: {
      sans: "var(--font-sans)",
      display: "var(--font-display)",
    },
    radius: "0.25rem",
    textureOpacity: 0.08,
  },
  festif: {
    id: "festif",
    label: "Festif / Anniversaire",
    colors: {
      background: "#FFF6EC",
      surface: "#FFE8D1",
      foreground: "#2B2420",
      muted: "#8A6F5C",
      primary: "#E0653A",
      primaryForeground: "#FFF6EC",
      accent: "#2F8F7E",
      glow: "#FFB74D",
      border: "#F0D3B0",
      danger: "#B23A3A",
      success: "#2F8F5A",
    },
    fonts: {
      sans: "var(--font-sans)",
      display: "var(--font-display)",
    },
    radius: "1rem",
    textureOpacity: 0.03,
  },
  jungle: {
    id: "jungle",
    label: "Jungle / Enfance",
    colors: {
      background: "#EAF4E1",
      surface: "#D9ECC9",
      foreground: "#1F3A2E",
      muted: "#5C7A65",
      primary: "#3F9142",
      primaryForeground: "#FBFFF4",
      accent: "#FF8A5B",
      glow: "#FFD166",
      border: "#BFE0AE",
      danger: "#D6553D",
      success: "#2F8F5A",
    },
    fonts: {
      sans: "var(--font-sans)",
      display: "var(--font-display-alt)",
    },
    radius: "1.5rem",
    textureOpacity: 0.06,
  },
};

export function getTheme(id: ThemeId): ThemePreset {
  return THEMES[id];
}
