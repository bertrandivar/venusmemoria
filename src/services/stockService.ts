import { supabase } from "@/lib/supabase"; // Ou le chemin vers votre client Supabase

export interface ProductStock {
  id: string;
  stock_quantity: number;
  is_sold_out: boolean;
}

/**
 * Récupère tous les stocks enregistrés dans Supabase
 */
export async function fetchAllProductStocks(): Promise<Record<string, ProductStock>> {
  try {
    const { data, error } = await supabase
      .from("product_stocks")
      .select("id, stock_quantity, is_sold_out");

    if (error) {
      console.error("Erreur récupération des stocks Supabase:", error);
      return {};
    }

    // Convertit le tableau en map par ID pour un accès rapide
    const stockMap: Record<string, ProductStock> = {};
    data?.forEach((item) => {
      stockMap[item.id] = item;
    });

    return stockMap;
  } catch (err) {
    console.error("Exception lors de la récupération des stocks:", err);
    return {};
  }
}

/**
 * Met à jour ou insère la quantité en stock d'un produit
 */
export async function updateProductStock(
  productId: string,
  newQuantity: number,
  isSoldOut?: boolean
) {
  const soldOutStatus = isSoldOut !== undefined ? isSoldOut : newQuantity <= 0;

  const { data, error } = await supabase
    .from("product_stocks")
    .upsert({
      id: productId,
      stock_quantity: Math.max(0, newQuantity),
      is_sold_out: soldOutStatus,
      updated_at: new Date().toISOString(),
    });

  if (error) {
    console.error("Erreur lors de la mise à jour du stock:", error);
    throw error;
  }

  return data;
}
