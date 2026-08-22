import { Product } from "../shopData";

// Import des images des gants
import AG1 from "@/assets/gunstaple/g1.webp";
import AG2 from "@/assets/gunstaple/g2.webp";
import AG3 from "@/assets/gunstaple/g3.webp";
import AG4 from "@/assets/gunstaple/g4.webp";

export const agrafeuseNoireProduct: Product = {
  id: "agrafeuse-murale-acier-noir",
  name: "Agrafeuse Murale Professionnelle (Acier & Noir)",
  category: "outillage",
  price: 8500, // Ajustez le prix
  currency: "BIF",
  description: "Agrafeuse manuelle robuste en acier idéale pour le montage de toiles sur châssis, le tapissage et l'encadrement.",
  badge: "Recommandé",
  stockQuantity: 0,
  images: [AG1, AG2, AG3, AG4],
   specs: [
    "Corps en acier inoxydable renforcé",
    "Mécanisme de réglage de pression",
    "Dimensions : 15.8 cm x 11.2 cm",
    "Compatible agrafes standards pour châssis",
  ],
};
