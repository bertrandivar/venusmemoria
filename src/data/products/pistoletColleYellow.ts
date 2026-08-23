import { Product } from "../shopData";

// Importez vos images (ajustez le chemin selon l'emplacement de gg1.webp)
import GG1 from "@/assets/yellowgg/gg1.webp";
import GG2 from "@/assets/yellowgg/gg2.webp";
import GG3 from "@/assets/yellowgg/gg3.webp";
import GG4 from "@/assets/yellowgg/gg4.webp";
import GG5 from "@/assets/yellowgg/gg5.webp";
import GG6 from "@/assets/yellowgg/gg6.webp";

export const pistoletColleYellow: Product = {
  id: "pistolet-a-colle",
  name: "Pistolet à Colle Chaude Professionnel",
  category: "outillage",
  price: 18000, // Ajustez le prix selon votre tarif
  currency: "BIF",
  description: "Pistolet à colle thermofusible 25W rapide et précis. Idéal pour les travaux de création, le collage de précision sur bois, tissu, plastique, verre et le bricolage d'art.",
  badge: "Indispensable",
  stockQuantity: 0,
  images: [GG1, GG2, GG3, GG4, GG5, GG6],
  details: [
    "Puissance : 25W pour une montée en température rapide",
    "Bouton marche/arrêt intégré pour plus de sécurité",
    "Inclus : 2 bâtons de colle offerts",
    "Boîtier isolé et embout haute précision",
    "Marque : Dingqi (Art. 124025)"
  ],
};
