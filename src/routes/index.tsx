import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Splash } from "@/components/venus/Splash";
import { Nav } from "@/components/venus/Nav";
import { Hero, Collections, Gallery, Services, About, Footer } from "@/components/venus/Sections";
import { Contact } from "@/components/venus/Contact";
import { ShopTeaser } from "@/components/venus/ShopTeaser";
import { ShopUniverse } from "@/components/venus/ShopUniverse";
import { CartDrawer, type CartItem } from "@/components/venus/CartDrawer";
import type { Product } from "@/data/shopData";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VENUS — The Creation Aura | Atelier d'art & Boutique" },
      {
        name: "description",
        content:
          "Portraits fine art, résine art, objets de décoration et outils d'artiste. L'art d'immortaliser l'inestimable.",
      },
      { property: "og:title", content: "VENUS — The Creation Aura" },
      {
        property: "og:description",
        content:
          "Des créations artistiques sur-mesure et une boutique d'objets d'art d'exception.",
      },
    ],
    links: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [entered, setEntered] = useState(false);

  // État de bascule vers le second univers (Boutique)
  const [inShopUniverse, setInShopUniverse] = useState(false);

  // État du panier et du tiroir latéral
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Ajouter un produit au panier
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true); // Ouvre le panier automatiquement pour un feedback visuel
  };

  // Ajuster la quantité (+1 ou -1)
  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  // Supprimer un article
  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Vider tout le panier
  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // VUE 1 : Univers Boutique séparé
  if (inShopUniverse) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <ShopUniverse
          onBackToHome={() => {
            setInShopUniverse(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          onAddToCart={handleAddToCart}
        />

        {/* Tiroir Panier latéral accessible depuis la boutique */}
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
        />
      </div>
    );
  }

  // VUE 2 : Site principal d'accueil
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Splash hidden={entered} onEnter={() => setEntered(true)} />

      <div
        className={`transition-opacity duration-1000 ${entered ? "opacity-100" : "opacity-0"}`}
        aria-hidden={!entered}
      >
        <Nav
          onLogoClick={() => {
            setEntered(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          cartCount={totalCartCount}
          onOpenCart={() => setIsCartOpen(true)}
        />

        <main>
          <Hero />
          <Collections />
          <Gallery />
          
          {/* Section d'invitation vers le second univers de la boutique */}
          <ShopTeaser onEnterShop={() => setInShopUniverse(true)} />

          <Services />
          <About />
          <Contact />
        </main>

        <Footer />

        {/* Tiroir Panier latéral */}
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
        />
      </div>
    </div>
  );
}
