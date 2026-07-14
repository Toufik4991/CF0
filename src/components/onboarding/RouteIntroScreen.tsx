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
  onStart: () => void;
}) {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-10 text-center">
      {player.selfieDataUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={player.selfieDataUrl}
          alt="Ton personnage"
          style={{ imageRendering: "pixelated" }}
          className="h-24 w-24 rounded-full border-4 border-[var(--color-primary)] object-cover"
        />
      )}
      <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Bienvenue {player.pseudo}</p>
      <h2 className="font-[var(--font-display)] text-3xl font-semibold">{hunt.name}</h2>
      <p className="max-w-xs text-sm text-[var(--color-muted)]">
        Tu rejoins l&apos;équipe{" "}
        <span className="font-semibold text-[var(--color-foreground)]">{team.teamName}</span>.{" "}
        {hunt.stages.length}{" "}étapes t&apos;attendent.
      </p>
      <Button onClick={onStart}>C&apos;est parti</Button>
    </section>
  );
}
