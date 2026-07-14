"use client";

interface RouteOption {
  id: string;
  label: string;
  icon: string;
  available: boolean;
}

const ROUTES: RouteOption[] = [
  { id: "chemin-1", label: "Chemin 1", icon: "🌴", available: true },
  { id: "chemin-2", label: "Chemin 2", icon: "🌺", available: false },
  { id: "chemin-3", label: "Chemin 3", icon: "🍄", available: false },
];

export function RouteSelectScreen({ onSelect }: { onSelect: (routeId: string) => void }) {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-10 text-center">
      <span className="text-5xl">🧭</span>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
          3 chemins possibles
        </p>
        <h2 className="font-[var(--font-display)] text-2xl font-bold">Choisis ton chemin</h2>
      </div>
      <div className="flex w-full max-w-xs flex-col gap-3">
        {ROUTES.map((route) => (
          <button
            key={route.id}
            disabled={!route.available}
            onClick={() => route.available && onSelect(route.id)}
            className={`flex items-center gap-3 rounded-[var(--button-radius)] border-[3px] px-6 py-4 text-lg font-bold shadow-md transition ${
              route.available
                ? "border-[var(--color-primary)] bg-[var(--color-surface)] hover:brightness-105 active:scale-95"
                : "cursor-not-allowed border-[var(--color-border)] bg-[var(--color-surface)]/40 text-[var(--color-muted)] shadow-none"
            }`}
          >
            <span className="text-2xl">{route.icon}</span>
            {route.label}
            {!route.available && <span className="ml-1 text-xs font-normal">(bientôt)</span>}
          </button>
        ))}
      </div>
    </section>
  );
}
