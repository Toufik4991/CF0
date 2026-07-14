"use client";

import { useState } from "react";
import type { Stage } from "@/types/hunt";
import { Button } from "@/components/ui/Button";

export function ZoneScreen({
  stage,
  isLastStage,
  onLaunchNext,
}: {
  stage: Stage;
  isLastStage: boolean;
  onLaunchNext: () => void;
}) {
  const [inZone, setInZone] = useState(false);

  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-10 text-center">
      <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Zone à atteindre</p>
      <h2 className="font-[var(--font-display)] text-2xl font-semibold">{stage.zone.label}</h2>
      <p className="max-w-xs text-sm text-[var(--color-muted)]">
        Rendez-vous sur place. Le bouton s&apos;activera automatiquement dans un rayon de{" "}
        {stage.zone.radiusMeters} m (suivi GPS réel prévu en Brique 4 — bascule de démonstration
        ci-dessous en attendant).
      </p>

      <button
        onClick={() => setInZone((v) => !v)}
        className="text-xs text-[var(--color-muted)] underline underline-offset-4"
      >
        [debug] {inZone ? "Simuler hors zone" : "Simuler entrée en zone"}
      </button>

      <Button onClick={onLaunchNext} disabled={!inZone} className={inZone ? "glow-active" : ""}>
        {isLastStage ? "Terminer la chasse" : "Lancer le mini-jeu suivant"}
      </Button>
    </section>
  );
}
