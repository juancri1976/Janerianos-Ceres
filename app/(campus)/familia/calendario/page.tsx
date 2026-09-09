import { supabase } from "@/lib/supabase";
import { Calendar as CalendarIcon, Clock, MapPin, Filter } from "lucide-react";

// Función para formatear la fecha que viene de la base de datos
const extraerDiaYMes = (fechaString: string) => {
  // Le sumamos la hora para evitar desfases de zona horaria al renderizar
  const date = new Date(fechaString + 'T00:00:00');
  const dia = date.toLocaleDateString('es-AR', { day: '2-digit' });
  const mes = date.toLocaleDateString('es-AR', { month: 'short' }).toUpperCase().replace('.', '');
  return { dia, mes };
};

export default async function CalendarioPage() {
  // Traemos los eventos ordenados por fecha desde Supabase
  const { data: eventos } = await supabase
    .from('eventos')
    .select('*')
    .order('fecha', { ascending: true });

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      
      {/* Cabecera */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-janeriano-gris pb-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-janeriano-marino flex items-center gap-3">
            <CalendarIcon className="text-janeriano-dorado" size={32} />
            Calendario
          </h1>
          <p className="font-sans text-janeriano-marino/70 mt-1">
            Agenda unificada de la Janerianos Ceres
          </p>
        </div>
        
        {/* Filtros */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          <Filter className="text-janeriano-gris mr-2 hidden md:block" size={20} />
          <button className="px-4 py-2 bg-janeriano-marino text-white text-sm font-semibold rounded-full whitespace-nowrap">
            Todos
          </button>
          <button className="px-4 py-2 bg-white border border-janeriano-gris text-janeriano-marino text-sm font-semibold rounded-full hover:border-janeriano-azul transition-colors whitespace-nowrap">
            Institucional
          </button>
          <button className="px-4 py-2 bg-white border border-janeriano-gris text-janeriano-marino text-sm font-semibold rounded-full hover:border-janeriano-azul transition-colors whitespace-nowrap">
            Mis Hijos
          </button>
        </div>
      </div>

      {/* Lista de Eventos (Renderizada desde Supabase) */}
      <div className="space-y-4">
        {eventos?.map((evento) => {
          const { dia, mes } = extraerDiaYMes(evento.fecha);
          
          return (
            <div key={evento.id} className="bg-white rounded-xl shadow-sm border border-janeriano-gris overflow-hidden hover:shadow-md transition-shadow flex">
              
              {/* Fecha (Caja Izquierda) */}
              <div className={`${evento.color_fondo} text-white w-24 flex flex-col items-center justify-center p-4 flex-shrink-0`}>
                <span className="text-3xl font-bold font-serif leading-none">{dia}</span>
                <span className="text-sm font-semibold tracking-wider mt-1">{mes}</span>
              </div>

              {/* Detalles del Evento */}
              <div className="p-5 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-janeriano-celeste uppercase tracking-wide">
                    {evento.tipo}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-janeriano-marino mb-1 font-sans">{evento.titulo}</h2>
                <p className="text-sm text-janeriano-marino/70 mb-3">{evento.descripcion}</p>
                
                <div className="flex items-center gap-4 text-xs font-semibold text-janeriano-marino/60">
                  <div className="flex items-center gap-1">
                    <Clock size={14} /> {evento.hora}
                  </div>
                  {evento.lugar && (
                    <div className="flex items-center gap-1">
                      <MapPin size={14} /> {evento.lugar}
                    </div>
                  )}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}