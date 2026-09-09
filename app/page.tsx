import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Heart, GraduationCap, Award, Calendar, PlayCircle, ArrowRight, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-janeriano-beige flex flex-col font-sans">
      
      {/* Navbar Público */}
      <header className="bg-white/90 backdrop-blur-md border-b border-janeriano-gris sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <Image 
                src="/escudo-amj.png" 
                alt="Escudo Janerianos Ceres" 
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="font-serif text-xl font-bold text-janeriano-marino leading-tight">
                Janerianos Ceres
              </h1>
              <p className="text-xs font-semibold text-janeriano-azul uppercase tracking-widest">
                Santa Fe - Argentina
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <Link href="#inscripciones" className="text-sm font-bold text-janeriano-marino hover:text-janeriano-azul transition-colors">
              Inscripciones 2027
            </Link>
            <Link 
              href="/login" 
              className="flex items-center gap-2 px-6 py-2.5 bg-janeriano-azul text-white rounded-full text-sm font-bold shadow-md hover:bg-janeriano-marino hover:shadow-lg transition-all duration-300"
            >
              Ingresar al Campus <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* HERO SECTION CON IMAGEN Y GLASSMORPHISM */}
        <section className="relative w-full px-6 py-20 flex flex-col items-center text-center min-h-[90vh] justify-center">
          
          {/* IMAGEN DE FONDO */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/escuela.jpg"
              alt="Patio de la Escuela"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-janeriano-beige/40 via-black/20 to-janeriano-beige"></div>
          </div>

          {/* TARJETA DE VIDRIO */}
          <div className="max-w-5xl w-full text-center relative z-10 space-y-8 bg-white/30 backdrop-blur-xl p-5 sm:p-7 rounded-[3rem] shadow-2xl border border-white/40">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-janeriano-gris shadow-sm mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold text-janeriano-marino uppercase tracking-wide">
                Plataforma Educativa Integral
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-janeriano-marino leading-tight flex flex-row justify-center items-center gap-2 md:gap-4 whitespace-nowrap drop-shadow-md">
              <span>Educar</span>
              <span className="text-janeriano-azul/50 text-2xl md:text-4xl">•</span>
              <span>Acompañar</span>
              <span className="text-janeriano-azul/50 text-2xl md:text-4xl">•</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-janeriano-azul to-janeriano-celeste drop-shadow-sm">Crecer</span>
            </h2>
            
            <p className="font-sans text-lg md:text-xl text-janeriano-marino max-w-2xl mx-auto leading-relaxed font-bold drop-shadow-md">
              Un solo ecosistema digital que une a las familias, docentes y directivos de la 
              <strong className="text-janeriano-marino font-black"> Escuela Sagrada Familia</strong> y la <strong className="text-janeriano-marino font-black">Escuela Belén</strong>.
            </p>
          </div>

          {/* Tarjetas de las Instituciones */}
          <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 relative z-10">
            <div className="bg-white/85 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/60 hover:border-janeriano-azul transition-colors group text-left cursor-default">
              <div className="w-14 h-14 bg-janeriano-azul/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                <Heart className="text-janeriano-azul" size={28} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-janeriano-marino mb-2">
                Escuela Sagrada Familia
              </h3>
              <p className="text-sm text-janeriano-marino/60 font-semibold uppercase tracking-widest mb-4">
                Sala 3 a 7.º Grado
              </p>
              <p className="text-janeriano-marino/80 text-sm leading-relaxed font-medium">
                Formación inicial y primaria con profundos valores de fe, contención y excelencia académica para los más chicos.
              </p>
            </div>

            <div className="bg-white/85 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/60 hover:border-janeriano-rojo transition-colors group text-left cursor-default">
              <div className="w-14 h-14 bg-janeriano-rojo/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                <GraduationCap className="text-janeriano-rojo" size={28} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-janeriano-marino mb-2">
                Escuela Belén
              </h3>
              <p className="text-sm text-janeriano-marino/60 font-semibold uppercase tracking-widest mb-4">
                1.º a 5.º Año Secundario
              </p>
              <p className="text-janeriano-marino/80 text-sm leading-relaxed font-medium">
                Educación secundaria enfocada en el crecimiento personal, el desarrollo de habilidades y la preparación para el futuro.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 1: OFERTA EDUCATIVA Y LOGROS */}
        <section className="w-full px-6 py-20 bg-janeriano-beige relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-janeriano-marino">Nuestra Oferta Educativa</h2>
              <p className="font-sans text-janeriano-marino/70 mt-4 max-w-2xl mx-auto">Formamos a nuestros alumnos con un enfoque integral, preparándolos para los desafíos del mañana con bases sólidas.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <Award className="text-janeriano-dorado mx-auto mb-4" size={40} />
                <h3 className="font-bold text-lg text-janeriano-marino mb-2">Excelencia Académica</h3>
                <p className="text-sm text-janeriano-marino/70">Programas actualizados, robótica, idiomas y seguimiento personalizado de cada estudiante.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <Star className="text-janeriano-dorado mx-auto mb-4" size={40} />
                <h3 className="font-bold text-lg text-janeriano-marino mb-2">Formación en Valores</h3>
                <p className="text-sm text-janeriano-marino/70">Educación pastoral, proyectos solidarios y un profundo compromiso con nuestra comunidad.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <Calendar className="text-janeriano-dorado mx-auto mb-4" size={40} />
                <h3 className="font-bold text-lg text-janeriano-marino mb-2">Deporte y Cultura</h3>
                <p className="text-sm text-janeriano-marino/70">Campamentos, torneos intercolegiales, ferias de ciencias y muestras artísticas anuales.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: VIDEO INSTITUCIONAL */}
        <section className="w-full px-6 py-24 bg-janeriano-marino text-white relative z-10">
          <div className="absolute inset-0 bg-[url('/escuela.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Conocé Nuestra Institución</h2>
            
            <div className="relative w-full max-w-3xl mx-auto aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20 group cursor-pointer">
              <Image src="/alumnos.jpg" alt="Video cover" fill className="object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-janeriano-azul/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <PlayCircle size={40} className="text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-left">
                <p className="font-bold text-lg">Recorrido por nuestro campus</p>
                <p className="text-sm text-white/70">Duración: 2:15 min</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: VIDA ESCOLAR (GALERÍA) */}
        <section className="w-full px-6 py-20 bg-white relative z-10">
          <div className="max-w-5xl mx-auto">
             <div className="flex flex-col md:flex-row justify-between items-end mb-10">
              <div>
                <h2 className="font-serif text-3xl font-bold text-janeriano-marino">Vida Escolar</h2>
                <p className="font-sans text-janeriano-marino/70 mt-2">Momentos inolvidables de nuestra comunidad.</p>
              </div>
              <button className="text-janeriano-azul font-bold text-sm flex items-center gap-1 hover:underline mt-4 md:mt-0">
                Ver galería completa <ArrowRight size={16} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-janeriano-beige/50 group">
                 <Image src="/foto1.jpg" alt="Vida Escolar 1" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden bg-janeriano-beige/50 group">
                 <Image src="/foto2.jpg" alt="Vida Escolar 2" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden bg-janeriano-beige/50 group">
                 <Image src="/foto3.jpg" alt="Vida Escolar 3" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 4: INSCRIPCIONES (CTA FINAL) */}
        <section id="inscripciones" className="w-full px-6 py-20 bg-janeriano-beige relative z-10">
          <div className="max-w-4xl mx-auto bg-white p-10 md:p-14 rounded-[3rem] shadow-xl text-center border border-janeriano-gris">
            <h2 className="font-serif text-4xl font-bold text-janeriano-marino mb-4">¡Sé parte de nuestra historia!</h2>
            <p className="text-lg text-janeriano-marino/70 mb-10 max-w-xl mx-auto">
              Ya se encuentran abiertas las pre-inscripciones para el próximo ciclo lectivo. Asegurá el lugar de tus hijos en nuestra comunidad.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              
              {/* BOTÓN SALA DE 3 */}
              <Link href="/admisiones-salita" className="flex flex-col items-center p-6 border-2 border-janeriano-azul rounded-2xl hover:bg-janeriano-azul hover:text-white transition-colors group">
                <Heart size={32} className="text-janeriano-azul group-hover:text-white mb-2" />
                <span className="font-bold text-lg">Sala de 3 Años</span>
                <span className="text-sm opacity-70">Sagrada Familia</span>
              </Link>
              
              {/* BOTÓN SECUNDARIA */}
              <Link href="/admisiones-secundario" className="flex flex-col items-center p-6 border-2 border-janeriano-rojo rounded-2xl hover:bg-janeriano-rojo hover:text-white transition-colors group">
                <GraduationCap size={32} className="text-janeriano-rojo group-hover:text-white mb-2" />
                <span className="font-bold text-lg">1.º Año Secundaria</span>
                <span className="text-sm opacity-70">Escuela Belén</span>
              </Link>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-janeriano-marino text-white/50 py-10 text-center text-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center relative">
                <Image src="/escudo-amj.png" alt="Escudo" fill className="opacity-100 object-contain p-1" />
             </div>
            <p>© {new Date().getFullYear()} Janerianos Ceres.</p>
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Admisiones</span>
            <span className="hover:text-white cursor-pointer transition-colors">Soporte Técnico</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacidad</span>
          </div>
        </div>
      </footer>
    </div>
  );
}