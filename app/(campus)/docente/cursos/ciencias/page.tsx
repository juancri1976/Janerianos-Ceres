import { Users, FileText, Bell, Calendar, MessageSquare, PlusCircle, CheckCircle, FileUp } from "lucide-react";
import Link from "next/link";

export default function AulaVirtualPage() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      
      {/* Cabecera del Curso (Header) */}
      <div className="bg-white rounded-2xl shadow-sm border border-janeriano-gris overflow-hidden relative">
        <div className="h-4 w-full bg-janeriano-verde"></div>
        <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-janeriano-verde uppercase tracking-wide bg-janeriano-verde/10 px-2 py-1 rounded-md">
                Escuela Sagrada Familia
              </span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-janeriano-marino">
              Ciencias Naturales - 5.º Grado
            </h1>
            <p className="font-sans text-janeriano-marino/70 mt-1 flex items-center gap-4 text-sm font-medium">
              <span className="flex items-center gap-1"><Users size={16} /> 28 Alumnos</span>
              <span className="flex items-center gap-1"><Calendar size={16} /> Lunes y Jueves</span>
            </p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-janeriano-verde text-white rounded-lg text-sm font-bold shadow-md hover:bg-green-800 transition-colors">
              <PlusCircle size={18} />
              Nuevo Aviso
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Columna Principal (Izquierda) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Tablero de Actividad */}
          <div className="bg-white rounded-xl shadow-sm border border-janeriano-gris overflow-hidden">
            <div className="border-b border-janeriano-gris p-4 bg-gray-50 flex items-center gap-2">
              <MessageSquare className="text-janeriano-verde" size={20} />
              <h2 className="font-sans font-bold text-janeriano-marino">Tablero del Aula</h2>
            </div>
            
            <div className="p-0">
              {/* Publicación 1 */}
              <div className="p-5 border-b border-janeriano-gris hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-janeriano-verde text-white flex items-center justify-center text-xs font-bold">LG</div>
                    <div>
                      <p className="font-bold text-sm text-janeriano-marino">Prof. Laura Gómez</p>
                      <p className="text-xs text-janeriano-marino/60">Hace 2 horas</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold bg-janeriano-celeste/20 text-janeriano-azul px-2 py-1 rounded-md">
                    Material
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-janeriano-marino mt-2">Guía de estudio: La Fotosíntesis</h3>
                <p className="text-sm text-janeriano-marino/80 mt-1">
                  Chicos, les dejo adjunta la guía de lectura que usaremos en la clase del jueves. Por favor, traiganla leída.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex items-center gap-2 border border-janeriano-gris rounded-lg px-3 py-2 bg-white cursor-pointer hover:border-janeriano-verde transition-colors">
                    <FileText size={16} className="text-janeriano-rojo" />
                    <span className="text-xs font-bold text-janeriano-marino">guia-fotosintesis.pdf</span>
                  </div>
                </div>
              </div>

              {/* Publicación 2 */}
              <div className="p-5 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-janeriano-verde text-white flex items-center justify-center text-xs font-bold">LG</div>
                    <div>
                      <p className="font-bold text-sm text-janeriano-marino">Prof. Laura Gómez</p>
                      <p className="text-xs text-janeriano-marino/60">Ayer</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold bg-red-100 text-janeriano-rojo px-2 py-1 rounded-md">
                    Aviso Importante
                  </span>
                </div>
                <p className="text-sm text-janeriano-marino/80 mt-2 font-medium">
                  Recordatorio: Mañana es la entrega del trabajo práctico sobre ecosistemas locales. No se aceptarán entregas fuera de término.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Secundaria (Derecha) */}
        <div className="space-y-6">
          
          {/* Accesos Rápidos del Curso */}
          <div className="bg-white rounded-xl shadow-sm border border-janeriano-gris overflow-hidden">
             <div className="border-b border-janeriano-gris p-4 bg-gray-50">
              <h2 className="font-sans font-bold text-janeriano-marino text-sm">Gestión del Curso</h2>
            </div>
            <div className="p-2 space-y-1">
              <button className="w-full flex items-center gap-3 p-3 hover:bg-janeriano-verde/10 rounded-lg transition-colors text-left group">
                <CheckCircle size={18} className="text-janeriano-verde group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-janeriano-marino">Tomar Asistencia</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 hover:bg-janeriano-verde/10 rounded-lg transition-colors text-left group">
                <FileUp size={18} className="text-janeriano-verde group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-janeriano-marino">Subir Calificaciones</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 hover:bg-janeriano-verde/10 rounded-lg transition-colors text-left group">
                <Users size={18} className="text-janeriano-verde group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-janeriano-marino">Lista de Alumnos (28)</span>
              </button>
            </div>
          </div>

          {/* Próximas Entregas / Evaluaciones */}
          <div className="bg-white rounded-xl shadow-sm border border-janeriano-gris overflow-hidden">
             <div className="border-b border-janeriano-gris p-4 bg-gray-50 flex items-center gap-2">
              <Bell size={18} className="text-janeriano-dorado" />
              <h2 className="font-sans font-bold text-janeriano-marino text-sm">Próximos Eventos</h2>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex gap-3 items-start">
                <div className="bg-janeriano-beige rounded-lg p-2 text-center min-w-[50px]">
                  <p className="text-xs font-bold text-janeriano-marino uppercase">Ago</p>
                  <p className="text-lg font-serif font-bold text-janeriano-marino">24</p>
                </div>
                <div>
                  <p className="font-bold text-sm text-janeriano-marino">Examen Parcial</p>
                  <p className="text-xs text-janeriano-marino/70">Unidad 3: El cuerpo humano</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}