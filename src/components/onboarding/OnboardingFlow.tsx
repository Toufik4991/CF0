"use client";

import { useState } from "react";
import type { Hunt, TeamProgress } from "@/types/hunt";
import type { PlayerProfile } from "@/types/player";
import { PseudoScreen } from "./PseudoScreen";
import { SelfieScreen } from "./SelfieScreen";
import { TeamSelectScreen } from "./TeamSelectScreen";
import { RouteSelectScreen } from "./RouteSelectScreen";
import { RouteIntroScreen } from "./RouteIntroScreen";

type Step = "pseudo" | "selfie" | "team" | "route" | "intro";

export function OnboardingFlow({
  hunt,
  teams,
  onComplete,
}: {
  hunt: Hunt;
  teams: TeamProgress[];
  onComplete: (player: PlayerProfile, team: TeamProgress, reset: boolean) => void;
}) {
  const [step, setStep] = useState<Step>("pseudo");
  const [pseudo, setPseudo] = useState("");
  const [selfieDataUrl, setSelfieDataUrl] = useState<string | null>(null);
  const [team, setTeam] = useState<TeamProgress | null>(null);

  if (step === "pseudo") {
    return (
      <PseudoScreen
        onSubmit={(value) => {
          setPseudo(value);
          setStep("selfie");
        }}
      />
    );
  }

  if (step === "selfie") {
    return (
      <SelfieScreen
        onSubmit={(dataUrl) => {
          setSelfieDataUrl(dataUrl);
          setStep("team");
        }}
        onSkip={() => setStep("team")}
      />
    );
  }

  if (step === "team") {
    return (
      <TeamSelectScreen
        teams={teams}
        onSelect={(selected) => {
          setTeam(selected);
          setStep("route");
        }}
      />
    );
  }

  if (step === "route" || !team) {
    return <RouteSelectScreen onSelect={() => setStep("intro")} />;
  }

  const player: PlayerProfile = { pseudo, selfieDataUrl, teamId: team.teamId };
  return (
    <RouteIntroScreen
      hunt={hunt}
      team={team}
      player={player}
      onStart={(reset) => onComplete(player, team, reset)}
    />
  );
}
