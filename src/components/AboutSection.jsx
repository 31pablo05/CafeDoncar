"use client"

import { useState, useRef, useEffect } from 'react';
import { Volume2, Calendar, MapPin, Heart, Star, Award, Clock } from 'lucide-react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  console.log('[AboutSection] Componente renderizado');

  useEffect(() => {
    console.log('[AboutSection] useEffect ejecutado');
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('[AboutSection] Intersection observer triggered:', entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      console.log('[AboutSection] Observer conectado al elemento');
      observer.observe(sectionRef.current);
    } else {
      console.log('[AboutSection] ⚠️ No se encontró el elemento sectionRef');
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Elementos Decorativos de Fondo Simplificados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orbes animados con gradientes coherentes - Más pequeños en móvil */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-20 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-amber-500/20 via-orange-500/15 to-amber-600/20 rounded-full blur-3xl animate-float-custom opacity-60"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-20 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-r from-orange-500/15 via-amber-500/10 to-orange-600/15 rounded-full blur-3xl animate-float-delayed opacity-50"></div>
        <div className="absolute top-1/2 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-r from-amber-400/10 via-orange-500/15 to-amber-500/10 rounded-full blur-2xl animate-pulse-slow"></div>
        
        {/* Patrón de rejilla sutil */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Partículas flotantes - Menos en móvil */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="hidden sm:block absolute w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-float shadow-lg opacity-40"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 0.3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        
        {/* Título de la sección mejorado */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-500/30 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3">
              <Award className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400" />
              <span className="text-amber-300 font-semibold text-base sm:text-lg">Conocé Café Doncar</span>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight px-2">
            NUESTRA
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 animate-gradient-x">
              HISTORIA
            </span>
          </h2>
          
          <div className="flex justify-center items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="h-px w-10 sm:w-20 bg-gradient-to-r from-transparent to-amber-500"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
            <div className="h-px w-10 sm:w-20 bg-gradient-to-l from-transparent to-amber-500"></div>
          </div>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Desde 2020, creando experiencias gastronómicas únicas en el corazón de Trelew
          </p>
        </div>

        {/* Grid principal mejorado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">
          
          {/* Video del local con marco mejorado */}
          <div className={`relative group transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative h-full">
              {/* Marco decorativo - Más sutil en móvil */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-amber-500/20 via-orange-500/30 to-red-500/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 h-full">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl aspect-[9/16] max-w-xs sm:max-w-sm mx-auto">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                    poster="/images/hoy.jpg"
                    controls={false}
                    playsInline
                    autoPlay
                    loop
                    muted
                  >
                    <source src="/videos/cafedoncar.mp4" type="video/mp4" />
                    Tu navegador no soporta la reproducción de videos.
                  </video>

                  {/* Controles adicionales */}
                  <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex gap-1 sm:gap-2">
                    <button className="bg-black/50 backdrop-blur-sm text-white p-1.5 sm:p-2 rounded-full hover:bg-black/70 transition-colors border border-white/20">
                      <Volume2 className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  </div>
                </div>

                {/* Título del video */}
                <div className="mt-4 sm:mt-6 text-center">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">🎥 Conocé nuestro local</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Video exclusivo de Café Doncar Trelew</p>
                </div>
              </div>
            </div>
          </div>

          {/* Información e imagen mejoradas */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Historia con diseño moderno */}
            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:scale-[1.02]">
              {/* Imagen de fondo */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
                style={{
                  backgroundImage: "url('/images/hoy.jpg')"
                }}
              ></div>
              
              {/* Contenido */}
              <div className="relative z-10 p-4 sm:p-6 lg:p-8">
                <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl sm:rounded-2xl shadow-lg">
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white drop-shadow-lg">Nuestra Historia</h3>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-2 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl sm:rounded-2xl border border-amber-500/30 backdrop-blur-md">
                    <div className="p-1.5 sm:p-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg sm:rounded-xl flex-shrink-0">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div>
                      <span className="text-amber-300 font-bold text-base sm:text-lg drop-shadow-md">29 de Septiembre 2020</span>
                      <p className="mt-1 sm:mt-2 text-gray-200 text-sm sm:text-base leading-relaxed drop-shadow-sm">Nace Café Doncar en el corazón de Trelew, con el sueño de crear experiencias gastronómicas únicas que despierten todos los sentidos.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-xl sm:rounded-2xl border border-amber-600/30 backdrop-blur-md">
                    <div className="p-1.5 sm:p-2 bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg sm:rounded-xl flex-shrink-0">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div>
                      <span className="text-amber-200 font-bold text-base sm:text-lg drop-shadow-md">Pellegrini 1624, Trelew</span>
                      <p className="mt-1 sm:mt-2 text-gray-200 text-sm sm:text-base leading-relaxed drop-shadow-sm">Nuestro local te espera con un ambiente cálido y acogedor en el centro de la ciudad, donde cada detalle está pensado para tu comodidad.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl sm:rounded-2xl border border-orange-500/30 backdrop-blur-md">
                    <div className="p-1.5 sm:p-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg sm:rounded-xl flex-shrink-0">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div>
                      <span className="text-orange-300 font-bold text-base sm:text-lg drop-shadow-md">+3 años de experiencia</span>
                      <p className="mt-1 sm:mt-2 text-gray-200 text-sm sm:text-base leading-relaxed drop-shadow-sm">Más de tres años perfeccionando nuestras recetas y brindando el mejor servicio a toda la familia trelewense.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-amber-500/30 via-orange-500/30 to-red-500/30 rounded-xl sm:rounded-2xl border border-amber-500/40 backdrop-blur-md">
                  <div className="text-center">
                    <div className="flex justify-center items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300 fill-current drop-shadow-md" />
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300 fill-current drop-shadow-md" />
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300 fill-current drop-shadow-md" />
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300 fill-current drop-shadow-md" />
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300 fill-current drop-shadow-md" />
                    </div>
                    <p className="text-white font-bold text-base sm:text-lg mb-1 sm:mb-2 drop-shadow-lg">
                      🍕🍔 <span className="text-amber-300">Especialistas en sabores únicos</span>
                    </p>
                    <p className="text-gray-200 text-sm sm:text-base drop-shadow-sm">
                      Recetas propias y elaboradas <strong className="text-red-300">100% caseras</strong> que conquistan paladares
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Call to Action mejorado */}
        <div className={`text-center mt-12 sm:mt-16 lg:mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative group inline-block">
            <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-2xl sm:rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
            
            <div className="relative inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-white font-bold py-4 sm:py-6 px-6 sm:px-10 rounded-2xl sm:rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer border border-white/20 backdrop-blur-sm" 
                 style={{background: 'linear-gradient(135deg, #fec15d 0%, #f59e0b 50%, #d97706 100%)'}}>
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 animate-bounce" />
              <span className="text-sm sm:text-lg lg:text-xl text-center">¡Visitanos en Pellegrini 1624!</span>
              <Heart className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 animate-pulse text-red-200" />
            </div>
          </div>
          
          <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg px-4 sm:px-0">
            🕒 <strong>Lunes a Domingo</strong> | 11:00 - 23:00 hs
          </p>
        </div>

      </div>
    </section>
  );
}
