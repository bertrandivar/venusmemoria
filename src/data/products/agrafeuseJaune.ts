import { Product } from "../shopData";

// Import des images de l'outil
import J1 from "@/assets/yellowgun/j1.webp";
import J2 from "@/assets/yellowgun/j2.webp";
import J3 from "@/assets/yellowgun/j3.webp";
import J4 from "@/assets/yellowgun/j4.webp";
import J5 from "@/assets/yellowgun/j5.webp";

export const agrafeuseJauneProduct: Product = {
  id: "agrafeuse-murale-jaune",
  name: "Agrafeuse Murale Ergonomique (Jaune)",
  category: "outillage",
  price: 35000, // Ajustez le prix
  currency: "BIF",
  description: "Agrafeuse manuelle avec finition haute visibilité jaune, parfaite pour l'atelier, la tension de toile et le bricolage d'art.",
  badge: "Nouveau",
  stockQuantity: 0,
  images: [J1, J2, J3, J4, J5
  ],
  specifications: [
    "Finition jaune haute visibilité",
    "Poignée ergonomique confort",
    "Système anti-enrayement",
    "Compatible agrafes standards pour châssis",
  ],
};
