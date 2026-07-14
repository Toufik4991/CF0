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
    <header className="flex items-center justify-between rounded-b-[2rem] border-b-2 border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🌿</span>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-muted)]">
            {hunt.name}
          </p>
          <h1 className="font-[var(--font-display)] text-xl font-bold">{team.teamName}</h1>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-[var(--color-secondary)] px-4 py-1.5 text-sm font-bold text-[var(--color-foreground)] shadow-sm">
          Étape {current}/{total}
        </span>
        <GameMenu player={player} onOpenLeaderboard={onOpenLeaderboard} onEditProfile={onEditProfile} />
      </div>
    </header>
  );
}
