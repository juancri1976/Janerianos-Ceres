import { createClient } from "@supabase/supabase-js";
import { BookOpen, Calendar, Clock, CheckCircle, AlertCircle, FileText, GraduationCap } from "lucide-react";

export const revalidate = 0;

export default async function InicioAlumnoPage() {
  // Conectamos a Supabase (preparando el terreno para cuando haya datos reales)
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
  const supabase = createClient(supabaseUrl, supabaseKey);

  // SIMULACIÓN DE DATOS (Hasta que creemos las tablas de materias y exámenes)
  const alumno = {
    nombre: "Tomás",
    apellido: "Pérez",
    curso: "3.º Año",
    division: "A",
    institucion: "Escuela Belén"
  };

  const proximosEventos = [
    { id: 1, tipo: "examen", titulo: "Prueba de Matemática - Funciones", fecha: "Mañana, 08:30 hs", color: "text-janeriano-rojo", bg: "bg-red-50", border: "border-red-200" },
    { id: 2, tipo: "entrega", titulo: "Trabajo Práctico: Revolución de Mayo", fecha: "Viernes, 23:59 hs", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" },
  ];

  const materiasHoy = [
    { id: 1, hora: "07:30 - 08:50", nombre: "Literatura", profe: "Prof. Martínez", aula: "Aula 3" },
    { id: 2, hora: "09:00 - 10:20", nombre: "Matemática", profe: "Prof. Gómez", aula: "Aula 3" },
    { id: 3, hora: "10:30 - 11:50", nombre: "Biología", profe: "Prof. Silva", aula: "Laboratorio" },
  ];

  const ultimasNotas = [
    { id: 1, materia: "Inglés", detalle: "Evaluación Escrita", nota: 8.5 },
    { id: 2, materia: "Historia", detalle: "Exposición Oral", nota: 9 },
    { id: 3, materia: "Física", detalle: "Trabajo Práctico N° 2", nota: 7 },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      
      {/* Cabecera del Estudiante */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-janeriano-gris flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="w-16 h-16 bg-janeriano-rojo text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-md">
            {alumno.nombre.charAt(0)}{alumno.apellido.charAt(0)}
          </div>
          <div>
            <h1 className="font-serif text-2xl font-bold text-janeriano-marino">
              ¡Hola, {alumno.nombre}! 👋
            </h1>
            <p className="font-sans text-sm text-janeriano-marino/70 flex items-center gap-1.5 mt-1">
              <GraduationCap size={16} className="text-janeriano-rojo" />
              {alumno.curso} "{alumno.division}" · {alumno.institucion}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Columna Izquierda: Lo Urgente (Exámenes y Horarios) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Próximos Exámenes y Entregas */}
          <section className="bg-white rounded-2xl shadow-sm border border-janeriano-gris overflow-hidden">
            <div className="border-b border-janeriano-gris px-6 py-4 flex items-center justify-between">
              <h2 className="font-sans font-bold text-janeriano-marino flex items-center gap-2">
                <AlertCircle size={18} className="text-janeriano-rojo" />
                Próximos Vencimientos
              </h2>
            </div>
            <div className="p-6 grid gap-4">
              {proximosEventos.map(evento => (
                <div key={evento.id} className={`flex items-start gap-4 p-4 rounded-xl border ${evento.bg} ${evento.border}`}>
                  <div className={`mt-1 ${evento.color}`}>
                    {evento.tipo === 'examen' ? <FileText size={24} /> : <BookOpen size={24} />}
                  </div>
                  <div>
                    <h3 className="font-bold text-janeriano-marino">{evento.titulo}</h3>
                    <p className="text-sm font-medium text-janeriano-marino/80 flex items-center gap-1.5 mt-1">
                      <Clock size={14} /> {evento.fecha}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Horario de Hoy */}
          <section className="bg-white rounded-2xl shadow-sm border border-janeriano-gris overflow-hidden">
             <div className="border-b border-janeriano-gris px-6 py-4">
              <h2 className="font-sans font-bold text-janeriano-marino flex items-center gap-2">
                <Calendar size={18} className="text-janeriano-azul" />
                Horario de Hoy
              </h2>
            </div>
            <div className="p-0">
              <div className="divide-y divide-janeriano-gris">
                {materiasHoy.map(clase => (
                  <div key={clase.id} className="flex items-center justify-between p-4 px-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-bold text-janeriano-marino/50 w-24">{clase.hora}</span>
                      <div>
                        <p className="font-bold text-janeriano-marino">{clase.nombre}</p>
                        <p className="text-xs text-janeriano-marino/70">{clase.profe}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-janeriano-beige rounded-full text-janeriano-marino">
                      {clase.aula}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>

        {/* Columna Derecha: Rendimiento y Novedades */}
        <div className="space-y-6">
          
          {/* Últimas Calificaciones */}
          <section className="bg-white rounded-2xl shadow-sm border border-janeriano-gris overflow-hidden">
            <div className="bg-janeriano-marino px-6 py-4">
              <h2 className="font-sans font-bold text-white flex items-center gap-2">
                <CheckCircle size={18} />
                Últimas Notas
              </h2>
            </div>
            <div className="p-6 space-y-4">
              {ultimasNotas.map(nota => (
                <div key={nota.id} className="flex items-center justify-between border-b border-janeriano-gris last:border-0 pb-4 last:pb-0">
                  <div>
                    <p className="font-bold text-janeriano-marino text-sm">{nota.materia}</p>
                    <p className="text-xs text-janeriano-marino/70">{nota.detalle}</p>
                  </div>
                  <div className={`text-lg font-black ${nota.nota >= 7 ? 'text-green-600' : 'text-red-600'}`}>
                    {nota.nota}
                  </div>
                </div>
              ))}
              <button className="w-full mt-2 py-2 text-sm font-bold text-janeriano-azul hover:bg-janeriano-beige rounded-lg transition-colors border border-transparent hover:border-janeriano-gris">
                Ver Boletín Completo
              </button>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}