'use server';

import { createClient } from '@/lib/supabase-server';
import { redirect } from 'next/navigation';

export async function iniciarSesion(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const supabase = await createClient();

  // Intentamos iniciar sesión con Supabase Auth
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  // Si las credenciales son incorrectas, recargamos la página con un error
  if (error) {
    redirect('/login?error=Credenciales+incorrectas');
  }

  // Si todo sale bien, verificamos el correo para enviarlo a su Campus correspondiente
  if (email === 'docente@escuela.com') {
    redirect('/docente/inicio');
  } else {
    redirect('/familia/inicio');
  }
}

export async function cerrarSesion() {
  const supabase = await createClient();
  
  // Destruimos la sesión activa en el backend
  await supabase.auth.signOut();
  
  // Redirigimos al usuario a la puerta de entrada
  redirect('/login');
}