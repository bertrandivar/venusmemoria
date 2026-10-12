// Importation des produits de chaque catégorie
import { GLOVES_PRODUCTS } from "./products/gants";
import { ERASER_PRODUCTS } from "./products/gommes";
import { BRUSH_PRODUCTS } from "./products/pinceaux";
import { VASE_PRODUCTS } from "./products/vases";
import { outillageProducts } from "./products/outillage";
import { artCulinaireProducts } from "./products/artCulinaire";
import { SANDALS_PRODUCTS } from "./products/sandals";
import { HANDMADE_BAGS_PRODUCTS } from "./products/handmadeBags";
import { CRAYONS_PRODUCTS } from "./products/crayons";

// Structure d'une teinte (Shade) avec référence modèle
export interface LipShade {
  id: string;
  name: string;             // ex: "Ribbon", "Toast"
  hexColor: string;         // Code couleur pour la pastille (ex: "#E28B8C")
  shadeImage: string;       // Image du tube / produit dans cette teinte
  modelName?: string;       // Référence/Nom du modèle (ex: "Ref. M-01 - Ribbon Look")
  modelImage?: string;      // Image du rendu porté sur le modèle
  description?: string;     // Courte description du rendu
  inStock: boolean;
}

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
  preOrderPrice?: number;      // Prix réduit durant la précommande
  isPreOrder?: boolean;        // Active le mode précommande
  preOrderEndDate?: string;    // Date limite
  
  currency: string;
  images: string[];
  description: string;
  details?: string[];
  specs?: string[];
  stockQuantity: number;
  badge?: string;
  subcategory?: string;

  // Variantes / Teintes optionnelles
  shades?: LipShade[];
  selectedShade?: LipShade;   // Teinte sélectionnée lors de l'ajout au panier
}

export const SHOP_CATEGORIES = [
  { id: "all", label: "Tous nos articles", icon: "✨" },
  { id: "sandals", label: "Slippers & Sandals", icon: "👡" },
  { id: "bags", label: "Artisanal Handmade Bags", icon: "👜" },
  { id: "crayons", label: "Crayons & Fusains", icon: "✏️" },
  { id: "beaute", label: "Beauté & Make-up", icon: "💄" },
  { id: "cuisine", label: "Art Culinaire", icon: "🍳" },
  { id: "mode", label: "Mode & Design", icon: "✂️" },
  { id: "peinture", label: "Peintures", icon: "🎨" },
  { id: "gommes", label: "Gommes & Estompes", icon: "🧹" },
  { id: "pinceaux", label: "Pinceaux", icon: "🖌️" },
  { id: "vases", label: "Vases & Décoration", icon: "🏺" },
  { id: "gants", label: "Gants d'Artiste", icon: "🧤" },
  { id: "supports", label: "Supports", icon: "🖼️" },
  { id: "outillage", label: "Matériel & Outillage", icon: "🛠️" },
];

// Regroupement de tous les tableaux de produits
export const PRODUCTS: Product[] = [
  ...CRAYONS_PRODUCTS,
  ...SANDALS_PRODUCTS,
  ...HANDMADE_BAGS_PRODUCTS,
  ...GLOVES_PRODUCTS,
  ...BRUSH_PRODUCTS,
  ...VASE_PRODUCTS,
  ...ERASER_PRODUCTS,
  ...outillageProducts,
  ...artCulinaireProducts,
];
