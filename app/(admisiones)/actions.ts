"use server";

import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

// 1. Inicializamos el cliente de Supabase directamente aquí
// (Asegurate de tener estas variables en tu archivo .env.local)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

export async function enviarPreInscripcion(formData: FormData) {
  // 2. Extraemos los datos del formulario
  const nivel = formData.get("nivel") as string;
  const nombre_alumno = formData.get("nombre_alumno") as string;
  const fecha_nacimiento = formData.get("fecha_nacimiento") as string;
  const nombre_madre = formData.get("nombre_madre") as string;
  const nombre_padre = formData.get("nombre_padre") as string;
  const nombre_tutor = formData.get("nombre_tutor") as string;
  const telefono_contacto = formData.get("telefono_contacto") as string;
  const telefono_alternativo = formData.get("telefono_alternativo") as string;
  const correo_electronico = formData.get("correo_electronico") as string;

  // 3. Insertamos en nuestra tabla de Supabase
  const { data, error } = await supabase
    .from("pre_inscripciones")
    .insert([
      {
        nivel,
        nombre_alumno,
        fecha_nacimiento,
        nombre_madre,
        nombre_padre,
        nombre_tutor,
        telefono_contacto,
        telefono_alternativo,
        correo_electronico,
      },
    ]);

  if (error) {
    console.error("Error al guardar la preinscripción:", error);
    return { success: false, error: "Hubo un error al procesar tu solicitud. Por favor, intentá nuevamente." };
  }

  // 4. Revalidamos para refrescar cualquier caché
  revalidatePath("/");

  return { success: true };
}