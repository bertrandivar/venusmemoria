import type { Product } from "../shopData";

export const BRUSH_PRODUCTS: Product[] = [
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
    stockQuantity: 12,
    badge: "Populaire",
  },
];
