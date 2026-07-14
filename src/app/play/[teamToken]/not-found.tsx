export default function TeamNotFound() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center gap-3 bg-[#F4EBDC] px-6 text-center text-[#2E2A26]">
      <h1 className="text-xl font-semibold">Équipe introuvable</h1>
      <p className="text-sm text-[#7A6F5D]">
        Vérifiez le lien reçu par QR code, ou contactez l&apos;organisateur.
      </p>
    </div>
  );
}
