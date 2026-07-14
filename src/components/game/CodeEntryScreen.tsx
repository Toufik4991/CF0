"use client";

import { useState, type FormEvent } from "react";
import type { Stage } from "@/types/hunt";
import { Button } from "@/components/ui/Button";

export function CodeEntryScreen({
  stage,
  onCorrect,
}: {
  stage: Stage;
  onCorrect: () => void;
}) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (value.trim() === stage.code) {
      setError(false);
      onCorrect();
    } else {
      setError(true);
    }
  }

  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-10 text-center">
      <h2 className="font-[var(--font-display)] text-2xl font-semibold">Entrer le code</h2>
      <p className="max-w-xs text-sm text-[var(--color-muted)]">
        Saisissez le code de déverrouillage obtenu pour révéler l&apos;indice.
      </p>
      <form onSubmit={handleSubmit} className="flex w-full max-w-xs flex-col items-center gap-4">
        <input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          inputMode="numeric"
          autoFocus
          className={`w-full rounded-[var(--radius-theme)] border-2 bg-[var(--color-background)] px-4 py-3 text-center text-2xl tracking-[0.4em] outline-none ${
            error
              ? "border-[var(--color-danger)]"
              : "border-[var(--color-border)] focus:border-[var(--color-primary)]"
          }`}
          placeholder="----"
        />
        {error && (
          <p className="text-sm font-medium text-[var(--color-danger)]">Code incorrect, réessayez.</p>
        )}
        <Button type="submit" className="w-full">
          Valider
        </Button>
      </form>
    </section>
  );
}
