"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp, Plus, ShoppingBag } from 'lucide-react'

export default function MenuList({ items = [], onAddToCart }) {
  const [showAll, setShowAll] = useState(false)
  const itemsToShow = 6
  
  const displayedItems = showAll ? items : items.slice(0, itemsToShow)
  const hasMoreItems = items.length > itemsToShow

  return (
    <div className="space-y-8">

      {/* Contenedor principal con z-index positivo para asegurar que esté encima */}
      <div className="relative space-y-10 py-8" style={{ zIndex: 1 }}>
        {/* Grid de productos mejorado */}
        <div className="grid gap-4 sm:gap-5 lg:gap-7 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-4 sm:px-6 lg:px-8">
          {displayedItems.length > 0 ? (
            displayedItems.map((item) => (
              <div 
                key={item.id} 
                className="group relative hover:scale-[1.03] transition-all duration-500 backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/25 overflow-hidden rounded-2xl shadow-2xl hover:shadow-amber-500/20 flex flex-col hover:border-amber-400/50"
                style={{ position: 'relative', zIndex: 2 }}
              >
                {/* Badge de categoría flotante */}
                <div className="absolute top-3 left-3" style={{ zIndex: 10 }}>
                  <span className="inline-block text-white font-bold px-3 py-1.5 rounded-full text-xs sm:text-sm backdrop-blur-md shadow-lg border border-white/20" 
                        style={{background: 'linear-gradient(135deg, #febd59 0%, #f59e0b 100%)'}}>
                    {item.category}
                  </span>
                </div>

                {/* Imagen del producto con overlay en hover */}
                <div className="aspect-[4/3] overflow-hidden flex-shrink-0 relative">
                  <img 
                    src={item.image || "/placeholder.svg"} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  {/* Overlay gradiente en hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Contenido del producto con mejor espaciado */}
                <div className="p-4 sm:p-5 lg:p-6 flex flex-col h-full">
                  {/* Nombre del producto con mejor tipografía */}
                  <h4 className="font-bold text-white mb-2 text-base sm:text-lg lg:text-xl leading-tight flex-grow-0 group-hover:text-amber-300 transition-colors duration-300">
                    {item.name}
                  </h4>
                  
                  {/* Descripción mejorada */}
                  {item.description && (
                    <p className="text-gray-300 text-xs sm:text-sm mb-4 line-clamp-2 flex-grow leading-relaxed">
                      {item.description}
                    </p>
                  )}
                  
                  {/* Separador sutil */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4"></div>
                  
                  {/* Precio y botón con diseño mejorado */}
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400 mb-1">Precio</span>
                      <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                        ${item.price}
                      </span>
                    </div>
                    <button 
                      onClick={() => onAddToCart(item)} 
                      className="relative text-white rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-sm font-bold shadow-xl hover:shadow-2xl hover:shadow-amber-500/40 transform hover:scale-110 active:scale-95 transition-all duration-300 flex items-center gap-2 overflow-hidden group/btn" 
                      style={{background: 'linear-gradient(135deg, #febd59 0%, #f59e0b 50%, #ea580c 100%)', position: 'relative', zIndex: 3}}
                    >
                      {/* Efecto de brillo animado */}
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                      <Plus className="w-4 h-4 relative" style={{ zIndex: 10 }} />
                      <span className="relative hidden sm:inline" style={{ zIndex: 10 }}>Agregar</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center text-white/70 py-16 lg:py-24 px-4">
              <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-12 text-center max-w-lg">
                <div className="text-6xl sm:text-7xl mb-6 opacity-40">
                  <ShoppingBag className="w-20 h-20 mx-auto" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  No hay productos disponibles
                </h3>
                <p className="text-base sm:text-lg text-white/60 mb-2">
                  No se encontraron productos para esta selección.
                </p>
                <p className="text-sm text-white/40">
                  Probá con otros términos de búsqueda o categorías
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Botón "Ver más" mejorado */}
        {hasMoreItems && (
          <div className="text-center px-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group/more relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-white transition-all duration-500 transform hover:scale-105 active:scale-95 shadow-2xl hover:shadow-3xl overflow-hidden"
              style={{
                background: showAll 
                  ? 'linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)' 
                  : 'linear-gradient(135deg, #fdbc5c 0%, #f59e0b 50%, #ea580c 100%)',
                boxShadow: showAll 
                  ? '0 8px 32px rgba(220, 38, 38, 0.4), 0 0 60px rgba(220, 38, 38, 0.2)' 
                  : '0 8px 32px rgba(253, 188, 92, 0.4), 0 0 60px rgba(245, 158, 11, 0.2)',
                position: 'relative',
                zIndex: 2
              }}
            >
              {/* Efecto de brillo animado */}
              <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover/more:translate-y-[-100%] transition-transform duration-700"></div>
              
              <span className="text-lg sm:text-xl relative" style={{ zIndex: 10 }}>
                {showAll ? 'Ver Menos Productos' : `Ver Más Productos (+${items.length - itemsToShow})`}
              </span>
              {showAll ? (
                <ChevronUp className="w-6 h-6 group-hover/more:-translate-y-1 transition-transform duration-300 relative" style={{ zIndex: 10 }} />
              ) : (
                <ChevronDown className="w-6 h-6 group-hover/more:translate-y-1 transition-transform duration-300 relative" style={{ zIndex: 10 }} />
              )}
            </button>
            
            {/* Indicador de productos mejorado */}
            <div className="mt-6 inline-block backdrop-blur-lg bg-white/10 border border-white/20 rounded-full px-6 py-3">
              <p className="text-white/80 text-sm font-medium">
                Mostrando <span className="text-amber-400 font-bold">{displayedItems.length}</span> de <span className="text-amber-400 font-bold">{items.length}</span> productos
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}