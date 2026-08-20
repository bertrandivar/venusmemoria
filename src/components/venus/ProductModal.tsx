import { useState, useEffect } from "react";
import type { Product } from "@/data/shopData";
import { ProductReviews } from "../ProductReviews";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  if (!product) return null;

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const isSoldOut = product.stockQuantity === 0;

  useEffect(() => {
    if (product?.images?.length) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  const handleInquire = () => {
    const phoneNumber = "257XXXXXXXX"; // Remplacez par votre numéro WhatsApp
    const message = encodeURIComponent(
      `Bonjour Venus Memoria ! Je souhaite me renseigner sur la disponibilité future du produit : "${product.name}".`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
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
            <div className="aspect-square overflow-hidden rounded border border-[#1C1B18]/15 bg-white/40 p-2 flex items-center justify-center">
              <img
                src={selectedImage || product.images[0]}
                alt={product.name}
                className="h-full w-full object-contain transition-all duration-300"
              />
            </div>

            {/* Vignettes */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`h-16 w-16 shrink-0 overflow-hidden rounded border bg-white/30 p-1 transition-all ${
                      selectedImage === img
                        ? "border-[#1C1B18] ring-2 ring-[#1C1B18]"
                        : "border-[#1C1B18]/20 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="h-full w-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Détails du Produit */}
          <div className="flex flex-col justify-between">
            <div className="space-y-3">
              {isSoldOut ? (
                <span className="inline-block rounded bg-amber-800 px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
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

              <p className="text-xs font-semibold">
                {isSoldOut ? (
                  <span className="text-amber-900">Cet article est actuellement épuisé</span>
                ) : (
                  <span className="text-[#1C1B18]/70">En stock : {product.stockQuantity} pièces</span>
                )}
              </p>

              <div className="my-4 h-px bg-[#1C1B18]/15" />

              <p className="text-xs leading-relaxed text-[#2C2B26]">
                {product.description}
              </p>

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

              {product.specs && (
                <p className="mt-4 text-xs text-[#1C1B18]/80 italic">
                  <span className="font-bold uppercase not-italic">Spécifications : </span>
                  {product.specs}
                </p>
              )}
            </div>

            <div className="mt-8 pt-4 border-t border-[#1C1B18]/15">
              {isSoldOut ? (
                <button
                  onClick={handleInquire}
                  className="w-full rounded bg-[#1C1B18] py-4 text-xs font-bold tracking-[0.15em] text-[#F0EFDF] uppercase transition-all hover:bg-[#2C2B26] shadow-md flex items-center justify-center gap-2"
                >
                  <span>💬 Demander la disponibilité</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="w-full rounded bg-[#D4AF37] py-4 text-xs font-bold tracking-[0.2em] text-[#1C1B18] uppercase transition-all hover:bg-[#c4a02e] shadow-md"
                >
                  Ajouter au Panier
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Section Avis Clients Supabase */}
        <div className="mt-10 pt-6 border-t border-[#1C1B18]/20">
          <ProductReviews productId={product.id} />
        </div>
      </div>
    </div>
  );
}
