import Image from "next/image";
import type { Stage } from "@/types/hunt";
import { Button } from "@/components/ui/Button";

export function ClueScreen({
  stage,
  onContinue,
}: {
  stage: Stage;
  onContinue: () => void;
}) {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-10 text-center">
      <span className="text-5xl">🗺️</span>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
          Indice débloqué
        </p>
        <h2 className="font-[var(--font-display)] text-2xl font-bold">{stage.title}</h2>
      </div>
      <div className="w-full max-w-sm overflow-hidden rounded-[var(--radius-theme)] border-4 border-[var(--color-primary)] shadow-lg">
        <Image
          src={stage.clueMediaUrl}
          alt={`Indice — ${stage.title}`}
          width={480}
          height={320}
          className="h-auto w-full"
        />
      </div>
      {stage.clueText && <p className="max-w-sm text-base">{stage.clueText}</p>}
      <Button onClick={onContinue}>Voir la zone à atteindre</Button>
    </section>
  );
}
