import type { LeaderboardEntry } from "@/types/hunt";

export function LeaderboardScreen({
  entries,
  currentTeamId,
  onClose,
}: {
  entries: LeaderboardEntry[];
  currentTeamId: string;
  onClose: () => void;
}) {
  const sorted = [...entries].sort((a, b) => b.pointsTotal - a.pointsTotal);

  return (
    <div className="fixed inset-0 z-30 flex items-end justify-center bg-black/40 sm:items-center">
      <div className="w-full max-w-sm rounded-t-[var(--radius-theme)] border border-[var(--color-border)] bg-[var(--color-background)] p-6 sm:rounded-[var(--radius-theme)]">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-[var(--font-display)] text-xl font-semibold">Classement</h2>
          <button onClick={onClose} className="text-sm text-[var(--color-muted)]">
            Fermer
          </button>
        </div>
        <ol className="flex flex-col gap-2">
          {sorted.map((entry, i) => (
            <li
              key={entry.teamId}
              className={`flex items-center justify-between rounded-[var(--radius-theme)] border px-4 py-3 text-sm ${
                entry.teamId === currentTeamId
                  ? "border-[var(--color-primary)] bg-[var(--color-surface)]"
                  : "border-[var(--color-border)]"
              }`}
            >
              <span className="flex items-center gap-3">
                <span className="font-semibold text-[var(--color-muted)]">#{i + 1}</span>
                <span className="font-medium">{entry.teamName}</span>
              </span>
              <span className="flex items-center gap-3 text-[var(--color-muted)]">
                <span>
                  {entry.finished ? "Terminé" : `Étape ${entry.currentStageIndex}/${entry.totalStages}`}
                </span>
                <span className="font-semibold text-[var(--color-foreground)]">{entry.pointsTotal} pts</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
