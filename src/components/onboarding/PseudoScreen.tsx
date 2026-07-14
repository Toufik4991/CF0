"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function PseudoScreen({ onSubmit }: { onSubmit: (pseudo: string) => void }) {
  const [value, setValue] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    if (trimmed) onSubmit(trimmed);
  }

  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-10 text-center">
      <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Bienvenue</p>
      <h2 className="font-[var(--font-display)] text-2xl font-semibold">Quel est ton prénom ?</h2>
      <form onSubmit={handleSubmit} className="flex w-full max-w-xs flex-col items-center gap-4">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
          maxLength={20}
          placeholder="Ton prénom"
          className="w-full rounded-[var(--radius-theme)] border-2 border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-center text-xl outline-none focus:border-[var(--color-primary)]"
        />
        <Button type="submit" className="w-full" disabled={!value.trim()}>
          Continuer
        </Button>
      </form>
    </section>
  );
}
