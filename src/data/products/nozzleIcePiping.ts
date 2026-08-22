import { Product } from "../shopData";

// Vous pourrez remplacer par vos vraies images une fois importées
import NOZ1 from "@/assets/culinary/nozzles-set.webp";

export const nozzleIcePipingProduct: Product = {
  id: "kit-douilles-patisserie-acier",
  name: "Set de Douilles Pâtissières en Acier Inoxydable",
  category: "cuisine",
  price: 25000, // Ajustez selon vos prix
  currency: "BIF",
  description: "Ensemble complet de douilles en inox avec différents embouts (fleurs, étoiles, rubans, écriture) pour réaliser des décors culinaires d'une précision professionnelle.",
  badge: "Nouveau",
  stockQuantity: 8,
  images: [NOZ1],
  details: [
    "Acier inoxydable 304 résistant à la corrosion",
    "Comprend plusieurs formes d'embouts créatifs",
    "Finition sans soudure pour un entretien hygiénique",
    "Parfait pour fleurs en crème, bordures et lettrages"
  ],
};
