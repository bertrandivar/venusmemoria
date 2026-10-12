import { Product } from "../shopData";
import FixativeSprayImg from "@/assets/fixaspray/fixative spray.webp";

export interface VolumeOption {
  id: string;
  label: string;
  price: number;
  inStock: boolean;
}

export interface FixativeProduct extends Product {
  volumeOptions?: VolumeOption[];
  selectedVolume?: VolumeOption;
}

export const FIXATIVE_SPRAY_PRODUCT: FixativeProduct = {
  id: "fixative-spray-winsor-newton",
  name: "Spray Fixateur pour Dessin & Peinture (Fixative Spray)",
  category: "peinture",
  price: 25000, // Prix de base par défaut
  currency: "BIF",
  stockQuantity: 0, // Indiqué épuisé comme demandé
  images: [FixativeSprayImg],
  badge: "Rupture de Stock",
  description: "Spray fixateur incolore de haute qualité pour protéger les dessins au fusain, crayon, pastel et craie contre l'estompage et la poussière. Séchage rapide, fini mat et invisible.",
  details: [
    "Incolore et résistant au jaunissement",
    "Protège le fusain, les graphites, pastels et la craie",
    "Séchage ultra-rapide avec finition transparente mate",
    "Conserve les détails du dessin sans altérer les nuances",
  ],
  specs: ["Séchage rapide", "Protection permanente non jaunissante", "Format Aérosol"],

  // Déclinaisons en 3 contenances (Toutes épuisées pour le moment)
  volumeOptions: [
    {
      id: "50ml",
      label: "50 ml (Format de poche)",
      price: 20000,
      inStock: false,
    },
    {
      id: "180ml",
      label: "180 ml (Format standard)",
      price: 35000,
      inStock: false,
    },
    {
      id: "300ml",
      label: "300 ml (Grand format)",
      price: 50000,
      inStock: false,
    },
  ],
};
