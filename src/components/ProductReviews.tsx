import { useState, useEffect } from "react";
import { getReviewsByProduct, addReview, Review } from "../services/reviewService";

interface Props {
  productId: string;
}

export function ProductReviews({ productId }: Props) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Champs du formulaire
  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Charger les avis au chargement
  useEffect(() => {
    loadReviews();
  }, [productId]);

  const loadReviews = async () => {
    setLoading(true);
    const data = await getReviewsByProduct(productId);
    setReviews(data);
    setLoading(false);
  };

  // Calcul de la note moyenne
  const averageRating = reviews.length
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : "0";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !comment.trim()) return;

    setSubmitting(true);
    try {
      await addReview({
        product_id: productId,
        user_name: userName,
        rating,
        comment,
      });
      setUserName("");
      setComment("");
      setRating(5);
      await loadReviews(); // Rafraîchir la liste
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'envoi de votre avis.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-8 border-t pt-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">Avis clients</h3>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black text-amber-500">★ {averageRating}</span>
          <span className="text-sm text-gray-500">({reviews.length} avis)</span>
        </div>
      </div>

      {/* Formulaire d'ajout d'avis */}
      <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded-xl space-y-4">
        <h4 className="font-semibold text-sm">Laisser un avis</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Votre nom"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="p-2 border rounded-md w-full bg-white text-sm"
          />
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Note :</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="p-2 border rounded-md bg-white text-sm"
            >
              <option value={5}>⭐⭐⭐⭐⭐ (5/5)</option>
              <option value={4}>⭐⭐⭐⭐☆ (4/5)</option>
              <option value={3}>⭐⭐⭐☆☆ (3/5)</option>
              <option value={2}>⭐⭐☆☆☆ (2/5)</option>
              <option value={1}>⭐☆☆☆☆ (1/5)</option>
            </select>
          </div>
        </div>
        <textarea
          placeholder="Votre commentaire sur ce produit..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          rows={3}
          className="p-2 border rounded-md w-full bg-white text-sm"
        />
        <button
          type="submit"
          disabled={submitting}
          className="px-4 py-2 bg-black text-white rounded-md text-sm hover:opacity-90 transition disabled:opacity-50"
        >
          {submitting ? "Publication..." : "Publier mon avis"}
        </button>
      </form>

      {/* Liste des avis */}
      {loading ? (
        <p className="text-sm text-gray-400">Chargement des avis...</p>
      ) : reviews.length === 0 ? (
        <p className="text-sm text-gray-500 italic">Aucun avis pour le moment. Soyez le premier à donner le vôtre !</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((rev) => (
            <div key={rev.id} className="border-b pb-3 space-y-1">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold">{rev.user_name}</span>
                <span className="text-amber-500 font-bold">{"★".repeat(rev.rating)}</span>
              </div>
              <p className="text-sm text-gray-600">{rev.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
