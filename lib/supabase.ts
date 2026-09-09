import { createClient } from '@supabase/supabase-js';

// Inicializamos el cliente de Supabase con tus credenciales
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);