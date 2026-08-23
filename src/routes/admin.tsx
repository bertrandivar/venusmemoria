import { useState, useEffect } from "react";
import { supabase, Review, replyToReview } from "../services/reviewService";

export default function AdminPage() {
  const [session, setSession] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [reviews, setReviews] = useState<Review[]>([]);
  const [replies, setReplies] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 1. Vérifier la session actuelle
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) fetchAllReviews();
  }, [session]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    
    if (error) alert("Erreur de connexion : " + error.message);
    else setSession(data.session);
  };

  const fetchAllReviews = async () => {
    const { data } = await supabase.from("reviews").select("*").order("created_at", { ascending: false });
    if (data) setReviews(data);
  };

  const handleSendReply = async (reviewId: string) => {
    try {
      const replyText = replies[reviewId];
      if (!replyText) return;
      
      await replyToReview(reviewId, replyText);
      alert("Réponse enregistrée avec succès !");
      fetchAllReviews();
    } catch (err: any) {
      alert("Erreur lors de l'envoi : " + err.message);
    }
  };

  // --- FORMULAIRE DE CONNEXION ---
  if (!session) {
    return (
      <div className="max-w-md mx-auto my-16 p-6 bg-white border rounded-xl shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-center">Connexion Administration</h2>
        <form onSubmit={handleLogin} className="space-y-3">
          <div>
            <label className="text-xs font-semibold text-gray-600">Email Admin</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded mt-1 text-sm bg-white"
              required
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-600">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded mt-1 text-sm bg-white"
              required
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-2 bg-black text-white rounded font-medium text-sm hover:opacity-90 transition"
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>
    );
  }

  // --- DASHBOARD DE GESTION DES AVIS ---
  return (
    <div className="max-w-4xl mx-auto my-8 p-6 space-y-6">
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold">Panneau Administrateur</h1>
          <p className="text-sm text-gray-500">Gestion des avis & réponses clients</p>
        </div>
        <button 
          onClick={() => supabase.auth.signOut()}
          className="text-xs bg-red-50 text-red-600 px-3 py-2 rounded font-semibold hover:bg-red-100 transition"
        >
          Déconnexion
        </button>
      </div>

      <div className="space-y-4">
        {reviews.length === 0 ? (
          <p className="text-sm text-gray-500 italic">Aucun avis enregistré pour le moment.</p>
        ) : (
          reviews.map((rev) => (
            <div key={rev.id} className="p-4 border rounded-xl bg-white space-y-3 shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-bold text-sm">{rev.user_name}</span>
                  <span className="text-xs text-gray-400 ml-2">(Produit: {rev.product_id})</span>
                </div>
                <span className="text-amber-500 font-bold">{"★".repeat(rev.rating)}</span>
              </div>

              <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">{rev.comment}</p>

              <div className="pt-2 border-t space-y-2">
                <label className="text-xs font-semibold text-gray-600">Votre réponse officielle :</label>
                <textarea
                  placeholder="Écrivez votre réponse ici..."
                  defaultValue={rev.admin_reply || ""}
                  onChange={(e) => setReplies({ ...replies, [rev.id]: e.target.value })}
                  className="w-full p-2 border rounded text-sm bg-white"
                  rows={2}
                />
                <button
                  onClick={() => handleSendReply(rev.id)}
                  className="px-3 py-1.5 bg-black text-white rounded text-xs font-semibold hover:opacity-90 transition"
                >
                  {rev.admin_reply ? "Mettre à jour la réponse" : "Publier la réponse"}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
