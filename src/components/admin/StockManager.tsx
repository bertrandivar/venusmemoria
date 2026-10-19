import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { PRODUCTS, Product } from "@/data/shopData";

export function StockManager() {
  const [stocks, setStocks] = useState<{ [id: string]: number }>({});
  const [loading, setLoading] = useState(false);
  const [savingId, setSavingId] = useState<string | null>(null);

  useEffect(() => {
    fetchStockData();
  }, []);

  const fetchStockData = async () => {
    setLoading(true);
    const { data } = await supabase.from("product_stocks").select("id, stock_quantity");

    const stockMap: { [id: string]: number } = {};
    // Initialise avec les valeurs de base
    PRODUCTS.forEach((p) => {
      stockMap[p.id] = p.stockQuantity;
    });

    // Surcharger avec les données réelles de Supabase
    if (data) {
      data.forEach((item) => {
        if (item.stock_quantity !== null && item.stock_quantity !== undefined) {
          stockMap[item.id] = item.stock_quantity;
        }
      });
    }

    setStocks(stockMap);
    setLoading(false);
  };

  const handleStockChange = async (productId: string, newQuantity: number) => {
    setSavingId(productId);
    const updatedQty = Math.max(0, newQuantity);

    // Mise à jour locale instantanée
    setStocks((prev) => ({ ...prev, [productId]: updatedQty }));

    // Sauvegarde dans Supabase
    const { error } = await supabase
      .from("product_stocks")
      .upsert({ id: productId, stock_quantity: updatedQty }, { onConflict: "id" });

    if (error) {
      alert("Erreur lors de la mise à jour du stock : " + error.message);
    }
    setSavingId(null);
  };

  if (loading) {
    return <p className="text-sm text-gray-500 italic p-4">Chargement des stocks...</p>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center bg-amber-50 p-4 rounded-xl border border-amber-200">
        <div>
          <h2 className="font-bold text-amber-900 text-sm sm:text-base">📊 Gestionnaire des Quantités en Stock</h2>
          <p className="text-xs text-amber-700">Ajustez la quantité exacte disponible pour chaque article.</p>
        </div>
        <button
          onClick={fetchStockData}
          className="text-xs bg-amber-800 text-white px-3 py-1.5 rounded font-semibold hover:bg-amber-900 transition"
        >
          Rafraîchir
        </button>
      </div>

      <div className="grid gap-3">
        {PRODUCTS.map((product: Product) => {
          const currentStock = stocks[product.id] ?? product.stockQuantity;
          const isSaving = savingId === product.id;

          return (
            <div
              key={product.id}
              className="flex items-center justify-between p-3.5 bg-white border rounded-xl shadow-sm hover:border-gray-300 transition"
            >
              <div className="flex items-center gap-3">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-12 h-12 object-contain rounded bg-gray-50 border p-1"
                />
                <div>
                  <h3 className="font-bold text-sm text-[#1C1B18]">{product.name}</h3>
                  <p className="text-xs text-gray-500">ID: {product.id}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-gray-600">Stock restant :</span>
                <input
                  type="number"
                  min="0"
                  value={currentStock}
                  onChange={(e) => handleStockChange(product.id, parseInt(e.target.value) || 0)}
                  className="w-20 p-1.5 border rounded text-center text-sm font-mono font-bold bg-gray-50 focus:bg-white focus:ring-2 focus:ring-black"
                />
                {isSaving && <span className="text-[10px] text-amber-600 animate-pulse font-bold">Enregistrement...</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
