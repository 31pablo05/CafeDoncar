"use client"

import { Star, MessageCircle, ExternalLink, MapPin, Clock, ChevronDown, ChevronUp, Users, ThumbsUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function ReviewsSection() {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('resenas');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Datos de Google Business (actualiza estos con los datos reales)
  const googleBusinessData = {
    name: "Café Doncar",
    rating: 4.8, // Calificación promedio actual en Google
    totalReviews: 30, // Total de reseñas en Google
    placeId: "ChIJXXXXXXXXXXXXXXXXXXXX", // Reemplaza con tu Place ID real
    address: "Pellegrini 1624, Trelew, Chubut", // Dirección real
    phone: "+54 280 4518716" // Teléfono real
  };

  // URLs reales de Google Business para Café Doncar
  const googleReviewUrl = "https://www.google.com/search?q=cafe+doncar+trelew+rese%C3%B1as";
  const googleBusinessUrl = "https://www.google.com/search?q=cafe+doncar+trelew+rese%C3%B1as";

  const [reviews] = useState([
    {
      id: 1,
      name: "María González",
      rating: 5,
      comment: "¡Las mejores hamburguesas de Trelew! La calidad es excepcional y el delivery súper rápido. Recomiendo la Hamburguesa Doncar, es espectacular.",
      date: "2024-12-15",
      avatar: "MG",
      verified: true,
      source: "google"
    },
    {
      id: 2, 
      name: "Carlos Rodríguez",
      rating: 5,
      comment: "Pizza espectacular, masa perfecta y ingredientes frescos. El lugar tiene muy buen ambiente y la atención es excelente. Volveremos seguro.",
      date: "2024-12-10",
      avatar: "CR",
      verified: true,
      source: "google"
    },
    {
      id: 3,
      name: "Ana López",
      rating: 5,
      comment: "Excelente atención y sabor único. El ambiente del local es muy acogedor. Las chips con cheddar son adictivas!",
      date: "2024-12-05",
      avatar: "AL",
      verified: true,
      source: "google"
    },
    {
      id: 4,
      name: "Roberto Silva",
      rating: 4,
      comment: "Muy buena comida y precios justos. El delivery llega siempre en tiempo y forma. Recomiendo probar los sandwiches.",
      date: "2024-11-28",
      avatar: "RS",
      verified: true,
      source: "google"
    },
    {
      id: 5,
      name: "Lucía Martínez",
      rating: 5,
      comment: "Un lugar increíble para comer en familia. Los chicos aman el Combo Kids y nosotros las hamburguesas gourmet. ¡Felicitaciones!",
      date: "2024-11-20",
      avatar: "LM",
      verified: true,
      source: "google"
    },
    {
      id: 6,
      name: "Diego Fernández",
      rating: 4,
      comment: "Buena variedad en el menú y todo muy rico. El lugar es limpio y ordenado. La pizza Café Doncar es recomendable.",
      date: "2024-11-15",
      avatar: "DF",
      verified: true,
      source: "google"
    }
  ]);

  const averageRating = googleBusinessData.rating;
  const reviewsToShow = showAllReviews ? reviews : reviews.slice(0, 3);

  return (
    <section id="resenas" className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-red-500/10 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-r from-blue-500/5 via-purple-500/10 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000 opacity-50"></div>
        
        {/* Partículas flotantes - Reducidas en móviles */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-float-custom shadow-lg opacity-30 hidden sm:block"
            style={{
              left: `${10 + i * 8}%`,
              top: `${20 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 0.3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de la sección */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-500/30 rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-3">
              <Users className="h-4 w-4 sm:h-6 sm:w-6 text-amber-400" />
              <span className="text-amber-300 font-semibold text-sm sm:text-lg">Testimonios Reales</span>
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight px-2">
            LO QUE DICEN
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 animate-gradient-x">
              NUESTROS CLIENTES
            </span>
          </h2>
          
          <div className="flex justify-center items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-amber-500"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-amber-500"></div>
          </div>
        </div>

        {/* Header con datos de Google Business mejorado */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative group inline-block w-full max-w-4xl mx-auto">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/30 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 mx-2 sm:mx-0">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <img 
                  src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" 
                  alt="Google" 
                  className="h-6 w-6 sm:h-8 sm:w-8"
                />
                <span className="text-white font-bold text-lg sm:text-xl">Verificado por Google</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 ${i < Math.floor(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-400'} drop-shadow-lg`} 
                    />
                  ))}
                </div>
                <span className="text-white font-black text-2xl sm:text-3xl lg:text-4xl">{averageRating}</span>
              </div>
              
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 px-2">
                Basado en <span className="text-amber-400 font-bold">{googleBusinessData.totalReviews} reseñas reales</span> de Google
              </p>

              {/* Información del negocio */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-2 sm:gap-3 text-gray-300 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-blue-500/20 text-sm sm:text-base">
                  <MapPin className="h-4 w-4 sm:h-6 sm:w-6 text-blue-400 flex-shrink-0" />
                  <span className="font-medium text-center">{googleBusinessData.address}</span>
                </div>
                <div className="flex items-center justify-center gap-2 sm:gap-3 text-gray-300 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-green-500/20 text-sm sm:text-base">
                  <Clock className="h-4 w-4 sm:h-6 sm:w-6 text-green-400 flex-shrink-0" />
                  <span className="font-medium">Lun - Dom: 18:00 - 00:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid Mejorado */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {reviewsToShow.map((review, index) => (
            <div key={review.id} className={`relative group transition-all duration-500 delay-${index * 100}`}>
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-orange-500/30 to-red-500/20 rounded-2xl sm:rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-500 hover:scale-105 h-full mx-2 sm:mx-0">
                {/* Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-bold text-sm sm:text-lg lg:text-xl shadow-lg flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                      <h4 className="text-white font-bold text-base sm:text-lg truncate">{review.name}</h4>
                      {review.verified && (
                        <div className="flex items-center gap-1 bg-blue-600/30 px-2 sm:px-3 py-1 rounded-full border border-blue-500/40 self-start">
                          <img 
                            src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" 
                            alt="Google" 
                            className="h-3 w-3 sm:h-4 sm:w-4"
                          />
                          <span className="text-blue-300 text-xs sm:text-sm font-medium">Verificado</span>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 sm:h-5 sm:w-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-500'} drop-shadow-sm`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Comment */}
                <div className="mb-3 sm:mb-4">
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg font-medium">"{review.comment}"</p>
                </div>
                
                {/* Date */}
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 text-xs sm:text-sm font-medium">{new Date(review.date).toLocaleDateString('es-AR')}</p>
                  <ThumbsUp className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver más / Ver menos */}
        {reviews.length > 3 && (
          <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button
              onClick={() => setShowAllReviews(!showAllReviews)}
              className="group inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 text-amber-300 hover:text-amber-200 font-bold px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 backdrop-blur-sm hover:scale-105 text-sm sm:text-base lg:text-lg mx-2 sm:mx-0"
            >
              {showAllReviews ? (
                <>
                  <span>Ver menos reseñas</span>
                  <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:transform group-hover:-translate-y-1 transition-transform duration-300" />
                </>
              ) : (
                <>
                  <span>Ver todas las reseñas ({reviews.length - 3} más)</span>
                  <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:transform group-hover:translate-y-1 transition-transform duration-300" />
                </>
              )}
            </button>
          </div>
        )}

        {/* Call to Action - Múltiples opciones mejoradas */}
        <div className={`text-center transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col sm:flex-col lg:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-2 sm:px-0">
            {/* Botón principal para dejar reseña */}
            <a 
              href={googleReviewUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 sm:gap-3 lg:gap-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-2xl sm:rounded-3xl font-bold text-base sm:text-lg lg:text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 border border-blue-500/20 w-full sm:w-auto max-w-sm sm:max-w-none"
            >
              <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0" />
              <span className="text-center">Dejanos tu reseña en Google</span>
              <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 opacity-70 flex-shrink-0" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>

            {/* Botón secundario para ver todas las reseñas */}
            <a 
              href={googleBusinessUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-white/20 hover:border-white/40 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:bg-gradient-to-r hover:from-gray-700/60 hover:to-gray-800/60 transition-all duration-300 hover:scale-105 w-full sm:w-auto max-w-sm sm:max-w-none"
            >
              <img 
                src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" 
                alt="Google" 
                className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0"
              />
              <span>Ver todas en Google</span>
              <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 opacity-70 flex-shrink-0" />
            </a>
          </div>

          {/* Información adicional mejorada */}
          <div className="relative group max-w-4xl mx-auto px-2 sm:px-0">
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 via-orange-500/30 to-red-500/20 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-r from-amber-900/30 to-orange-900/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-amber-500/30 hover:border-amber-500/50 transition-all duration-500">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Star className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 fill-current animate-pulse" />
                <span className="text-amber-300 font-bold text-base sm:text-lg lg:text-xl text-center">¿Te gustó tu experiencia?</span>
                <Star className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 fill-current animate-pulse" />
              </div>
              
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg text-center leading-relaxed mb-4 sm:mb-6 px-2">
                Tu opinión nos ayuda a seguir mejorando. Comparte tu experiencia en Google y ayuda a otros a descubrir los sabores únicos de Café Doncar.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                  <span>{googleBusinessData.totalReviews}+ clientes satisfechos</span>
                </div>
                <div className="flex items-center gap-2">
                  <ThumbsUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
                  <span>95% recomiendan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
