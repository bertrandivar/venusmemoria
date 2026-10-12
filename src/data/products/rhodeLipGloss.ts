import { Product } from "../shopData";

// Note: Importez ici vos images WebP quand vous les aurez placées dans votre dossier assets
// import RhodeMain from "@/assets/rhode/rhode-main.webp";
// import RibbonShade from "@/assets/rhode/ribbon.webp";
// import RibbonModel from "@/assets/rhode/ribbon-model.webp";

export const RHODE_LIP_GLOSS_PRODUCT: Product = {
  id: "rhode-peptide-lip-tint",
  name: "Rhode - Peptide Lip Tint",
  category: "beaute",
  price: 45000,
  currency: "BIF",
  stockQuantity: 20,
  images: [
    "/assets/rhode/rhode-main.webp",
  ],
  description: "Un soin pour les lèvres teinté, ultra-nourrissant enrichi en peptides. Apporte une couleur gourmande, une brillance miroir et une hydratation intense.",
  details: [
    "Formule enrichie en beurre de karité et peptides",
    "Finition brillante sans collant",
    "Nourrit et repulpe les lèvres desséchées",
    "Sans parfum, formule vegan et cruelty-free",
  ],
  specs: ["10ml / 0.3 fl oz", "Rhode Skin by Hailey Bieber"],

  // Configuration des teintes et références modèles
  shades: [
    {
      id: "ribbon",
      name: "Ribbon",
      hexColor: "#E28B8C",
      shadeImage: "/assets/rhode/ribbon.webp",
      modelName: "Ref. M-01 (Ribbon Look)",
      modelImage: "/assets/rhode/ribbon-model.webp",
      description: "Rose ballerine transparent et gourmand",
      inStock: true,
    },
    {
      id: "toast",
      name: "Toast",
      hexColor: "#A66E5B",
      shadeImage: "/assets/rhode/toast.webp",
      modelName: "Ref. M-02 (Toast Nude)",
      modelImage: "/assets/rhode/toast-model.webp",
      description: "Nude taupe chaud, effet lèvres mordu",
      inStock: true,
    },
    {
      id: "raspberry-jelly",
      name: "Raspberry Jelly",
      hexColor: "#8D2B43",
      shadeImage: "/assets/rhode/raspberry.webp",
      modelName: "Ref. M-03 (Berry Glow)",
      modelImage: "/assets/rhode/raspberry-model.webp",
      description: "Rouge baie profond et juteux",
      inStock: true,
    },
    {
      id: "espresso",
      name: "Espresso",
      hexColor: "#5C3A31",
      shadeImage: "/assets/rhode/espresso.webp",
      modelName: "Ref. M-04 (Rich Cocoa)",
      modelImage: "/assets/rhode/espresso-model.webp",
      description: "Brun chocolat intense et élégant",
      inStock: false,
    },
  ],
};
