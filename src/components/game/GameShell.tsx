"use client";

import { useEffect, useState } from "react";
import type { Hunt, LeaderboardEntry, TeamProgress } from "@/types/hunt";
import type { PlayerProfile } from "@/types/player";
import { loadPlayerProfile, savePlayerProfile, clearPlayerProfile } from "@/lib/player";
import { OnboardingFlow } from "@/components/onboarding/OnboardingFlow";
import { StageFlow } from "./StageFlow";

export function GameShell({
  hunt,
  teams,
  leaderboard,
}: {
  hunt: Hunt;
  teams: TeamProgress[];
  leaderboard: LeaderboardEntry[];
}) {
  const [player, setPlayer] = useState<PlayerProfile | null | undefined>(undefined);
  const [activeTeam, setActiveTeam] = useState<TeamProgress | null>(null);

  useEffect(() => {
    setPlayer(loadPlayerProfile());
  }, []);

  if (player === undefined) {
    return null;
  }

  const matchedTeam = player ? teams.find((t) => t.teamId === player.teamId) : undefined;

  if (!player || !matchedTeam) {
    return (
      <OnboardingFlow
        hunt={hunt}
        teams={teams}
        onComplete={(p, team, reset) => {
          savePlayerProfile(p);
          setPlayer(p);
          setActiveTeam(
            reset
              ? {
                  ...team,
                  currentStageIndex: 0,
                  pointsTotal: 0,
                  badges: [],
                  startedAt: new Date().toISOString(),
                }
              : team
          );
        }}
      />
    );
  }

  return (
    <StageFlow
      hunt={hunt}
      initialTeam={activeTeam ?? matchedTeam}
      leaderboard={leaderboard}
      player={player}
      onEditProfile={() => {
        clearPlayerProfile();
        setPlayer(null);
        setActiveTeam(null);
      }}
    />
  );
}
