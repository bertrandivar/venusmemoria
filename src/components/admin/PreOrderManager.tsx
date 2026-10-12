import React, { useState, useEffect } from "react";
import { PRODUCTS, Product } from "@/data/shopData";
import { supabase } from "@/lib/supabase";

interface StockRecord {
  id: string;
  stock_quantity: number;
  is_sold_out: boolean;
  is_pre_order: boolean;
  pre_order_price: number | null;
  pre_order_end_date: string | null;
}

export const PreOrderManager: React.FC = () => {
  const [stocks, setStocks] = useState<Record<string, StockRecord>>({});
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);

  // Charger les données depuis Supabase au montage
  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("product_stocks").select("*");
    if (error) {
      console.error("Erreur chargement stocks Supabase:", error);
    } else if (data) {
      const map: Record<string, StockRecord> = {};
      data.forEach((item: StockRecord) => {
        map[item.id] = item;
      });
      setStocks(map);
    }
    setLoading(false);
  };

  const handleUpdate = async (product: Product, updatedFields: Partial<StockRecord>) => {
    setSavingId(product.id);
    const current = stocks[product.id] || {
      id: product.id,
      stock_quantity: product.stockQuantity,
      is_sold_out: false,
      is_pre_order: product.isPreOrder || false,
      pre_order_price: product.preOrderPrice || null,
      pre_order_end_date: product.preOrderEndDate || null,
    };

    const payload = {
      ...current,
      ...updatedFields,
      updated_at: new Date().toISOString(),
    };

    const { error } = await supabase.from("product_stocks").upsert(payload);

    if (error) {
      alert("Erreur lors de la mise à jour : " + error.message);
    } else {
      setStocks((prev) => ({ ...prev, [product.id]: payload }));
    }
    setSavingId(null);
  };

  if (loading) {
    return <div className="p-6 text-center text-stone-700">Chargement de la gestion des précommandes...</div>;
  }

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto font-sans">
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div>
          <h1 className="text-2xl font-serif font-bold text-[#1C1B18]">
            ⚙️ Gestion des Stocks & Précommandes
          </h1>
          <p className="text-xs text-stone-600 mt-1">
            Ajustez en temps réel le tarif, la date de fin et le statut des précommandes sans modifier le code.
          </p>
        </div>
        <button
          onClick={fetchStocks}
          className="text-xs px-3 py-2 bg-[#1C1B18] text-[#F0EFDF] rounded hover:bg-stone-800 transition"
        >
          🔄 Rafraîchir
        </button>
      </div>

      <div className="space-y-4">
        {PRODUCTS.map((prod) => {
          const dbStock = stocks[prod.id] || {
            id: prod.id,
            stock_quantity: prod.stockQuantity,
            is_sold_out: false,
            is_pre_order: prod.isPreOrder || false,
            pre_order_price: prod.preOrderPrice || null,
            pre_order_end_date: prod.preOrderEndDate || null,
          };

          const isSaving = savingId === prod.id;

          return (
            <div
              key={prod.id}
              className="bg-white/80 border border-[#1C1B18]/15 rounded-lg p-4 shadow-sm flex flex-col md:flex-row gap-4 items-start md:items-center justify-between"
              style={{ backgroundColor: "#EFECE1" }}
            >
              {/* Infos Produit */}
              <div className="flex items-center gap-3 w-full md:w-1/3">
                <img
                  src={prod.images[0]}
                  alt={prod.name}
                  className="w-14 h-14 object-contain rounded bg-white p-1 border"
                />
                <div>
                  <h3 className="font-bold text-sm text-[#1C1B18]">{prod.name}</h3>
                  <p className="text-xs text-stone-500">
                    Prix normal : <span className="font-bold">{prod.price.toLocaleString()} {prod.currency}</span>
                  </p>
                </div>
              </div>

              {/* Contrôles Précommande */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full md:w-2/3 items-center">
                {/* Switch Actif / Inactif */}
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-bold text-stone-700 mb-1">
                    Mode Précommande
                  </label>
                  <button
                    onClick={() =>
                      handleUpdate(prod, { is_pre_order: !dbStock.is_pre_order })
                    }
                    className={`px-3 py-1.5 text-xs font-bold rounded transition ${
                      dbStock.is_pre_order
                        ? "bg-amber-600 text-white"
                        : "bg-stone-300 text-stone-700"
                    }`}
                  >
                    {dbStock.is_pre_order ? "🚀 Actif" : "⚪ Désactivé"}
                  </button>
                </div>

                {/* Prix Réduit */}
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-bold text-stone-700 mb-1">
                    Prix Précommande (BIF)
                  </label>
                  <input
                    type="number"
                    value={dbStock.pre_order_price || ""}
                    placeholder={`${prod.price}`}
                    onChange={(e) =>
                      setStocks((prev) => ({
                        ...prev,
                        [prod.id]: {
                          ...dbStock,
                          pre_order_price: e.target.value ? Number(e.target.value) : null,
                        },
                      }))
                    }
                    onBlur={(e) =>
                      handleUpdate(prod, {
                        pre_order_price: e.target.value ? Number(e.target.value) : null,
                      })
                    }
                    className="p-1.5 text-xs border rounded bg-white font-mono text-[#1C1B18]"
                  />
                </div>

                {/* Date Limite */}
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase font-bold text-stone-700 mb-1">
                    Date de fin (Compte à rebours)
                  </label>
                  <input
                    type="datetime-local"
                    value={
                      dbStock.pre_order_end_date
                        ? new Date(dbStock.pre_order_end_date).toISOString().slice(0, 16)
                        : ""
                    }
                    onChange={(e) => {
                      const isoDate = e.target.value ? new Date(e.target.value).toISOString() : null;
                      handleUpdate(prod, { pre_order_end_date: isoDate });
                    }}
                    className="p-1.5 text-xs border rounded bg-white text-[#1C1B18]"
                  />
                </div>
              </div>

              {/* Indicateur de sauvegarde */}
              {isSaving && (
                <span className="text-[10px] text-amber-700 font-bold animate-pulse">
                  Sauvegarde...
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
