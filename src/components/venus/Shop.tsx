import { useState } from "react";
import { PRODUCTS, SHOP_CATEGORIES, type Product } from "@/data/shopData";

interface ShopProps {
  onAddToCart: (product: Product) => void;
}

export function Shop({ onAddToCart }: ShopProps) {
  // Catégorie ouverte par défaut (ex: pinceaux)
  const [openCategory, setOpenCategory] = useState<string | null>("pinceaux");

  const toggleCategory = (catId: string) => {
    setOpenCategory(openCategory === catId ? null : catId);
  };

  return (
    <section id="boutique" className="border-t border-border/60 bg-secondary/30 py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* En-tête */}
        <div className="text-center">
          <span className="eyebrow">La Boutique de l'Atelier</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">
            Outils d'Art & <span className="italic text-gilded">Objets de Décoration</span>
          </h2>
          <div className="rule-gold mx-auto my-6 md:my-8 w-20 md:w-24" />
          <p className="mx-auto max-w-xl text-xs sm:text-sm leading-relaxed text-muted-foreground">
            Sélectionnez une catégorie pour explorer notre catalogue et dérouler l'ensemble de nos articles disponibles.
          </p>
        </div>

        {/* Liste des Catégories sous forme de Panneaux Déroulants */}
        <div className="mt-10 md:mt-16 space-y-4 sm:space-y-6">
          {SHOP_CATEGORIES.map((cat) => {
            const isOpen = openCategory === cat.id;
            const categoryProducts = PRODUCTS.filter((p) => p.category === cat.id);

            return (
              <div
                key={cat.id}
                className="card-lux overflow-hidden p-0 border border-border/60 transition-all duration-300 hover:border-gold/60"
              >
                {/* En-tête cliquable de la catégorie */}
                <button
                  onClick={() => toggleCategory(cat.id)}
                  className="flex w-full items-center justify-between p-4 sm:p-6 md:p-8 text-left bg-background/40 hover:bg-secondary/50 transition-colors"
                >
                  <div className="pr-2">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                      <h3 className="font-serif text-xl sm:text-2xl text-foreground">{cat.label}</h3>
                      <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-mono text-gold border border-gold/30">
                        {categoryProducts.length} article(s)
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-muted-foreground line-clamp-1 sm:line-clamp-none">
                      {cat.description}
                    </p>
                  </div>

                  {/* Symbole d'ouverture/fermeture (+ / -) */}
                  <span className="ml-2 font-mono text-xl sm:text-2xl text-gold shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Contenu déroulant de la catégorie */}
                {isOpen && (
                  <div className="border-t border-border/40 p-4 sm:p-6 md:p-8 bg-background/20">
                    {categoryProducts.length === 0 ? (
                      <p className="text-center text-xs italic text-muted-foreground py-6">
                        Nouveaux articles en cours de réapprovisionnement pour cette catégorie.
                      </p>
                    ) : (
                      <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-3">
                        {categoryProducts.map((product) => {
                          const imageSrc = product.images?.[0] || (product as unknown as { image: string }).image;

                          return (
                            <div
                              key={product.id}
                              className="group flex flex-col justify-between rounded-lg border border-border/40 bg-secondary/20 p-3 sm:p-4 transition-all duration-300 hover:border-gold"
                            >
                              <div>
                                {/* Image & Badge */}
                                <div className="relative aspect-square overflow-hidden rounded bg-black/30">
                                  {product.badge && (
                                    <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 z-10 bg-gold px-1.5 py-0.5 text-[0.5rem] sm:text-[0.55rem] font-bold text-black uppercase">
                                      {product.badge}
                                    </span>
                                  )}
                                  <img
                                    src={imageSrc}
                                    alt={product.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  />
                                </div>

                                {/* Informations */}
                                <div className="mt-3 sm:mt-4">
                                  {product.subcategory && (
                                    <span className="text-[0.55rem] sm:text-[0.6rem] font-mono text-gold uppercase tracking-widest block truncate">
                                      {product.subcategory}
                                    </span>
                                  )}
                                  <h4 className="font-serif text-sm sm:text-base text-foreground mt-0.5 truncate">
                                    {product.name}
                                  </h4>
                                  {product.specs && (
                                    <p className="mt-0.5 text-[10px] sm:text-[11px] text-gold/80 font-mono truncate">
                                      {product.specs}
                                    </p>
                                  )}
                                  <p className="mt-1.5 text-[11px] sm:text-xs leading-relaxed text-muted-foreground line-clamp-2">
                                    {product.description}
                                  </p>
                                </div>
                              </div>

                              {/* Prix et Bouton d'Achat */}
                              <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-border/30 pt-3">
                                <span className="font-mono text-xs sm:text-sm font-bold text-gold">
                                  {product.price.toLocaleString()} {product.currency}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => onAddToCart(product)}
                                  className="w-full sm:w-auto bg-primary/90 px-3 py-1.5 text-[0.55rem] sm:text-[0.6rem] tracking-[0.15em] sm:tracking-[0.2em] text-primary-foreground uppercase transition-all hover:bg-gold hover:text-foreground text-center"
                                >
                                  Ajouter
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
