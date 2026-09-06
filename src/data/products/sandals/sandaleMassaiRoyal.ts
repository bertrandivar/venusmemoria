import { Product } from "../../shopData";

// Import de l'image
import S1 from "@/assets/sandals/massai1.jfif";

export const sandaleMassaiRoyalProduct: Product = {
  id: "sandale-massai-royal",
  name: "Sandale Massai Kenya Motif Royal",
  category: "sandals",
  price: 35000,
  currency: "BIF",
  description: "Sandales artisanales Massai authentiques venues du Kenya, confectionnées avec des perles fines aux motifs traditionnels.",
  badge: "Kenya Art",
  stockQuantity: 5,
  images: [S1],
  details: [
    "Fait main au Kenya par des artisanes Massai",
    "Perles traditionnelles enfilées à la main",
    "Cuir naturel durable et souple",
    "Disponible du 37 au 41",
  ],
  specs: ["Cuir naturel & Perles artisanales"],
};
