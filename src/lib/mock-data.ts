import type { Badge, Hunt, LeaderboardEntry, MiniGameType, TeamProgress } from "@/types/hunt";

const MINI_GAME_ROTATION: MiniGameType[] = [
  "quiz",
  "memory",
  "cipher",
  "puzzle",
  "reflex",
  "association",
];

const REAL_STAGES: { lat: number; lng: number; code: string }[] = [
  { lat: 47.47018868679993, lng: -0.5457921250672614, code: "6767" },
  { lat: 47.47011701179594, lng: -0.5493858993639028, code: "8888" },
  { lat: 47.470199398880105, lng: -0.5542471707663097, code: "ZEM1" },
  { lat: 47.46934044936432, lng: -0.5564217756452269, code: "HUPS" },
  { lat: 47.46927957277513, lng: -0.5584298315460416, code: "1234" },
  { lat: 47.47207325041011, lng: -0.5639875005431632, code: "CUL1" },
  { lat: 47.47413684761758, lng: -0.5622581209765974, code: "VO76" },
  { lat: 47.47447353121981, lng: -0.5582077679017797, code: "1994" },
  { lat: 47.472289958782774, lng: -0.55754703640992, code: "69LY" },
];

export const MOCK_HUNT: Hunt = {
  id: "hunt-1",
  name: "CF0",
  themeId: "jungle",
  pointsBasePerStage: 100,
  stages: REAL_STAGES.map((data, i) => ({
    id: `stage-${i + 1}`,
    order: i + 1,
    title: `Étape ${i + 1}`,
    miniGameType: MINI_GAME_ROTATION[i % MINI_GAME_ROTATION.length],
    miniGameConfig: {},
    code: data.code,
    clueMediaType: "image" as const,
    clueMediaUrl: `/mock/clue-${i + 1}.svg`,
    zone: { lat: data.lat, lng: data.lng, radiusMeters: 50, label: `Zone ${i + 1}` },
  })),
};

export const MOCK_BADGES: Badge[] = [
  { id: "badge-eclair", name: "Éclair", icon: "⚡", description: "Étape résolue en moins de 90 secondes" },
  { id: "badge-sans-faute", name: "Sans faute", icon: "🎯", description: "Chasse terminée sans code maître" },
];

export const MOCK_TEAM: TeamProgress = {
  teamId: "team-1",
  teamName: "Équipe 1",
  teamToken: "demo-team",
  huntId: "hunt-1",
  currentStageIndex: 0,
  startedAt: new Date(Date.now() - 4 * 60 * 1000).toISOString(),
  pointsTotal: 0,
  badges: [],
};

export const MOCK_TEAMS: TeamProgress[] = [
  MOCK_TEAM,
  {
    teamId: "team-2",
    teamName: "Équipe 2",
    teamToken: "demo-team",
    huntId: "hunt-1",
    currentStageIndex: 4,
    startedAt: new Date(Date.now() - 20 * 60 * 1000).toISOString(),
    pointsTotal: 480,
    badges: [],
  },
  {
    teamId: "team-3",
    teamName: "Équipe 3",
    teamToken: "demo-team",
    huntId: "hunt-1",
    currentStageIndex: 9,
    startedAt: new Date(Date.now() - 50 * 60 * 1000).toISOString(),
    pointsTotal: 990,
    badges: MOCK_BADGES,
  },
];

export const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { teamId: "team-1", teamName: "Équipe 1", currentStageIndex: 0, totalStages: 9, pointsTotal: 0, finished: false },
  { teamId: "team-2", teamName: "Équipe 2", currentStageIndex: 4, totalStages: 9, pointsTotal: 480, finished: false },
  { teamId: "team-3", teamName: "Équipe 3", currentStageIndex: 9, totalStages: 9, pointsTotal: 990, finished: true },
];
