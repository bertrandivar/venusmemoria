interface ShopTeaserProps {
  onEnterShop: () => void;
}

export function ShopTeaser({ onEnterShop }: ShopTeaserProps) {
  return (
    <section id="boutique-teaser" className="relative overflow-hidden bg-[#05080E] py-32 text-center">
      {/* Particules / Effet Féérique en arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 h-64 w-64 -translate-y-1/2 rounded-full bg-gold/10 blur-[100px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-amber-500/10 blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <span className="eyebrow tracking-[0.4em] text-gold/90">L'Atelier Marchand</span>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-6xl">
          L'Écrin des <span className="italic text-gilded">Trésors de VENUS</span>
        </h2>
        <div className="rule-gold mx-auto my-8 w-24" />
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Passez le voile de notre univers créatif. Un espace dédié aux artistes, esthètes et collectionneurs en quête d'outils d'exception et d'objets sacrés.
        </p>

        {/* Bouton Glowing Effect */}
        <div className="mt-12">
          <button
            onClick={onEnterShop}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-none border border-gold/80 px-10 py-5 text-xs tracking-[0.3em] text-gold uppercase transition-all duration-500 hover:border-white hover:text-black"
          >
            {/* Halo lumineux au survol */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-gold via-amber-200 to-gold transition-transform duration-700 ease-out group-hover:translate-x-0" />
            
            <span className="relative z-10 flex items-center gap-3 font-semibold">
              <span>Entrer dans le Sanctuaire Marchand</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
