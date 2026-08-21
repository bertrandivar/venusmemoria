import { useEffect, useRef, useState } from "react";
import logoNight from "@/assets/venus-night.webp";

interface SplashProps {
  onEnter: () => void;
  hidden: boolean;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  fadeSpeed: number;
}

export function Splash({ onEnter, hidden }: SplashProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Effet Parallaxe au survol
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    setMousePos({
      x: (clientX - centerX) / 60,
      y: (clientY - centerY) / 60,
    });
  };

  // Animation des lucioles dorées (Fireflies Canvas)
  useEffect(() => {
    if (hidden) return; // Arrête l'exécution si le composant est masqué

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles: Particle[] = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -Math.random() * 0.5 - 0.1,
      opacity: Math.random() * 0.8 + 0.2,
      fadeSpeed: Math.random() * 0.008 + 0.003,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.fadeSpeed;

        if (p.opacity >= 1 || p.opacity <= 0.1) {
          p.fadeSpeed = -p.fadeSpeed;
        }

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${Math.max(0, p.opacity)})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#D4AF37";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [hidden]);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Entrer dans l'atelier"
      onClick={onEnter}
      onMouseMove={handleMouseMove}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onEnter()}
      className={`fixed inset-0 z-50 flex h-screen w-screen cursor-pointer flex-col items-center justify-between overflow-hidden bg-black px-4 sm:px-6 py-8 sm:py-12 transition-all duration-1000 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* Image de fond avec effet de mouvement léger */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `url(${logoNight})`,
          transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(1.05)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </div>

      {/* Canvas des lucioles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

      <div className="relative z-20 w-full" />

      {/* Slogan principal */}
      <div className="relative z-20 flex max-w-4xl flex-col items-center text-center px-2 sm:px-4">
        <div className="mb-3 sm:mb-4 h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        <h1 className="font-serif text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-relaxed tracking-wide text-[#FDFBF7] italic drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
          “Là où vos plus précieux souvenirs deviennent éternels.”
        </h1>
        <div className="mt-3 sm:mt-4 h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      </div>

      {/* Bouton d'entrée */}
      <div className="relative z-20 flex flex-col items-center gap-2.5 sm:gap-3 w-full sm:w-auto px-4">
        <button
          type="button"
          onClick={onEnter}
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-[#D4AF37]/60 bg-[#090D16]/80 px-6 sm:px-8 py-3 sm:py-3.5 text-[11px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-[#D4AF37] uppercase backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]"
        >
          <span>Entrer dans l'Univers VENUS</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>

        <span className="text-[10px] sm:text-[11px] tracking-widest text-slate-300/80 animate-pulse uppercase text-center">
          Cliquez n'importe où pour explorer
        </span>
      </div>
    </div>
  );
}
