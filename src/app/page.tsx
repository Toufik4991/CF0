import Link from "next/link";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getTheme } from "@/lib/themes";
import { MOCK_HUNT } from "@/lib/mock-data";

export default function Home() {
  const theme = getTheme(MOCK_HUNT.themeId);

  return (
    <ThemeProvider theme={theme}>
      <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-16 text-center">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Brique 1 — coquille visuelle</p>
          <h1 className="font-[var(--font-display)] text-3xl font-semibold">{MOCK_HUNT.name}</h1>
          <p className="max-w-sm text-sm text-[var(--color-muted)]">
            L&apos;accès réel se fera via un QR code par équipe (à venir). En attendant, explore la
            boucle de jeu et les écrans avec des données factices.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/play/demo-team"
            className="rounded-[var(--radius-theme)] bg-[var(--color-primary)] px-6 py-3 text-base font-semibold text-[var(--color-primary-foreground)] hover:brightness-110"
          >
            Jouer (équipe démo)
          </Link>
          <Link
            href="/dev/preview"
            className="rounded-[var(--radius-theme)] border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 text-base font-semibold hover:bg-[var(--color-border)]"
          >
            Bac à sable des écrans
          </Link>
        </div>
      </main>
    </ThemeProvider>
  );
}
