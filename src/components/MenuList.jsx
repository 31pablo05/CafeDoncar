"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function MenuList({ items, onAddToCart }) {
  const [showAll, setShowAll] = useState(false)
  const itemsToShow = 6 // Número inicial de productos a mostrar
  
  const displayedItems = showAll ? items : items.slice(0, itemsToShow)
  const hasMoreItems = items.length > itemsToShow

  return (
    <div className="space-y-8">
      {/* Grid de productos - Sistema responsivo mejorado */}
      <div className="grid gap-3 sm:gap-4 lg:gap-6 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {displayedItems.length > 0 ? (
          displayedItems.map((item) => (
            <div key={item.id} className="group hover:scale-105 transition-all duration-300 backdrop-blur-md bg-white/10 border border-white/20 overflow-hidden rounded-xl shadow-lg hover:shadow-xl flex flex-col">
              {/* Imagen del producto */}
              <div className="aspect-[4/3] overflow-hidden flex-shrink-0">
                <img 
                  src={item.image || "/placeholder.svg?height=300&width=400&text=400x300px"} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              
              {/* Contenido del producto */}
              <div className="p-3 sm:p-4 lg:p-5 flex flex-col h-full">
                {/* Categoría */}
                <span className="inline-block mb-2 text-white font-bold px-2 py-1 rounded text-xs sm:text-sm w-fit" 
                      style={{background: 'linear-gradient(90deg, #febd59 0%, #f59e0b 100%)'}}>
                  {item.category}
                </span>
                
                {/* Nombre del producto */}
                <h4 className="font-bold text-white mb-2 text-sm sm:text-base lg:text-lg leading-tight flex-grow-0">
                  {item.name}
                </h4>
                
                {/* Descripción */}
                {item.description && (
                  <p className="text-gray-300 text-xs sm:text-sm mb-3 line-clamp-2 flex-grow">
                    {item.description}
                  </p>
                )}
                
                {/* Precio y botón */}
                <div className="flex justify-between items-center mt-auto pt-2">
                  <span className="text-lg sm:text-xl lg:text-2xl font-black text-amber-400">
                    ${item.price}
                  </span>
                  <button 
                    onClick={() => onAddToCart(item)} 
                    className="text-white rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold shadow-lg hover:shadow-amber-500/25 transform hover:scale-105 transition-all flex items-center gap-1 flex-shrink-0" 
                    style={{background: 'linear-gradient(90deg, #febd59 0%, #f59e0b 100%)'}}
                  >
                    <span className="hidden sm:inline">+</span>
                    <span>ADD</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center text-white/70 text-base sm:text-lg lg:text-xl py-12 lg:py-16 px-4">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 opacity-50">
              🔍
            </div>
            <p className="text-center max-w-md">
              No se encontraron productos para esta selección.
            </p>
            <p className="text-sm sm:text-base text-white/50 mt-2 text-center">
              Probá con otros términos de búsqueda o categorías
            </p>
          </div>
        )}
      </div>

      {/* Botón "Ver más" / "Ver menos" */}
      {hasMoreItems && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            style={{
              background: showAll 
                ? 'linear-gradient(90deg, #dc2626 0%, #b91c1c 100%)' 
                : 'linear-gradient(90deg, #fdbc5c 0%, #f59e0b 100%)',
              boxShadow: showAll 
                ? '0 4px 20px rgba(220, 38, 38, 0.3)' 
                : '0 4px 20px rgba(253, 188, 92, 0.3)'
            }}
          >
            <span className="text-lg">
              {showAll ? 'Ver Menos Productos' : `Ver Más Productos (+${items.length - itemsToShow})`}
            </span>
            {showAll ? (
              <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
            ) : (
              <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
            )}
          </button>
          
          {/* Indicador de productos */}
          <div className="mt-4 text-white/60 text-sm">
            Mostrando {displayedItems.length} de {items.length} productos
          </div>
        </div>
      )}
    </div>
  );
}
