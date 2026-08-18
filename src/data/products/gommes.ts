import type { Product } from "../shopData";

// 1. Imports des images de vos gommes
import electricEraserImg from "@/assets/gommes/electric-eraser.webp";
import faberEraserImg from "@/assets/gommes/faber-kneaded.webp";

export const ERASER_PRODUCTS: Product[] = [
  {
    id: "gomme-electrique-rechargeable",
    name: "Gomme Électrique Rechargeable USB (avec 140 recharges)",
    category: "gommes",
    price: 35000,
    currency: "BIF",
    images: [electricEraserImg],
    description:
      "Gomme électrique de haute précision rechargeable par USB, idéale pour le dessin, le croquis et les plans d'architecture. Livrée avec un lot généreux de 140 recharges.",
    details: [
      "Rechargeable via câble USB",
      "Livré avec 140 recharges de gomme",
      "Précision optimale pour le dessin technique et artistique",
      "Design ergonomique pour une prise en main confortable"
    ],
    specs: "Alimentation USB — Recharges incluses",
    stockQuantity: 10,
    badge: "Populaire",
  },
  {
    id: "gomme-mie-de-pain-faber-castell",
    name: "Gomme Míe de Pain Malaxable Faber-Castell",
    category: "gommes",
    price: 5000,
    currency: "BIF",
    images: [faberEraserImg],
    description:
      "Gomme mie de pain souple et malaxable Faber-Castell pour artistes. Parfaite pour éclaircir les zones sombres, estomper le fusain, le crayon et la craie.",
    details: [
      "Marque de qualité professionnelle Faber-Castell",
      "Haute plasticité et très absorbante",
      "Ne laisse pas de résidus ni de miettes sur le papier",
      "Idéale pour le dessin, le croquis et le design"
    ],
    specs: "Faber-Castell — Plasticité supérieure",
    stockQuantity: 15,
    badge: "Essentiel",
  },
];
