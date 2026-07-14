import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GameShell } from "@/components/game/GameShell";
import { getTheme } from "@/lib/themes";
import { MOCK_HUNT, MOCK_LEADERBOARD, MOCK_TEAM, MOCK_TEAMS } from "@/lib/mock-data";

export default async function PlayPage({
  params,
}: {
  params: Promise<{ teamToken: string }>;
}) {
  const { teamToken } = await params;

  if (teamToken !== MOCK_TEAM.teamToken) {
    notFound();
  }

  const theme = getTheme(MOCK_HUNT.themeId);

  return (
    <ThemeProvider theme={theme}>
      <GameShell hunt={MOCK_HUNT} teams={MOCK_TEAMS} leaderboard={MOCK_LEADERBOARD} />
    </ThemeProvider>
  );
}
