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

  // Filtrage combiné par catégorie et recherche
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#070A11] text-foreground">
      {/* Barre Supérieure d'Univers */}
      <header className="sticky top-0 z-30 border-b border-gold/30 bg-[#070A11]/90 backdrop-blur-md px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-xs tracking-[0.25em] text-gold uppercase hover:text-white transition-colors"
          >
            ← Retourner au site principal
          </button>
          <span className="font-display text-sm tracking-[0.3em] uppercase text-foreground">
            VENUS <span className="text-gold">Boutique</span>
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Message d'Accueil de VENUS */}
        <div className="mb-12 border-b border-border/40 pb-8 text-center">
          <h1 className="font-serif text-3xl md:text-5xl">Bienvenue dans l'Atelier Marchand</h1>
          <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-muted-foreground md:text-sm">
            Que vous soyez un <span className="text-gold">artiste à la recherche d'outils de précision</span> ou un <span className="text-gold">amateur d'art souhaitant sublimer son intérieur</span>, explorez nos pièces sélectionnées avec passion.
          </p>
        </div>

        {/* Barre de Recherche */}
        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="Rechercher un pinceau, un vase, un crayon..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md border-b border-gold/50 bg-transparent px-4 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-gold"
          />
        </div>

        {/* Disposition Principale : Catégories à Gauche + Produits à Droite */}
        <div className="grid gap-10 lg:grid-cols-[250px_1fr]">
          
          {/* Menu des Catégories à Gauche */}
          <aside className="space-y-2">
            <h3 className="mb-4 text-xs tracking-[0.2em] uppercase text-gold font-semibold">Catégories</h3>
            {SHOP_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex w-full items-center gap-3 rounded p-3 text-left text-xs transition-all ${
                  activeCategory === cat.id
                    ? "bg-gold text-black font-bold shadow-lg"
                    : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </aside>

          {/* Affichage des Produits */}
          <main>
            {filteredProducts.length === 0 ? (
              <p className="text-center text-xs text-muted-foreground py-12">Aucun article ne correspond à votre recherche.</p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group card-lux flex flex-col justify-between overflow-hidden border border-border/40 p-4 transition-all duration-300 hover:border-gold"
                  >
                    <div>
                      {/* Clic sur l'image ouvre la modale style Amazon */}
                      <div
                        onClick={() => setSelectedProduct(product)}
                        className="relative aspect-square cursor-pointer overflow-hidden rounded bg-black/30"
                      >
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 text-[10px] text-gold">
                          + Photos
                        </span>
                      </div>

                      <h4
                        onClick={() => setSelectedProduct(product)}
                        className="mt-4 font-serif text-base text-foreground cursor-pointer hover:text-gold transition-colors"
                      >
                        {product.name}
                      </h4>
                      <p className="mt-1 text-xs text-gold font-mono">{product.price.toLocaleString()} {product.currency}</p>
                    </div>

                    <div className="mt-6 flex gap-2">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="flex-1 border border-border/60 py-2 text-[0.6rem] uppercase tracking-wider text-muted-foreground hover:border-gold hover:text-foreground"
                      >
                        Aperçu
                      </button>
                      <button
                        onClick={() => onAddToCart(product)}
                        className="flex-1 bg-gold py-2 text-[0.6rem] uppercase tracking-wider font-bold text-black hover:bg-white"
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

      {/* Fiche Produit Détaillée style Amazon */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={onAddToCart}
      />
    </div>
  );
}
