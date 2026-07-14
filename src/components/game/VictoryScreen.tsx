import type { TeamProgress } from "@/types/hunt";

export function VictoryScreen({
  team,
  elapsedLabel,
}: {
  team: TeamProgress;
  elapsedLabel: string;
}) {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-10 text-center">
      <span className="text-6xl">🌴🎉</span>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
          Chasse terminée
        </p>
        <h2 className="font-[var(--font-display)] text-3xl font-bold">Bravo, {team.teamName} !</h2>
      </div>
      <div className="flex gap-4">
        <div className="rounded-[1.5rem] bg-[var(--color-surface)] px-6 py-4 shadow-md">
          <p className="text-2xl font-black text-[var(--color-primary)]">{elapsedLabel}</p>
          <p className="text-xs font-semibold text-[var(--color-muted)]">Temps total</p>
        </div>
        <div className="rounded-[1.5rem] bg-[var(--color-surface)] px-6 py-4 shadow-md">
          <p className="text-2xl font-black text-[var(--color-accent)]">{team.pointsTotal}</p>
          <p className="text-xs font-semibold text-[var(--color-muted)]">Points</p>
        </div>
      </div>
      {team.badges.length > 0 && (
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm font-bold">Badges débloqués</p>
          <div className="flex gap-3">
            {team.badges.map((badge, i) => (
              <div
                key={badge.id}
                className="flex flex-col items-center gap-1 rounded-[1.5rem] border-2 px-4 py-3 shadow-sm"
                style={{
                  borderColor: i % 2 === 0 ? "var(--color-secondary)" : "var(--color-tertiary)",
                  backgroundColor: "var(--color-surface)",
                }}
              >
                <span className="text-2xl">{badge.icon}</span>
                <span className="text-xs font-bold">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
