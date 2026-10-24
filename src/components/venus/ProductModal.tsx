import { useState, useEffect } from "react";
import type { Product, LipShade, VolumeOption } from "@/data/shopData";
import { ProductReviews } from "../ProductReviews";
import { supabase } from "@/lib/supabase";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  if (!product) return null;

  const [liveProduct, setLiveProduct] = useState<Product>(product);
  const [selectedShade, setSelectedShade] = useState<LipShade | null>(null);
  const [selectedVolume, setSelectedVolume] = useState<VolumeOption | null>(null);

  // Détermination des images actives (soit les images de la teinte sélectionnée, soit les images de base)
  const activeImages = selectedShade?.images && selectedShade.images.length > 0
    ? selectedShade.images
    : selectedShade?.shadeImage
    ? [selectedShade.shadeImage, ...(selectedShade.modelImages || [])]
    : liveProduct.images;

  const [selectedImage, setSelectedImage] = useState<string>(activeImages[0] || product.images[0]);

  useEffect(() => {
    // Gestion des teintes par défaut (ex: Rhode Lip Tint)
    if (product?.shades && product.shades.length > 0) {
      const defaultShade = product.shades.find((s) => s.inStock) || product.shades[0];
      setSelectedShade(defaultShade);
      if (defaultShade?.images && defaultShade.images.length > 0) {
        setSelectedImage(defaultShade.images[0]);
      } else if (defaultShade?.shadeImage) {
        setSelectedImage(defaultShade.shadeImage);
      } else if (product.images?.length) {
        setSelectedImage(product.images[0]);
      }
    } else {
      setSelectedShade(null);
      if (product?.images?.length) {
        setSelectedImage(product.images[0]);
      }
    }

    // Gestion des volumes par défaut
    if (product?.volumeOptions && product.volumeOptions.length > 0) {
      const defaultVolume = product.volumeOptions.find((v) => v.inStock) || product.volumeOptions[0];
      setSelectedVolume(defaultVolume);
    } else {
      setSelectedVolume(null);
    }

    // Récupération des données dynamiques depuis Supabase
    const fetchLiveStock = async () => {
      const { data } = await supabase
        .from("product_stocks")
        .select("*")
        .eq("id", product.id)
        .maybeSingle();

      if (data) {
        setLiveProduct({
          ...product,
          isPreOrder: data.is_pre_order,
          preOrderPrice: data.pre_order_price,
          preOrderEndDate: data.pre_order_end_date,
          badge: data.is_pre_order ? (product.badge || "Précommande") : undefined,
        });
      } else {
        setLiveProduct(product);
      }
    };

    fetchLiveStock();
  }, [product]);

  // Changement de teinte au clic : met à jour automatiquement sur la première image de la nouvelle teinte
  const handleShadeSelect = (shade: LipShade) => {
    setSelectedShade(shade);
    if (shade.images && shade.images.length > 0) {
      setSelectedImage(shade.images[0]);
    } else if (shade.shadeImage) {
      setSelectedImage(shade.shadeImage);
    } else if (liveProduct.images?.length) {
      setSelectedImage(liveProduct.images[0]);
    }
  };

  // Changement de volume au clic
  const handleVolumeSelect = (volume: VolumeOption) => {
    setSelectedVolume(volume);
  };

  // S'assurer que l'image sélectionnée reste valide si activeImages change
  useEffect(() => {
    if (activeImages.length > 0 && !activeImages.includes(selectedImage)) {
      setSelectedImage(activeImages[0]);
    }
  }, [activeImages, selectedImage]);

  // Calcul dynamique du prix
  const currentPrice = selectedVolume ? selectedVolume.price : liveProduct.price;

  // Détermination de la rupture de stock
  const isShadeSoldOut = selectedShade ? !selectedShade.inStock : false;
  const isVolumeSoldOut = selectedVolume ? !selectedVolume.inStock : false;
  const isSoldOut = isShadeSoldOut || isVolumeSoldOut || liveProduct.stockQuantity === 0;

  const handleInquire = () => {
    const phoneNumber = "25776247789"; // Votre numéro WhatsApp
    const shadeInfo = selectedShade ? ` (Teinte : ${selectedShade.name})` : "";
    const volumeInfo = selectedVolume ? ` (Format : ${selectedVolume.label})` : "";
    const message = encodeURIComponent(
      `Bonjour Venus Memoria ! Je souhaite me renseigner sur la disponibilité du produit : "${liveProduct.name}"${shadeInfo}${volumeInfo}.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleAddToCartAction = () => {
    const productToAdd: Product = {
      ...liveProduct,
      price: currentPrice,
      selectedShade: selectedShade || undefined,
      selectedVolume: selectedVolume || undefined,
    };
    onAddToCart(productToAdd);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-4 backdrop-blur-sm">
      <div 
        className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-2xl sm:rounded-lg border border-[#1C1B18]/20 p-4 sm:p-6 md:p-10 shadow-2xl"
        style={{ backgroundColor: "#C3C2A9" }}
      >
        {/* Bouton Fermer Fixe en Haut à Droite */}
        <button
          onClick={onClose}
          className="sticky top-0 float-right -mt-2 -mr-2 sm:absolute sm:top-4 sm:right-4 text-xl sm:text-2xl font-bold text-[#1C1B18] transition-opacity hover:opacity-70 z-20 bg-[#C3C2A9]/80 p-1.5 rounded-full backdrop-blur-sm"
          aria-label="Fermer"
        >
          ✕
        </button>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 clear-both">
          {/* Galerie Images & Carrousel Grand Format */}
          <div className="space-y-3 sm:space-y-4">
            <div className="relative aspect-square overflow-hidden rounded border border-[#1C1B18]/15 bg-white/40 p-2 flex items-center justify-center">
              <img
                src={selectedImage || activeImages[0]}
                alt={liveProduct.name}
                className="h-full w-full object-contain transition-all duration-300"
              />
            </div>

            {/* Vignettes secondaires / Carrousel grand format */}
            {activeImages.length > 1 && (
              <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2">
                {activeImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`h-12 w-12 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded border bg-white/30 p-1 transition-all ${
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
            <div className="space-y-2.5 sm:space-y-3">
              {isSoldOut ? (
                <span className="inline-block rounded bg-amber-800 px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                  Rupture de stock
                </span>
              ) : liveProduct.badge ? (
                <span className="inline-block rounded bg-[#1C1B18] px-2.5 py-1 text-[10px] font-bold text-[#F0EFDF] uppercase tracking-wider">
                  {liveProduct.badge}
                </span>
              ) : null}

              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#1C1B18]">
                {liveProduct.name}
              </h2>
              
              {/* Affichage dynamique des prix */}
              <p className="font-mono text-lg sm:text-xl font-extrabold text-[#1C1B18]">
                {currentPrice.toLocaleString()} {liveProduct.currency}
              </p>

              {/* SÉLECTEUR DE VOLUMES / CONTENANCES */}
              {liveProduct.volumeOptions && liveProduct.volumeOptions.length > 0 && (
                <div className="mt-3 pt-3 border-t border-[#1C1B18]/15 space-y-2">
                  <span className="text-xs font-bold text-[#1C1B18] uppercase tracking-wider">
                    Format / Contenance : <span className="font-extrabold text-[#733222]">{selectedVolume?.label}</span>
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {liveProduct.volumeOptions.map((vol) => {
                      const isSelected = selectedVolume?.id === vol.id;
                      return (
                        <button
                          key={vol.id}
                          onClick={() => handleVolumeSelect(vol)}
                          className={`px-3 py-1.5 rounded text-xs font-bold transition-all border ${
                            isSelected
                              ? "bg-[#1C1B18] text-[#F0EFDF] border-[#1C1B18] shadow-md"
                              : "bg-white/40 text-[#1C1B18] border-[#1C1B18]/20 hover:bg-white/60"
                          }`}
                        >
                          {vol.label} {!vol.inStock && "(Épuisé)"}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* SÉLECTEUR DE TEINTES (SHADES) */}
              {liveProduct.shades && liveProduct.shades.length > 0 && (
                <div className="mt-4 pt-3 border-t border-[#1C1B18]/15 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-[#1C1B18] uppercase tracking-wider">
                      Teinte : <span className="font-extrabold text-[#733222]">{selectedShade?.name}</span>
                    </span>
                    {selectedShade?.description && (
                      <span className="text-[11px] text-[#1C1B18]/70 italic truncate max-w-[180px]">
                        {selectedShade.description}
                      </span>
                    )}
                  </div>

                  {/* Pastilles Cliquables */}
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    {liveProduct.shades.map((shade) => {
                      const isSelected = selectedShade?.id === shade.id;
                      return (
                        <button
                          key={shade.id}
                          onClick={() => handleShadeSelect(shade)}
                          title={`${shade.name} ${!shade.inStock ? '(Épuisé)' : ''}`}
                          className={`group relative flex items-center justify-center p-1 rounded-full transition-all ${
                            isSelected
                              ? "ring-2 ring-[#1C1B18] ring-offset-2 scale-110"
                              : "hover:scale-105 opacity-80 hover:opacity-100"
                          }`}
                        >
                          <span
                            className="h-7 w-7 rounded-full border border-black/20 shadow-inner flex items-center justify-center text-[10px] font-bold text-white"
                            style={{ backgroundColor: shade.hexColor }}
                          >
                            {!shade.inStock && "✕"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <p className="text-xs font-semibold pt-1">
                {isSoldOut ? (
                  <span className="text-amber-900">
                    {selectedVolume && !selectedVolume.inStock 
                      ? `Le format "${selectedVolume.label}" est actuellement épuisé`
                      : selectedShade && !selectedShade.inStock
                      ? `La teinte "${selectedShade.name}" est épuisée`
                      : "Cet article est actuellement épuisé"}
                  </span>
                ) : (
                  <span className="text-[#1C1B18]/70">
                    En stock : {liveProduct.stockQuantity} pièces
                  </span>
                )}
              </p>

              <div className="my-3 sm:my-4 h-px bg-[#1C1B18]/15" />

              <p className="text-xs leading-relaxed text-[#2C2B26] whitespace-pre-line">
                {liveProduct.description}
              </p>

              {liveProduct.details && liveProduct.details.length > 0 && (
                <div className="mt-4 sm:mt-6 space-y-1.5 sm:space-y-2">
                  <h3 className="text-xs uppercase tracking-widest text-[#1C1B18] font-bold">
                    Détails du Produit :
                  </h3>
                  <ul className="space-y-1 text-xs text-[#2C2B26] list-inside list-disc">
                    {liveProduct.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {liveProduct.specs && (
                <p className="mt-3 sm:mt-4 text-xs text-[#1C1B18]/80 italic">
                  <span className="font-bold uppercase not-italic">Spécifications : </span>
                  {Array.isArray(liveProduct.specs) ? liveProduct.specs.join(" • ") : liveProduct.specs}
                </p>
              )}
            </div>

            {/* Boutons d'action */}
            <div className="mt-6 sm:mt-8 pt-4 border-t border-[#1C1B18]/15">
              {isSoldOut ? (
                <button
                  key="inquire-btn"
                  onClick={handleInquire}
                  className="w-full rounded bg-[#1C1B18] py-3.5 sm:py-4 text-xs font-bold tracking-[0.15em] text-[#F0EFDF] uppercase transition-all hover:bg-[#2C2B26] shadow-md flex items-center justify-center gap-2"
                >
                  <span>💬 Demander la disponibilité</span>
                </button>
              ) : (
                <button
                  key="add-to-cart-btn"
                  onClick={handleAddToCartAction}
                  className="w-full rounded bg-[#D4AF37] py-3.5 sm:py-4 text-xs font-bold tracking-[0.2em] text-[#1C1B18] uppercase transition-all hover:bg-[#c4a02e] shadow-md flex items-center justify-center gap-2"
                >
                  {liveProduct.isPreOrder 
                    ? `Réserver 🚀` 
                    : `Ajouter au Panier ${selectedVolume ? `(${selectedVolume.label})` : selectedShade ? `(${selectedShade.name})` : ''}`}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Section Avis Clients */}
        <div className="mt-8 sm:mt-10 pt-4 sm:pt-6 border-t border-[#1C1B18]/20">
          <ProductReviews productId={liveProduct.id} />
        </div>
      </div>
    </div>
  );
}
