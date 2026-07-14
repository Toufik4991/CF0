"use client";

import { useState, type ReactNode } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TeamHomeHeader } from "@/components/game/TeamHomeHeader";
import { MiniGamePlaceholder } from "@/components/game/MiniGamePlaceholder";
import { CodeEntryScreen } from "@/components/game/CodeEntryScreen";
import { ClueScreen } from "@/components/game/ClueScreen";
import { ZoneScreen } from "@/components/game/ZoneScreen";
import { LeaderboardScreen } from "@/components/game/LeaderboardScreen";
import { VictoryScreen } from "@/components/game/VictoryScreen";
import { THEMES, DEFAULT_THEME_ID } from "@/lib/themes";
import { MOCK_HUNT, MOCK_LEADERBOARD, MOCK_TEAM, MOCK_BADGES } from "@/lib/mock-data";
import type { ThemeId } from "@/types/theme";

const stage = MOCK_HUNT.stages[0];

export default function PreviewPage() {
  const [themeId, setThemeId] = useState<ThemeId>(DEFAULT_THEME_ID);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const theme = THEMES[themeId];

  return (
    <div className="min-h-full bg-neutral-900 p-6">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-white">
        <span className="text-sm font-medium">Thème :</span>
        {Object.values(THEMES).map((t) => (
          <button
            key={t.id}
            onClick={() => setThemeId(t.id)}
            className={`rounded-full border px-3 py-1 text-xs ${
              t.id === themeId ? "border-white bg-white text-black" : "border-white/40"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <PreviewCard title="Team Home Header">
          <ThemeProvider theme={theme}>
            <TeamHomeHeader hunt={MOCK_HUNT} team={MOCK_TEAM} onOpenLeaderboard={() => {}} />
          </ThemeProvider>
        </PreviewCard>

        <PreviewCard title="Mini-jeu (placeholder)">
          <ThemeProvider theme={theme}>
            <MiniGamePlaceholder stage={stage} onCodeRevealed={() => {}} />
          </ThemeProvider>
        </PreviewCard>

        <PreviewCard title="Saisie du code">
          <ThemeProvider theme={theme}>
            <CodeEntryScreen stage={stage} onCorrect={() => {}} />
          </ThemeProvider>
        </PreviewCard>

        <PreviewCard title="Indice">
          <ThemeProvider theme={theme}>
            <ClueScreen stage={stage} onContinue={() => {}} />
          </ThemeProvider>
        </PreviewCard>

        <PreviewCard title="Zone GPS">
          <ThemeProvider theme={theme}>
            <ZoneScreen stage={stage} isLastStage={false} onLaunchNext={() => {}} />
          </ThemeProvider>
        </PreviewCard>

        <PreviewCard title="Écran de victoire">
          <ThemeProvider theme={theme}>
            <VictoryScreen
              team={{ ...MOCK_TEAM, pointsTotal: 340, badges: MOCK_BADGES }}
              elapsedLabel="18:42"
            />
          </ThemeProvider>
        </PreviewCard>
      </div>

      <div className="mt-6">
        <button
          onClick={() => setShowLeaderboard(true)}
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black"
        >
          Prévisualiser le classement
        </button>
      </div>

      {showLeaderboard && (
        <ThemeProvider theme={theme}>
          <LeaderboardScreen
            entries={MOCK_LEADERBOARD}
            currentTeamId={MOCK_TEAM.teamId}
            onClose={() => setShowLeaderboard(false)}
          />
        </ThemeProvider>
      )}
    </div>
  );
}

function PreviewCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <p className="bg-black/40 px-4 py-2 text-xs font-medium uppercase tracking-wider text-white/70">
        {title}
      </p>
      <div className="flex min-h-[420px] flex-col">{children}</div>
    </div>
  );
}
