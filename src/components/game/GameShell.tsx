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

  useEffect(() => {
    setPlayer(loadPlayerProfile());
  }, []);

  if (player === undefined) {
    return null;
  }

  const team = player ? teams.find((t) => t.teamId === player.teamId) : undefined;

  if (!player || !team) {
    return (
      <OnboardingFlow
        hunt={hunt}
        teams={teams}
        onComplete={(p) => {
          savePlayerProfile(p);
          setPlayer(p);
        }}
      />
    );
  }

  return (
    <StageFlow
      hunt={hunt}
      initialTeam={team}
      leaderboard={leaderboard}
      player={player}
      onEditProfile={() => {
        clearPlayerProfile();
        setPlayer(null);
      }}
    />
  );
}
