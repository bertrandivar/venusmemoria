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
    <section id="boutique" className="border-t border-border/60 bg-secondary/30 py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* En-tête */}
        <div className="text-center">
          <span className="eyebrow">La Boutique de l'Atelier</span>
          <h2 className="mt-4 text-4xl md:text-5xl">
            Outils d'Art & <span className="italic text-gilded">Objets de Décoration</span>
          </h2>
          <div className="rule-gold mx-auto my-8 w-24" />
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground">
            Sélectionnez une catégorie pour explorer notre catalogue et dérouler l'ensemble de nos articles disponibles.
          </p>
        </div>

        {/* Liste des Catégories sous forme de Panneaux Déroulants */}
        <div className="mt-16 space-y-6">
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
                  className="flex w-full items-center justify-between p-6 md:p-8 text-left bg-background/40 hover:bg-secondary/50 transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <h3 className="font-serif text-2xl text-foreground">{cat.label}</h3>
                      <span className="rounded-full bg-gold/15 px-3 py-1 text-[10px] font-mono text-gold border border-gold/30">
                        {categoryProducts.length} article(s)
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">{cat.description}</p>
                  </div>

                  {/* Symbole d'ouverture/fermeture (+ / -) */}
                  <span className="ml-4 font-mono text-2xl text-gold">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Contenu déroulant de la catégorie */}
                {isOpen && (
                  <div className="border-t border-border/40 p-6 md:p-8 bg-background/20">
                    {categoryProducts.length === 0 ? (
                      <p className="text-center text-xs italic text-muted-foreground py-6">
                        Nouveaux articles en cours de réapprovisionnement pour cette catégorie.
                      </p>
                    ) : (
                      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {categoryProducts.map((product) => (
                          <div
                            key={product.id}
                            className="group flex flex-col justify-between rounded-lg border border-border/40 bg-secondary/20 p-4 transition-all duration-300 hover:border-gold"
                          >
                            <div>
                              {/* Image & Badge */}
                              <div className="relative aspect-square overflow-hidden rounded bg-black/30">
                                {product.badge && (
                                  <span className="absolute top-2 left-2 z-10 bg-gold px-2 py-0.5 text-[0.55rem] font-bold text-black uppercase">
                                    {product.badge}
                                  </span>
                                )}
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                              </div>

                              {/* Informations */}
                              <div className="mt-4">
                                {product.subcategory && (
                                  <span className="text-[0.6rem] font-mono text-gold uppercase tracking-widest">
                                    {product.subcategory}
                                  </span>
                                )}
                                <h4 className="font-serif text-base text-foreground mt-1">
                                  {product.name}
                                </h4>
                                {product.specs && (
                                  <p className="mt-1 text-[11px] text-gold/80 font-mono">
                                    {product.specs}
                                  </p>
                                )}
                                <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                                  {product.description}
                                </p>
                              </div>
                            </div>

                            {/* Prix et Bouton d'Achat */}
                            <div className="mt-5 flex items-center justify-between border-t border-border/30 pt-3">
                              <span className="font-mono text-sm font-bold text-gold">
                                {product.price.toLocaleString()} {product.currency}
                              </span>
                              <button
                                type="button"
                                onClick={() => onAddToCart(product)}
                                className="bg-primary/90 px-3.5 py-1.5 text-[0.6rem] tracking-[0.2em] text-primary-foreground uppercase transition-all hover:bg-gold hover:text-foreground"
                              >
                                Ajouter
                              </button>
                            </div>
                          </div>
                        ))}
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
