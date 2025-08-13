"use client"

import { useState } from 'react';
import { ShoppingCart, MessageCircle } from 'lucide-react';

export default function FloatingActionButton({ cartItemsCount, onCartClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const quickOrderWhatsApp = () => {
    const phoneNumber = "5492804518716";
    const message = encodeURIComponent(`¡Hola Café Doncar! 🍔

Me gustaría hacer un pedido para delivery. ¿Podrían ayudarme con el menú disponible?

📍 Ubicación: 
🕒 Horario preferido: 
💬 Comentarios adicionales: 

¡Gracias!`);
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Botón del carrito */}
      {cartItemsCount > 0 && (
        <button
          onClick={onCartClick}
          className="relative w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group border-4 border-white/20"
        >
          <ShoppingCart className="w-6 h-6" />
          
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg animate-bounce">
            {cartItemsCount > 99 ? '99+' : cartItemsCount}
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-full"></div>
        </button>
      )}

      {/* Botón de WhatsApp */}
      <button
        onClick={quickOrderWhatsApp}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group border-4 border-white/20"
      >
        <MessageCircle className="w-6 h-6" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-full"></div>
        
        {isHovered && (
          <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 transition-all duration-300">
            <div className="bg-gray-900/95 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap backdrop-blur-sm border border-white/10 shadow-xl">
              <span className="text-amber-400">🚚</span> Pedir por WhatsApp
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-gray-900/95 border-t-4 border-b-4 border-t-transparent border-b-transparent"></div>
            </div>
          </div>
        )}
      </button>
    </div>
  );
}
