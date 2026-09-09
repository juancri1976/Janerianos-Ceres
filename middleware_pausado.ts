import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // 1. Creamos un objeto de respuesta inicial que permite que la petición continúe
  let supabaseResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  // 2. Inicializamos Supabase específicamente adaptado para el Middleware
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          // Si la sesión necesita refrescarse, actualizamos las cookies de la petición
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          // Y actualizamos la respuesta para que el navegador guarde la nueva cookie
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // 3. Le preguntamos a Supabase si existe un usuario válido navegando ahora mismo
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 4. EL GUARDIÁN: Lógica de enrutamiento
  const isAuthRoute = request.nextUrl.pathname.startsWith('/login');
  
  // Si el usuario NO está logueado y NO está en la página de login... ¡Afuera!
  if (!user && !isAuthRoute) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // Si el usuario SÍ está logueado pero intenta volver a ver el formulario de login... ¡Adentro!
  if (user && isAuthRoute) {
    const url = request.nextUrl.clone();
    // Por defecto lo enviamos al inicio de la familia (el sistema podría mejorarse para leer el rol de Supabase aquí)
    url.pathname = '/familia/inicio'; 
    return NextResponse.redirect(url);
  }

  // Si no se rompe ninguna regla, lo dejamos navegar en paz
  return supabaseResponse;
}

// 5. Le indicamos al Middleware qué rutas vigilar (Básicamente todas, menos archivos del sistema y fotos)
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};