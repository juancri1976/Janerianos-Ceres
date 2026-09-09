import { supabase } from "@/lib/supabase";
import { Users, BookOpen, Bell } from "lucide-react";

export default async function InicioDocentePage() {
  // 1. Buscamos a la Docente (simulando la sesión por ahora)
  const { data: docente } = await supabase
    .from('docentes')
    .select('*')
    .eq('email_contacto', 'docente@escuela.com')
    .single();

  // 2. Buscamos los cursos asignados a esta docente
  const { data: cursos } = await supabase
    .from('cursos')
    .select('*')
    .eq('docente_id', docente?.id);

  return (
    <div className="space-y-6">
      
      {/* Saludo Dinámico para el Docente */}
      <div className="border-b border-janeriano-gris pb-4 flex justify-between items-end">
        <div>
          <h1 className="font-serif text-3xl font-bold text-janeriano-marino">
            ¡Hola, {docente?.nombre_completo}!
          </h1>
          <p className="font-sans text-janeriano-marino/70 mt-1">
            Panel de control académico · Janerianos Ceres
          </p>
        </div>
        <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-janeriano-azul text-white rounded-lg text-sm font-bold shadow-sm hover:bg-janeriano-marino transition-colors">
          <Bell size={16} />
          Crear Aviso
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Columna Izquierda: Mis Cursos */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="font-sans text-xl font-bold text-janeriano-marino flex items-center gap-2">
            <BookOpen className="text-janeriano-dorado" size={24} />
            Mis Cursos Asignados
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cursos?.map((curso) => (
              <div key={curso.id} className="bg-white rounded-xl shadow-sm border border-janeriano-gris overflow-hidden hover:border-janeriano-azul transition-all cursor-pointer group">
                <div className={`${curso.color_tarjeta} h-2 w-full`} />
                <div className="p-5">
                  <h3 className="font-sans font-bold text-lg text-janeriano-marino group-hover:text-janeriano-azul transition-colors">
                    {curso.nombre_curso}
                  </h3>
                  <p className="text-xs font-semibold text-janeriano-celeste uppercase tracking-wide mt-1 mb-4">
                    {curso.institucion}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-janeriano-gris">
                    <div className="flex items-center gap-2 text-sm text-janeriano-marino/70 font-semibold">
                      <Users size={16} className="text-janeriano-marino/50" />
                      {curso.cantidad_alumnos} Alumnos
                    </div>
                    <span className="text-sm font-bold text-janeriano-azul group-hover:underline">
                      Ingresar al aula →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Columna Derecha: Accesos Rápidos del Docente */}
        <div className="space-y-4">
           <h2 className="font-sans text-xl font-bold text-janeriano-marino">
            Gestión Rápida
          </h2>
          <div className="bg-white rounded-xl shadow-sm border border-janeriano-gris overflow-hidden p-2">
            <ul className="space-y-1">
              <li className="p-3 hover:bg-janeriano-beige rounded-lg cursor-pointer transition-colors text-sm font-semibold text-janeriano-marino">
                📝 Cargar Calificaciones
              </li>
              <li className="p-3 hover:bg-janeriano-beige rounded-lg cursor-pointer transition-colors text-sm font-semibold text-janeriano-marino">
                ✅ Tomar Asistencia
              </li>
              <li className="p-3 hover:bg-janeriano-beige rounded-lg cursor-pointer transition-colors text-sm font-semibold text-janeriano-marino">
                📅 Ver Calendario Institucional
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}