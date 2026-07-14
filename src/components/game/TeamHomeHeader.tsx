import type { Hunt, TeamProgress } from "@/types/hunt";
import type { PlayerProfile } from "@/types/player";
import { GameMenu } from "./GameMenu";

export function TeamHomeHeader({
  hunt,
  team,
  player,
  onOpenLeaderboard,
  onEditProfile,
}: {
  hunt: Hunt;
  team: TeamProgress;
  player: PlayerProfile;
  onOpenLeaderboard: () => void;
  onEditProfile: () => void;
}) {
  const total = hunt.stages.length;
  const current = Math.min(team.currentStageIndex + 1, total);

  return (
    <header className="flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-surface)]/60 px-5 py-4">
      <div>
        <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">{hunt.name}</p>
        <h1 className="font-[var(--font-display)] text-xl font-semibold">{team.teamName}</h1>
      </div>
      <div className="flex items-center gap-3">
        <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1 text-sm font-medium">
          Étape {current}/{total}
        </span>
        <GameMenu player={player} onOpenLeaderboard={onOpenLeaderboard} onEditProfile={onEditProfile} />
      </div>
    </header>
  );
}
