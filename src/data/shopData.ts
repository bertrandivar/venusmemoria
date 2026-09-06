// Importation des produits de chaque catégorie
import { GLOVES_PRODUCTS } from "./products/gants";
import { ERASER_PRODUCTS } from "./products/gommes";
import { BRUSH_PRODUCTS } from "./products/pinceaux";
import { VASE_PRODUCTS } from "./products/vases";
import { outillageProducts } from "./products/outillage";
import { artCulinaireProducts } from "./products/artCulinaire";
import { SANDALS_PRODUCTS } from "./products/sandals";
import { HANDMADE_BAGS_PRODUCTS } from "./products/handmadeBags";

export interface Product {
  id: string;
  name: string;
  category: 
    | "beaute"
    | "cuisine"
    | "mode"
    | "peinture"
    | "crayons"
    | "pinceaux"
    | "gommes"
    | "vases"
    | "gants"
    | "decor"
    | "supports"
    | "outillage"
    | "sandals"
    | "bags";
  
  price: number;
  currency: string;
  images: string[];
  description: string;
  details?: string[];
  specs?: string[];
  stockQuantity: number;
  badge?: string;
  subcategory?: string;
}

export const SHOP_CATEGORIES = [
  { id: "all", label: "Tous nos articles", icon: "✨" },
  { id: "sandals", label: "Slippers & Sandals", icon: "👡" },
  { id: "bags", label: "Artisanal Handmade Bags", icon: "👜" },
  { id: "beaute", label: "Beauté & Make-up", icon: "💄" },
  { id: "cuisine", label: "Art Culinaire", icon: "🍳" },
  { id: "mode", label: "Mode & Design", icon: "✂️" },
  { id: "peinture", label: "Peintures", icon: "🎨" },
  { id: "gommes", label: "Gommes & Estompes", icon: "🧹" },
  { id: "crayons", label: "Crayons", icon: "✏️" },
  { id: "pinceaux", label: "Pinceaux", icon: "🖌️" },
  { id: "vases", label: "Vases & Décoration", icon: "🏺" },
  { id: "gants", label: "Gants d'Artiste", icon: "🧤" },
  { id: "supports", label: "Supports", icon: "🖼️" },
  { id: "outillage", label: "Matériel & Outillage", icon: "🛠️" },
];

// Regroupement de tous les tableaux de produits
export const PRODUCTS: Product[] = [
  ...SANDALS_PRODUCTS,
  ...HANDMADE_BAGS_PRODUCTS,
  ...GLOVES_PRODUCTS,
  ...BRUSH_PRODUCTS,
  ...VASE_PRODUCTS,
  ...ERASER_PRODUCTS,
  ...outillageProducts,
  ...artCulinaireProducts,
];
