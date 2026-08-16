export interface Product {
  id: string;
  name: string;
  category: "pinceaux" | "crayons" | "vases" | "supports";
  subcategory?: string;
  price: number;
  currency: string;
  image: string;
  description: string;
  specs?: string; // Ex: "Taille n°2 • Poils synthétiques extra-fins"
  badge?: string;
}

export const SHOP_CATEGORIES = [
  { id: "pinceaux", label: "Pinceaux & Brosses", description: "Pinceaux de précision, brosses à lavis et éventails pour l'huile et l'acrylique." },
  { id: "crayons", label: "Crayons & Fusains", description: "Crayons graphite, fusains compressés et sanguines de haute qualité." },
  { id: "vases", label: "Vases & Décor d'Art", description: "Pièces uniques sculptées en résine cristal et céramique faite main." },
  { id: "supports", label: "Chevalets & Accessoires", description: "Supports de travail, palettes en bois noble et accessoires d'atelier." },
];

export const PRODUCTS: Product[] = [
  // --- PINCEAUX ---
  {
    id: "pinceau-precision-00",
    name: "Pinceau de Précision Micro-Détail (N° 00)",
    category: "pinceaux",
    subcategory: "Pinceaux de Précision",
    price: 8000,
    currency: "BIF",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
    description: "Pinceau ultra-fin idéal pour la réalisation des détails minutieux sur portraits et miniatures.",
    specs: "Taille N° 00 • Fibre Synthétique Haute Densité",
  },
  {
    id: "pinceau-precision-2",
    name: "Pinceau Rond Fine Art (N° 2)",
    category: "pinceaux",
    subcategory: "Pinceaux de Précision",
    price: 12000,
    currency: "BIF",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
    description: "Pinceau polyvalent pour les contours et le remplissage fin.",
    specs: "Taille N° 2 • Manche ergonomique en bois verni",
  },
  {
    id: "set-pinceaux-gold",
    name: "Coffret Signature Gold Edition (Set de 8)",
    category: "pinceaux",
    subcategory: "Coffrets & Sets",
    price: 65000,
    currency: "BIF",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
    description: "Gamme complète comprenant brosses plates, pinceaux ronds et éventails dans un étui de protection.",
    specs: "8 Pinceaux d'Atelier • Étui inclus",
    badge: "Recommandé",
  },

  // --- CRAYONS ---
  {
    id: "crayon-graphite-2b",
    name: "Crayon Graphite Extra-Tendre 2B",
    category: "crayons",
    subcategory: "Crayons d'Art",
    price: 3500,
    currency: "BIF",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800",
    description: "Mine fluide permettant des ombrages riches et profonds.",
    specs: "Gradation 2B",
  },
  {
    id: "coffret-fusains-pro",
    name: "Coffret Fusains & Sanguines d'Atelier (12 Pièces)",
    category: "crayons",
    subcategory: "Coffrets & Sets",
    price: 32000,
    currency: "BIF",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800",
    description: "Assortiment complet de batons de fusain naturel et crayons de croquis.",
    specs: "12 Pièces • Boîte métallique",
  },

  // --- VASES & DÉCOR ---
  {
    id: "vase-resine-dore",
    name: "Vase Sculptural Résine & Éclats d'Or",
    category: "vases",
    subcategory: "Créations Résine",
    price: 120000,
    currency: "BIF",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800",
    description: "Pièce maîtresse unique faite hand en résine cristal avec feuilles d'or 24k incrustées.",
    specs: "Hauteur 28 cm • Pièce Unique",
    badge: "Pièce Unique",
  },
];
