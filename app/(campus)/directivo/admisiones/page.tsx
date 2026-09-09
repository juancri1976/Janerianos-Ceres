import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { Users, Search, Clock, CheckCircle, AlertCircle, FileDown, Building2 } from "lucide-react";

export const revalidate = 0; 

export default async function AdmisionesAdminPage({
  searchParams,
}: {
  searchParams: { filtro?: string };
}) {
  const filtroActual = searchParams.filtro || "todas";

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
  const supabase = createClient(supabaseUrl, supabaseKey);

  // Armamos la consulta base
  let query = supabase
    .from("pre_inscripciones")
    .select("*")
    .order("fecha_registro", { ascending: false });

  // Aplicamos el filtro según la pestaña seleccionada
  if (filtroActual === "sagrada-familia") {
    query = query.eq("nivel", "sala_3");
  } else if (filtroActual === "belen") {
    query = query.eq("nivel", "secundaria_1");
  }

  const { data: inscripciones } = await query;

  const formatearFecha = (fechaIso: string) => {
    return new Date(fechaIso).toLocaleDateString("es-AR", {
      day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit"
    });
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Cabecera */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-janeriano-gris pb-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-janeriano-marino flex items-center gap-3">
            <Users className="text-janeriano-azul" size={32} />
            Gestión de Admisiones
          </h1>
          <p className="font-sans text-janeriano-marino/70 mt-1">
            Bandeja de entrada de pre-inscripciones.
          </p>
        </div>
      </div>

      {/* Pestañas de Institución (TABS) */}
      <div className="flex gap-2 border-b border-janeriano-gris">
        <Link 
          href="/directivo/admisiones" 
          className={`px-4 py-2 font-bold text-sm border-b-2 transition-colors ${filtroActual === 'todas' ? 'border-janeriano-marino text-janeriano-marino' : 'border-transparent text-janeriano-marino/50 hover:text-janeriano-marino'}`}
        >
          Visión Global
        </Link>
        <Link 
          href="/directivo/admisiones?filtro=sagrada-familia" 
          className={`flex items-center gap-2 px-4 py-2 font-bold text-sm border-b-2 transition-colors ${filtroActual === 'sagrada-familia' ? 'border-janeriano-azul text-janeriano-azul' : 'border-transparent text-janeriano-marino/50 hover:text-janeriano-azul'}`}
        >
          <Building2 size={16} /> Sagrada Familia
        </Link>
        <Link 
          href="/directivo/admisiones?filtro=belen" 
          className={`flex items-center gap-2 px-4 py-2 font-bold text-sm border-b-2 transition-colors ${filtroActual === 'belen' ? 'border-janeriano-rojo text-janeriano-rojo' : 'border-transparent text-janeriano-marino/50 hover:text-janeriano-rojo'}`}
        >
          <Building2 size={16} /> Escuela Belén
        </Link>
      </div>

      {/* Barra de Herramientas */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-janeriano-gris flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-janeriano-gris" size={18} />
          <input 
            type="text" 
            placeholder="Buscar por nombre o tutor..." 
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-janeriano-gris focus:border-janeriano-azul outline-none text-sm transition-colors"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-2 bg-janeriano-marino text-white rounded-lg text-sm font-bold shadow-md hover:bg-janeriano-azul transition-colors w-full md:w-auto">
          <FileDown size={16} /> Exportar a Excel
        </button>
      </div>

      {/* Tabla de Datos */}
      <div className="bg-white rounded-xl shadow-sm border border-janeriano-gris overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-janeriano-gris text-xs font-bold text-janeriano-marino/70 uppercase tracking-wide">
                <th className="p-4">Fecha / Hora</th>
                <th className="p-4">Alumno</th>
                <th className="p-4">Nivel Postulado</th>
                <th className="p-4">Tutor a Cargo</th>
                <th className="p-4">Contacto</th>
                <th className="p-4">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-janeriano-gris text-sm">
              
              {inscripciones && inscripciones.length > 0 ? (
                inscripciones.map((inscripcion) => (
                  <tr key={inscripcion.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-janeriano-marino/70 whitespace-nowrap">
                      {formatearFecha(inscripcion.fecha_registro)}
                    </td>
                    <td className="p-4 font-bold text-janeriano-marino whitespace-nowrap">
                      {inscripcion.nombre_alumno}
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-md text-xs font-bold border ${
                        inscripcion.nivel === 'sala_3' 
                          ? 'bg-blue-50 text-blue-700 border-blue-200' 
                          : 'bg-red-50 text-red-700 border-red-200'
                      }`}>
                        {inscripcion.nivel === 'sala_3' ? 'Sala de 3' : '1.º Año Sec.'}
                      </span>
                    </td>
                    <td className="p-4 text-janeriano-marino whitespace-nowrap">
                      {inscripcion.nombre_tutor}
                    </td>
                    <td className="p-4 text-janeriano-marino/80 whitespace-nowrap">
                      <div>{inscripcion.telefono_contacto}</div>
                      <div className="text-xs opacity-70">{inscripcion.correo_electronico}</div>
                    </td>
                    <td className="p-4">
                      {inscripcion.estado === 'pendiente' ? (
                        <span className="flex items-center gap-1.5 w-fit px-2.5 py-1 bg-yellow-50 text-yellow-700 rounded-md text-xs font-bold border border-yellow-200">
                          <Clock size={14}/> Pendiente
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 w-fit px-2.5 py-1 bg-green-50 text-green-700 rounded-md text-xs font-bold border border-green-200">
                          <CheckCircle size={14}/> Revisado
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-janeriano-marino/50">
                    <AlertCircle size={32} className="mx-auto mb-2 opacity-50" />
                    No hay pre-inscripciones en esta institución.
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}