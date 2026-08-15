import logo from "@/assets/venus-logo.jpg.asset.json";

export function Splash({ onEnter, hidden }: { onEnter: () => void; hidden: boolean }) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Entrer dans l'atelier"
      onClick={onEnter}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onEnter()}
      className={`fixed inset-0 z-50 flex cursor-pointer flex-col items-center justify-center bg-background px-6 transition-all duration-1000 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <img
        src={logo.url}
        alt="VENUS - The Creation Aura"
        width={900}
        height={900}
        className="w-[min(88vw,760px)] mix-blend-multiply fade-up"
      />
      <div className="rule-gold my-8 w-40" />
      <h1 className="max-w-3xl text-center text-2xl leading-tight tracking-wide text-foreground italic md:text-4xl fade-up">
        Là où vos plus précieux souvenirs deviennent éternels.
      </h1>
      <span className="eyebrow mt-10 animate-pulse">
        Cliquez n'importe où pour entrer dans l'atelier
      </span>
    </div>
  );
}
