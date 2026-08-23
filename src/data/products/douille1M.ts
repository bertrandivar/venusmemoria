import { Product } from "../shopData";

import D1 from "@/assets/D1M/d1.webp";
import D2 from "@/assets/D1M/d2.webp";
import D3 from "@/assets/D1M/d3.webp";
import D4 from "@/assets/D1M/d4.webp";// Ajustez le dossier selon votre structure dans assets

export const douille1M: Product = {
  id: "douille-patisserie-inox-1m",
  name: "Douille Pâtissière 1M en Inox (Etoile Ouverte)",
  category: "cuisine",
  price: 5000, // Ajustez le prix selon vos besoins
  currency: "BIF",
  description: "Douille professionnelle 1M en acier inoxydable sans soudure. L'outil indispensable pour réaliser de magnifiques rosettes, bordures de gâteaux, meringues et décors en crème au beurre.",
  badge: "Best-seller",
  stockQuantity: 15,
  images: [D1, D2, D3, D4],
  details: [
    "Modèle : 1M Étoile ouverte de précision",
    "Matériau : Acier inoxydable 304 de qualité alimentaire",
    "Finition sans soudure pour un nettoyage hygiénique",
    "Parfait pour rosettes, fleurs et pochage de cupcakes"
  ],
};
