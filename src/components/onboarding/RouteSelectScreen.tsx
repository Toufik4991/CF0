"use client";

interface RouteOption {
  id: string;
  label: string;
  available: boolean;
}

const ROUTES: RouteOption[] = [
  { id: "chemin-1", label: "Chemin 1", available: true },
  { id: "chemin-2", label: "Chemin 2", available: false },
  { id: "chemin-3", label: "Chemin 3", available: false },
];

export function RouteSelectScreen({ onSelect }: { onSelect: (routeId: string) => void }) {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-10 text-center">
      <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">3 chemins possibles</p>
      <h2 className="font-[var(--font-display)] text-2xl font-semibold">Choisis ton chemin</h2>
      <div className="flex w-full max-w-xs flex-col gap-3">
        {ROUTES.map((route) => (
          <button
            key={route.id}
            disabled={!route.available}
            onClick={() => route.available && onSelect(route.id)}
            className={`rounded-[var(--radius-theme)] border px-6 py-4 text-lg font-semibold transition ${
              route.available
                ? "border-[var(--color-primary)] bg-[var(--color-surface)] hover:bg-[var(--color-border)]"
                : "cursor-not-allowed border-[var(--color-border)] bg-[var(--color-surface)]/40 text-[var(--color-muted)]"
            }`}
          >
            {route.label}
            {!route.available && <span className="ml-2 text-xs font-normal">(bientôt)</span>}
          </button>
        ))}
      </div>
    </section>
  );
}
