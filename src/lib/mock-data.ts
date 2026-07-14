import type { Badge, Hunt, LeaderboardEntry, TeamProgress } from "@/types/hunt";

export const MOCK_HUNT: Hunt = {
  id: "hunt-1",
  name: "CF0",
  themeId: "jungle",
  pointsBasePerStage: 100,
  stages: [
    {
      id: "stage-1",
      order: 1,
      title: "Étape 1",
      miniGameType: "quiz",
      miniGameConfig: {},
      code: "4271",
      clueMediaType: "image",
      clueMediaUrl: "/mock/clue-1.svg",
      zone: { lat: 47.2184, lng: -1.5536, radiusMeters: 60, label: "Zone 1" },
    },
    {
      id: "stage-2",
      order: 2,
      title: "Étape 2",
      miniGameType: "memory",
      miniGameConfig: {},
      code: "8093",
      clueMediaType: "image",
      clueMediaUrl: "/mock/clue-2.svg",
      zone: { lat: 47.219, lng: -1.552, radiusMeters: 50, label: "Zone 2" },
    },
    {
      id: "stage-3",
      order: 3,
      title: "Étape 3",
      miniGameType: "cipher",
      miniGameConfig: {},
      code: "1156",
      clueMediaType: "image",
      clueMediaUrl: "/mock/clue-3.svg",
      zone: { lat: 47.2199, lng: -1.5548, radiusMeters: 45, label: "Zone 3" },
    },
    {
      id: "stage-4",
      order: 4,
      title: "Étape 4",
      miniGameType: "quiz",
      miniGameConfig: {},
      code: "5320",
      clueMediaType: "image",
      clueMediaUrl: "/mock/clue-4.svg",
      zone: { lat: 47.2205, lng: -1.5561, radiusMeters: 70, label: "Zone 4" },
    },
  ],
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
    currentStageIndex: 2,
    startedAt: new Date(Date.now() - 20 * 60 * 1000).toISOString(),
    pointsTotal: 240,
    badges: [],
  },
  {
    teamId: "team-3",
    teamName: "Équipe 3",
    teamToken: "demo-team",
    huntId: "hunt-1",
    currentStageIndex: 4,
    startedAt: new Date(Date.now() - 35 * 60 * 1000).toISOString(),
    pointsTotal: 410,
    badges: MOCK_BADGES,
  },
];

export const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { teamId: "team-1", teamName: "Équipe 1", currentStageIndex: 0, totalStages: 4, pointsTotal: 0, finished: false },
  { teamId: "team-2", teamName: "Équipe 2", currentStageIndex: 2, totalStages: 4, pointsTotal: 240, finished: false },
  { teamId: "team-3", teamName: "Équipe 3", currentStageIndex: 4, totalStages: 4, pointsTotal: 410, finished: true },
];
