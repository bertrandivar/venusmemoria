import { useState } from "react";
import type { Product } from "@/data/shopData";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  if (!product) return null;

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg border border-gold/40 bg-[#0A0E17] p-6 text-foreground shadow-2xl md:p-10">
        
        {/* Bouton Fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-muted-foreground hover:text-gold transition-colors"
        >
          ✕
        </button>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Galerie Images (Style Amazon) */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded border border-border/60 bg-black/40">
              <img
                src={selectedImage}
                alt={product.name}
                className="h-full w-full object-cover transition-all duration-300"
              />
            </div>
            
            {/* Vignettes (Thumbnails) */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`h-16 w-16 shrink-0 overflow-hidden rounded border transition-all ${
                    selectedImage === img ? "border-gold ring-1 ring-gold" : "border-border/40 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Détails du Produit */}
          <div className="flex flex-col justify-between">
            <div>
              {product.badge && (
                <span className="bg-gold px-2.5 py-1 text-[0.6rem] font-bold text-black uppercase">
                  {product.badge}
                </span>
              )}
              <h2 className="mt-3 font-serif text-2xl md:text-3xl text-foreground">{product.name}</h2>
              <p className="mt-2 font-mono text-xl text-gold">{product.price.toLocaleString()} {product.currency}</p>
              
              <div className="my-4 h-px bg-border/40" />

              <p className="text-xs leading-relaxed text-muted-foreground">{product.description}</p>

              {/* Caractéristiques */}
              {product.details && (
                <div className="mt-6 space-y-2">
                  <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">Détails du Produit :</h4>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {product.details.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="mt-8 pt-4 border-t border-border/40">
              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="w-full bg-gold py-4 text-xs font-bold tracking-[0.2em] text-black uppercase transition-all hover:bg-white"
              >
                Ajouter au Panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
