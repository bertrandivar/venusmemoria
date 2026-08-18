// Importation des produits de chaque catégorie
import { GLOVES_PRODUCTS } from "./products/gants";
import { BRUSH_PRODUCTS } from "./products/pinceaux";
import { VASE_PRODUCTS } from "./products/vases";

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

// Regroupement de tous les tableaux de produits
export const PRODUCTS: Product[] = [
  ...GLOVES_PRODUCTS,
  ...BRUSH_PRODUCTS,
  ...VASE_PRODUCTS,
];
