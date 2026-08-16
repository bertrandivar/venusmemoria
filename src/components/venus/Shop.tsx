import { useState } from "react";
import { PRODUCTS, type Product } from "@/data/shopData";

interface ShopProps {
  onAddToCart: (product: Product) => void;
}

export function Shop({ onAddToCart }: ShopProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="boutique" className="border-t border-border/60 bg-secondary/30 py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* En-tête Boutique */}
        <div className="text-center">
          <span className="eyebrow">La Boutique de l'Atelier</span>
          <h2 className="mt-4 text-4xl md:text-5xl">
            Outils d'Art & <span className="italic text-gilded">Objets de Décor</span>
          </h2>
          <div className="rule-gold mx-auto my-8 w-24" />
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground">
            Une sélection rigoureuse de matériels professionnels et de pièces décoratives façonnées dans notre esprit d'excellence.
          </p>
        </div>

        {/* Boutons de Filtrage */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            { id: "all", label: "Tous les articles" },
            { id: "outils", label: "Outils d'Artiste" },
            { id: "decor", label: "Objets de Décor" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 text-[0.65rem] tracking-[0.2em] uppercase transition-all duration-300 ${
                activeCategory === cat.id
                  ? "border border-gold bg-gold text-foreground font-semibold shadow-md"
                  : "border border-border/80 bg-background/50 text-muted-foreground hover:border-gold/60 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grille des Produits */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group card-lux flex flex-col justify-between overflow-hidden p-0 border border-border/60 transition-all duration-300 hover:border-gold"
            >
              <div>
                {/* Image Produit */}
                <div className="relative aspect-square overflow-hidden bg-black/20">
                  {product.badge && (
                    <span className="absolute top-3 left-3 z-10 bg-gold px-3 py-1 text-[0.55rem] tracking-widest text-black uppercase font-bold">
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                </div>

                {/* Détails Produit */}
                <div className="p-6 text-left">
                  <h3 className="font-serif text-lg text-foreground group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Prix & Bouton d'Achat */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-border/30 mt-4">
                <span className="font-mono text-sm font-semibold text-gold">
                  {product.price.toLocaleString()} {product.currency}
                </span>
                <button
                  type="button"
                  onClick={() => onAddToCart(product)}
                  className="bg-primary/90 px-4 py-2 text-[0.6rem] tracking-[0.2em] text-primary-foreground uppercase transition-all hover:bg-gold hover:text-foreground"
                >
                  Ajouter
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
