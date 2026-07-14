"use client";

import type { TeamProgress } from "@/types/hunt";

const TEAM_ICONS = ["🐒", "🦜", "🐸", "🦋"];
const TEAM_COLORS = ["var(--color-primary)", "var(--color-secondary)", "var(--color-tertiary)"];

export function TeamSelectScreen({
  teams,
  onSelect,
}: {
  teams: TeamProgress[];
  onSelect: (team: TeamProgress) => void;
}) {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-10 text-center">
      <span className="text-5xl">🦋</span>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
          Rejoins les tiens
        </p>
        <h2 className="font-[var(--font-display)] text-2xl font-bold">Choisis ton équipe</h2>
      </div>
      <div className="flex w-full max-w-xs flex-col gap-3">
        {teams.map((team, i) => (
          <button
            key={team.teamId}
            onClick={() => onSelect(team)}
            style={{ borderColor: TEAM_COLORS[i % TEAM_COLORS.length] }}
            className="flex items-center gap-3 rounded-[var(--button-radius)] border-[3px] bg-[var(--color-surface)] px-6 py-4 text-lg font-bold shadow-md transition hover:brightness-105 active:scale-95"
          >
            <span className="text-2xl">{TEAM_ICONS[i % TEAM_ICONS.length]}</span>
            {team.teamName}
          </button>
        ))}
      </div>
    </section>
  );
}
