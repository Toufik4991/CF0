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
      <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Chasse terminée</p>
      <h2 className="font-[var(--font-display)] text-3xl font-semibold">Bravo, {team.teamName} !</h2>
      <div className="flex gap-6 text-sm text-[var(--color-muted)]">
        <div>
          <p className="text-2xl font-semibold text-[var(--color-foreground)]">{elapsedLabel}</p>
          <p>Temps total</p>
        </div>
        <div>
          <p className="text-2xl font-semibold text-[var(--color-foreground)]">{team.pointsTotal}</p>
          <p>Points</p>
        </div>
      </div>
      {team.badges.length > 0 && (
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm font-medium">Badges débloqués</p>
          <div className="flex gap-3">
            {team.badges.map((badge) => (
              <div
                key={badge.id}
                className="flex flex-col items-center gap-1 rounded-[var(--radius-theme)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3"
              >
                <span className="text-2xl">{badge.icon}</span>
                <span className="text-xs font-medium">{badge.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
