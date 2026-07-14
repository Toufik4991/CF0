"use client";

import { useState } from "react";
import type { PlayerProfile } from "@/types/player";

export function GameMenu({
  player,
  onOpenLeaderboard,
  onEditProfile,
  onOpenMasterCode,
}: {
  player: PlayerProfile;
  onOpenLeaderboard: () => void;
  onEditProfile: () => void;
  onOpenMasterCode: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary)] text-lg text-[var(--color-primary-foreground)] shadow-md transition-transform active:scale-90"
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
          <div className="absolute right-0 top-14 z-40 w-56 rounded-[1.5rem] border-2 border-[var(--color-border)] bg-[var(--color-background)] p-3 shadow-xl">
            <div className="flex items-center gap-3 border-b-2 border-[var(--color-border)] px-2 pb-3">
              {player.selfieDataUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={player.selfieDataUrl}
                  alt=""
                  style={{ imageRendering: "pixelated" }}
                  className="h-10 w-10 rounded-full border-2 border-[var(--color-primary)] object-cover"
                />
              ) : (
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-secondary)] text-sm font-bold">
                  {player.pseudo.charAt(0).toUpperCase()}
                </span>
              )}
              <span className="text-sm font-bold">{player.pseudo}</span>
            </div>
            <button
              onClick={() => {
                setOpen(false);
                onOpenLeaderboard();
              }}
              className="mt-2 block w-full rounded-full px-3 py-2.5 text-left text-sm font-semibold hover:bg-[var(--color-surface)]"
            >
              🏆 Classement
            </button>
            <button
              onClick={() => {
                setOpen(false);
                onEditProfile();
              }}
              className="block w-full rounded-full px-3 py-2.5 text-left text-sm font-semibold hover:bg-[var(--color-surface)]"
            >
              🙋 Modifier mon profil
            </button>
            <button
              onClick={() => {
                setOpen(false);
                onOpenMasterCode();
              }}
              className="block w-full rounded-full px-3 py-2.5 text-left text-sm font-semibold text-[var(--color-muted)] hover:bg-[var(--color-surface)]"
            >
              🔑 Code maître
            </button>
          </div>
        </>
      )}
    </div>
  );
}
