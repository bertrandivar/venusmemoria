import { Product } from "../shopData";

export const SANDALS_PRODUCTS: Product[] = [
  {
    id: "sandale-massai-01",
    name: "Sandale Massai Kenya Motif Royal",
    category: "mode",
    price: 35000,
    currency: "BIF",
    images: [
      "/assets/sandals/massai-1.jpg",
      "/assets/sandals/massai-1-detail.jpg"
    ],
    description: "Sandales artisanales Massai authentiques venues du Kenya, confectionnées avec des perles fines aux motifs traditionnels.",
    details: [
      "Fait main au Kenya",
      "Perles Massai tressées sur cuir naturel",
      "Semelle résistante et confortable",
      "Disponible en plusieurs pointures"
    ],
    specs: "Cuir & Perles artisanales - Made in Kenya",
    stockQuantity: 5,
    badge: "Kenya Art"
  },
  {
    id: "sandale-kitenge-01",
    name: "Sandale Kitenge Safari",
    category: "mode",
    price: 30000,
    currency: "BIF",
    images: [
      "/assets/sandals/kitenge-1.jpg"
    ],
    description: "Sandales légères mariant le cuir souple et le tissu Kitenge coloré pour un style estival affirmé.",
    details: [
      "Finitions en tissu Kitenge authentique",
      "Semelle antidérapante",
      "Conception légère et respirante"
    ],
    specs: "Cuir & Tissu Kitenge",
    stockQuantity: 3
  }
];
