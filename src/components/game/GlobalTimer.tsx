"use client";

import { useEffect, useState } from "react";

export function formatDuration(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function GlobalTimer({ startedAt }: { startedAt: string }) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const elapsed = now - new Date(startedAt).getTime();

  return (
    <div className="fixed bottom-3 right-3 z-20 rounded-full bg-[var(--color-foreground)]/85 px-3 py-1 text-xs font-medium text-[var(--color-background)] shadow-sm">
      {formatDuration(elapsed)}
    </div>
  );
}
