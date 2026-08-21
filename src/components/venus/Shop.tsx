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
    <section id="boutique" className="w-full max-w-full overflow-x-hidden border-t border-border/60 bg-background py-6 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-2.5 sm:px-6">
        
        {/* En-tête de la Boutique */}
        <div className="text-center max-w-2xl mx-auto px-2">
          <span className="eyebrow text-[10px] sm:text-xs uppercase tracking-widest text-gold">
            La Boutique de l'Atelier
          </span>
          <h2 className="mt-1 text-xl sm:text-4xl md:text-5xl font-serif">
            Outils d'Art & <span className="italic text-gilded">Objets de Décoration</span>
          </h2>
          <div className="rule-gold mx-auto my-3 w-12 sm:w-24" />
        </div>

        {/* Barre de recherche & Filtres */}
        <div className="sticky top-0 z-30 -mx-2.5 sm:-mx-6 mb-4 bg-background/95 px-2.5 sm:px-6 py-2.5 backdrop-blur-md border-b border-border/40 space-y-2.5">
          
          {/* Recherche textuelle */}
          <div className="relative w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="Rechercher un produit, gant, résine..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-border/60 bg-secondary/30 px-3.5 py-1.5 pl-9 text-xs sm:text-sm text-foreground focus:border-gold focus:outline-none"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground"
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

          {/* Filtres par catégories (Pills) */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 w-full">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`shrink-0 rounded-full px-3 py-1 text-[11px] sm:text-xs font-medium transition-all ${
                selectedCategory === "all"
                  ? "bg-gold text-black font-bold shadow-sm"
                  : "bg-secondary/60 text-muted-foreground"
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
                  className={`shrink-0 rounded-full px-3 py-1 text-[11px] sm:text-xs font-medium transition-all ${
                    isSelected
                      ? "bg-gold text-black font-bold shadow-sm"
                      : "bg-secondary/60 text-muted-foreground"
                  }`}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Grille des Produits (2 colonnes mobiles avec sécurité anti-débordement) */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center text-muted-foreground">
            <p className="font-serif italic text-sm">Aucun article ne correspond à votre recherche.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 w-full">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

{/* Carte Produit Isolée avec Galerie d'images interactive */}
function ProductCard({
  product,
  onAddToCart,
}: {
  product: Product;
  onAddToCart: (p: Product) => void;
}) {
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  const images =
    product.images && product.images.length > 0
      ? product.images
      : [(product as unknown as { image?: string }).image || ""];

  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-lg border border-border/50 bg-secondary/20 p-2 sm:p-3 transition-all min-w-0 w-full">
      <div>
        {/* Zone Image */}
        <div className="relative aspect-square w-full overflow-hidden rounded bg-black/40">
          {product.badge && (
            <span className="absolute top-1.5 left-1.5 z-10 rounded bg-gold px-1.5 py-0.5 text-[8px] font-bold uppercase text-black shadow">
              {product.badge}
            </span>
          )}

          <img
            src={images[activeImgIdx] || images[0]}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://via.placeholder.com/300?text=Venus+Art";
            }}
          />

          {/* Indicateurs de photos si le produit a plusieurs images (ex: F1, F2, F3...) */}
          {images.length > 1 && (
            <div className="absolute bottom-1.5 inset-x-0 flex justify-center gap-1 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImgIdx(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    activeImgIdx === idx ? "bg-gold w-3" : "bg-white/60 w-1.5"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Info produit */}
        <div className="mt-2 space-y-1 min-w-0">
          {product.subcategory && (
            <span className="block text-[8px] sm:text-[10px] font-mono uppercase tracking-wider text-gold truncate">
              {product.subcategory}
            </span>
          )}

          <h3 className="font-serif text-xs sm:text-sm text-foreground line-clamp-2 leading-snug group-hover:text-gold transition-colors">
            {product.name}
          </h3>

          {product.specs && (
            <p className="text-[9px] sm:text-[10px] text-muted-foreground font-mono truncate">
              {product.specs}
            </p>
          )}

          <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-2 leading-tight">
            {product.description}
          </p>
        </div>
      </div>

      {/* Prix & Bouton */}
      <div className="mt-2.5 pt-2 border-t border-border/30 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
        <div className="min-w-0">
          <span className="block text-[8px] text-muted-foreground uppercase leading-none">
            Prix
          </span>
          <span className="font-mono text-xs sm:text-sm font-bold text-gold">
            {product.price.toLocaleString()} {product.currency}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="w-full sm:w-auto rounded bg-gold py-1.5 px-2.5 text-[10px] font-bold uppercase tracking-wider text-black transition-all hover:bg-white active:scale-95 flex items-center justify-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="11"
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
  );
}
