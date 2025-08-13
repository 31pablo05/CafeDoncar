"use client"

import { MapPin, Phone, Clock, Star, Truck } from 'lucide-react';

export default function DeliveryBanner() {
  return (
    <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 text-white py-8 px-4 relative overflow-hidden animate-fadeInUp">
      {/* Elementos decorativos de fondo simplificados */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center text-center md:text-left">
          
          {/* Delivery Propio */}
          <div className="group flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3 transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/30 group-hover:bg-white/40 p-4 rounded-full transition-all duration-300 group-hover:shadow-2xl shadow-black/20">
              <Truck className="h-7 w-7 text-amber-800 group-hover:text-amber-900 transition-colors duration-300" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-white drop-shadow-lg group-hover:text-yellow-100 transition-colors duration-300">Delivery Propio</h3>
              <p className="text-yellow-100 text-sm font-medium drop-shadow-md group-hover:text-white transition-colors duration-300">Entrega gratuita en Trelew</p>
            </div>
          </div>

          {/* Tiempo de entrega */}
          <div className="group flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3 transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/30 group-hover:bg-white/40 p-4 rounded-full transition-all duration-300 group-hover:shadow-2xl shadow-black/20">
              <Clock className="h-7 w-7 text-amber-800 group-hover:text-amber-900 transition-colors duration-300" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-white drop-shadow-lg group-hover:text-yellow-100 transition-colors duration-300">30-45 min</h3>
              <p className="text-yellow-100 text-sm font-medium drop-shadow-md group-hover:text-white transition-colors duration-300">Tiempo de entrega</p>
            </div>
          </div>

          {/* Zona de cobertura */}
          <div className="group flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3 transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/30 group-hover:bg-white/40 p-4 rounded-full transition-all duration-300 group-hover:shadow-2xl shadow-black/20">
              <MapPin className="h-7 w-7 text-amber-800 group-hover:text-amber-900 transition-colors duration-300" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-white drop-shadow-lg group-hover:text-yellow-100 transition-colors duration-300">Trelew, Chubut</h3>
              <p className="text-yellow-100 text-sm font-medium drop-shadow-md group-hover:text-white transition-colors duration-300">Pellegrini 1624</p>
            </div>
          </div>

          {/* Contacto directo */}
          <div className="group flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3 transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/30 group-hover:bg-white/40 p-4 rounded-full transition-all duration-300 group-hover:shadow-2xl shadow-black/20">
              <Phone className="h-7 w-7 text-amber-800 group-hover:text-amber-900 transition-colors duration-300" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-white drop-shadow-lg group-hover:text-yellow-100 transition-colors duration-300">280 4518716</h3>
              <p className="text-yellow-100 text-sm font-medium drop-shadow-md group-hover:text-white transition-colors duration-300">Pedidos WhatsApp</p>
            </div>
          </div>
        </div>

        {/* Call to Action Mejorado */}
        <div className="mt-8 text-center animate-fadeInUp delay-300">
          <div className="inline-flex items-center space-x-3 bg-white/25 hover:bg-white/35 backdrop-blur-sm px-8 py-4 rounded-2xl border-2 border-white/40 hover:border-white/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-black/20 group">
            <Star className="h-6 w-6 text-yellow-200 animate-pulse group-hover:text-yellow-100 transition-colors duration-300" />
            <span className="font-bold text-lg text-white drop-shadow-lg group-hover:text-yellow-100 transition-colors duration-300">🍕🍔 Especialistas en Pizzas y Hamburguesas 100% Caseras</span>
            <Star className="h-6 w-6 text-yellow-200 animate-pulse group-hover:text-yellow-100 transition-colors duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
