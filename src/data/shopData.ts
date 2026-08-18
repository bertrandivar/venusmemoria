// 1. Import des images de gants depuis src/assets/Art Glove Two Finger/
import gloveF1 from "@/assets/Art Glove Two Finger/f1.webp";
import gloveF2 from "@/assets/Art Glove Two Finger/F2.webp";
import gloveF3 from "@/assets/Art Glove Two Finger/f3.webp";
import gloveF4 from "@/assets/Art Glove Two Finger/f4.webp";

export interface Product {
  id: string;
  name: string;
  category:
    | "crayons"
    | "pinceaux"
    | "peintures"
    | "gommes"
    | "vases"
    | "gants"
    | "decor"
    | "supports";
  price: number;
  currency: string;
  images: string[];
  description: string;
  details?: string[];
  specs?: string;
  stockQuantity: number;
  badge?: string;
}

export const SHOP_CATEGORIES = [
  { id: "all", label: "Tous nos articles", icon: "✨" },
  { id: "crayons", label: "Crayons & Fusains", icon: "✏️" },
  { id: "pinceaux", label: "Pinceaux & Brosses", icon: "🖌️" },
  { id: "peintures", label: "Peintures & Sprays", icon: "🎨" },
  { id: "gommes", label: "Gommes & Estompes", icon: "🧹" },
  { id: "vases", label: "Vases & Sculptures", icon: "🏺" },
  { id: "gants", label: "Gants d'Artiste", icon: "🧤" },
  { id: "decor", label: "Objets de Décoration", icon: "🖼️" },
  { id: "supports", label: "Chevalets & Accessoires", icon: "📐" },
];

export const PRODUCTS: Product[] = [
  {
    id: "set-pinceaux-gold",
    name: "Set Signature Pinceaux Fine Art",
    category: "pinceaux",
    price: 65000,
    currency: "BIF",
    images: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800",
    ],
    description: "Coffret de 8 pinceaux de haute précision pour peinture à l'huile et acrylique.",
    details: ["8 pinceaux de tailles variées", "Manche ergonomique en bois verni"],
    specs: "Poils synthétiques Fine Art",
    stockQuantity: 12;
    badge: "Populaire",
  },
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
   stockQuantity: 0,
    badge: "Populaire",
  },
  {
    id: "vase-sculptural-resine",
    name: "Vase Sculptural Résine & Éclats d'Or",
    category: "vases",
    price: 120000,
    currency: "BIF",
    images: [
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800",
    ],
    description: "Vase décoratif fait main à Bujumbura, pièce unique avec feuille d'or 24k incrustée.",
   stockQuantity: 12,
    badge: "Pièce Unique",
  },
];
