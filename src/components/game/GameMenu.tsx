"use client";

import { useState } from "react";
import type { PlayerProfile } from "@/types/player";

export function GameMenu({
  player,
  onOpenLeaderboard,
  onEditProfile,
}: {
  player: PlayerProfile;
  onOpenLeaderboard: () => void;
  onEditProfile: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-background)] text-lg"
      >
        ☰
      </button>
      {open && (
        <>
          <button
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-30 cursor-default"
          />
          <div className="absolute right-0 top-12 z-40 w-56 rounded-[var(--radius-theme)] border border-[var(--color-border)] bg-[var(--color-background)] p-2 shadow-lg">
            <div className="flex items-center gap-3 border-b border-[var(--color-border)] px-2 pb-2">
              {player.selfieDataUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={player.selfieDataUrl}
                  alt=""
                  style={{ imageRendering: "pixelated" }}
                  className="h-9 w-9 rounded-full object-cover"
                />
              ) : (
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-surface)] text-sm font-semibold">
                  {player.pseudo.charAt(0).toUpperCase()}
                </span>
              )}
              <span className="text-sm font-medium">{player.pseudo}</span>
            </div>
            <button
              onClick={() => {
                setOpen(false);
                onOpenLeaderboard();
              }}
              className="mt-1 block w-full rounded-[var(--radius-theme)] px-2 py-2 text-left text-sm hover:bg-[var(--color-surface)]"
            >
              🏆 Classement
            </button>
            <button
              onClick={() => {
                setOpen(false);
                onEditProfile();
              }}
              className="block w-full rounded-[var(--radius-theme)] px-2 py-2 text-left text-sm hover:bg-[var(--color-surface)]"
            >
              🙋 Modifier mon profil
            </button>
          </div>
        </>
      )}
    </div>
  );
}
