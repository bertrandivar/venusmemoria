import { Product } from "../shopData";

// Vous pourrez remplacer par vos vraies images une fois importées
import PIP1 from "@/assets/culinary/piping-bag.webp";

export const icingPipingBagProduct: Product = {
  id: "poche-a-douille-patisserie",
  name: "Poches à Douille Réutilisables pour Pâtisserie & Décoration",
  category: "cuisine",
  price: 15000, // Ajustez selon vos prix
  currency: "BIF",
  description: "Poches à douille en silicone de qualité alimentaire, souples, lavables et hyper résistantes. Indispensables pour le pochage de précision, la décoration de gâteaux et les motifs créatifs.",
  badge: "Incontournable",
  stockQuantity: 10,
  images: [PIP1],
  details: [
    "Matériau en silicone silicone / TPU de qualité alimentaire",
    "Réutilisable et facile à nettoyer",
    "Compatible avec la plupart des douilles standards",
    "Idéal pour crème au beurre, glaçage, meringue et chocolat"
  ],
};
