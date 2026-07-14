import type { PlayerProfile } from "@/types/player";

const STORAGE_KEY = "cf0_player_profile";

export function loadPlayerProfile(): PlayerProfile | null {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as PlayerProfile;
  } catch {
    return null;
  }
}

export function savePlayerProfile(profile: PlayerProfile) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
}

export function clearPlayerProfile() {
  window.localStorage.removeItem(STORAGE_KEY);
}
