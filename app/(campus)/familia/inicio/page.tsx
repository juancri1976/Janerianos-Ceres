import { supabase } from "@/lib/supabase";

export default async function InicioFamiliaPage() {
  // 1. Buscamos a la Familia Pérez (por ahora usando su email simulando un login)
  const { data: familia } = await supabase
    .from('familias')
    .select('*')
    .eq('email_contacto', 'usuario@familia.com')
    .single();

  // 2. Buscamos a TODOS los hijos que pertenezcan al ID de esta familia
  const { data: hijos } = await supabase
    .from('alumnos')
    .select('*')
    .eq('familia_id', familia?.id);

  // 3. Traemos las comunicaciones más recientes
  const { data: comunicaciones } = await supabase
    .from('comunicaciones')
    .select('*')
    .order('fecha_publicacion', { ascending: false })
    .limit(2); // Solo mostramos las 2 más recientes en el inicio

  return (
    <div className="space-y-6">
      
      {/* Saludo Dinámico */}
      <div>
        <h1 className="font-serif text-3xl font-bold text-janeriano-marino">
          ¡Hola, {familia?.nombre_familia}! 👋
        </h1>
        <p className="font-sans text-janeriano-marino/70 mt-1">
          Bienvenido al Campus Digital de la Janerianos Ceres.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Columna Izquierda: Mis Hijos (Renderizado desde Supabase) */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="font-sans text-xl font-bold text-janeriano-marino border-b border-janeriano-gris pb-2">
            Mis Hijos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hijos?.map((hijo) => (
              <div key={hijo.id} className="bg-white p-4 rounded-xl shadow-sm border border-janeriano-gris flex items-center gap-4 hover:border-janeriano-azul transition-colors cursor-pointer">
                <div className={`w-12 h-12 rounded-full ${hijo.color_avatar} flex items-center justify-center text-white font-bold text-lg`}>
                  {hijo.inicial_avatar}
                </div>
                <div>
                  <h3 className="font-sans font-bold text-janeriano-marino">{hijo.nombre}</h3>
                  <p className="text-xs text-janeriano-marino/70">{hijo.nivel} · {hijo.institucion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Columna Derecha: Comunicaciones (Renderizado desde Supabase) */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-janeriano-gris overflow-hidden">
            <div className="bg-janeriano-rojo px-4 py-3">
              <h2 className="font-sans font-bold text-white text-sm">
                Comunicaciones Recientes
              </h2>
            </div>
            <div className="p-4 space-y-3">
              {comunicaciones?.map((com) => (
                <div key={com.id} className={`border-l-4 ${com.color_borde} pl-3`}>
                  <p className="text-xs font-bold text-janeriano-marino">{com.tipo}</p>
                  <p className="text-sm text-janeriano-marino/80 line-clamp-2">{com.titulo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}