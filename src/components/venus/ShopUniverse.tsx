import { useState } from "react";
import { PRODUCTS, SHOP_CATEGORIES, type Product } from "@/data/shopData";
import { ProductModal } from "./ProductModal";

interface ShopUniverseProps {
  onBackToHome: () => void;
  onAddToCart: (product: Product) => void;
}

export function ShopUniverse({ onBackToHome, onAddToCart }: ShopUniverseProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div 
      className="min-h-screen transition-colors text-[#1C1B18]" 
      style={{ backgroundColor: "#C3C2A9" }}
    >
      {/* En-tête supérieur de la boutique */}
      <header 
        className="sticky top-0 z-30 border-b border-[#1C1B18]/10 px-4 py-3 sm:px-6 sm:py-4 shadow-sm backdrop-blur-md"
        style={{ backgroundColor: "#C3C2A9" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] text-[#1C1B18] uppercase transition-opacity hover:opacity-70 shrink-0"
          >
            ← <span className="hidden xs:inline">Retourner au site</span><span className="xs:hidden">Retour</span>
          </button>
          <span className="font-display text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] font-bold uppercase text-[#1C1B18] truncate">
            Boutique <span className="underline decoration-[#F0EFDF]">VENUS</span>
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
        {/* Message d'accueil */}
        <div className="mb-6 sm:mb-8 border-b border-[#1C1B18]/15 pb-4 sm:pb-6 text-center">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1C1B18] font-bold">
            Bienvenue dans la Boutique
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-xs sm:text-base text-[#2C2B26] leading-relaxed">
            Explorez nos articles pour artistes et nos créations de décoration.
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <input
            type="text"
            placeholder="🔍 Rechercher un produit..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md rounded-md border border-[#1C1B18]/20 bg-[#F0EFDF] px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-[#1C1B18] placeholder-[#1C1B18]/60 outline-none focus:border-[#1C1B18] focus:ring-1 focus:ring-[#1C1B18]"
          />
        </div>

        {/* Layout Catégories + Cartes Produit */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[240px_1fr]">
          
          {/* Menu des catégories : Défilement horizontal sur mobile, vertical sur desktop */}
          <aside className="space-y-1.5">
            <h3 className="mb-2 sm:mb-3 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#1C1B18]">
              Catégories d'articles
            </h3>
            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {SHOP_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex shrink-0 items-center gap-2 sm:gap-3 rounded-md px-3.5 py-2.5 lg:w-full lg:px-4 lg:py-3 text-left text-xs transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#1C1B18] text-[#F0EFDF] font-bold shadow-md"
                      : "bg-[#F0EFDF]/80 border border-[#1C1B18]/15 text-[#1C1B18] hover:bg-[#F0EFDF]"
                  }`}
                >
                  <span className="text-sm">{cat.icon}</span>
                  <span className="font-semibold whitespace-nowrap">{cat.label}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* Liste des produits */}
          <main>
            {filteredProducts.length === 0 ? (
              <div className="rounded-lg border border-dashed border-[#1C1B18]/30 p-8 sm:p-12 text-center text-xs sm:text-sm font-medium text-[#1C1B18]/70">
                Aucun produit ne correspond à votre recherche.
              </div>
            ) : (
              <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => {
                  const isSoldOut = product.stockQuantity === 0;

                  return (
                    <div
                      key={product.id}
                      className={`flex flex-col justify-between rounded-lg border border-[#1C1B18]/15 bg-[#F0EFDF] p-3 sm:p-4 shadow-sm transition-all ${
                        isSoldOut ? "opacity-90" : "hover:border-[#1C1B18] hover:shadow-md"
                      }`}
                    >
                      <div>
                        {/* Image & Badges */}
                        <div
                          onClick={() => setSelectedProduct(product)}
                          className="relative aspect-square cursor-pointer overflow-hidden rounded border border-[#1C1B18]/10 bg-black/5"
                        >
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                          
                          {/* Badges */}
                          {isSoldOut ? (
                            <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 rounded bg-amber-800 px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold text-white uppercase">
                              Épuisé
                            </span>
                          ) : product.badge ? (
                            <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 rounded bg-[#1C1B18] px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold text-[#F0EFDF] uppercase">
                              {product.badge}
                            </span>
                          ) : null}
                        </div>

                        {/* Titre & Prix */}
                        <h4
                          onClick={() => setSelectedProduct(product)}
                          className="mt-2 sm:mt-3 font-serif text-sm sm:text-base font-bold text-[#1C1B18] cursor-pointer hover:underline line-clamp-1"
                        >
                          {product.name}
                        </h4>
                        
                        <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-extrabold text-[#1C1B18]">
                          {product.price.toLocaleString()} {product.currency}
                        </p>

                        {/* Indication Stock */}
                        <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-[11px] font-semibold">
                          {isSoldOut ? (
                            <span className="text-amber-900">Rupture temporaire</span>
                          ) : (
                            <span className="text-[#1C1B18]/70">En stock : {product.stockQuantity}</span>
                          )}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row gap-1.5 sm:gap-2 pt-2 border-t border-[#1C1B18]/10">
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="w-full sm:flex-1 rounded border border-[#1C1B18] py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-bold uppercase text-[#1C1B18] hover:bg-[#1C1B18] hover:text-[#F0EFDF] transition-colors"
                        >
                          Détails
                        </button>

                        {isSoldOut ? (
                          <button
                            onClick={() => setSelectedProduct(product)}
                            className="w-full sm:flex-1 rounded bg-[#1C1B18]/10 border border-[#1C1B18]/30 py-1.5 sm:py-2 text-[9px] sm:text-[10px] font-bold uppercase text-[#1C1B18] hover:bg-[#1C1B18] hover:text-[#F0EFDF] transition-all"
                          >
                            Se renseigner
                          </button>
                        ) : (
                          <button
                            onClick={() => onAddToCart(product)}
                            className="w-full sm:flex-1 rounded bg-[#1C1B18] py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-bold uppercase text-[#F0EFDF] hover:opacity-90 transition-all"
                          >
                            Ajouter
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={onAddToCart}
      />
    </div>
  );
}
