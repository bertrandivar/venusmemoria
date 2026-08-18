interface ShopTeaserProps {
  onEnterShop: () => void;
}

export function ShopTeaser({ onEnterShop }: ShopTeaserProps) {
  return (
    <section id="boutique-teaser" className="relative border-y border-border/60 bg-secondary/30 py-24 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <span className="eyebrow tracking-[0.3em] text-gold font-semibold">Boutique Officielle</span>
        
        <h2 className="mt-3 font-serif text-3xl md:text-5xl text-foreground">
          Matériel d'Artiste & Objets de Décoration
        </h2>
        
        <p className="mt-4 text-sm md:text-base text-foreground/80 leading-relaxed max-w-xl mx-auto">
          Découvrez notre catalogue complet d'outils de peinture, crayons, vases faits main et objets de décoration.
        </p>

        <div className="mt-8">
          <button
            onClick={onEnterShop}
            className="inline-flex items-center gap-3 border-2 border-gold bg-gold/10 px-8 py-4 text-xs font-bold tracking-[0.25em] text-foreground uppercase transition-all hover:bg-gold hover:text-black shadow-md"
          >
            <span>Accéder à la boutique</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
