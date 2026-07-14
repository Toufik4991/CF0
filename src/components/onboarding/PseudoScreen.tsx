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
      <span className="text-5xl">🌴</span>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
          Bienvenue
        </p>
        <h2 className="font-[var(--font-display)] text-2xl font-bold">Quel est ton prénom ?</h2>
      </div>
      <form onSubmit={handleSubmit} className="flex w-full max-w-xs flex-col items-center gap-4">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
          maxLength={20}
          placeholder="Ton prénom"
          className="w-full rounded-[var(--button-radius)] border-2 border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3.5 text-center text-xl font-semibold shadow-inner outline-none focus:border-[var(--color-primary)]"
        />
        <Button type="submit" className="w-full" disabled={!value.trim()}>
          Continuer
        </Button>
      </form>
    </section>
  );
}
