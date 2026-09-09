import SidebarDocente from "../../components/SidebarDocente";

export default function DocenteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full bg-janeriano-beige">
      
      {/* Sidebar exclusivo del Docente */}
      <SidebarDocente />

      {/* Área de Contenido Principal */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Header */}
        <header className="h-16 bg-white border-b border-janeriano-gris flex items-center px-6 justify-between shadow-sm z-10">
          <span className="font-sans text-janeriano-marino font-semibold">
            Educar · Acompañar · Crecer — Panel Docente
          </span>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-janeriano-azul text-white flex items-center justify-center text-xs font-bold shadow-md cursor-pointer hover:bg-janeriano-marino transition-colors">
              LG
            </div>
          </div>
        </header>

        {/* Contenido Dinámico */}
        <main className="flex-1 overflow-y-auto p-6 relative">
          {children}
        </main>

      </div>
    </div>
  );
}