import { useState, useMemo } from "react";
import { PRODUCTS, SHOP_CATEGORIES, type Product } from "@/data/shopData";

interface ShopProps {
  onAddToCart: (product: Product) => void;
}

export function Shop({ onAddToCart }: ShopProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filtrage combiné (catégorie + recherche)
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.subcategory &&
          product.subcategory.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="boutique" className="border-t border-border/60 bg-background py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        
        {/* En-tête de la Boutique */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow text-xs uppercase tracking-widest text-gold">
            La Boutique de l'Atelier
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl md:text-5xl font-serif">
            Outils d'Art & <span className="italic text-gilded">Objets de Décoration</span>
          </h2>
          <div className="rule-gold mx-auto my-4 w-16 sm:w-24" />
        </div>

        {/* Barre de recherche & Filtres style E-Commerce */}
        <div className="sticky top-0 z-30 -mx-3 mb-6 bg-background/95 px-3 py-3 backdrop-blur-md border-b border-border/40 space-y-3">
          
          {/* Recherche textuelle */}
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Rechercher un produit, un pinceau, de la résine..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-border/60 bg-secondary/30 px-4 py-2 pl-10 text-xs sm:text-sm text-foreground focus:border-gold focus:outline-none"
            />
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filtres par catégories défilables (Pills/Tabs) */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                selectedCategory === "all"
                  ? "bg-gold text-black font-bold shadow-md"
                  : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              Tous ({PRODUCTS.length})
            </button>

            {SHOP_CATEGORIES.map((cat) => {
              const count = PRODUCTS.filter((p) => p.category === cat.id).length;
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                    isSelected
                      ? "bg-gold text-black font-bold shadow-md"
                      : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Grille des Produits (2 colonnes mobile, 3 tablette, 4 desktop) */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center text-muted-foreground">
            <p className="font-serif italic text-base">Aucun article ne correspond à votre recherche.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => {
              const imageSrc =
                product.images && product.images.length > 0
                  ? product.images[0]
                  : (product as unknown as { image?: string }).image || "";

              return (
                <div
                  key={product.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border/50 bg-secondary/20 transition-all duration-300 hover:border-gold/60 hover:shadow-lg hover:shadow-gold/5"
                >
                  <div>
                    {/* Zone Image */}
                    <div className="relative aspect-square w-full overflow-hidden bg-black/40">
                      {product.badge && (
                        <span className="absolute top-2 left-2 z-10 rounded bg-gold px-2 py-0.5 text-[9px] font-bold uppercase text-black shadow">
                          {product.badge}
                        </span>
                      )}

                      <img
                        src={imageSrc}
                        alt={product.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://via.placeholder.com/300?text=Produit+Venus";
                        }}
                      />
                    </div>

                    {/* Fiche produit */}
                    <div className="p-2.5 sm:p-4">
                      {product.subcategory && (
                        <span className="block text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-gold truncate">
                          {product.subcategory}
                        </span>
                      )}

                      <h3 className="mt-1 font-serif text-xs sm:text-base text-foreground line-clamp-1 group-hover:text-gold transition-colors">
                        {product.name}
                      </h3>

                      {product.specs && (
                        <p className="mt-0.5 text-[10px] text-muted-foreground font-mono truncate">
                          {product.specs}
                        </p>
                      )}

                      <p className="mt-1.5 text-[11px] sm:text-xs text-muted-foreground line-clamp-2 leading-tight">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Prix & Bouton d'action */}
                  <div className="p-2.5 sm:p-4 pt-0">
                    <div className="flex flex-col gap-2 border-t border-border/30 pt-2.5 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <span className="block text-[8px] sm:text-[9px] text-muted-foreground uppercase">
                          Prix
                        </span>
                        <span className="font-mono text-xs sm:text-sm font-bold text-gold">
                          {product.price.toLocaleString()} {product.currency}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => onAddToCart(product)}
                        className="w-full sm:w-auto rounded bg-gold py-1.5 px-3 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-white hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="8" cy="21" r="1" />
                          <circle cx="19" cy="21" r="1" />
                          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                        </svg>
                        <span>Ajouter</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
