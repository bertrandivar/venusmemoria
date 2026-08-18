// src/data/products/gants.ts
import type { Product } from "../shopData";

// Import des images des gants
import gloveF1 from "@/assets/art-glove-two-finger/f1.webp";
import gloveF2 from "@/assets/art-glove-two-finger/F2.webp";
import gloveF3 from "@/assets/art-glove-two-finger/f3.webp";
import gloveF4 from "@/assets/art-glove-two-finger/f4.webp";

export const GLOVES_PRODUCTS: Product[] = [
  {
    id: "gant-artiste-2-doigts",
    name: "Gant d'Artiste 2 Doigts (Anti-Frottement)",
    category: "gants",
    price: 5500,
    currency: "BIF",
    images: [gloveF1, gloveF2, gloveF3, gloveF4],
    description:
      "Gant professionnel réduisant les frottements sur tablette graphique et papier. Offre un confort optimal pour le dessin.",
    details: [
      "Tissu respirant et très doux",
      "Évite les traces d'huile et de transpiration",
      "Convient aux gauchers et droitier(e)s",
    ],
    specs: "Lycra haute qualité — Noir",
    stockQuantity: 10,
    badge: "Populaire",
  },
];
