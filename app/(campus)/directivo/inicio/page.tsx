import { Users, GraduationCap, TrendingUp, AlertTriangle, Building2, BellRing } from "lucide-react";

export default function InicioDirectivoPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Saludo */}
      <div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-janeriano-marino">
          Panel de Dirección General
        </h1>
        <p className="font-sans text-janeriano-marino/70 mt-1">
          Resumen de actividad en tiempo real de Janerianos Ceres.
        </p>
      </div>

      {/* Tarjetas de Métricas Principales (KPIs) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* KPI 1: Alumnos Sagrada Familia */}
        <div className="bg-white p-5 rounded-xl border border-janeriano-gris shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <div className="w-10 h-10 rounded-lg bg-janeriano-azul/10 text-janeriano-azul flex items-center justify-center">
              <Building2 size={20} />
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md">+2% este año</span>
          </div>
          <p className="text-xs font-bold text-janeriano-marino/60 uppercase tracking-wide">Sagrada Familia (Primaria)</p>
          <h3 className="font-serif text-3xl font-bold text-janeriano-marino mt-1">452 <span className="text-sm font-sans text-janeriano-marino/50 font-normal">alumnos</span></h3>
        </div>

        {/* KPI 2: Alumnos Belén */}
        <div className="bg-white p-5 rounded-xl border border-janeriano-gris shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <div className="w-10 h-10 rounded-lg bg-janeriano-rojo/10 text-janeriano-rojo flex items-center justify-center">
              <Building2 size={20} />
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md">Estable</span>
          </div>
          <p className="text-xs font-bold text-janeriano-marino/60 uppercase tracking-wide">Escuela Belén (Secundaria)</p>
          <h3 className="font-serif text-3xl font-bold text-janeriano-marino mt-1">328 <span className="text-sm font-sans text-janeriano-marino/50 font-normal">alumnos</span></h3>
        </div>

        {/* KPI 3: Asistencia Global Hoy */}
        <div className="bg-white p-5 rounded-xl border border-janeriano-gris shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <div className="w-10 h-10 rounded-lg bg-janeriano-verde/10 text-janeriano-verde flex items-center justify-center">
              <TrendingUp size={20} />
            </div>
          </div>
          <p className="text-xs font-bold text-janeriano-marino/60 uppercase tracking-wide">Asistencia Global Hoy</p>
          <h3 className="font-serif text-3xl font-bold text-janeriano-marino mt-1">94% <span className="text-sm font-sans text-janeriano-marino/50 font-normal">presentes</span></h3>
        </div>

        {/* KPI 4: Personal Docente */}
        <div className="bg-white p-5 rounded-xl border border-janeriano-gris shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <div className="w-10 h-10 rounded-lg bg-janeriano-dorado/10 text-janeriano-dorado flex items-center justify-center">
              <GraduationCap size={20} />
            </div>
          </div>
          <p className="text-xs font-bold text-janeriano-marino/60 uppercase tracking-wide">Personal Docente</p>
          <h3 className="font-serif text-3xl font-bold text-janeriano-marino mt-1">68 <span className="text-sm font-sans text-janeriano-marino/50 font-normal">activos</span></h3>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Acciones Rápidas */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-janeriano-gris overflow-hidden">
          <div className="border-b border-janeriano-gris p-4 bg-gray-50 flex items-center gap-2">
            <BellRing className="text-janeriano-dorado" size={20} />
            <h2 className="font-sans font-bold text-janeriano-marino">Herramientas Gerenciales</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="p-4 border border-janeriano-gris rounded-xl text-left hover:border-janeriano-dorado hover:shadow-md transition-all group">
              <h3 className="font-bold text-janeriano-marino group-hover:text-janeriano-dorado transition-colors">Comunicado Institucional</h3>
              <p className="text-xs text-janeriano-marino/70 mt-1">Enviar aviso masivo a todas las familias o docentes.</p>
            </button>
            <button className="p-4 border border-janeriano-gris rounded-xl text-left hover:border-janeriano-dorado hover:shadow-md transition-all group">
              <h3 className="font-bold text-janeriano-marino group-hover:text-janeriano-dorado transition-colors">Reportes Académicos</h3>
              <p className="text-xs text-janeriano-marino/70 mt-1">Generar boletines o estadísticas de rendimiento.</p>
            </button>
          </div>
        </div>

        {/* Alertas Institucionales */}
        <div className="bg-white rounded-xl shadow-sm border border-janeriano-gris overflow-hidden">
          <div className="border-b border-janeriano-gris p-4 bg-gray-50 flex items-center gap-2">
            <AlertTriangle className="text-janeriano-rojo" size={20} />
            <h2 className="font-sans font-bold text-janeriano-marino">Atención Requerida</h2>
          </div>
          <div className="p-4 space-y-3">
            <div className="p-3 bg-red-50 border border-red-100 rounded-lg flex gap-3">
              <div className="mt-0.5"><AlertTriangle size={16} className="text-red-500" /></div>
              <div>
                <p className="text-sm font-bold text-red-800">Baja asistencia en 3.º Año</p>
                <p className="text-xs text-red-600 mt-1">El nivel de ausentismo superó el 15% en el día de hoy.</p>
              </div>
            </div>
            <div className="p-3 bg-yellow-50 border border-yellow-100 rounded-lg flex gap-3">
              <div className="mt-0.5"><Users size={16} className="text-yellow-600" /></div>
              <div>
                <p className="text-sm font-bold text-yellow-800">4 Familias sin registrar</p>
                <p className="text-xs text-yellow-700 mt-1">Aún hay perfiles de tutores pendientes de validación.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}