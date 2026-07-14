"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

const PIXEL_SIZE = 32;

export function SelfieScreen({
  onSubmit,
  onSkip,
}: {
  onSubmit: (dataUrl: string) => void;
  onSkip: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [captured, setCaptured] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (captured) return;
    let active = true;

    navigator.mediaDevices
      ?.getUserMedia({ video: { facingMode: "user" }, audio: false })
      .then((stream) => {
        if (!active) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        streamRef.current = stream;
        if (videoRef.current) videoRef.current.srcObject = stream;
      })
      .catch(() => setError("Caméra indisponible ou accès refusé."));

    return () => {
      active = false;
      streamRef.current?.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    };
  }, [captured]);

  function capture() {
    const video = videoRef.current;
    if (!video) return;
    const canvas = document.createElement("canvas");
    canvas.width = PIXEL_SIZE;
    canvas.height = PIXEL_SIZE;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.translate(PIXEL_SIZE, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, PIXEL_SIZE, PIXEL_SIZE);
    setCaptured(canvas.toDataURL("image/png"));
    streamRef.current?.getTracks().forEach((t) => t.stop());
  }

  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-10 text-center">
      <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Ton personnage</p>
      <h2 className="font-[var(--font-display)] text-2xl font-semibold">Prends-toi en photo</h2>

      <div className="flex h-56 w-56 items-center justify-center overflow-hidden rounded-full border-4 border-[var(--color-primary)] bg-[var(--color-surface)]">
        {captured ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={captured}
            alt="Ton personnage"
            style={{ imageRendering: "pixelated" }}
            className="h-full w-full object-cover"
          />
        ) : error ? (
          <p className="px-6 text-xs text-[var(--color-muted)]">{error}</p>
        ) : (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="h-full w-full scale-x-[-1] object-cover"
          />
        )}
      </div>

      <div className="flex flex-col items-center gap-3">
        {!captured && !error && <Button onClick={capture}>Prendre la photo</Button>}
        {captured && (
          <div className="flex gap-3">
            <Button variant="secondary" onClick={() => setCaptured(null)}>
              Reprendre
            </Button>
            <Button onClick={() => onSubmit(captured)}>Continuer</Button>
          </div>
        )}
        {error && (
          <Button variant="secondary" onClick={onSkip}>
            Continuer sans photo
          </Button>
        )}
      </div>
    </section>
  );
}
