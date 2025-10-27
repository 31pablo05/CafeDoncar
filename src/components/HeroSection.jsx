"use client"

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react";

export default function HeroSection({ onCategoryFilter }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slides del carrusel con imágenes y video reales
  const slides = [
    {
      id: 1,
      type: "image",
      src: "/images/don1.jpg",
      title: "HAMBURGUESAS GOURMET",
      subtitle: "Sabores que revolucionan tu paladar",
      description: "Ingredientes premium, carnes selectas y salsas artesanales",
      cta: "Probar Ahora",
      action: "menu-hamburguesas"
    },
    {
      id: 2,
      type: "image", 
      src: "/images/don2.jpg",
      title: "PIZZAS ARTESANALES",
      subtitle: "Tradición italiana con toque moderno",
      description: "Masa fermentada 48hrs, quesos importados y vegetales frescos",
      cta: "Descubrir Más",
      action: "menu-pizzas"
    },
    {
      id: 3,
      type: "image",
      src: "/images/don3.jpg", 
      title: "AMBIENTE ÚNICO",
      subtitle: "El lugar perfecto para compartir",
      description: "Diseño moderno, música perfecta y la mejor compañía",
      cta: "Conocer Local",
      action: "nosotros"
    },
    {
      id: 4,
      type: "video",
      src: "/videos/vid1.mp4",
      title: "EXPERIENCIA DONCAR",
      subtitle: "Vive la magia de cada momento",
      description: "Descubre todo lo que tenemos preparado para ti",
      cta: "Ver Más",
      action: "menu-todos"
    },
    {
      id: 5,
      type: "video",
      src: "/videos/Diseño sin título (1).mp4",
      title: "NUEVAS CREACIONES",
      subtitle: "Descubre nuestros platos más recientes",
      description: "Innovación y tradición en cada bocado",
      cta: "Ver Más",
      action: "menu-todos"
    }
  ];

  // Auto-play del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Aumenté a 6 segundos para dar más tiempo al video

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Función de navegación inteligente para los botones
  const handleCTAClick = (action) => {
    const currentAction = slides[currentSlide].action;
    
    switch (currentAction) {
      case 'menu-hamburguesas':
        // Ir al menú y filtrar por hamburguesas
        scrollToSection('menu');
        setTimeout(() => {
          if (onCategoryFilter) {
            onCategoryFilter('Hamburguesas');
          }
        }, 500);
        break;
        
      case 'menu-pizzas':
        // Ir al menú y filtrar por pizzas
        scrollToSection('menu');
        setTimeout(() => {
          if (onCategoryFilter) {
            onCategoryFilter('Pizzas');
          }
        }, 500);
        break;
        
      case 'nosotros':
        // Ir a la sección nosotros
        scrollToSection('nosotros');
        break;
        
      case 'menu-todos':
        // Ir al menú completo
        scrollToSection('menu');
        setTimeout(() => {
          if (onCategoryFilter) {
            onCategoryFilter('Todos');
          }
        }, 500);
        break;
        
      default:
        // Fallback al menú
        scrollToSection('menu');
        break;
    }
  };

  // Función de smooth scroll
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const top = element.offsetTop - 100; // Ajuste para el header fijo
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      className="relative w-full h-screen min-h-screen flex items-center overflow-hidden"
      style={{ zIndex: 1, marginTop: 0, paddingTop: 0 }}
    >
      {/* Carrusel de Imágenes y Video de Fondo */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-110'
            }`}
          >
            {slide.type === "video" ? (
              <video
                src={slide.src}
                className="w-full h-full object-cover object-center"
                muted
                loop
                playsInline
                onLoadedMetadata={(e) => {
                  // Solo reproduce automáticamente si es el slide activo
                  if (index === currentSlide) {
                    e.target.play();
                  }
                }}
                ref={(video) => {
                  if (video && index === currentSlide) {
                    video.play();
                  } else if (video && index !== currentSlide) {
                    video.pause();
                  }
                }}
              />
            ) : (
              <img
                src={slide.src || "/placeholder.svg"}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
            )}
            {/* Overlay Mejorado para mejor legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-black/30"></div>
          </div>
        ))}
      </div>

      {/* Elementos Decorativos Animados - Reducidos en móvil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-amber-400/20 sm:bg-amber-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-32 h-32 sm:w-40 sm:h-40 bg-orange-400/20 sm:bg-orange-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-400/20 sm:bg-yellow-400/30 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/2 w-24 h-24 sm:w-36 sm:h-36 bg-stone-400/10 sm:bg-stone-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Partículas Flotantes - Solo en pantallas grandes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`hidden sm:block absolute w-2 h-2 bg-amber-400/40 rounded-full animate-bounce`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Contenido Principal */}
      <div className="relative z-20 w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-center h-full min-h-screen pt-16 lg:pt-20">
          
          {/* Contenido Principal Centrado */}
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left max-w-4xl mx-auto lg:mx-0 w-full">
            {/* Badge Superior */}
            <div className="inline-flex items-center space-x-2 backdrop-blur-sm border border-orange-400/40 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-2xl" style={{background: 'rgba(46, 45, 43, 0.8)'}}>
              <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-current" style={{color: '#fdbc5c'}} />
              <span className="text-white font-semibold text-xs sm:text-sm drop-shadow-lg">Calidad Premium</span>
            </div>

            {/* Título Principal */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-white drop-shadow-2xl block animate-fadeInUp" style={{ textShadow: '0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)' }}>
                  {slides[currentSlide].title.split(' ')[0]}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500 drop-shadow-2xl block animate-fadeInUp delay-200" style={{ filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.8))', backgroundImage: `linear-gradient(45deg, #fdbc5c, #f59e0b)` }}>
                  {slides[currentSlide].title.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 font-bold animate-fadeInUp delay-300 drop-shadow-2xl" style={{ filter: 'drop-shadow(0 0 15px rgba(0,0,0,0.8))' }}>
                {slides[currentSlide].subtitle}
              </h2>
            </div>

            {/* Descripción */}
            <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed max-w-lg sm:max-w-2xl mx-auto lg:mx-0 animate-fadeInUp delay-400 px-4 sm:px-0 drop-shadow-2xl font-medium" style={{ textShadow: '0 0 15px rgba(0,0,0,0.8)' }}>
              {slides[currentSlide].description}
            </p>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fadeInUp delay-500 px-4 sm:px-0">
              <button 
                onClick={handleCTAClick}
                className="group text-white px-6 py-3 sm:px-8 sm:py-3 rounded-2xl font-bold text-base sm:text-lg shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-1 duration-300 flex items-center justify-center space-x-2" 
                style={{background: 'linear-gradient(90deg, #fdbc5c 0%, #f59e0b 100%)', boxShadow: '0 10px 30px rgba(253, 188, 92, 0.25)'}}
              >
                <span>{slides[currentSlide].cta}</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Indicadores de Estadísticas */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6 max-w-xs sm:max-w-md mx-auto lg:mx-0 animate-fadeInUp delay-600">
              {[
                { number: "500+", label: "Clientes Felices", gradient: "from-orange-300 to-orange-500" },
                { number: "50+", label: "Platos Únicos", gradient: "from-stone-300 to-stone-500" },
                { number: "4.9", label: "Rating Promedio", gradient: "from-amber-400 to-orange-500" }
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left bg-black/20 backdrop-blur-sm rounded-xl p-2 sm:p-3 border border-white/10">
                  <div className={`text-lg sm:text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`} style={{ 
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))',
                    WebkitTextStroke: '1px rgba(255,255,255,0.1)'
                  }}>
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-white font-semibold mt-1" style={{ 
                    textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                    fontSize: window.innerWidth < 640 ? '10px' : '12px'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>

          {/* Controles del Carrusel */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-3 sm:space-x-6 backdrop-blur-xl rounded-full px-4 py-3 sm:px-6 sm:py-4 border shadow-2xl" style={{background: 'rgba(46, 45, 43, 0.8)', borderColor: 'rgba(253, 188, 92, 0.3)'}}>
          
          {/* Botón Anterior */}
          <button
            onClick={prevSlide}
            className="p-1.5 sm:p-2 rounded-full bg-white/20 border border-white/30 transition-all duration-300 hover:scale-110"
            style={{'&:hover': {backgroundColor: 'rgba(253, 188, 92, 0.3)', borderColor: 'rgba(253, 188, 92, 0.5)'}}}
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white drop-shadow-lg" />
          </button>

          {/* Indicadores de Slide */}
          <div className="flex space-x-2 sm:space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'scale-125 shadow-lg'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                style={index === currentSlide ? {background: 'linear-gradient(45deg, #fdbc5c, #f59e0b)'} : {}}
              />
            ))}
          </div>

          {/* Botón Siguiente */}
          <button
            onClick={nextSlide}
            className="p-1.5 sm:p-2 rounded-full bg-white/20 border border-white/30 transition-all duration-300 hover:scale-110"
            style={{'&:hover': {backgroundColor: 'rgba(253, 188, 92, 0.3)', borderColor: 'rgba(253, 188, 92, 0.5)'}}}
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-white drop-shadow-lg" />
          </button>
        </div>
      </div>

      {/* Indicador de Progreso */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1" style={{backgroundColor: 'rgba(46, 45, 43, 0.4)'}}>
        <div 
          className="h-full transition-all duration-300 ease-linear shadow-lg"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            background: 'linear-gradient(90deg, #fdbc5c 0%, #f59e0b 100%)'
          }}
        />
      </div>
    </section>
  );
}
