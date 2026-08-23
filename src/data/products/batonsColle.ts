import { Product } from "../shopData";

// Import des images depuis assets/Gluestick
import S1 from "@/assets/Gluestick/s1.webp";
import S2 from "@/assets/Gluestick/s2.webp";
import S3 from "@/assets/Gluestick/s3.webp";
import S4 from "@/assets/Gluestick/s4.webp";
import S5 from "@/assets/Gluestick/s5.webp";
import S6 from "@/assets/Gluestick/s6.webp";

export const batonsColleProduct: Product = {
  id: "batons-de-colle-thermofusible",
  name: "Bâtons de Colle Thermofusible Transparents",
  category: "outillage",
  price: 5000, // Ajustez le prix selon votre tarif
  currency: "BIF",
  description: "Recharges de bâtons de colle haute adhérence et séchage rapide. Compatibles avec tous les pistolets à colle standards pour les travaux manuels, l'encadrement et le bricolage d'art.",
  badge: "Essentiel",
  stockQuantity: 0,
  images: [S1, S2, S3, S4, S5, S6],
  details: [
    "Transparence haute clarté après séchage",
    "Forte adhérence sur bois, carton, tissu, plastique et céramique",
    "Séchage rapide et tenue durable",
    "Compatible avec pistolets 25W et plus"
  ],
};
