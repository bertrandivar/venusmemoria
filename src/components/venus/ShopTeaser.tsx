interface ShopTeaserProps {
  onEnterShop: () => void;
}

export function ShopTeaser({ onEnterShop }: ShopTeaserProps) {
  return (
    <section 
      id="boutique-teaser" 
      className="relative border-y border-[#C3C2A9]/40 py-12 sm:py-20 md:py-24 text-center transition-colors"
      style={{ backgroundColor: "#F0EFDF", color: "#1C1B18" }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <span className="eyebrow tracking-[0.25em] sm:tracking-[0.3em] font-bold text-[#8C886B] uppercase text-[10px] sm:text-xs">
          Boutique Officielle
        </span>
        
        <h2 className="mt-2.5 font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#1C1B18] leading-tight">
          Matériel d'Artiste & Objets de Décoration
        </h2>
        
        <p className="mt-3 sm:mt-4 text-xs sm:text-base font-medium text-[#4A483E] leading-relaxed max-w-xl mx-auto">
          Découvrez notre catalogue complet d'outils de peinture, crayons, vases faits main et objets de décoration.
        </p>

        <div className="mt-6 sm:mt-8">
          <button
            onClick={onEnterShop}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 border-2 border-[#1C1B18] bg-[#1C1B18] px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#F0EFDF] uppercase transition-all hover:bg-transparent hover:text-[#1C1B18] shadow-md"
          >
            <span>Accéder à la boutique</span>
            <span className="text-sm">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
