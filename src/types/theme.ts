export type ThemeId = "bois-minimaliste" | "mystere" | "festif" | "jungle";

export interface ThemePreset {
  id: ThemeId;
  label: string;
  colors: {
    background: string;
    surface: string;
    foreground: string;
    muted: string;
    primary: string;
    primaryForeground: string;
    secondary: string;
    tertiary: string;
    accent: string;
    glow: string;
    border: string;
    danger: string;
    success: string;
  };
  fonts: {
    sans: string;
    display: string;
  };
  radius: string;
  buttonRadius: string;
  textureOpacity: number;
  decoration: "grain" | "jungle";
}
