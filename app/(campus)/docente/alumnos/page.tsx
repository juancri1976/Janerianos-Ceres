"use client";

import { useState } from "react";
import { Users, Search, Filter, CheckCircle, XCircle, Clock, AlertCircle, Edit3, MessageSquare, FileDown } from "lucide-react";

export default function MisAlumnosPage() {
  // Simulamos los datos que vendrían de la base de datos (con la asistencia ya cargada por preceptoría)
  const [alumnos] = useState([
    { id: 1, nombre: "Álvarez, Mateo", inicial: "M", asistenciaHoy: "presente" },
    { id: 2, nombre: "Domínguez, Lucía", inicial: "L", asistenciaHoy: "presente" },
    { id: 3, nombre: "García, Tomás", inicial: "T", asistenciaHoy: "tarde" },
    { id: 4, nombre: "Pérez, Sofía", inicial: "S", asistenciaHoy: "ausente" },
    { id: 5, nombre: "Romero, Valentina", inicial: "V", asistenciaHoy: null },
    { id: 6, nombre: "Zanetti, Franco", inicial: "Z", asistenciaHoy: null },
  ]);

  // Función para renderizar la etiqueta visual de asistencia (Solo lectura para el docente)
  const renderBadgeAsistencia = (estado: string | null) => {
    switch (estado) {
      case 'presente':
        return <span className="flex items-center gap-1.5 w-fit px-2.5 py-1 bg-green-50 text-green-700 rounded-md text-xs font-bold border border-green-200"><CheckCircle size={14}/> Presente</span>;
      case 'ausente':
        return <span className="flex items-center gap-1.5 w-fit px-2.5 py-1 bg-red-50 text-red-700 rounded-md text-xs font-bold border border-red-200"><XCircle size={14}/> Ausente</span>;
      case 'tarde':
        return <span className="flex items-center gap-1.5 w-fit px-2.5 py-1 bg-yellow-50 text-yellow-700 rounded-md text-xs font-bold border border-yellow-200"><Clock size={14}/> Tarde</span>;
      default:
        return <span className="flex items-center gap-1.5 w-fit px-2.5 py-1 bg-gray-100 text-gray-500 rounded-md text-xs font-bold border border-gray-200"><AlertCircle size={14}/> Sin registrar</span>;
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      
      {/* Cabecera */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-janeriano-gris pb-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-janeriano-marino flex items-center gap-3">
            <Users className="text-janeriano-verde" size={32} />
            Mis Alumnos
          </h1>
          <p className="font-sans text-janeriano-marino/70 mt-1">
            Gestión académica y seguimiento
          </p>
        </div>
        
        {/* Selector de Curso */}
        <div className="w-full md:w-auto">
          <label className="text-xs font-bold text-janeriano-marino/70 uppercase mb-1 block">Curso actual</label>
          <select className="w-full md:w-64 bg-white border border-janeriano-gris rounded-lg px-4 py-2 text-sm font-semibold text-janeriano-marino outline-none focus:border-janeriano-verde transition-colors shadow-sm">
            <option>Ciencias Naturales - 5.º Grado</option>
            <option>Biología - 1.º Año</option>
          </select>
        </div>
      </div>

      {/* Barra de Herramientas */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-janeriano-gris flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-janeriano-gris" size={18} />
          <input 
            type="text" 
            placeholder="Buscar alumno..." 
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-janeriano-gris focus:border-janeriano-verde outline-none text-sm transition-colors"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-janeriano-gris text-janeriano-marino rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors flex-1 md:flex-none">
            <Filter size={16} /> Filtros
          </button>
          <button className="flex items-center justify-center gap-2 px-6 py-2 bg-janeriano-verde text-white rounded-lg text-sm font-bold shadow-md hover:bg-green-800 transition-colors flex-1 md:flex-none">
            <FileDown size={16} /> Exportar Planilla
          </button>
        </div>
      </div>

      {/* Lista de Alumnos */}
      <div className="bg-white rounded-xl shadow-sm border border-janeriano-gris overflow-hidden">
        {/* Encabezado de la lista */}
        <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-janeriano-gris text-xs font-bold text-janeriano-marino/70 uppercase tracking-wide">
          <div className="col-span-5">Alumno</div>
          <div className="col-span-3">Asistencia (Hoy)</div>
          <div className="col-span-4 text-right pr-4">Acciones Académicas</div>
        </div>

        {/* Filas de alumnos */}
        <div className="divide-y divide-janeriano-gris">
          {alumnos.map((alumno) => (
            <div key={alumno.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center hover:bg-gray-50 transition-colors">
              
              {/* Info del Alumno */}
              <div className="col-span-1 md:col-span-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-janeriano-verde/10 text-janeriano-verde flex items-center justify-center font-bold text-sm">
                  {alumno.inicial}
                </div>
                <div>
                  <p className="font-bold text-janeriano-marino text-sm">{alumno.nombre}</p>
                  <p className="text-xs text-janeriano-marino/60">Legajo #10{alumno.id}8</p>
                </div>
              </div>

              {/* Etiqueta de Asistencia (Solo lectura) */}
              <div className="col-span-1 md:col-span-3 flex items-center">
                {renderBadgeAsistencia(alumno.asistenciaHoy)}
              </div>

              {/* Botonera de Acciones (Tareas del docente) */}
              <div className="col-span-1 md:col-span-4 flex justify-start md:justify-end gap-2">
                
                {/* Botón Observación */}
                <button className="flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-janeriano-gris text-janeriano-marino rounded-lg text-xs font-bold hover:border-janeriano-dorado hover:text-janeriano-dorado transition-colors">
                  <MessageSquare size={16} />
                  <span className="hidden xl:inline">Observación</span>
                </button>

                {/* Botón Calificar */}
                <button className="flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-janeriano-verde text-janeriano-verde rounded-lg text-xs font-bold hover:bg-janeriano-verde hover:text-white transition-all shadow-sm">
                  <Edit3 size={16} />
                  <span>Calificar</span>
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}