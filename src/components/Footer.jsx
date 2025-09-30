import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Heart, Star, ChefHat, ArrowUp, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
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

    const footerElement = document.getElementById('contacto');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <footer id="contacto" className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      {/* Elementos Decorativos de Fondo Mejorados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orbes animados con gradientes dinámicos */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-red-500/15 rounded-full blur-3xl animate-float-custom opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-red-500/10 via-pink-500/15 to-purple-500/10 rounded-full blur-3xl animate-float-delayed opacity-50"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-500/8 via-cyan-500/12 to-teal-500/8 rounded-full blur-2xl animate-pulse-slow"></div>
        
        {/* Patrón de rejilla sutil */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#footer-grid)" />
          </svg>
        </div>

        {/* Partículas flotantes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-float-custom shadow-lg opacity-30"
            style={{
              left: `${5 + i * 4.5}%`,
              top: `${10 + (i % 5) * 20}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + i * 0.2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Línea de brillo superior animada */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Título de la sección */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-500/30 rounded-2xl px-6 py-3">
              <Sparkles className="h-6 w-6 text-amber-400 animate-pulse" />
              <span className="text-amber-300 font-semibold text-lg">Conectemos</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            MANTENETE
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 animate-gradient-x">
              CONECTADO
            </span>
          </h2>
          
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-500"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-500"></div>
          </div>
        </div>

        {/* Sección Principal del Footer Mejorada */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Columna 1: Información del Restaurante Mejorada */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 via-orange-500/30 to-red-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <ChefHat className="h-10 w-10 text-red-400 group-hover:text-red-300 transition-all duration-300 group-hover:rotate-12" />
                      <div className="absolute inset-0 bg-red-400/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <h3 className="text-xl font-black bg-gradient-to-r from-red-400 via-orange-400 to-red-600 bg-clip-text text-transparent">
                        CAFÉ DONCAR
                      </h3>
                      <img 
                        src="/svg/logodonnuevo.svg" 
                        alt="Logo Café Doncar" 
                        className="h-10 w-10 object-contain group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed text-sm">
                    🍕🍔 Desde el 29 de septiembre de 2020 en Trelew, Chubut. Nos destacamos por nuestras recetas propias y elaboradas 100% caseras.
                  </p>
                  
                  <div className="flex items-center gap-2 text-amber-400 text-sm">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-semibold">Especialistas en pizzas y hamburguesas</span>
                  </div>
                </div>
                
                <div className="flex space-x-3 mt-6">
                  {[
                    { icon: Facebook, href: "https://www.facebook.com/cafedoncar#", color: "from-blue-500 to-blue-600" },
                    { icon: Instagram, href: "https://www.instagram.com/cafedoncar/", color: "from-pink-500 to-purple-600" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/social relative p-4 bg-gradient-to-r ${social.color} bg-opacity-10 hover:bg-opacity-20 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl hover:-translate-y-1 border border-white/10 hover:border-white/30`}
                    >
                      <social.icon className="h-6 w-6 text-white group-hover/social:scale-110 transition-transform duration-300" />
                      <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover/social:opacity-20 rounded-2xl transition-opacity duration-300`}></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

         
          {/* Columna 2: Información de Contacto */}
          <div className={`space-y-6 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-green-500/20 via-emerald-500/30 to-teal-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-500 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Contacto</h4>
                </div>
                
                <div className="space-y-4">
                  {[
                    { icon: MapPin, text: "Pellegrini 1624, Trelew, Chubut", link: "https://maps.google.com/?q=Pellegrini+1624,+Trelew,+Chubut", color: "text-blue-400" },
                    { icon: Phone, text: "280 4518716", link: "tel:2804518716", color: "text-green-400" },
                    { icon: Instagram, text: "@cafedoncar", link: "https://www.instagram.com/cafedoncar/", color: "text-pink-400" },
                    { icon: Clock, text: "Lun-Dom: 18:00 - 00:30", link: null, color: "text-amber-400" }
                  ].map((contact, index) => (
                    <div key={index} className="group/contact flex items-start space-x-3 p-3 hover:bg-gradient-to-r hover:from-green-500/10 hover:to-emerald-500/10 rounded-xl transition-all duration-300 border border-transparent hover:border-green-500/30">
                      <contact.icon className={`h-5 w-5 ${contact.color} group-hover/contact:scale-110 transition-transform duration-300 flex-shrink-0 mt-0.5`} />
                      {contact.link ? (
                        <a 
                          href={contact.link}
                          target={contact.link.startsWith('http') ? '_blank' : '_self'}
                          rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="text-gray-300 group-hover/contact:text-white transition-colors duration-300 hover:underline text-sm leading-relaxed"
                        >
                          {contact.text}
                        </a>
                      ) : (
                        <span className="text-gray-300 group-hover/contact:text-white transition-colors duration-300 text-sm leading-relaxed">
                          {contact.text}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Columna 3: Mapa de Ubicación Mejorado */}
          <div className={`space-y-6 transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 via-yellow-500/30 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-500 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">📍 Encuéntranos</h4>
                </div>
                
                <div className="relative group/map">
                  <div className="overflow-hidden rounded-2xl border-2 border-amber-400/30 group-hover/map:border-amber-400/60 transition-all duration-500 shadow-lg hover:shadow-amber-400/20">
                    <iframe
                      src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=es&amp;q=Pellegrini%201624,%20Trelew,%20Chubut&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación Café Doncar - Pellegrini 1624, Trelew, Chubut"
                      className="grayscale hover:grayscale-0 transition-all duration-500 transform group-hover/map:scale-105"
                    />
                  </div>
                  
                  {/* Overlay con información */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/map:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-white text-sm font-semibold flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Pellegrini 1624
                      </p>
                      <p className="text-gray-200 text-xs">Trelew, Chubut</p>
                    </div>
                  </div>
                </div>
                
                {/* Botón para abrir en Google Maps */}
                <div className="mt-4">
                  <a
                    href="https://maps.google.com/?q=Pellegrini+1624,+Trelew,+Chubut"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 text-amber-300 hover:text-amber-200 font-semibold px-4 py-2 rounded-xl border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 group/link"
                  >
                    <MapPin className="h-4 w-4 group-hover/link:scale-110 transition-transform duration-300" />
                    <span>Abrir en Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Línea Separadora Animada Mejorada */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 w-20 h-1 rounded-full animate-pulse shadow-lg shadow-amber-500/30"></div>
          </div>
        </div>

        {/* Footer Bottom Mejorado */}
        <div className={`flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">© {currentYear} Café Doncar.</span>
              <span className="text-gray-400">Todos los derechos reservados.</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400 group/dev">
            <span>Desarrollado con</span>
            <Heart className="h-4 w-4 text-red-400 animate-pulse" />
            <span>por</span>
            <a 
              href="https://dev-craft-lake.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 font-bold transition-all duration-300 hover:underline group-hover/dev:scale-105 transform px-2 py-1 rounded-lg hover:bg-red-400/10"
            >
              Pablo Proboste
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
