import { supabase } from '../lib/supabase';

export interface Review {
  id?: string;
  product_id: string;
  user_name: string;
  rating: number;
  comment: string;
  created_at?: string;
}

// Charger les avis d'un produit
export const getReviewsByProduct = async (productId: string) => {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .eq('product_id', productId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Erreur lors du chargement des avis:', error);
    return [];
  }
  return data as Review[];
};

// Ajouter un nouvel avis
export const addReview = async (review: Omit<Review, 'id' | 'created_at'>) => {
  const { data, error } = await supabase
    .from('reviews')
    .insert([review])
    .select();

  if (error) throw error;
  return data;
};
