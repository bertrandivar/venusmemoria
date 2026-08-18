interface ShopTeaserProps {
  onEnterShop: () => void;
}

export function ShopTeaser({ onEnterShop }: ShopTeaserProps) {
  return (
    <section 
      id="boutique-teaser" 
      className="relative border-y border-[#C3C2A9]/40 py-24 text-center transition-colors"
      style={{ backgroundColor: "#F0EFDF", color: "#1C1B18" }}
    >
      <div className="mx-auto max-w-3xl px-6">
        <span className="eyebrow tracking-[0.3em] font-bold text-[#8C886B] uppercase text-xs">
          Boutique Officielle
        </span>
        
        <h2 className="mt-3 font-serif text-3xl md:text-5xl font-bold text-[#1C1B18]">
          Matériel d'Artiste & Objets de Décoration
        </h2>
        
        <p className="mt-4 text-sm md:text-base font-medium text-[#4A483E] leading-relaxed max-w-xl mx-auto">
          Découvrez notre catalogue complet d'outils de peinture, crayons, vases faits main et objets de décoration.
        </p>

        <div className="mt-8">
          <button
            onClick={onEnterShop}
            className="inline-flex items-center gap-3 border-2 border-[#1C1B18] bg-[#1C1B18] px-8 py-4 text-xs font-bold tracking-[0.25em] text-[#F0EFDF] uppercase transition-all hover:bg-transparent hover:text-[#1C1B18] shadow-md"
          >
            <span>Accéder à la boutique</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
