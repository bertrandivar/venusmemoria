export interface Product {
  id: string;
  name: string;
  category: "pencils" | "erasers" | "brushes" | "vases" | "decor";
  price: number;
  currency: string;
  images: string[]; // 3 à 5 images par produit
  description: string;
  details: string[];
  specs?: string;
  stock: boolean;
  badge?: string;
}

export const SHOP_CATEGORIES = [
  { id: "all", label: "Tous les Articles", icon: "✨" },
  { id: "brushes", label: "Pinceaux & Brosses", icon: "🖌️" },
  { id: "pencils", label: "Crayons & Fusains", icon: "✏️" },
  { id: "erasers", label: "Gommes & Estompes", icon: "🧹" },
  { id: "vases", label: "Vases d'Art", icon: "🏺" },
  { id: "decor", label: "Objets de Décoration", icon: "🖼️" },
];

export const PRODUCTS: Product[] = [
  {
    id: "set-pinceaux-gold",
    name: "Set Signature Pinceaux Fine Art (Gold Edition)",
    category: "brushes",
    price: 65000,
    currency: "BIF",
    images: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800",
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800",
    ],
    description: "Conçu aussi bien pour les artistes chevronnés que pour les passionnés d'art exigeants. Ce coffret réunit la précision du geste et la noblesse des poils synthétiques de qualité supérieure.",
    details: [
      "8 pinceaux de tailles variées (Ronds, Plates, Éventail)",
      "Manche en bois d'ébène avec virole dorée",
      "Résistance exceptionnelle aux solvants",
      "Livré dans son étui de rangement en velours noir"
    ],
    specs: "Poils synthétiques Fine Art • Virolles laiton doré",
    stock: true,
    badge: "Incontournable",
  },
  {
    id: "vase-resine-dore",
    name: "Vase Sculptural Résine & Éclats d'Or",
    category: "vases",
    price: 120000,
    currency: "BIF",
    images: [
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800",
      "https://images.unsplash.com/photo-1612196808214-b7e239e5f6b7?q=80&w=800",
      "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?q=80&w=800",
    ],
    description: "Une œuvre d'art fonctionnelle qui capte la lumière. Façonné à la main dans notre atelier de Bujumbura, chaque vase présente une disposition unique d'éclats d'or.",
    details: [
      "Résine cristal ultra-transparente anti-jaunissement",
      "Inclusions de feuilles d'or 24 carats",
      "Finition polie à la main à l'atelier",
      "Pièce unique numérotée"
    ],
    specs: "Hauteur: 28 cm • Poids: 1.4 kg",
    stock: true,
    badge: "Pièce Unique",
  },
  {
    id: "crayons-graphite-boite",
    name: "Coffret Crayons Graphite & Fusains de Précision",
    category: "pencils",
    price: 35000,
    currency: "BIF",
    images: [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
    ],
    description: "Sélection complète pour réaliser des croquis, ombrages profonds et portraits hyperréalistes.",
    details: [
      "Gradations de 2B à 9B + Fusains naturels",
      "Mines hautement résistantes à la casse",
      "Bois de cèdre certifié"
    ],
    specs: "Coffret métallique de 12 pièces",
    stock: true,
  },
];
