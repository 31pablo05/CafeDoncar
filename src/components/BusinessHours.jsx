"use client"

import { Clock, MapPin, Phone, Calendar, CheckCircle, XCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect, useMemo } from "react";

export default function BusinessHours() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [showAllDays, setShowAllDays] = useState(false);

  const schedule = useMemo(() => ({
    monday: { open: "18:00", close: "00:30", name: "Lunes" },
    tuesday: { open: "18:00", close: "00:30", name: "Martes" },
    wednesday: { open: "18:00", close: "00:30", name: "Miércoles" },
    thursday: { open: "18:00", close: "00:30", name: "Jueves" },
    friday: { open: "18:00", close: "01:00", name: "Viernes" },
    saturday: { open: "18:00", close: "01:00", name: "Sábado" },
    sunday: { open: "18:00", close: "00:30", name: "Domingo" }
  }), []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      const currentDay = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][now.getDay()];
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      
      const todaySchedule = schedule[currentDay];
      const [openHour, openMinute] = todaySchedule.open.split(':').map(Number);
      const [closeHour, closeMinute] = todaySchedule.close.split(':').map(Number);
      
      // Convertir a minutos para comparar más fácil
      const currentMinutes = currentHour * 60 + currentMinute;
      const openMinutes = openHour * 60 + openMinute;
      let closeMinutes = closeHour * 60 + closeMinute;
      
      // Si cierra después de medianoche, sumar 24 horas
      if (closeHour < openHour) {
        closeMinutes += 24 * 60;
      }
      
      // Si estamos después de medianoche y el horario cruza medianoche
      if (currentHour < 6 && closeHour < openHour) {
        const currentMinutesAdjusted = currentMinutes + 24 * 60;
        setIsOpen(currentMinutesAdjusted >= openMinutes && currentMinutesAdjusted <= closeMinutes);
      } else {
        setIsOpen(currentMinutes >= openMinutes && currentMinutes <= closeMinutes);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [schedule]);

  const today = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][new Date().getDay()];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-500/5 via-purple-500/10 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-500/30 rounded-2xl px-6 py-3">
              <Clock className="h-6 w-6 text-amber-400" />
              <span className="text-amber-300 font-semibold text-lg">Horarios y Contacto</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            ESTAMOS
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">
              DISPONIBLES
            </span>
          </h2>
          
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-500"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-500"></div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Conocé nuestros horarios de atención y cómo contactarnos
          </p>
        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12">
          
          {/* Estado Actual - Mejorado */}
          <div className="xl:col-span-1">
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-orange-500/30 to-red-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-amber-500/20 text-center h-full flex flex-col justify-center">
                
                {/* Estado */}
                <div className={`inline-flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-xl mb-6 mx-auto transition-all duration-300 ${
                  isOpen 
                    ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/50 shadow-lg shadow-green-500/20' 
                    : 'bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-400 border border-red-500/50 shadow-lg shadow-red-500/20'
                }`}>
                  {isOpen ? (
                    <CheckCircle className="w-6 h-6 animate-pulse" />
                  ) : (
                    <XCircle className="w-6 h-6 animate-pulse" />
                  )}
                  {isOpen ? 'ABIERTO AHORA' : 'CERRADO AHORA'}
                </div>
                
                {/* Hora actual */}
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 text-gray-400">
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm font-medium">Hora actual</span>
                  </div>
                  
                  <div className="text-white font-black text-4xl tracking-wider">
                    {currentTime.toLocaleTimeString('es-AR', { 
                      hour: '2-digit', 
                      minute: '2-digit',
                      hour12: false 
                    })}
                  </div>
                  
                  <div className="text-amber-300 text-sm font-medium">
                    {currentTime.toLocaleDateString('es-AR', { 
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long'
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Horarios - Completamente rediseñado */}
          <div className="xl:col-span-2">
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/30 to-pink-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-amber-500/20 h-full">
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl shadow-lg">
                    <Clock className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Horarios de Atención</h3>
                    <p className="text-gray-400 text-sm">
                      {showAllDays ? 'Todos los días de la semana' : 'Próximos días'}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {Object.entries(schedule)
                    .slice(0, showAllDays ? 7 : 3)
                    .map(([day, hours]) => {
                      const isToday = day === today;
                      
                      return (
                        <div key={day} className={`group/item relative overflow-hidden rounded-2xl transition-all duration-300 ${
                          isToday 
                            ? 'bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-red-500/20 border border-amber-500/40 shadow-lg shadow-amber-500/10 scale-105' 
                            : 'bg-gradient-to-r from-gray-700/30 to-gray-800/30 border border-gray-600/20 hover:border-amber-500/30 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-orange-500/10'
                        }`}>
                          
                          {isToday && (
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500"></div>
                          )}
                          
                          <div className="flex justify-between items-center p-4">
                            <div className="flex items-center gap-4">
                              <div className={`w-3 h-3 rounded-full ${
                                isToday ? 'bg-amber-400 animate-pulse shadow-lg shadow-amber-400/50' : 'bg-gray-500'
                              }`}></div>
                              
                              <div>
                                <span className={`font-bold text-lg ${
                                  isToday ? 'text-amber-300' : 'text-white'
                                }`}>
                                  {hours.name}
                                </span>
                                {isToday && (
                                  <span className="ml-3 text-xs font-medium text-amber-400 bg-amber-500/20 px-2 py-1 rounded-full">
                                    HOY
                                  </span>
                                )}
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <div className={`font-bold text-lg ${
                                isToday ? 'text-amber-200' : 'text-gray-300'
                              }`}>
                                {hours.open} - {hours.close}
                              </div>
                              <div className="text-xs text-gray-500">
                                {isToday && isOpen ? 'Abierto ahora' : 'Horario nocturno'}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
                
                {/* Botón Ver más / Ver menos */}
                <div className="mt-6 text-center">
                  <button
                    onClick={() => setShowAllDays(!showAllDays)}
                    className="group inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500/30 hover:to-orange-500/30 text-amber-300 hover:text-amber-200 font-semibold px-6 py-3 rounded-2xl border border-amber-500/30 hover:border-amber-500/50 transition-all duration-300 backdrop-blur-sm"
                  >
                    {showAllDays ? (
                      <>
                        <span>Ver menos</span>
                        <ChevronUp className="h-5 w-5 group-hover:transform group-hover:-translate-y-1 transition-transform duration-300" />
                      </>
                    ) : (
                      <>
                        <span>Ver todos los días ({Object.keys(schedule).length - 3} más)</span>
                        <ChevronDown className="h-5 w-5 group-hover:transform group-hover:translate-y-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Información de Contacto - Mejorada */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Ubicación */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-cyan-500/30 to-blue-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl shadow-lg flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">📍 Ubicación</h4>
                  <p className="text-blue-300 font-semibold text-lg mb-1">Pellegrini 1624</p>
                  <p className="text-gray-300 mb-3">Trelew, Chubut, Argentina</p>
                  <div className="text-sm text-gray-400">
                    En el corazón del centro de la ciudad
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contacto */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-emerald-500/30 to-green-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">📱 Contacto</h4>
                  <p className="text-green-300 font-semibold text-lg mb-1">+54 9 280 451-8716</p>
                  <p className="text-gray-300 mb-3">WhatsApp disponible</p>
                  <div className="text-sm text-gray-400">
                    Hacé tu pedido o consultanos cualquier duda
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
