import { Product } from "../shopData";

// Importation des images de la nouvelle collection
import RingAfriDouble from "@/assets/rings/afridouble.webp";
import RingAfricAuris from "@/assets/rings/africauris.webp";
import RingIncline from "@/assets/rings/inclinE.webp";
import RingCouvert from "@/assets/rings/couvert.webp";

export const RING_DROP_2_PRODUCTS: Product[] = [
  {
    id: "brass-ring-duo-africain",
    name: "Bague Laiton - Duo Africain Texture Étoilée",
    category: "rings",
    price: 25000,
    currency: "BIF",
    stockQuantity: 1,
    images: [RingAfriDouble],
    description: "Double bague artisanale en laiton représentant la silhouette texturée du continent africain.",
    details: [
      "Fait main en pur laiton",
      "Design double motif texturé",
      "Taille ajustable",
    ],
    specs: ["Laiton pur", "Taille ajustable"],
  },
  {
    id: "brass-ring-afrique-cauris",
    name: "Bague Laiton - Alliance Afrique & Coquillage Cauris",
    category: "rings",
    price: 25000,
    currency: "BIF",
    stockQuantity: 1,
    images: [RingAfricAuris],
    description: "Bague sculptée associant la carte de l'Afrique et un authentique coquillage cauris suspendu.",
    details: [
      "Alliance symbolique continent et cauris",
      "Monture en laiton massif",
      "Ajustable et confortable",
    ],
    specs: ["Laiton et Cauris", "Taille ajustable"],
  },
  {
    id: "brass-ring-ligne-inclinee",
    name: "Bague Laiton - Ligne Courbe & Bille Suspendue",
    category: "rings",
    price: 25000,
    currency: "BIF",
    stockQuantity: 1,
    images: [RingIncline],
    description: "Bague graphique et épurée mettant en valeur une ligne arquée moderne accompagnée d'une délicate bille.",
    details: [
      "Design minimaliste et contemporain",
      "Finition polie éclatante",
      "Taille ajustable",
    ],
    specs: ["Laiton pur", "Taille ajustable"],
  },
  {
    id: "brass-ring-ovale-divise",
    name: "Bague Laiton - Grand Ovale Divisé (Effet Miroir)",
    category: "rings",
    price: 25000,
    currency: "BIF",
    stockQuantity: 1,
    images: [RingCouvert],
    description: "Imposante bague ovale texturée et séparée en diagonale pour un jeu de reflets unique.",
    details: [
      "Pièce forte et audacieuse",
      "Texture martelée à la main",
      "Anneau adaptable",
    ],
    specs: ["Laiton martelé", "Taille ajustable"],
  },
];
