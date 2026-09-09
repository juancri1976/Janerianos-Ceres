import { supabase } from "@/lib/supabase";
import { Megaphone, BookOpen, Users, AlertTriangle, Calendar as CalendarIcon } from "lucide-react";

// Función para asignar un icono según el tipo de comunicación
const obtenerIcono = (tipo: string) => {
  if (tipo.includes("Institucional")) return AlertTriangle;
  if (tipo.includes("Grado")) return BookOpen;
  if (tipo.includes("Sala")) return Users;
  return CalendarIcon;
};

export default async function ComunicacionesPage() {
  // Traemos TODAS las comunicaciones desde Supabase ordenadas de la más reciente a la más antigua
  const { data: comunicaciones } = await supabase
    .from('comunicaciones')
    .select('*')
    .order('fecha_publicacion', { ascending: false });

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      
      {/* Cabecera de la sección */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-janeriano-gris pb-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-janeriano-marino flex items-center gap-3">
            <Megaphone className="text-janeriano-rojo" size={32} />
            Centro de Comunicaciones
          </h1>
          <p className="font-sans text-janeriano-marino/70 mt-1">
            Novedades y avisos para la Familia Pérez
          </p>
        </div>
        
        {/* Filtros rápidos */}
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
          <button className="px-4 py-2 bg-janeriano-marino text-white text-sm font-semibold rounded-full whitespace-nowrap">
            Todas
          </button>
          <button className="px-4 py-2 bg-white border border-janeriano-gris text-janeriano-marino text-sm font-semibold rounded-full hover:border-janeriano-azul transition-colors whitespace-nowrap">
            Institucional
          </button>
          <button className="px-4 py-2 bg-white border border-janeriano-gris text-janeriano-marino text-sm font-semibold rounded-full hover:border-janeriano-azul transition-colors whitespace-nowrap">
            Mis Hijos
          </button>
        </div>
      </div>

      {/* Lista de Comunicaciones (Renderizadas desde Supabase) */}
      <div className="space-y-4">
        {comunicaciones?.map((com) => {
          const Icono = obtenerIcono(com.tipo);
          
          return (
            <div 
              key={com.id} 
              className={`bg-white rounded-xl shadow-sm border-l-4 ${com.color_borde} border-y border-r border-y-janeriano-gris border-r-janeriano-gris overflow-hidden hover:shadow-md transition-shadow`}
            >
              <div className="p-5 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6">
                
                {/* Indicador visual y Tipo */}
                <div className="flex flex-col items-start min-w-[140px]">
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold text-white mb-2 ${com.color_fondo}`}>
                    <Icono size={14} />
                    {com.tipo}
                  </div>
                  <span className="text-xs font-semibold text-janeriano-marino/60 uppercase tracking-wider">
                    {/* Formateamos la fecha simple para el MVP */}
                    {new Date(com.fecha_publicacion).toLocaleDateString('es-AR', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </span>
                </div>

                {/* Contenido del Mensaje */}
                <div className="flex-1">
                  <p className="text-sm font-bold text-janeriano-celeste mb-1">
                    De: {com.remitente}
                  </p>
                  <h2 className="text-lg font-bold text-janeriano-marino mb-2 font-serif">
                    {com.titulo}
                  </h2>
                  <p className="text-janeriano-marino/80 text-sm leading-relaxed font-sans">
                    {com.contenido}
                  </p>
                </div>

                {/* Acciones */}
                <div className="flex items-center md:items-start justify-end min-w-[120px]">
                  <button className="text-sm font-semibold text-janeriano-azul hover:text-janeriano-marino transition-colors">
                    Leer más →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}