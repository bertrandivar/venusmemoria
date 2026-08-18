import { useState, useEffect } from "react";
import type { Product } from "@/data/shopData";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  if (!product) return null;

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const isSoldOut = product.stockQuantity === 0;

  // Réinitialise l'image sélectionnée si le produit change
  useEffect(() => {
    if (product?.images?.length) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      {/* Fenêtre principale avec le fond crème du site */}
      <div 
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg border border-[#1C1B18]/20 p-6 shadow-2xl md:p-10"
        style={{ backgroundColor: "#C3C2A9" }}
      >
        {/* Bouton Fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-[#1C1B18] transition-opacity hover:opacity-70 z-10"
        >
          ✕
        </button>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Galerie Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded border border-[#1C1B18]/15 bg-[#F0EFDF]">
              <img
                src={selectedImage || product.images[0]}
                alt={product.name}
                className="h-full w-full object-cover transition-all duration-300"
              />
            </div>

            {/* Vignettes (Thumbnails) */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`h-16 w-16 shrink-0 overflow-hidden rounded border transition-all ${
                      selectedImage === img
                        ? "border-[#1C1B18] ring-2 ring-[#1C1B18]"
                        : "border-[#1C1B18]/20 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Détails du Produit */}
          <div className="flex flex-col justify-between">
            <div className="space-y-3">
              {/* Badges de statut */}
              {isSoldOut ? (
                <span className="inline-block rounded bg-red-700 px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                  Rupture de stock
                </span>
              ) : product.badge ? (
                <span className="inline-block rounded bg-[#1C1B18] px-2.5 py-1 text-[10px] font-bold text-[#F0EFDF] uppercase tracking-wider">
                  {product.badge}
                </span>
              ) : null}

              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1C1B18]">
                {product.name}
              </h2>
              
              <p className="font-mono text-xl font-extrabold text-[#1C1B18]">
                {product.price.toLocaleString()} {product.currency}
              </p>

              {/* Indicateur de stock */}
              <p className="text-xs font-semibold">
                {isSoldOut ? (
                  <span className="text-red-700">Cet article est actuellement indisponible</span>
                ) : (
                  <span className="text-[#1C1B18]/70">En stock : {product.stockQuantity} unités</span>
                )}
              </p>

              <div className="my-4 h-px bg-[#1C1B18]/15" />

              <p className="text-xs leading-relaxed text-[#2C2B26]">
                {product.description}
              </p>

              {/* Caractéristiques */}
              {product.details && product.details.length > 0 && (
                <div className="mt-6 space-y-2">
                  <h4 className="text-xs uppercase tracking-widest text-[#1C1B18] font-bold">
                    Détails du Produit :
                  </h4>
                  <ul className="space-y-1 text-xs text-[#2C2B26] list-inside list-disc">
                    {product.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Spécifications */}
              {product.specs && (
                <p className="mt-4 text-xs text-[#1C1B18]/80 italic">
                  <span className="font-bold uppercase not-italic">Spécifications : </span>
                  {product.specs}
                </p>
              )}
            </div>

            {/* Actions (Bouton Doré gardé à l'identique, désactivé si Sold Out) */}
            <div className="mt-8 pt-4 border-t border-[#1C1B18]/15">
              <button
                disabled={isSoldOut}
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className={`w-full rounded py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-md ${
                  isSoldOut
                    ? "bg-gray-400 text-gray-200 cursor-not-allowed shadow-none"
                    : "bg-[#D4AF37] text-[#1C1B18] hover:bg-[#c4a02e] hover:shadow-lg"
                }`}
              >
                {isSoldOut ? "Épuisé" : "Ajouter au Panier"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
