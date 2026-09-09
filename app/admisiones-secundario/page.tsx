"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Info, FileText, CheckCircle2 } from "lucide-react";
import { useState } from "react";
// Ajusta la ruta de importación según dónde hayas guardado actions.ts
import { enviarPreInscripcion } from "../(admisiones)/actions"; 

export default function AdmisionesSalitaPage() {
  const [mensaje, setMensaje] = useState<{ tipo: 'exito' | 'error', texto: string } | null>(null);
  const [estaEnviando, setEstaEnviando] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setEstaEnviando(true);
    setMensaje(null);
    
    // Agregamos el nivel fijo al FormData antes de enviar
    formData.append("nivel", "secundaria_1");

    const resultado = await enviarPreInscripcion(formData);

    if (resultado.success) {
      setMensaje({ tipo: 'exito', texto: '¡Pre-inscripción enviada con éxito! Nos comunicaremos a la brevedad.' });
      // Opcional: Limpiar el formulario usando event.target.reset() si pasas el evento
    } else {
      setMensaje({ tipo: 'error', texto: resultado.error || 'Ocurrió un error.' });
    }
    setEstaEnviando(false);
  };

  return (
    <div className="min-h-screen bg-janeriano-beige flex flex-col font-sans">
      <header className="bg-white border-b border-janeriano-gris h-20 flex items-center px-6 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-janeriano-marino font-bold hover:text-janeriano-azul transition-colors">
            <ChevronLeft size={20} /> Volver al inicio
          </Link>
          <div className="flex items-center gap-2">
            <Image src="/escudo-amj.png" alt="Escudo" width={32} height={32} className="object-contain" />
            <span className="font-serif font-bold text-janeriano-marino hidden sm:inline">Janerianos Ceres</span>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-janeriano-marino">Formulario de Pre-inscripción</h1>
            <p className="text-janeriano-marino/70 mt-2">Los campos marcados con (*) son obligatorios.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-janeriano-gris overflow-hidden">
            {/* Cambiamos form por action={handleSubmit} */}
            <form className="p-8 md:p-12 space-y-8" action={handleSubmit}>
              
              {/* NIVEL FIJO */}
              <div className="bg-janeriano-azul/10 border border-janeriano-azul/30 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-janeriano-azul uppercase tracking-wide">Nivel a inscribir</p>
                  <p className="font-serif text-xl font-bold text-janeriano-marino">1º Año — Escuela Belen</p>
                </div>
              </div>

              {/* 1. Datos del Alumno */}
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-xl text-janeriano-marino flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-janeriano-azul/10 text-janeriano-azul flex items-center justify-center text-sm">1</span> Datos del Alumno/a
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-janeriano-marino mb-1">Nombre y apellido del niño/a *</label>
                    <input type="text" name="nombre_alumno" required className="w-full bg-white border border-janeriano-gris rounded-xl px-4 py-3 outline-none focus:border-janeriano-azul transition-colors" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-janeriano-marino mb-1">Fecha de nacimiento *</label>
                    <input type="date" name="fecha_nacimiento" required className="w-full bg-white border border-janeriano-gris rounded-xl px-4 py-3 outline-none focus:border-janeriano-azul transition-colors" />
                  </div>
                </div>
              </div>

              {/* 2. Datos Familiares */}
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-xl text-janeriano-marino flex items-center gap-2 mt-6">
                  <span className="w-8 h-8 rounded-full bg-janeriano-rojo/10 text-janeriano-rojo flex items-center justify-center text-sm">2</span> Datos Familiares
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-janeriano-marino mb-1">Nombre y apellido de madre</label>
                    <input type="text" name="nombre_madre" className="w-full bg-white border border-janeriano-gris rounded-xl px-4 py-3 outline-none focus:border-janeriano-rojo transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-janeriano-marino mb-1">Nombre y apellido de padre</label>
                    <input type="text" name="nombre_padre" className="w-full bg-white border border-janeriano-gris rounded-xl px-4 py-3 outline-none focus:border-janeriano-rojo transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-janeriano-marino mb-1">Nombre y apellido de tutor *</label>
                    <input type="text" name="nombre_tutor" required className="w-full bg-white border border-janeriano-gris rounded-xl px-4 py-3 outline-none focus:border-janeriano-rojo transition-colors" />
                  </div>
                </div>
              </div>

              {/* 3. Contacto */}
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-xl text-janeriano-marino flex items-center gap-2 mt-6">
                  <span className="w-8 h-8 rounded-full bg-janeriano-dorado/20 text-janeriano-dorado flex items-center justify-center text-sm">3</span> Información de Contacto
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-janeriano-marino mb-1">Teléfono de contacto *</label>
                    <input type="tel" name="telefono_contacto" required className="w-full bg-white border border-janeriano-gris rounded-xl px-4 py-3 outline-none focus:border-janeriano-dorado transition-colors" />
                    <p className="text-xs text-janeriano-marino/60 mt-1 flex items-start gap-1"><Info size={14} className="min-w-[14px] mt-0.5" /> Si se modifica, informarlo.</p>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-janeriano-marino mb-1">Teléfono alternativo *</label>
                    <input type="tel" name="telefono_alternativo" required className="w-full bg-white border border-janeriano-gris rounded-xl px-4 py-3 outline-none focus:border-janeriano-dorado transition-colors" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-janeriano-marino mb-1">Correo electrónico</label>
                    <input type="email" name="correo_electronico" className="w-full bg-white border border-janeriano-gris rounded-xl px-4 py-3 outline-none focus:border-janeriano-dorado transition-colors" />
                  </div>
                </div>
              </div>

              {/* Requisitos */}
              <div className="bg-janeriano-beige/50 border border-janeriano-dorado/30 rounded-2xl p-6 mt-8">
                <h4 className="font-bold text-janeriano-marino flex items-center gap-2 mb-4">
                  <FileText size={20} className="text-janeriano-dorado" /> Documentación a presentar:
                </h4>
                <ul className="space-y-3 text-sm text-janeriano-marino/80">
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-janeriano-verde mt-0.5 min-w-[16px]" /> Partida de nacimiento, autenticada por el Juzgado.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-janeriano-verde mt-0.5 min-w-[16px]" /> Fotocopia de D.N.I autenticada por el Juzgado.</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-janeriano-verde mt-0.5 min-w-[16px]" /> Foto 4 x 4 (una).</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-janeriano-verde mt-0.5 min-w-[16px]" /> Fotocopia grupo sanguíneo.</li>
                </ul>
              </div>

               {/* Feedback Message */}
              {mensaje && (
                <div className={`p-4 rounded-xl font-bold text-sm ${mensaje.tipo === 'exito' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {mensaje.texto}
                </div>
              )}

              <div className="pt-4">
                <button type="submit" disabled={estaEnviando} className="w-full py-4 bg-janeriano-marino text-white rounded-xl text-lg font-bold shadow-lg hover:bg-janeriano-azul transition-colors duration-300 disabled:opacity-50">
                  {estaEnviando ? "Enviando..." : "Enviar Pre-inscripción"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}