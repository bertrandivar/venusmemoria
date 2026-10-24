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
import { RHODE_LIP_GLOSS_PRODUCT } from "./products/rhodeLipGloss";
import { FIXATIVE_SPRAY_PRODUCT } from "./products/fixativeSpray";
import { BRASS_RINGS_PRODUCTS } from "./products/brassRings";

// Structure d'une teinte (Shade) avec références modèles & carrousel d'images
export interface LipShade {
  id: string;
  name: string;             // ex: "Espresso ☕", "Ribbon 🎀"
  hexColor?: string;        // Code couleur pour la pastille (ex: "#E28B8C")
  colorCode?: string;       // Code couleur alternatif pour les bijoux/pierres
  shadeImage?: string;      // Image du tube / produit dans cette teinte
  images?: string[];        // Galerie d'images grand format (Tube + Modèles)
  modelName?: string;       // Référence/Nom du modèle (ex: "Porté selon la carnation")
  modelImage?: string;      // Image principale du rendu sur modèle
  modelImages?: string[];   // Liste des images modèles si plusieurs carnations (ex: foncée & claire)
  description?: string;     // Courte description du rendu
  inStock: boolean;
  stockQuantity?: number;   // Quantité exacte disponible pour cette teinte spécifique
}

// Structure d'une déclinaison de contenance / volume
export interface VolumeOption {
  id: string;
  label: string;            // ex: "50ml", "180ml", "300ml"
  price: number;            // Prix selon la contenance
  inStock: boolean;         // Statut du stock pour ce volume
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
    | "bags"
    | "rings";
  
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

  // Variantes de Contenance / Volume
  volumeOptions?: VolumeOption[];
  selectedVolume?: VolumeOption; // Volume sélectionné lors de l'ajout au panier
}

export const SHOP_CATEGORIES = [
  { id: "all", label: "Tous nos articles", icon: "✨" },
  { id: "rings", label: "Bagues & Bijoux", icon: "💍" },
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
  RHODE_LIP_GLOSS_PRODUCT,
  FIXATIVE_SPRAY_PRODUCT,
  ...BRASS_RINGS_PRODUCTS,
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
