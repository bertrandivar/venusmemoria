import { useState } from "react";
import { PRODUCTS, SHOP_CATEGORIES, type Product } from "@/data/shopData";
import { ProductModal } from "./ProductModal";
import { RequestProductModal } from "@/components/RequestProductModal"; // <-- 1. IMPORT AJOUTÉ

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
      className="min-h-screen transition-colors text-[#1C1B18] w-full overflow-x-hidden" 
      style={{ backgroundColor: "#C3C2A9" }}
    >
      {/* En-tête supérieur de la boutique */}
      <header 
        className="sticky top-0 z-30 border-b border-[#1C1B18]/10 px-3 py-2.5 sm:px-6 sm:py-4 shadow-sm backdrop-blur-md"
        style={{ backgroundColor: "#C3C2A9" }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-1 text-[10px] sm:text-xs font-bold tracking-[0.1em] sm:tracking-[0.2em] text-[#1C1B18] uppercase transition-opacity hover:opacity-70 shrink-0"
          >
            ← <span>Retour</span>
          </button>
          <span className="font-display text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.3em] font-bold uppercase text-[#1C1B18] truncate">
            Boutique <span className="underline decoration-[#F0EFDF]">VENUS</span>
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-2.5 sm:px-6 py-4 sm:py-10">
        {/* Message d'accueil */}
        <div className="mb-4 sm:mb-8 border-b border-[#1C1B18]/15 pb-3 sm:pb-6 text-center">
          <h1 className="font-serif text-xl sm:text-3xl md:text-4xl text-[#1C1B18] font-bold">
            Bienvenue dans la Boutique
          </h1>
          <p className="mx-auto mt-1 max-w-xl text-[11px] sm:text-base text-[#2C2B26] leading-relaxed">
            Explorez nos articles pour artistes et nos créations de décoration.
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="mb-4 sm:mb-8 flex justify-center px-1">
          <input
            type="text"
            placeholder="🔍 Rechercher un produit..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md rounded-md border border-[#1C1B18]/20 bg-[#F0EFDF] px-3 py-2 text-xs sm:text-sm text-[#1C1B18] placeholder-[#1C1B18]/60 outline-none focus:border-[#1C1B18] focus:ring-1 focus:ring-[#1C1B18]"
          />
        </div>

        {/* Layout Catégories + Cartes Produit */}
        <div className="grid gap-4 sm:gap-8 lg:grid-cols-[220px_1fr] w-full min-w-0">
          
          {/* Menu des catégories */}
          <aside className="space-y-1 w-full min-w-0">
            <h3 className="mb-1.5 text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase text-[#1C1B18]">
              Catégories
            </h3>
            <div className="flex lg:flex-col gap-1.5 overflow-x-auto pb-2 lg:pb-0 no-scrollbar w-full">
              {SHOP_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 lg:w-full lg:px-3.5 lg:py-2.5 text-left text-[11px] sm:text-xs transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#1C1B18] text-[#F0EFDF] font-bold shadow-sm"
                      : "bg-[#F0EFDF]/80 border border-[#1C1B18]/15 text-[#1C1B18]"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span className="font-medium shrink-0">{cat.label}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* Liste des produits */}
          <main className="w-full min-w-0">
            {filteredProducts.length === 0 ? (
              /* <-- 2. BLOC D'ÉTAT VIDE MIS À JOUR --> */
              <div className="rounded-lg border border-dashed border-[#1C1B18]/30 p-8 text-center space-y-3 bg-[#F0EFDF]/40">
                <p className="text-xs sm:text-sm font-semibold text-[#1C1B18]">
                  Aucun produit ne correspond à votre recherche.
                </p>
                <p className="text-[11px] text-[#1C1B18]/70 max-w-xs mx-auto">
                  Vous cherchez un produit d'art en particulier non listé ?
                </p>
                <div className="pt-2 flex justify-center">
                  <RequestProductModal 
                    triggerText="✨ Demander ce produit sur-mesure" 
                    initialProductName={searchQuery}
                  />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-3 w-full">
                {filteredProducts.map((product) => {
                  const isSoldOut = product.stockQuantity === 0;

                  return (
                    <div
                      key={product.id}
                      className={`flex flex-col justify-between rounded-lg border border-[#1C1B18]/15 bg-[#F0EFDF] p-2 sm:p-3 shadow-sm transition-all min-w-0 ${
                        isSoldOut ? "opacity-80" : "hover:border-[#1C1B18]"
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
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                          
                          {/* Badges */}
                          {isSoldOut ? (
                            <span className="absolute top-1 left-1 rounded bg-amber-800 px-1 py-0.5 text-[8px] font-bold text-white uppercase">
                              Épuisé
                            </span>
                          ) : product.badge ? (
                            <span className="absolute top-1 left-1 rounded bg-[#1C1B18] px-1 py-0.5 text-[8px] font-bold text-[#F0EFDF] uppercase">
                              {product.badge}
                            </span>
                          ) : null}
                        </div>

                        {/* Titre & Prix */}
                        <h4
                          onClick={() => setSelectedProduct(product)}
                          className="mt-1.5 font-serif text-xs sm:text-sm font-bold text-[#1C1B18] cursor-pointer hover:underline line-clamp-1 leading-tight"
                        >
                          {product.name}
                        </h4>
                        
                        <p className="mt-0.5 text-[11px] sm:text-xs font-extrabold text-[#1C1B18]">
                          {product.price.toLocaleString()} {product.currency}
                        </p>

                        <p className="mt-0.5 text-[9px] font-medium text-[#1C1B18]/70">
                          {isSoldOut ? "Rupture" : `Stock : ${product.stockQuantity}`}
                        </p>
                      </div>

                      {/* Bouton d'action */}
                      <div className="mt-2 pt-1.5 border-t border-[#1C1B18]/10 flex gap-1">
                        {isSoldOut ? (
                          <button
                            onClick={() => setSelectedProduct(product)}
                            className="w-full rounded bg-[#1C1B18]/10 border border-[#1C1B18]/30 py-1 text-[9px] font-bold uppercase text-[#1C1B18]"
                          >
                            Détails
                          </button>
                        ) : (
                          <button
                            onClick={() => onAddToCart(product)}
                            className="w-full rounded bg-[#1C1B18] py-1 text-[9px] sm:text-[10px] font-bold uppercase text-[#F0EFDF] hover:opacity-90 active:scale-95 transition-all"
                          >
                            + Ajouter
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
