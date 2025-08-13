import { useState } from 'react';
import { ShoppingCart, MessageCircle, Truck } from 'lucide-react';

export default function FloatingActionButton({ cartItemsCount, onCartClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const quickOrderWhatsApp = () => {
    const phoneNumber = "5492804518716";
    const message = encodeURIComponent("¡Hola! 👋 Me gustaría hacer un pedido en *Cafe Doncar*. ¿Podrían enviarme el menú actualizado y los métodos de pago disponibles?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Botón del carrito */}
      {cartItemsCount > 0 && (
        <div className="relative">
          <button
            onClick={onCartClick}
            className="relative w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group border-4 border-white/20 hover:border-white/40"
          >
            <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            
            {/* Badge del contador */}
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg animate-bounce border-2 border-white">
              {cartItemsCount > 99 ? '99+' : cartItemsCount}
            </div>
            
            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-full"></div>
          </button>
          
          {/* Ondas de pulso para el carrito */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 rounded-full border-2 border-amber-400/30 animate-ping"></div>
            <div className="absolute inset-0 rounded-full border border-orange-400/20 animate-ping animation-delay-300"></div>
          </div>
        </div>
      )}

      {/* Botón de WhatsApp con delivery */}
      <div className="relative">
        <button
          onClick={quickOrderWhatsApp}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group border-4 border-white/20 hover:border-white/40 overflow-hidden"
        >
          {/* Ícono principal que cambia según hover */}
          <div className="relative z-10 transition-all duration-300">
            {isHovered ? (
              <Truck className="w-6 h-6 transform rotate-12 group-hover:scale-110 transition-all duration-300" />
            ) : (
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-all duration-300" />
            )}
          </div>
          
          {/* Efecto de movimiento del delivery */}
          {isHovered && (
            <div className="absolute -right-6 top-4 flex space-x-1 z-0">
              <div className="w-1.5 h-1.5 bg-white/80 rounded-full animate-ping"></div>
              <div className="w-1 h-1 bg-white/60 rounded-full animate-ping animation-delay-150"></div>
              <div className="w-0.5 h-0.5 bg-white/40 rounded-full animate-ping animation-delay-300"></div>
            </div>
          )}
          
          {/* Efecto de brillo */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-full"></div>
        </button>
        
        {/* Tooltip dinámico */}
        <div className={`absolute right-full mr-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}>
          <div className="bg-gray-900/95 text-white px-4 py-3 rounded-xl text-sm whitespace-nowrap backdrop-blur-sm border border-green-500/30 shadow-2xl">
            <div className="flex items-center gap-2">
              <span className="text-green-400">🍔</span>
              <span className="font-semibold">
                {isHovered ? 'Delivery disponible' : 'Pedir por WhatsApp'}
              </span>
            </div>
            <div className="text-xs text-gray-300 mt-1">
              Click para hacer tu pedido
            </div>
            
            {/* Flecha del tooltip */}
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-gray-900/95 border-t-4 border-b-4 border-t-transparent border-b-transparent"></div>
          </div>
        </div>
        
        {/* Ondas de pulso decorativas */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute inset-0 rounded-full border-2 border-green-400/40 transition-all duration-1000 ${isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}></div>
          <div className={`absolute inset-0 rounded-full border border-green-400/30 transition-all duration-1000 delay-150 ${isHovered ? 'scale-200 opacity-0' : 'scale-125 opacity-100'}`}></div>
          <div className={`absolute inset-0 rounded-full border border-green-400/20 transition-all duration-1000 delay-300 ${isHovered ? 'scale-250 opacity-0' : 'scale-150 opacity-100'}`}></div>
        </div>
      </div>
    </div>
  );
}
