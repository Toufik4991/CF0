import type { ThemeId } from "./theme";

export type MiniGameType =
  | "quiz"
  | "memory"
  | "puzzle"
  | "cipher"
  | "reflex"
  | "association";

export interface Stage {
  id: string;
  order: number;
  title: string;
  miniGameType: MiniGameType;
  miniGameConfig: Record<string, unknown>;
  code: string;
  clueMediaUrl: string;
  clueMediaType: "image" | "video";
  clueText?: string;
  zone: {
    lat: number;
    lng: number;
    radiusMeters: number;
    label: string;
  };
}

export interface Hunt {
  id: string;
  name: string;
  themeId: ThemeId;
  stages: Stage[];
  pointsBasePerStage: number;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface TeamProgress {
  teamId: string;
  teamName: string;
  teamToken: string;
  huntId: string;
  currentStageIndex: number;
  startedAt: string;
  pointsTotal: number;
  badges: Badge[];
}

export interface LeaderboardEntry {
  teamId: string;
  teamName: string;
  currentStageIndex: number;
  totalStages: number;
  pointsTotal: number;
  finished: boolean;
}
