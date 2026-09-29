import { Product } from "../../shopData";

// Importation des images WebP
import Charcoal1 from "@/assets/charcoal/charcoal1.webp";
import Charcoal2 from "@/assets/charcoal/charcoal2.webp";
import Charcoal3 from "@/assets/charcoal/charcoal3.webp";

export const COMPRESSED_CHARCOAL_PRODUCT: Product = {
  id: "compressed-charcoal-xinbowen-6pcs",
  name: "Bâtons de Fusain Comprimé (Compressed Charcoal) - Set de 6",
  category: "crayons",
  price: 35000,
  preOrderPrice: 30000,
  isPreOrder: true,
  preOrderEndDate: "2026-10-10T23:59:59Z",
  currency: "BIF",
  badge: "Précommande",
  stockQuantity: 15,
  images: [
    Charcoal1,
    Charcoal2,
    Charcoal3
  ],
  description: "Fusains comprimés de haute qualité Xin Bowen (6 pièces). Assortiment idéal pour les artistes : 2 Hard, 2 Medium et 2 Soft pour des noirs intenses et des ombrages vifs.",
  details: [
    "Contient 6 bâtons carrés de fusain comprimé",
    "Graduations : 2x Soft, 2x Medium, 2x Hard",
    "Pigments carbonisés denses pour des tracés riches et homogènes",
    "Idéal pour l'esquisse, le portrait et les ombrages",
    "Livraison sous 1 à 2 semaines dès réception en boutique",
  ],
  specs: ["Set de 6 pièces", "2 Soft / 2 Medium / 2 Hard", "Marque Xin Bowen"],
};
