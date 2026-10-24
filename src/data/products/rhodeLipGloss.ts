import { Product } from "../shopData";

// 1. Image principale du produit catalogue (Rhode global)
import RhodeMain from "@/assets/rhode/rhode-main.webp";

// 2. Importation des teintes (Format WebP)
// --- Raspberry ---
import RaspberryProduct from "@/assets/rhode/raspberry-product.webp";
import RaspberryModel from "@/assets/rhode/raspberry-model.webp";

// --- Bubblegum ---
import BubblegumProduct from "@/assets/rhode/bubblegum-product.webp";
import BubblegumModel from "@/assets/rhode/bubblegum-model.webp";

// --- Ribbon ---
import RibbonProduct from "@/assets/rhode/ribbon-product.webp";
import RibbonModel from "@/assets/rhode/ribbon-model.webp";

// --- Salty Rose ---
import SaltyRoseProduct from "@/assets/rhode/salty-rose-product.webp";
import SaltyRoseModel from "@/assets/rhode/salty-rose-model.webp";

// --- Toast ---
import ToastProduct from "@/assets/rhode/toast-product.webp";
import ToastModel from "@/assets/rhode/toast-model.webp";

// --- PBJ ---
import PBJProduct from "@/assets/rhode/pbj-product.webp";
import PBJModel from "@/assets/rhode/pbj-model.webp";

// --- Espresso ---
import EspressoProduct from "@/assets/rhode/espresso-product.webp";
import EspressoModel from "@/assets/rhode/espresso-model.webp";

// --- Lemon Tint ---
import LemonProduct from "@/assets/rhode/lemon-product.webp";
import LemonModel from "@/assets/rhode/lemon-model.webp";

// --- Cinnamon ---
import CinnamonProduct from "@/assets/rhode/cinnamon-product.webp";
import CinnamonModel from "@/assets/rhode/cinnamon-model.webp";

export const RHODE_LIP_GLOSS_PRODUCT: Product = {
  id: "rhode-peptide-lip-tint",
  name: "Rhode - Peptide Lip Tint",
  category: "beaute",
  price: 45000,
  currency: "BIF",
  stockQuantity: 20,
  images: [RhodeMain],
  description:
    "Un soin pour les lèvres teinté, ultra-nourrissant enrichi en peptides. Apporte une couleur gourmande, une brillance miroir et une hydratation intense.",
  details: [
    "Formule enrichie en beurre de karité et peptides",
    "Finition brillante sans collant",
    "Nourrit et repulpe les lèvres desséchées",
    "Sans parfum, formule vegan et cruelty-free",
  ],
  specs: ["10ml / 0.3 fl oz", "Rhode Skin by Hailey Bieber"],

  // Configuration de la collection de teintes (Shades)
  shades: [
    {
      id: "raspberry-jelly",
      name: "Raspberry Jelly 🍇",
      hexColor: "#8D2B43",
      shadeImage: RaspberryProduct,
      modelName: "Porté par le Modèle",
      modelImage: RaspberryModel,
      description: "Rouge baie profond et juteux",
      inStock: true,
    },
    {
      id: "bubblegum",
      name: "Bubblegum 🍬",
      hexColor: "#FF85A1",
      shadeImage: BubblegumProduct,
      modelName: "Porté par le Modèle",
      modelImage: BubblegumModel,
      description: "Rose bonbon gourmand et lumineux",
      inStock: true,
    },
    {
      id: "ribbon",
      name: "Ribbon 🎀",
      hexColor: "#E28B8C",
      shadeImage: RibbonProduct,
      modelName: "Porté par le Modèle",
      modelImage: RibbonModel,
      description: "Rose ballerine transparent et délicat",
      inStock: true,
    },
    {
      id: "salty-rose",
      name: "Salty Rose 🌹",
      hexColor: "#D66874",
      shadeImage: SaltyRoseProduct,
      modelName: "Porté par le Modèle",
      modelImage: SaltyRoseModel,
      description: "Rose pétale élégant aux reflets naturels",
      inStock: true,
    },
    {
      id: "toast",
      name: "Toast 🍞",
      hexColor: "#A66E5B",
      shadeImage: ToastProduct,
      modelName: "Porté par le Modèle",
      modelImage: ToastModel,
      description: "Nude taupe chaud, effet lèvres mordues",
      inStock: true,
    },
    {
      id: "pbj",
      name: "PBJ 🥜",
      hexColor: "#9C523B",
      shadeImage: PBJProduct,
      modelName: "Porté par le Modèle",
      modelImage: PBJModel,
      description: "Nude praliné chaleureux et profond",
      inStock: true,
    },
    {
      id: "espresso",
      name: "Espresso ☕",
      hexColor: "#5C3A31",
      shadeImage: EspressoProduct,
      modelName: "Porté par le Modèle",
      modelImage: EspressoModel,
      description: "Brun chocolat intense et sophistiqué",
      inStock: true,
    },
    {
      id: "lemon-tint",
      name: "Lemon Tint 🍋",
      hexColor: "#F7D070",
      shadeImage: LemonProduct,
      modelName: "Porté par le Modèle",
      modelImage: LemonModel,
      description: "Teinte zeste de citron subtile et ultra-brillante",
      inStock: true,
    },
    {
      id: "cinnamon",
      name: "Cinnamon 🌶️",
      hexColor: "#B5432A",
      shadeImage: CinnamonProduct,
      modelName: "Porté par le Modèle",
      modelImage: CinnamonModel,
      description: "Épice cannelle chaude avec reflets cuivrés",
      inStock: true,
    },
  ],
};
