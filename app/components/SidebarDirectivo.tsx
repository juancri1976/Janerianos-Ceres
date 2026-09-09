"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, GraduationCap, BarChart3, Megaphone, LogOut, FileText } from "lucide-react";
// Ajustá esta ruta si es necesario según dónde tengas el archivo de actions
import { cerrarSesion } from "../(auth)/login/actions"; 

export default function SidebarDirectivo() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Tablero General", path: "/directivo/inicio", icon: LayoutDashboard },
    { name: "Estudiantes", path: "/directivo/estudiantes", icon: Users },
    { name: "Cuerpo Docente", path: "/directivo/docentes", icon: GraduationCap },
    { name: "Comunicaciones", path: "/directivo/comunicaciones", icon: Megaphone },
    { name: "Estadísticas", path: "/directivo/estadisticas", icon: BarChart3 },
    { name: "Admisiones", path: "/directivo/admisiones", icon: FileText }, // <-- Nueva línea
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col p-4 border-r border-gray-800 shadow-xl z-20">
      <div className="mb-8">
        <h1 className="font-serif text-2xl text-janeriano-dorado font-bold leading-tight drop-shadow-sm">
          Janerianos Ceres
        </h1>
        <p className="font-sans text-xs text-gray-400 mt-1 uppercase tracking-widest font-bold">
          Dirección General
        </p>
      </div>
      
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-sans text-sm transition-all duration-200 ${
                isActive 
                  ? "bg-janeriano-dorado text-white font-bold shadow-md" 
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <Icon size={20} className={isActive ? "text-white" : "text-gray-400"} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-800">
        <form action={cerrarSesion}>
          <button 
            type="submit"
            className="flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg font-sans text-sm text-gray-400 hover:bg-janeriano-rojo hover:text-white transition-colors group"
          >
            <LogOut size={20} className="group-hover:text-white transition-colors" /> 
            Cerrar Sesión
          </button>
        </form>
      </div>
    </aside>
  );
}