import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

// 1. Convertimos la función en asíncrona
export async function createClient() {
  // 2. Esperamos a que las cookies se resuelvan con "await"
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set({ name, value, ...options });
            });
          } catch (error) {
            // Ignoramos errores si se llama desde un componente de servidor
          }
        },
      },
    }
  );
}