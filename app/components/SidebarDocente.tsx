"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, BookOpen, Megaphone, Calendar, LogOut } from "lucide-react";
import { cerrarSesion } from "../(auth)/login/actions";

export default function SidebarDocente() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Inicio", path: "/docente/inicio", icon: Home },
    { name: "Mis Cursos", path: "/docente/cursos", icon: BookOpen },
    { name: "Mis Alumnos", path: "/docente/alumnos", icon: Users },
    { name: "Comunicaciones", path: "/docente/comunicaciones", icon: Megaphone },
    { name: "Calendario", path: "/docente/calendario", icon: Calendar },
  ];

  return (
    // Cambiamos el fondo principal al nuevo verde
    <aside className="w-64 bg-janeriano-verde text-white flex flex-col p-4 border-r border-janeriano-verde shadow-lg z-20">
      <div className="mb-8">
        <h1 className="font-serif text-2xl text-janeriano-dorado font-bold leading-tight drop-shadow-sm">
          Janerianos Ceres de Ceres
        </h1>
        <p className="font-sans text-sm text-white/90 mt-1 font-medium tracking-wide">
          Portal Docente
        </p>
      </div>
      
      {/* Navegación del Docente */}
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
                  ? "bg-white text-janeriano-verde font-bold shadow-md" // Botón activo invertido
                  : "text-white/80 hover:bg-white/10 hover:text-white"  // Botón inactivo
              }`}
            >
              <Icon size={20} className={isActive ? "text-janeriano-verde" : "text-white/80"} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Botón de Salir */}
      <div className="mt-auto pt-4 border-t border-white/20">
        <form action={cerrarSesion}>
          <button 
            type="submit"
            className="flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg font-sans text-sm text-white/80 hover:bg-janeriano-rojo hover:text-white transition-colors group"
          >
            <LogOut size={20} className="group-hover:text-white transition-colors" /> 
            Cerrar Sesión
          </button>
        </form>
      </div>
    </aside>
  );
}