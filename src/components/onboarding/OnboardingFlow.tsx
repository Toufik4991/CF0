"use client";

import { useState } from "react";
import type { Hunt, TeamProgress } from "@/types/hunt";
import type { PlayerProfile } from "@/types/player";
import { PseudoScreen } from "./PseudoScreen";
import { SelfieScreen } from "./SelfieScreen";
import { RouteSelectScreen } from "./RouteSelectScreen";
import { RouteIntroScreen } from "./RouteIntroScreen";

type Step = "pseudo" | "selfie" | "route" | "intro";

export function OnboardingFlow({
  hunt,
  team,
  onComplete,
}: {
  hunt: Hunt;
  team: TeamProgress;
  onComplete: (player: PlayerProfile) => void;
}) {
  const [step, setStep] = useState<Step>("pseudo");
  const [pseudo, setPseudo] = useState("");
  const [selfieDataUrl, setSelfieDataUrl] = useState<string | null>(null);

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
          setStep("route");
        }}
        onSkip={() => setStep("route")}
      />
    );
  }

  if (step === "route") {
    return <RouteSelectScreen onSelect={() => setStep("intro")} />;
  }

  const player: PlayerProfile = { pseudo, selfieDataUrl };
  return (
    <RouteIntroScreen hunt={hunt} team={team} player={player} onStart={() => onComplete(player)} />
  );
}
