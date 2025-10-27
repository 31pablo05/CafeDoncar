"use client"

import { useState } from 'react'
import { ChevronDown, Grid, Filter } from 'lucide-react'
import { TouchMenuButton } from './ui/TouchButton'
import { useTouchDevice } from '../hooks/useTouch'

const categoryIcons = {
  'Todos': '🍽️',
  'Hamburguesas': '🍔', 
  'Pizzas': '🍕',
  'Chips': '🍟',
  'Sandwiches': '🥪',
  'Grille': '🥩'
}

export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const isTouchDevice = useTouchDevice()

  return (
    <div className="mb-6 sm:mb-8">
      {/* Header de filtros */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-amber-400" />
          <h3 className="text-lg sm:text-xl font-bold text-white">Categorías</h3>
        </div>
        
        {/* Botón mobile para expandir/contraer */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg border border-white/20 text-white"
        >
          <Grid className="w-4 h-4" />
          <span className="text-sm">Filtrar</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Categorías - Desktop: Grid, Mobile: Collapsible */}
      <div className={`transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 sm:max-h-none' : 'max-h-0 sm:max-h-none'
      }`}>
        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
          {categories.map(category => (
            <TouchMenuButton
              key={category}
              onClick={() => onCategoryChange(category)}
              active={selectedCategory === category}
              className={`group relative overflow-hidden rounded-2xl p-4 lg:p-5 transition-all duration-300 transform ${
                isTouchDevice ? 'min-h-[56px] min-w-[56px]' : 'hover:scale-105'
              } ${
                selectedCategory === category
                  ? 'shadow-2xl'
                  : 'hover:shadow-xl'
              }`}
              style={{
                background: selectedCategory === category
                  ? 'linear-gradient(135deg, #fdbc5c 0%, #f59e0b 100%)'
                  : 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: selectedCategory === category 
                  ? '2px solid rgba(253, 188, 92, 0.5)'
                  : '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-16 h-16 bg-white rounded-full transform translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-white rounded-full transform -translate-x-6 translate-y-6"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="text-2xl lg:text-3xl mb-2 group-hover:animate-bounce">
                  {categoryIcons[category] || '🍽️'}
                </div>
                
                {/* Category Name */}
                <span className={`font-bold text-xs lg:text-sm xl:text-base block leading-tight ${
                  selectedCategory === category 
                    ? 'text-white' 
                    : 'text-white/80 group-hover:text-white'
                }`}>
                  {category}
                </span>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* Active Indicator */}
              {selectedCategory === category && (
                <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full shadow-lg animate-pulse"></div>
              )}
            </TouchMenuButton>
          ))}
        </div>

        {/* Mobile List */}
        <div className="sm:hidden space-y-2 pt-2">
          {categories.map(category => (
            <TouchMenuButton
              key={category}
              onClick={() => {
                onCategoryChange(category)
                setIsOpen(false)
              }}
              active={selectedCategory === category}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                isTouchDevice ? 'min-h-[48px]' : ''
              } ${
                selectedCategory === category
                  ? 'shadow-lg transform scale-105'
                  : 'hover:shadow-md'
              }`}
              style={{
                background: selectedCategory === category
                  ? 'linear-gradient(90deg, #fdbc5c 0%, #f59e0b 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: selectedCategory === category 
                  ? '2px solid rgba(253, 188, 92, 0.5)'
                  : '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              {/* Icon */}
              <span className="text-xl">
                {categoryIcons[category] || '🍽️'}
              </span>
              
              {/* Category Name */}
              <span className={`font-semibold text-sm flex-1 text-left ${
                selectedCategory === category 
                  ? 'text-white' 
                  : 'text-white/80'
              }`}>
                {category}
              </span>
              
              {/* Active Indicator */}
              {selectedCategory === category && (
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              )}
            </TouchMenuButton>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-4 pt-3 border-t border-white/10">
        <div className="flex items-center justify-between text-xs sm:text-sm text-white/60">
          <span>Categoría activa: <span className="text-amber-400 font-semibold">{selectedCategory}</span></span>
          <span className="hidden sm:inline">🎯 Filtros aplicados</span>
        </div>
      </div>
    </div>
  )
}
