"use client";

import { useState } from "react";
import type { Stage } from "@/types/hunt";
import { Button } from "@/components/ui/Button";

const MINI_GAME_ICONS: Record<Stage["miniGameType"], string> = {
  quiz: "🌺",
  memory: "🍄",
  puzzle: "🍃",
  cipher: "🌿",
  reflex: "🌵",
  association: "🪴",
};

export function MiniGamePlaceholder({
  stage,
  onCodeRevealed,
}: {
  stage: Stage;
  onCodeRevealed: () => void;
}) {
  const [solved, setSolved] = useState(false);

  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-10 text-center">
      <span className="text-5xl">{MINI_GAME_ICONS[stage.miniGameType]}</span>
      <h2 className="font-[var(--font-display)] text-2xl font-bold">{stage.title}</h2>

      {!solved ? (
        <>
          <div className="w-full max-w-sm rounded-[var(--radius-theme)] border-2 border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-md">
            <p className="text-sm text-[var(--color-muted)]">Mini-jeu à brancher en Brique 2.</p>
          </div>
          <Button onClick={() => setSolved(true)}>Simuler la réussite</Button>
        </>
      ) : (
        <>
          <div className="w-full max-w-sm rounded-[var(--radius-theme)] border-2 border-[var(--color-success)] bg-[var(--color-surface)] p-6 shadow-md">
            <p className="text-3xl font-black tracking-[0.3em] text-[var(--color-primary)]">
              {stage.code}
            </p>
            <p className="mt-2 text-xs text-[var(--color-muted)]">Retenez ce code pour l&apos;étape suivante.</p>
          </div>
          <Button onClick={onCodeRevealed}>Saisir le code</Button>
        </>
      )}
    </section>
  );
}
