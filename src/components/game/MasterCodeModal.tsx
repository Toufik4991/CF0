"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

const MASTER_CODE = "jules";

export function MasterCodeModal({
  onClose,
  onResetPoints,
  onSkipAllStages,
}: {
  onClose: () => void;
  onResetPoints: () => void;
  onSkipAllStages: () => void;
}) {
  const [value, setValue] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (value.trim().toLowerCase() === MASTER_CODE) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 px-6">
      <div className="w-full max-w-xs rounded-[1.5rem] border-2 border-[var(--color-border)] bg-[var(--color-background)] p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-[var(--font-display)] text-lg font-bold">🔑 Mode admin</h2>
          <button onClick={onClose} className="text-sm font-semibold text-[var(--color-muted)]">
            Fermer
          </button>
        </div>

        {!unlocked ? (
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <input
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setError(false);
              }}
              autoFocus
              type="password"
              placeholder="Code maître"
              className={`w-full rounded-[var(--button-radius)] border-2 bg-[var(--color-surface)] px-4 py-3 text-center text-lg font-semibold outline-none ${
                error ? "border-[var(--color-danger)]" : "border-[var(--color-border)] focus:border-[var(--color-primary)]"
              }`}
            />
            {error && <p className="text-sm font-bold text-[var(--color-danger)]">Code incorrect.</p>}
            <Button type="submit" className="w-full">
              Valider
            </Button>
          </form>
        ) : (
          <div className="flex flex-col gap-3">
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => {
                onResetPoints();
                onClose();
              }}
            >
              🔄 Réinitialiser les points
            </Button>
            <Button
              className="w-full"
              onClick={() => {
                onSkipAllStages();
                onClose();
              }}
            >
              ⏭️ Passer toutes les étapes
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
