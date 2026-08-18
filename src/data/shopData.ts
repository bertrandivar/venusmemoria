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
  stock: boolean;
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
    stock: true,
    badge: "Populaire",
  },
  {
    id: "gant-dessin-digital",
    name: "Gant d'Artiste 2 Doigts (Anti-Frottement)",
    category: "gants",
    price: 15000,
    currency: "BIF",
    images: [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800",
    ],
    description: "Gant confortable empêchant les traces de paume lors du dessin sur papier ou tablette graphique.",
    details: ["Matière Lycra respirante", "Taille adaptable (Main gauche ou droite)"],
    stock: true,
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
    stock: true,
    badge: "Pièce Unique",
  },
];
