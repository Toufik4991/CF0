"use client";

import type { TeamProgress } from "@/types/hunt";

export function TeamSelectScreen({
  teams,
  onSelect,
}: {
  teams: TeamProgress[];
  onSelect: (team: TeamProgress) => void;
}) {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-10 text-center">
      <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Rejoins les tiens</p>
      <h2 className="font-[var(--font-display)] text-2xl font-semibold">Choisis ton équipe</h2>
      <div className="flex w-full max-w-xs flex-col gap-3">
        {teams.map((team) => (
          <button
            key={team.teamId}
            onClick={() => onSelect(team)}
            className="rounded-[var(--radius-theme)] border border-[var(--color-primary)] bg-[var(--color-surface)] px-6 py-4 text-lg font-semibold transition hover:bg-[var(--color-border)]"
          >
            {team.teamName}
          </button>
        ))}
      </div>
    </section>
  );
}
