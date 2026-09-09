"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { ChevronLeft, AlertCircle } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [cargando, setCargando] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setCargando(true);
    setError(null);

    // Conectamos a Supabase
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
    const supabase = createClient(supabaseUrl, supabaseKey);

    // 1. Iniciamos sesión con Auth
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError("Correo o contraseña incorrectos.");
      setCargando(false);
      return;
    }

    // 2. Buscamos el perfil del usuario
    const { data: perfil, error: perfilError } = await supabase
      .from("perfiles")
      .select("*")
      .eq("id", authData.user.id)
      .single();

    if (perfilError || !perfil) {
      setError("No se encontró el perfil asignado. Contacte a soporte.");
      setCargando(false);
      return;
    }

    // 3. Redirección Estratégica
    if (perfil.rol === "directivo") {
      const filtro = perfil.institucion === "sagrada_familia" ? "sagrada-familia" : 
                     perfil.institucion === "belen" ? "belen" : "todas";
      router.push(`/directivo/admisiones?filtro=${filtro}`);
    } else if (perfil.rol === "docente") {
      router.push("/docente/inicio"); 
    } else if (perfil.rol === "alumno") {
      router.push("/alumno/inicio"); // <-- ¡NUEVA RUTA ALUMNOS!
    } else {
      router.push("/familia/inicio"); 
    }
  }; // <-- ESTA LLAVE SEGURAMENTE FALTABA

  return (
    <div className="min-h-screen bg-janeriano-beige flex flex-col font-sans">
      <header className="bg-white border-b border-janeriano-gris h-20 flex items-center px-6">
        <div className="max-w-4xl mx-auto w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-janeriano-marino font-bold hover:text-janeriano-azul transition-colors">
            <ChevronLeft size={20} /> Volver al inicio
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-janeriano-gris text-center">
          
          <div className="flex justify-center mb-6">
            <div className="relative w-20 h-20">
              <Image src="/escudo-amj.png" alt="Escudo" fill className="object-contain drop-shadow-md" />
            </div>
          </div>
          
          <h2 className="font-serif text-3xl font-bold text-janeriano-marino mb-2">Iniciar Sesión</h2>
          <p className="text-sm text-janeriano-marino/70 mb-8">Ingresá tus credenciales para acceder al campus.</p>

          <form onSubmit={handleLogin} className="space-y-6 text-left">
            <div>
              <label className="block text-sm font-bold text-janeriano-marino mb-1">Correo electrónico</label>
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-janeriano-beige/30 border border-janeriano-gris rounded-xl px-4 py-3 outline-none focus:border-janeriano-azul transition-colors" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-janeriano-marino mb-1">Contraseña</label>
              <input 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-janeriano-beige/30 border border-janeriano-gris rounded-xl px-4 py-3 outline-none focus:border-janeriano-azul transition-colors" 
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm font-bold rounded-lg flex items-center gap-2">
                <AlertCircle size={16} /> {error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={cargando}
              className="w-full py-4 bg-janeriano-marino text-white rounded-xl text-lg font-bold shadow-lg hover:bg-janeriano-azul transition-colors duration-300 disabled:opacity-50"
            >
              {cargando ? "Verificando..." : "Ingresar"}
            </button>
          </form>

        </div>
      </main>
    </div>
  );
}