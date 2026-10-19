import { Product } from "../shopData";

// Importation des images depuis votre dossier assets
import RingPierreVerte from "@/assets/rings/ring-pierre-verte.webp";
import RingCoquillage from "@/assets/rings/ring-coquillage.webp";
import RingAnneauxMulti from "@/assets/rings/ring-anneaux-multi.webp";
import RingSpiraleMartelee from "@/assets/rings/ring-spirale-martelee.webp";
import RingPierreRose from "@/assets/rings/ring-pierre-rose.webp";
import RingArbreVie from "@/assets/rings/ring-arbre-vie.webp";
import RingSpiralesYeux from "@/assets/rings/ring-spirales-yeux.webp";
import RingAfrique from "@/assets/rings/ring-afrique.webp";

export const BRASS_RINGS_PRODUCTS: Product[] = [
  {
    id: "brass-ring-solitaire-pierre-verte",
    name: "Bague Laiton - Solitaire Pierre & Bille",
    category: "mode",
    price: 35000,
    currency: "BIF",
    stockQuantity: 5,
    images: [RingPierreVerte],
    description: "Bague ouverte artisanale en laiton ornée d'une grande pierre ronde translucide et d'une bille dorée.",
    details: [
      "Fait main en laiton pur",
      "Pierre ronde translucide au choix",
      "Taille ajustable",
    ],
    specs: ["Laiton pur", "Taille ajustable"],
    shades: [
      { id: "vert-eau", name: "Vert Eau Translucide", colorCode: "#70A389", inStock: true },
      { id: "ambre-miel", name: "Ambre Miel", colorCode: "#D4A359", inStock: true },
    ],
  },
  {
    id: "brass-ring-disque-coquillage",
    name: "Bague Laiton - Disque Texturé Coquillage",
    category: "mode",
    price: 35000,
    currency: "BIF",
    stockQuantity: 3,
    images: [RingCoquillage],
    description: "Grande bague disque solaire en laiton martelé apportant une touche imposante et élégante.",
    details: [
      "Finition martelée et brillante",
      "Design solaire imposant",
      "Anneau adaptable",
    ],
    specs: ["Laiton martelé", "Taille ajustable"],
  },
  {
    id: "brass-ring-orbite-multicouleurs",
    name: "Bague Laiton - Orbite Planétaire (Pierres Colorées)",
    category: "mode",
    price: 35000,
    currency: "BIF",
    stockQuantity: 8,
    images: [RingAnneauxMulti],
    description: "Bague géométrique à anneaux concentriques sertis de cabochons en pierre colorée.",
    details: [
      "Anneaux géométriques entrelacés",
      "Pierres aux nuances variées au choix",
      "Conception artisanale durable",
    ],
    specs: ["Laiton géométrique", "Taille ajustable"],
    shades: [
      { id: "bleu-pervenche", name: "Bleu Pervenche", colorCode: "#6C7AFA", inStock: true },
      { id: "vert-pomme", name: "Vert Pastel", colorCode: "#A3D977", inStock: true },
      { id: "ambre-jaune", name: "Jaune Ambré", colorCode: "#E6C229", inStock: true },
    ],
  },
  {
    id: "brass-ring-spirale-solaire",
    name: "Bague Laiton - Disque Spirale Solaire",
    category: "mode",
    price: 35000,
    currency: "BIF",
    stockQuantity: 6,
    images: [RingSpiraleMartelee],
    description: "Disque en laiton texturé gravé d'un motif de spirale mystique.",
    details: [
      "Motif spirale gravé au centre",
      "Texture alvéolée unique",
      "Confort de port au quotidien",
    ],
    specs: ["Laiton pur", "Taille ajustable"],
  },
  {
    id: "brass-ring-solitaire-rond",
    name: "Bague Laiton - Solitaire Miroir",
    category: "mode",
    price: 35000,
    currency: "BIF",
    stockQuantity: 10,
    images: [RingPierreRose],
    description: "Bague élégante arborant un cabochon rond miroitant aux reflets intenses.",
    details: [
      "Cabochon miroir au choix",
      "Sertissage circulaire en laiton",
      "Adaptable à tous les doigts",
    ],
    specs: ["Laiton pur", "Taille ajustable"],
    shades: [
      { id: "fuchsia", name: "Rose Fuchsia", colorCode: "#E6007E", inStock: true },
      { id: "vert-emeraude", name: "Vert Émeraude", colorCode: "#00A86B", inStock: true },
      { id: "orange-ambre", name: "Orange Solaire", colorCode: "#FF7F00", inStock: true },
      { id: "rouge-rubis", name: "Rouge Deep", colorCode: "#9B111E", inStock: true },
    ],
  },
  {
    id: "brass-ring-arbre-de-vie",
    name: "Bague Laiton - L'Arbre de Vie Sacré",
    category: "mode",
    price: 35000,
    currency: "BIF",
    stockQuantity: 5,
    images: [RingArbreVie],
    description: "Bague disque gravée avec minutie représentant l'Arbre de Vie symbolique.",
    details: [
      "Gravure détaillée des branches et racines",
      "Finition dorée texturée",
      "Symbole de force et de connexion",
    ],
    specs: ["Laiton sculpté", "Taille ajustable"],
  },
  {
    id: "brass-ring-double-spirale-bleue",
    name: "Bague Laiton - Doubles Spirales & Pierres Ovale",
    category: "mode",
    price: 35000,
    currency: "BIF",
    stockQuantity: 6,
    images: [RingSpiralesYeux],
    description: "Double bague en volute ornée de pierres étincelantes aux extrémités.",
    details: [
      "Design en deux spirales élégantes",
      "Pierres lumineuses au choix",
      "S'ajuste facilement à la phalange",
    ],
    specs: ["Laiton pur", "Taille ajustable"],
    shades: [
      { id: "bleu-azur", name: "Bleu Azur", colorCode: "#00A8E8", inStock: true },
      { id: "bleu-turquoise", name: "Bleu Turquoise", colorCode: "#48CAE4", inStock: true },
    ],
  },
  {
    id: "brass-ring-carte-afrique",
    name: "Bague Laiton - Carte de l'Afrique",
    category: "mode",
    price: 35000,
    currency: "BIF",
    stockQuantity: 4,
    images: [RingAfrique],
    description: "Bague affirmée reprenant les contours de la carte du continent africain en laiton martelé.",
    details: [
      "Silhouette précise du continent africain",
      "Surface texturée artisanale",
      "Pièce forte et symbolique",
    ],
    specs: ["Laiton pur", "Taille ajustable"],
  },
];
