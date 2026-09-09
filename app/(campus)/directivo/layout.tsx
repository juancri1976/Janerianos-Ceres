import SidebarDirectivo from "../../components/SidebarDirectivo";

export default function DirectivoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full bg-janeriano-beige">
      
      <SidebarDirectivo />

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="h-16 bg-white border-b border-janeriano-gris flex items-center px-6 justify-between shadow-sm z-10">
          <span className="font-sans text-janeriano-marino font-semibold">
            Visión Institucional — Escuela Sagrada Familia & Escuela Belén
          </span>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-janeriano-dorado text-white flex items-center justify-center text-xs font-bold shadow-md cursor-pointer hover:bg-yellow-600 transition-colors">
              DIR
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 relative">
          {children}
        </main>
      </div>
    </div>
  );
}