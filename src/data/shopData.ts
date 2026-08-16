export interface Product {
  id: string;
  name: string;
  category: "outils" | "decor" | "kits";
  price: number; // Prix en BIF ou USD (ex: BIF)
  currency: string;
  image: string;
  description: string;
  badge?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "pinceaux-prestige",
    name: "Set de Pinceaux Fine Art Gold Edition",
    category: "outils",
    price: 45000,
    currency: "BIF",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
    description: "Ensemble de pinceaux de précision à poils synthétiques haut de gamme pour peinture à l'huile et acrylique.",
    badge: "Incontournable",
  },
  {
    id: "vase-resine-dore",
    name: "Vase Sculptural Résine & Éclats d'Or",
    category: "decor",
    price: 120000,
    currency: "BIF",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800",
    description: "Pièce maîtresse unique faite main en résine époxy transparente avec feuilles d'or 24k incrustées.",
    badge: "Pièce Unique",
  },
  {
    id: "crayons-graphite-boite",
    name: "Coffret de Crayons Graphite & Fusain",
    category: "outils",
    price: 35000,
    currency: "BIF",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800",
    description: "Sélection complète de gradations pour les croquis et portraits Fine Art.",
  },
  {
    id: "vase-minimaliste-ceramique",
    name: "Vase Décoratif Soliflore Nude",
    category: "decor",
    price: 85000,
    currency: "BIF",
    image: "https://images.unsplash.com/photo-1612196808214-b7e239e5f6b7?q=80&w=800",
    description: "Vase en céramique mate aux formes organiques, pensé pour magnifier vos espaces.",
  },
];
