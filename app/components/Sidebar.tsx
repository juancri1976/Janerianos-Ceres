"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// 1. Importamos los iconos elegantes y modernos
import { Home, Users, Megaphone, Calendar, LogOut } from "lucide-react";
import { cerrarSesion } from "../(auth)/login/actions";

export default function Sidebar() {
  const pathname = usePathname();

  // 2. Reemplazamos los strings por los componentes de Lucide
  const menuItems = [
    { name: "Inicio", path: "/familia/inicio", icon: Home },
    { name: "Mis Hijos", path: "/familia/hijos", icon: Users },
    { name: "Comunicaciones", path: "/familia/comunicaciones", icon: Megaphone },
    { name: "Calendario", path: "/familia/calendario", icon: Calendar },
  
  ];

  return (
    <aside className="w-64 bg-janeriano-marino text-white flex flex-col p-4 border-r border-janeriano-marino">
      <div className="mb-8">
        <h1 className="font-serif text-2xl text-janeriano-dorado font-bold leading-tight">
          Janerianos Ceres 
        </h1>
        <p className="font-sans text-sm text-janeriano-celeste mt-1">
          Campus Digital
        </p>
      </div>
      
      {/* Navegación */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);
          const Icon = item.icon; // Instanciamos el componente del icono
          
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-sans text-sm transition-all duration-200 ${
                isActive 
                  ? "bg-janeriano-azul text-white font-bold shadow-md" 
                  : "text-janeriano-gris hover:bg-janeriano-marino/80 hover:text-white"
              }`}
            >
              {/* Renderizamos el icono con un tamaño estándar */}
              <Icon size={20} className={isActive ? "text-white" : "text-janeriano-celeste"} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Botón de Salir (Inferior) */}
      <div className="mt-auto pt-4 border-t border-janeriano-celeste/20">
        <form action={cerrarSesion}>
          <button 
            type="submit"
            className="flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg font-sans text-sm text-janeriano-gris hover:bg-janeriano-rojo hover:text-white transition-colors group"
          >
            <LogOut size={20} className="text-janeriano-celeste group-hover:text-white transition-colors" /> 
            Cerrar Sesión
          </button>
        </form>
      </div>
    </aside>
  );
}