"use client";

import { useMemo, useState } from "react";
import type { Hunt, LeaderboardEntry, TeamProgress } from "@/types/hunt";
import { TeamHomeHeader } from "./TeamHomeHeader";
import { GlobalTimer, formatDuration } from "./GlobalTimer";
import { MiniGamePlaceholder } from "./MiniGamePlaceholder";
import { CodeEntryScreen } from "./CodeEntryScreen";
import { ClueScreen } from "./ClueScreen";
import { ZoneScreen } from "./ZoneScreen";
import { LeaderboardScreen } from "./LeaderboardScreen";
import { VictoryScreen } from "./VictoryScreen";

type Phase = "minigame" | "code" | "clue" | "zone" | "victory";

export function StageFlow({
  hunt,
  initialTeam,
  leaderboard,
}: {
  hunt: Hunt;
  initialTeam: TeamProgress;
  leaderboard: LeaderboardEntry[];
}) {
  const [team, setTeam] = useState(initialTeam);
  const [phase, setPhase] = useState<Phase>(
    initialTeam.currentStageIndex >= hunt.stages.length ? "victory" : "minigame"
  );
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const stage = hunt.stages[team.currentStageIndex];
  const isLastStage = team.currentStageIndex === hunt.stages.length - 1;

  const elapsedLabel = useMemo(
    () => formatDuration(Date.now() - new Date(team.startedAt).getTime()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [team.startedAt, phase]
  );

  function handleAdvance() {
    setTeam((t) => ({
      ...t,
      currentStageIndex: isLastStage ? t.currentStageIndex : t.currentStageIndex + 1,
      pointsTotal: t.pointsTotal + hunt.pointsBasePerStage,
    }));
    setPhase(isLastStage ? "victory" : "minigame");
  }

  return (
    <div className="flex min-h-full flex-1 flex-col">
      {phase !== "victory" && (
        <TeamHomeHeader hunt={hunt} team={team} onOpenLeaderboard={() => setShowLeaderboard(true)} />
      )}

      {phase === "minigame" && (
        <MiniGamePlaceholder stage={stage} onCodeRevealed={() => setPhase("code")} />
      )}
      {phase === "code" && <CodeEntryScreen stage={stage} onCorrect={() => setPhase("clue")} />}
      {phase === "clue" && <ClueScreen stage={stage} onContinue={() => setPhase("zone")} />}
      {phase === "zone" && (
        <ZoneScreen stage={stage} isLastStage={isLastStage} onLaunchNext={handleAdvance} />
      )}
      {phase === "victory" && <VictoryScreen team={team} elapsedLabel={elapsedLabel} />}

      {phase !== "victory" && <GlobalTimer startedAt={team.startedAt} />}

      {showLeaderboard && (
        <LeaderboardScreen
          entries={leaderboard}
          currentTeamId={team.teamId}
          onClose={() => setShowLeaderboard(false)}
        />
      )}
    </div>
  );
}
