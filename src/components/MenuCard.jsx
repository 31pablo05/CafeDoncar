"use client"

import FavoritesButton from "./FavoritesButton";

export default function MenuCard({ item, onAdd }) {
  return (
    <div className="group relative">
      {/* Efecto de brillo de fondo */}
      <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" 
           style={{background: 'linear-gradient(45deg, #fec15d, #f59e0b, #fec15d)'}}>
      </div>
      
      {/* Card principal */}
      <div className="relative backdrop-blur-md bg-white/10 border border-white/20 hover:border-amber-400/30 overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
        
        {/* Imagen con overlay gradiente */}
        <div className="aspect-[4/3] overflow-hidden relative">
          <img 
            src={item.image || "/placeholder.svg"} 
            alt={item.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          />
          
          {/* Overlay gradiente sutil */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Botón de favoritos */}
          <FavoritesButton />
          
          {/* Badge de categoría flotante */}
          <div className="absolute top-3 left-3">
            <span className="text-white font-bold px-3 py-1.5 rounded-full text-xs shadow-lg backdrop-blur-sm border border-amber-400/30" 
                  style={{background: 'linear-gradient(135deg, rgba(254, 193, 93, 0.9) 0%, rgba(245, 158, 11, 0.9) 100%)'}}>
              {item.category}
            </span>
          </div>
        </div>

        {/* Contenido de la card */}
        <div className="p-5 relative">
          {/* Efecto de brillo interno */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Nombre del producto */}
          <h4 className="font-bold text-white mb-3 text-lg group-hover:text-amber-100 transition-colors duration-300 leading-tight">
            {item.name}
          </h4>
          
          {/* Precio y botón */}
          <div className="flex justify-between items-center">
            {/* Precio con efecto brillante */}
            <div className="relative">
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 group-hover:from-amber-300 group-hover:to-yellow-200 transition-all duration-300">
                ${item.price}
              </span>
              <div className="absolute inset-0 text-3xl font-black text-amber-400/20 blur-sm">
                ${item.price}
              </div>
            </div>
            
            {/* Botón ADD mejorado */}
            <button 
              onClick={() => onAdd(item)} 
              className="relative overflow-hidden text-white rounded-xl px-6 py-2.5 font-bold shadow-lg hover:shadow-amber-500/30 transform hover:scale-110 transition-all duration-300 flex items-center gap-2 group/btn"
              style={{background: 'linear-gradient(135deg, #fec15d 0%, #f59e0b 50%, #d97706 100%)'}}
            >
              {/* Efecto de brillo del botón */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
              
              <span className="relative z-10">ADD</span>
              <div className="relative z-10 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-xs">+</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
