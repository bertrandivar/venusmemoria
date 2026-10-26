import { Product } from "../shopData";

// 1. Image principale du produit catalogue (Rhode global)
// Si vous avez un fichier rhode-main.webp, décommentez la ligne ci-dessous :
// import RhodeMain from "@/assets/rhode/rhode-main.webp";

// 2. Importation des teintes disponibles dans le dossier GitHub
// --- Bubblegum ---
import BubblegumProduct from "@/assets/rhode/Bubblegum-product.webp";
import BubblegumModel from "@/assets/rhode/bubblegum-model.webp";

// --- Cinnamon (2 Modèles) ---
import CinnamonProduct from "@/assets/rhode/cinnamon-product.webp";
import CinnamonModel from "@/assets/rhode/cinnamon-model.webp";
import CinnamonModel1 from "@/assets/rhode/cinnamon1-model.webp";

// --- Espresso (Product + 2 Modèles) ---
import EspressoProduct from "@/assets/rhode/espresso-product.webp";
import EspressoModel from "@/assets/rhode/espresso-model.webp";
import EspressoModel1 from "@/assets/rhode/espresso1-model.webp";

// --- Lemon Tint ---
import LemonProduct from "@/assets/rhode/lemon-product.webp";
import LemonModel from "@/assets/rhode/lemon-model.webp";

// --- Raspberry ---
import RaspberryProduct from "@/assets/rhode/raspberry-product.webp";
// import RaspberryModel from "@/assets/rhode/raspberry-model.webp";

// --- Ribbon ---
import RibbonProduct from "@/assets/rhode/ribbon-product.webp";
import RibbonModel from "@/assets/rhode/ribbon-model.webp";

// --- Salty Rose (À importer ultérieurement) ---
// import SaltyRoseProduct from "@/assets/rhode/salty-rose-product.webp";
// import SaltyRoseModel from "@/assets/rhode/salty-rose-model.webp";

// --- Toast (À importer ultérieurement) ---
// import ToastProduct from "@/assets/rhode/toast-product.webp";
// import ToastModel from "@/assets/rhode/toast-model.webp";

// --- PBJ (À importer ultérieurement) ---
// import PBJProduct from "@/assets/rhode/pbj-product.webp";
// import PBJModel from "@/assets/rhode/pbj-model.webp";

export const RHODE_LIP_GLOSS_PRODUCT: Product = {
  id: "rhode-peptide-lip-tint",
  name: "Rhode - Peptide Lip Tint",
  category: "beaute",
  price: 35000,
  currency: "BIF",
  stockQuantity: 0, // Total global des pièces disponibles
  images: [EspressoProduct, EspressoModel, EspressoModel1], // Galerie grand format par défaut
  description:
    "Un soin pour les lèvres teinté, ultra-nourrissant enrichi en peptides. Apporte une couleur gourmande, une brillance miroir et une hydratation intense.\n\n*Note : Les visuels d'illustration des teintes et modèles sont la propriété exclusive de Rhode Skin par Hailey Bieber et sont utilisés uniquement à des fins de démonstration du rendu sur différentes carnations.*",
  details: [
    "Formule enrichie en beurre de karité et peptides",
    "Finition brillante sans collant",
    "Nourrit et repulpe les lèvres desséchées",
    "Sans parfum, formule vegan et cruelty-free",
  ],
  specs: [
    "10ml / 0.3 fl oz",
    "Rhode Skin by Hailey Bieber",
    "Visuels d'illustration non contractuels (droits réservés à Rhode Skin)",
  ],

  // Configuration de la collection de teintes (Shades) avec stock individuel
  shades: [
    {
      id: "espresso",
      name: "Espresso ☕",
      hexColor: "#5C3A31",
      shadeImage: EspressoProduct,
      modelName: "Rendu selon la carnation",
      modelImage: EspressoModel,
      modelImages: [EspressoModel, EspressoModel1],
      images: [EspressoProduct, EspressoModel, EspressoModel1],
      description: "Brun chocolat intense et sophistiqué",
      inStock: false,
      stockQuantity: 0, // Quantité spécifique pour Espresso
    },
    {
      id: "cinnamon",
      name: "Cinnamon 🌶️",
      hexColor: "#B5432A",
      modelName: "Rendu selon la carnation",
      modelImage: CinnamonModel,
      modelImages: [CinnamonModel, CinnamonModel1],
      images: [CinnamonModel, CinnamonModel1],
      description: "Épice cannelle chaude avec reflets cuivrés",
      inStock: false,
      stockQuantity: 0, // Quantité spécifique pour Cinnamon
    },
    {
      id: "bubblegum",
      name: "Bubblegum 🍬",
      hexColor: "#FF85A1",
      shadeImage: BubblegumProduct,
      modelName: "Rendu du Modèle",
      modelImage: BubblegumModel,
      images: [BubblegumProduct, BubblegumModel],
      description: "Rose bonbon gourmand et lumineux",
      inStock: false,
      stockQuantity: 0, // Quantité spécifique pour Bubblegum
    },
    {
      id: "ribbon",
      name: "Ribbon 🎀",
      hexColor: "#E28B8C",
      shadeImage: RibbonProduct,
      modelName: "Rendu du Modèle",
      modelImage: RibbonModel,
      images: [RibbonProduct, RibbonModel],
      description: "Rose ballerine transparent et délicat",
      inStock: false,
      stockQuantity: 0, // Quantité spécifique pour Ribbon
    },
    {
      id: "lemon-tint",
      name: "Lemon Tint 🍋",
      hexColor: "#F7D070",
      shadeImage: LemonProduct,
      modelName: "Rendu du Modèle",
      modelImage: LemonModel,
      images: [LemonProduct, LemonModel],
      description: "Teinte zeste de citron subtile et ultra-brillante",
      inStock: false,
      stockQuantity: 0, // Quantité spécifique pour Lemon Tint
    },
    {
      id: "raspberry-jelly",
      name: "Raspberry Jelly 🍇",
      hexColor: "#8D2B43",
      shadeImage: RaspberryProduct,
      modelName: "Rendu du Modèle",
      images: [RaspberryProduct],
      description: "Rouge baie profond et juteux",
      inStock: false,
      stockQuantity: 0, // Quantité spécifique pour Raspberry Jelly
    },
    {
      id: "salty-rose",
      name: "Salty Rose 🌹",
      hexColor: "#D66874",
      description: "Rose pétale élégant aux reflets naturels",
      inStock: false,
      stockQuantity: 0, // Indisponible
    },
    {
      id: "toast",
      name: "Toast 🍞",
      hexColor: "#A66E5B",
      description: "Nude taupe chaud, effet lèvres mordues",
      inStock: false,
      stockQuantity: 0, // Indisponible
    },
    {
      id: "pbj",
      name: "PBJ 🥜",
      hexColor: "#9C523B",
      description: "Nude praliné chaleureux et profond",
      inStock: false,
      stockQuantity: 0, // Indisponible
    },
  ],
};
