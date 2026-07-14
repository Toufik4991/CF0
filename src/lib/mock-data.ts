import type { Badge, Hunt, LeaderboardEntry, TeamProgress } from "@/types/hunt";

export const MOCK_HUNT: Hunt = {
  id: "hunt-1",
  name: "Le Trésor du Vieux Port",
  themeId: "bois-minimaliste",
  pointsBasePerStage: 100,
  stages: [
    {
      id: "stage-1",
      order: 1,
      title: "La devanture oubliée",
      miniGameType: "quiz",
      miniGameConfig: {
        question: "Quel est le nom du premier capitaine du port ?",
        choices: ["Le Goff", "Kerboul", "Mendès", "Alric"],
        answerIndex: 1,
      },
      code: "4271",
      clueMediaType: "image",
      clueMediaUrl: "/mock/clue-1.svg",
      clueText:
        "Sous l'enseigne à moitié effacée, une ancre est gravée dans la pierre. Trouvez-la.",
      zone: { lat: 47.2184, lng: -1.5536, radiusMeters: 60, label: "Place du Vieux Port" },
    },
    {
      id: "stage-2",
      order: 2,
      title: "Le mur aux ancres",
      miniGameType: "memory",
      miniGameConfig: { pairs: 6 },
      code: "8093",
      clueMediaType: "image",
      clueMediaUrl: "/mock/clue-2.svg",
      clueText: "Un banc face à l'eau, à l'ombre du grand mât. Comptez les planches.",
      zone: { lat: 47.219, lng: -1.552, radiusMeters: 50, label: "Quai des Pêcheurs" },
    },
    {
      id: "stage-3",
      order: 3,
      title: "Le banc du vieux marin",
      miniGameType: "cipher",
      miniGameConfig: { cipherWord: "TRESOR", shift: 3 },
      code: "1156",
      clueMediaType: "image",
      clueMediaUrl: "/mock/clue-3.svg",
      clueText: "La cloche de l'ancienne criée sonne encore les jours de marché.",
      zone: { lat: 47.2199, lng: -1.5548, radiusMeters: 45, label: "Halle aux poissons" },
    },
    {
      id: "stage-4",
      order: 4,
      title: "La cloche de la criée",
      miniGameType: "quiz",
      miniGameConfig: {
        question: "Combien de mâts comptait le dernier grand voilier du port ?",
        choices: ["2", "3", "4", "5"],
        answerIndex: 2,
      },
      code: "5320",
      clueMediaType: "image",
      clueMediaUrl: "/mock/clue-4.svg",
      clueText: "Le trésor repose là où les cartes anciennes dessinaient un phare.",
      zone: { lat: 47.2205, lng: -1.5561, radiusMeters: 70, label: "Ancien phare" },
    },
  ],
};

export const MOCK_BADGES: Badge[] = [
  { id: "badge-eclair", name: "Éclair", icon: "⚡", description: "Étape résolue en moins de 90 secondes" },
  { id: "badge-sans-faute", name: "Sans faute", icon: "🎯", description: "Chasse terminée sans code maître" },
];

export const MOCK_TEAM: TeamProgress = {
  teamId: "team-1",
  teamName: "Les Corsaires",
  teamToken: "demo-team",
  huntId: "hunt-1",
  currentStageIndex: 0,
  startedAt: new Date(Date.now() - 4 * 60 * 1000).toISOString(),
  pointsTotal: 0,
  badges: [],
};

export const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { teamId: "team-1", teamName: "Les Corsaires", currentStageIndex: 0, totalStages: 4, pointsTotal: 0, finished: false },
  { teamId: "team-2", teamName: "Les Flibustiers", currentStageIndex: 2, totalStages: 4, pointsTotal: 240, finished: false },
  { teamId: "team-3", teamName: "Les Naufragés", currentStageIndex: 4, totalStages: 4, pointsTotal: 410, finished: true },
];
