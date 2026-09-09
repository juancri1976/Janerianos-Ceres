import { supabase } from "@/lib/supabase";
import { GraduationCap, CheckCircle, FileText, Users, ChevronRight } from "lucide-react";

export default async function MisHijosPage() {
  // 1. Buscamos a la Familia Pérez (simulando la sesión por ahora)
  const { data: familia } = await supabase
    .from('familias')
    .select('*')
    .eq('email_contacto', 'usuario@familia.com')
    .single();

  // 2. Buscamos a los hijos reales en la base de datos
  const { data: hijos } = await supabase
    .from('alumnos')
    .select('*')
    .eq('familia_id', familia?.id);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      
      {/* Cabecera */}
      <div className="border-b border-janeriano-gris pb-4">
        <h1 className="font-serif text-3xl font-bold text-janeriano-marino flex items-center gap-3">
          <Users className="text-janeriano-azul" size={32} />
          Mis Hijos
        </h1>
        <p className="font-sans text-janeriano-marino/70 mt-1">
          Gestión académica y seguimiento de alumnos
        </p>
      </div>

      {/* Tarjetas de Hijos Detalladas (Renderizadas desde Supabase) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hijos?.map((hijo) => (
          <div key={hijo.id} className="bg-white rounded-xl shadow-sm border border-janeriano-gris overflow-hidden hover:border-janeriano-azul transition-colors group">
            
            {/* Header Tarjeta */}
            <div className="p-6 flex flex-col items-center text-center border-b border-janeriano-gris bg-janeriano-beige/30">
              <div className={`w-20 h-20 rounded-full ${hijo.color_avatar} flex items-center justify-center text-white font-bold text-3xl mb-4 shadow-inner`}>
                {hijo.inicial_avatar}
              </div>
              <h2 className="font-serif text-xl font-bold text-janeriano-marino">{hijo.nombre}</h2>
              <p className="text-xs font-semibold text-janeriano-celeste uppercase tracking-wide mt-1">
                {hijo.nivel} · {hijo.institucion}
              </p>
            </div>

            {/* Acciones Rápidas */}
            <div className="p-4 bg-white">
              <ul className="space-y-2">
                <li className="flex items-center justify-between p-2 rounded-lg hover:bg-janeriano-beige cursor-pointer transition-colors text-janeriano-marino">
                  <div className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle size={18} className="text-janeriano-azul" />
                    Asistencia
                  </div>
                  <span className="text-xs font-bold bg-janeriano-celeste/20 text-janeriano-azul px-2 py-1 rounded-full">
                    {hijo.asistencia_porcentaje}%
                  </span>
                </li>
                <li className="flex items-center justify-between p-2 rounded-lg hover:bg-janeriano-beige cursor-pointer transition-colors text-janeriano-marino">
                  <div className="flex items-center gap-3 text-sm font-semibold">
                    <FileText size={18} className="text-janeriano-azul" />
                    Boletines / Notas
                  </div>
                  <ChevronRight size={16} className="text-janeriano-gris group-hover:text-janeriano-azul" />
                </li>
                <li className="flex items-center justify-between p-2 rounded-lg hover:bg-janeriano-beige cursor-pointer transition-colors text-janeriano-marino">
                  <div className="flex items-center gap-3 text-sm font-semibold">
                    <GraduationCap size={18} className="text-janeriano-azul" />
                    Docentes
                  </div>
                  <ChevronRight size={16} className="text-janeriano-gris group-hover:text-janeriano-azul" />
                </li>
              </ul>
            </div>

            <div className="p-4 bg-janeriano-marino text-center cursor-pointer hover:bg-janeriano-marino/90 transition-colors">
              <span className="text-white text-sm font-bold">Ver legajo completo</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}