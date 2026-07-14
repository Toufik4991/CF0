"use client";

import { useEffect, useState } from "react";
import type { Hunt, LeaderboardEntry, TeamProgress } from "@/types/hunt";
import type { PlayerProfile } from "@/types/player";
import { loadPlayerProfile, savePlayerProfile, clearPlayerProfile } from "@/lib/player";
import { OnboardingFlow } from "@/components/onboarding/OnboardingFlow";
import { StageFlow } from "./StageFlow";

export function GameShell({
  hunt,
  initialTeam,
  leaderboard,
}: {
  hunt: Hunt;
  initialTeam: TeamProgress;
  leaderboard: LeaderboardEntry[];
}) {
  const [player, setPlayer] = useState<PlayerProfile | null | undefined>(undefined);

  useEffect(() => {
    setPlayer(loadPlayerProfile());
  }, []);

  if (player === undefined) {
    return null;
  }

  if (!player) {
    return (
      <OnboardingFlow
        hunt={hunt}
        team={initialTeam}
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
      initialTeam={initialTeam}
      leaderboard={leaderboard}
      player={player}
      onEditProfile={() => {
        clearPlayerProfile();
        setPlayer(null);
      }}
    />
  );
}
