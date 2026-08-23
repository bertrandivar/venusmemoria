import type { Product } from "@/data/shopData";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  whatsappNumber?: string; // Ex: "257XXXXXXXX"
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  whatsappNumber = "25761200101", // Remplacez par le numéro direct de l'Atelier
}: CartDrawerProps) {
  if (!isOpen) return null;

  const totalAmount = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const currency = items[0]?.product.currency || "BIF";

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    let message = "Bonjour VENUS Atelier,\nJe souhaite passer commande pour les articles suivants :\n\n";
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}* (x${item.quantity}) - ${(
        item.product.price * item.quantity
      ).toLocaleString()} ${item.product.currency}\n`;
    });
    message += `\n*Total : ${totalAmount.toLocaleString()} ${currency}*\n\nMerci de me donner les instructions pour le paiement et la livraison.`;

    const encodedMessage = encodeURIComponent(message);
    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${cleanNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm transition-opacity">
      {/* Zone cliquable pour fermer le panier en arrière-plan */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 flex h-full w-full max-w-md flex-col bg-[#090D16] p-4 sm:p-6 text-foreground shadow-2xl border-l border-border/60">
        {/* En-tête Panier */}
        <div className="flex items-center justify-between border-b border-border/60 pb-4">
          <div className="flex items-center gap-3">
            <span className="font-serif text-xl text-gold">Votre Sélection</span>
            <span className="rounded-full bg-gold/20 px-2.5 py-0.5 text-xs font-mono text-gold">
              {items.reduce((a, c) => a + c.quantity, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground text-xl p-1 transition-colors"
            aria-label="Fermer le panier"
          >
            ✕
          </button>
        </div>

        {/* Liste des articles */}
        <div className="flex-1 overflow-y-auto py-4 sm:py-6 space-y-3 sm:space-y-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground px-4">
              <p className="font-serif italic text-lg">Votre panier est vide</p>
              <p className="mt-2 text-xs">Explorez notre boutique pour sélectionner vos articles.</p>
            </div>
          ) : (
            items.map(({ product, quantity }) => {
              const imageUrl =
                product.images && product.images.length > 0
                  ? product.images[0]
                  : (product as unknown as { image?: string }).image || "";

              return (
                <div
                  key={product.id}
                  className="flex items-center gap-3 sm:gap-4 rounded-lg border border-border/40 bg-secondary/20 p-3"
                >
                  <img
                    src={imageUrl}
                    alt={product.name}
                    className="h-14 w-14 sm:h-16 sm:w-16 rounded object-cover border border-border/40 bg-white/5 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-xs sm:text-sm truncate text-foreground">{product.name}</h4>
                    <p className="text-xs text-gold font-mono mt-0.5">
                      {product.price.toLocaleString()} {product.currency}
                    </p>

                    {/* Contrôle quantité */}
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(product.id, -1)}
                        className="h-6 w-6 rounded border border-border bg-background text-xs text-foreground flex items-center justify-center hover:border-gold"
                      >
                        -
                      </button>
                      <span className="text-xs font-mono px-1">{quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(product.id, 1)}
                        className="h-6 w-6 rounded border border-border bg-background text-xs text-foreground flex items-center justify-center hover:border-gold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(product.id)}
                    className="text-[11px] text-muted-foreground hover:text-red-400 p-1 shrink-0"
                  >
                    Supprimer
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Pied du Panier */}
        {items.length > 0 && (
          <div className="border-t border-border/60 pt-4 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between text-base">
              <span className="font-serif">Total Estimé</span>
              <span className="font-mono text-base sm:text-lg font-semibold text-gold">
                {totalAmount.toLocaleString()} {currency}
              </span>
            </div>

            <div className="rounded border border-gold/30 bg-gold/5 p-3 text-[10px] sm:text-[11px] leading-relaxed text-muted-foreground">
              <p className="font-semibold text-gold uppercase tracking-wider mb-1">Moyens de paiement & Livraison :</p>
              <ul className="space-y-0.5">
                <li>• Lumicash / Ecocash & Espèces au retrait</li>
                <li>• Cash à la livraison à Bujumbura</li>
                <li>• Expédition sécurisée pour l'intérieur / international</li>
              </ul>
            </div>

            <button
              onClick={handleWhatsAppCheckout}
              className="w-full bg-gold py-3 text-xs tracking-[0.2em] font-bold text-black uppercase transition-all hover:bg-white hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            >
              Commander via WhatsApp
            </button>

            <button
              onClick={onClearCart}
              className="w-full text-center text-[10px] text-muted-foreground underline uppercase tracking-widest hover:text-foreground"
            >
              Vider le panier
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
