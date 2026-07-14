import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import { StageFlow } from "@/components/game/StageFlow";
import { getTheme } from "@/lib/themes";
import { MOCK_HUNT, MOCK_LEADERBOARD, MOCK_TEAM } from "@/lib/mock-data";

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
      <StageFlow hunt={MOCK_HUNT} initialTeam={MOCK_TEAM} leaderboard={MOCK_LEADERBOARD} />
    </ThemeProvider>
  );
}
