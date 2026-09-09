import Sidebar from "../../components/Sidebar";

export default function FamiliaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full bg-janeriano-beige">
      
      {/* Sidebar original de la Familia */}
      <Sidebar />

      {/* Área de Contenido Principal */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Header */}
        <header className="h-16 bg-white border-b border-janeriano-gris flex items-center px-6 justify-between shadow-sm z-10">
          <span className="font-sans text-janeriano-marino font-semibold">
            Educar · Acompañar · Crecer
          </span>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-janeriano-azul text-white flex items-center justify-center text-xs font-bold shadow-md cursor-pointer hover:bg-janeriano-marino transition-colors">
              JP
            </div>
          </div>
        </header>

        {/* Contenido Dinámico (Las páginas) */}
        <main className="flex-1 overflow-y-auto p-6 relative">
          {children}
        </main>

      </div>
    </div>
  );
}