import type { Hunt, TeamProgress } from "@/types/hunt";
import type { PlayerProfile } from "@/types/player";
import { Button } from "@/components/ui/Button";

export function RouteIntroScreen({
  hunt,
  team,
  player,
  onStart,
}: {
  hunt: Hunt;
  team: TeamProgress;
  player: PlayerProfile;
  onStart: (reset: boolean) => void;
}) {
  const hasProgress = team.currentStageIndex > 0;
  const currentStep = Math.min(team.currentStageIndex + 1, hunt.stages.length);

  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-10 text-center">
      {player.selfieDataUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={player.selfieDataUrl}
          alt="Ton personnage"
          style={{ imageRendering: "pixelated" }}
          className="h-24 w-24 rounded-full border-4 border-[var(--color-primary)] object-cover shadow-[0_0_0_4px_var(--color-secondary)]"
        />
      ) : (
        <span className="text-5xl">🌴</span>
      )}
      <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
        Bienvenue {player.pseudo}
      </p>
      <h2 className="font-[var(--font-display)] text-3xl font-bold">{hunt.name}</h2>
      <p className="max-w-xs text-sm text-[var(--color-muted)]">
        Tu rejoins l&apos;équipe{" "}
        <span className="font-bold text-[var(--color-foreground)]">{team.teamName}</span>.{" "}
        {hunt.stages.length}{" "}étapes t&apos;attendent.
      </p>

      {hasProgress ? (
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-[var(--color-muted)]">
            Cette équipe est déjà à l&apos;étape {currentStep}/{hunt.stages.length}.
          </p>
          <Button onClick={() => onStart(false)}>▶️ Continuer (étape {currentStep})</Button>
          <Button variant="secondary" onClick={() => onStart(true)}>
            🔄 Recommencer depuis le début
          </Button>
        </div>
      ) : (
        <Button onClick={() => onStart(false)}>🚀 C&apos;est parti</Button>
      )}
    </section>
  );
}
