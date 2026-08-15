import { useEffect, useRef, useState } from "react";
import logo from "@/assets/venus-logo.jpg.asset.json";

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

  // Effet Parallaxe au survol du curseur
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    setMousePos({
      x: (clientX - centerX) / 45,
      y: (clientY - centerY) / 45,
    });
  };

  // Animation des lucioles dorées (Fireflies Canvas)
  useEffect(() => {
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

    // Création des particules dorées
    const particles: Particle[] = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 1,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -Math.random() * 0.6 - 0.2, // Remontent doucement vers le haut
      opacity: Math.random() * 0.8 + 0.2,
      fadeSpeed: Math.random() * 0.01 + 0.005,
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

        // Réinitialisation si la particule sort de l'écran
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        // Dessin des étincelles dorées
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${Math.max(0, p.opacity)})`;
        ctx.shadowBlur = 10;
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
  }, []);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Entrer dans l'atelier"
      onClick={onEnter}
      onMouseMove={handleMouseMove}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onEnter()}
      className={`fixed inset-0 z-50 flex cursor-pointer flex-col items-center justify-center overflow-hidden bg-slate-950 px-6 transition-all duration-1000 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* Fond céleste nocturne avec nuages et halo doré */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#090D16] via-[#0F1829] to-[#080B12] transition-transform duration-300 ease-out scale-105"
        style={{
          transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)`,
        }}
      >
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/20 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Canvas des lucioles dorées */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Contenu central réactif avec effet de parallaxe */}
      <div
        className="relative z-10 flex flex-col items-center text-center transition-transform duration-200 ease-out max-w-4xl"
        style={{
          transform: `translate(${-mousePos.x * 0.5}px, ${-mousePos.y * 0.5}px)`,
        }}
      >
        {/* Logo VENUS */}
        <div className="relative mb-6 drop-shadow-[0_10px_25px_rgba(212,175,55,0.25)]">
          <img
            src={logo.url}
            alt="VENUS - The Creation Aura"
            width={760}
            height={760}
            className="w-[min(85vw,680px)] filter brightness-110 drop-shadow-lg transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Ligne dorée décorative */}
        <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-6" />

        {/* Accroche poétique */}
        <h1 className="text-center font-serif text-2xl leading-relaxed tracking-wide text-[#F3EAD8] italic md:text-4xl lg:text-5xl drop-shadow-md">
          “Là où vos plus précieux souvenirs deviennent éternels.”
        </h1>

        {/* Bouton d'entrée interactif */}
        <div className="mt-12 group inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/50 bg-[#0F1829]/60 px-8 py-3.5 text-sm tracking-widest text-[#D4AF37] uppercase backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#090D16] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]">
          <span>Entrer dans l'Atelier</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>

        <span className="mt-6 text-xs tracking-wider text-[#A3B1C6]/70 animate-pulse font-light">
          Cliquez n'importe où pour commencer l'exploration
        </span>
      </div>
    </div>
  );
}
