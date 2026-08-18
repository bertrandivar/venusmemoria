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
    <div className="min-h-screen bg-background text-foreground">
      {/* Barre supérieure lumineuse et lisible */}
      <header className="sticky top-0 z-30 border-b border-border/80 bg-background/95 backdrop-blur-md px-6 py-4 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-foreground uppercase hover:text-gold transition-colors"
          >
            ← Retourner au site
          </button>
          <span className="font-display text-sm tracking-[0.3em] uppercase text-foreground">
            Boutique <span className="text-gold">VENUS</span>
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Message d'accueil clair et simple */}
        <div className="mb-8 border-b border-border/60 pb-6 text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-foreground font-semibold">
            Bienvenue dans la Boutique
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-sm md:text-base text-foreground/80 leading-relaxed">
            Explorez nos articles pour artistes et nos créations de décoration. Sélectionnez une catégorie pour filtrer rapidement.
          </p>
        </div>

        {/* Champ de recherche visible et contrasté */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="🔍 Rechercher un produit (pinceaux, crayons, vase...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md rounded border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-gold focus:ring-1 focus:ring-gold"
          />
        </div>

        {/* Sidebar des catégories à gauche + Grille à droite */}
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          
          {/* Menu des catégories */}
          <aside className="space-y-1.5">
            <h3 className="mb-3 text-xs font-bold tracking-[0.2em] uppercase text-gold">
              Catégories d'articles
            </h3>
            {SHOP_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex w-full items-center gap-3 rounded-md px-4 py-3 text-left text-xs transition-all ${
                  activeCategory === cat.id
                    ? "bg-gold text-black font-bold shadow-md"
                    : "bg-card border border-border/60 text-foreground hover:border-gold"
                }`}
              >
                <span className="text-sm">{cat.icon}</span>
                <span className="font-medium">{cat.label}</span>
              </button>
            ))}
          </aside>

          {/* Grille de produits clair & lisible */}
          <main>
            {filteredProducts.length === 0 ? (
              <div className="rounded-lg border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
                Aucun produit ne correspond à votre recherche.
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col justify-between rounded-lg border border-border bg-card p-4 transition-all hover:border-gold hover:shadow-lg"
                  >
                    <div>
                      {/* Image cliquable */}
                      <div
                        onClick={() => setSelectedProduct(product)}
                        className="relative aspect-square cursor-pointer overflow-hidden rounded border border-border/40 bg-black/10"
                      >
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        {product.badge && (
                          <span className="absolute top-2 left-2 rounded bg-gold px-2 py-0.5 text-[10px] font-bold text-black uppercase">
                            {product.badge}
                          </span>
                        )}
                      </div>

                      <h4
                        onClick={() => setSelectedProduct(product)}
                        className="mt-3 font-serif text-base text-foreground font-semibold cursor-pointer hover:text-gold"
                      >
                        {product.name}
                      </h4>
                      <p className="mt-1 text-sm font-bold text-gold">
                        {product.price.toLocaleString()} {product.currency}
                      </p>
                    </div>

                    <div className="mt-5 flex gap-2 pt-2 border-t border-border/40">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="flex-1 rounded border border-border py-2 text-[11px] font-semibold uppercase text-foreground hover:border-gold"
                      >
                        Détails
                      </button>
                      <button
                        onClick={() => onAddToCart(product)}
                        className="flex-1 rounded bg-gold py-2 text-[11px] font-bold uppercase text-black hover:bg-white"
                      >
                        Ajouter
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Modale Fiche Produit */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={onAddToCart}
      />
    </div>
  );
}
