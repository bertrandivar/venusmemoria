import { Product } from "../shopData";

// Import des images depuis assets/BP/
import P1 from "@/assets/BP/p1.webp";
import P2 from "@/assets/BP/p2.webp";
import P3 from "@/assets/BP/p3.webp";
import P4 from "@/assets/BP/p4.webp";
import P5 from "@/assets/BP/p5.webp";

export const pinceauxFinsBleusProduct: Product = {
  id: "set-pinceaux-finesse-bleus",
  name: "Set de Pinceaux de Précision & Détails (Bleu Metallic)",
  category: "pinceaux",
  price: 0, // Ajustez le prix selon vos besoins
  currency: "BIF",
  description: "Set de pinceaux extra-fins conçus pour les travaux de haute précision, le miniature, la calligraphie, les détails en peinture acrylique/huile et le nail art.",
  badge: "Précision",
  stockQuantity: 10,
  images: [P1, P2, P3, P4, P5],
  details: [
    "Pointe ultra-fine pour lignes nettes et détails minutieux",
    "Manche ergonomique bleu métallique pour une excellente prise en main",
    "Poils synthétiques de haute qualité résistant à la déformation",
    "Ideal pour acrylique, gouache, aquarelle et finitions"
  ],
};
