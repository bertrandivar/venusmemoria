import { createClient } from '@supabase/supabase-js';

// URL de votre projet Supabase
const supabaseUrl = 'https://yilrcmmfrqtiyomqvpwk.supabase.co';

// Votre clé publique (Publishable Key)
const supabaseAnonKey = 'sb_publishable_KlOQKFB-1DIcaGh4o9M1Gg_A3IbbnAu';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
