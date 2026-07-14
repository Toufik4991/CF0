"use client";

import { useState } from "react";
import type { Stage } from "@/types/hunt";
import { Button } from "@/components/ui/Button";

const MINI_GAME_LABELS: Record<Stage["miniGameType"], string> = {
  quiz: "Quiz",
  memory: "Memory",
  puzzle: "Puzzle glissant",
  cipher: "Décryptage",
  reflex: "Réflexe",
  association: "Association",
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
      <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
        {MINI_GAME_LABELS[stage.miniGameType]}
      </p>
      <h2 className="font-[var(--font-display)] text-2xl font-semibold">{stage.title}</h2>

      {!solved ? (
        <>
          <div className="w-full max-w-sm rounded-[var(--radius-theme)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <p className="text-sm text-[var(--color-muted)]">
              Mini-jeu « {MINI_GAME_LABELS[stage.miniGameType]} » — composant à brancher en Brique 2.
            </p>
          </div>
          <Button onClick={() => setSolved(true)}>Simuler la réussite</Button>
        </>
      ) : (
        <>
          <div className="w-full max-w-sm rounded-[var(--radius-theme)] border border-[var(--color-success)] bg-[var(--color-surface)] p-6">
            <p className="text-sm font-medium text-[var(--color-success)]">Bravo, mini-jeu réussi !</p>
            <p className="mt-2 text-3xl font-bold tracking-[0.3em]">{stage.code}</p>
            <p className="mt-2 text-xs text-[var(--color-muted)]">Retenez ce code pour l&apos;étape suivante.</p>
          </div>
          <Button onClick={onCodeRevealed}>Saisir le code</Button>
        </>
      )}
    </section>
  );
}
