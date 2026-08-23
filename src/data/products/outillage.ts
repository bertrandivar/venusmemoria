import { Product } from "../shopData";
import { agrafeuseNoireProduct } from "./agrafeuseNoire";
import { agrafeuseJauneProduct } from "./agrafeuseJaune";
import { pistoletColleYellow } from "./pistoletColleYellow";
import { batonsColleProduct } from "./batonsColle"; // <-- Import des bâtons de colle

export const outillageProducts: Product[] = [
  agrafeuseNoireProduct,
  agrafeuseJauneProduct,
  pistoletColleYellow,
  batonsColleProduct, // <-- Ajout à la liste d'outillage
];
