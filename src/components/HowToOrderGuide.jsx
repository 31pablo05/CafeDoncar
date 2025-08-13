"use client"

import { ShoppingCart, CheckCircle, MessageCircle, Search, Filter } from 'lucide-react'

export default function HowToOrderGuide() {
  const steps = [
    {
      number: "1",
      icon: <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Elegí tus favoritos",
      description: "Navegá por nuestro menú y agregá los productos que más te gusten al carrito",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "2", 
      icon: <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Revisá tu pedido",
      description: "Verificá las cantidades y el total en tu carrito de compras",
      color: "from-green-500 to-green-600"
    },
    {
      number: "3",
      icon: <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Enviá por WhatsApp",
      description: "Al finalizar, se abrirá WhatsApp con tu pedido ya armado listo para enviar",
      color: "from-emerald-500 to-emerald-600"
    }
  ]

  return (
    <div className="mb-8 sm:mb-12 px-2 sm:px-0">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
          ¿Cómo hacer tu pedido?
        </h3>
        <div className="w-16 sm:w-20 h-1 mx-auto rounded-full" style={{background: 'linear-gradient(90deg, #fdbc5c 0%, #f59e0b 100%)'}}></div>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto mb-6 sm:mb-8">
        {steps.map((step, index) => (
          <div key={step.number} className="relative group">
            {/* Connecting line for desktop */}
            {index < steps.length - 1 && (
              <div className="hidden sm:block absolute top-12 left-[calc(100%+0.5rem)] w-6 lg:w-8 h-0.5 bg-gradient-to-r from-white/30 to-white/10 z-0"></div>
            )}
            
            {/* Step Card */}
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl">
              {/* Number Badge */}
              <div className={`absolute -top-3 -left-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg`}>
                {step.number}
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg group-hover:animate-bounce`}>
                {step.icon}
              </div>

              {/* Content */}
              <div className="text-center">
                <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3">
                  {step.title}
                </h4>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Tip Section */}
      <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-amber-500/20 max-w-4xl mx-auto">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-lg">
              💡
            </div>
          </div>
          <div className="flex-1">
            <h5 className="text-amber-400 font-bold text-sm sm:text-base mb-1 sm:mb-2">
              Tip:
            </h5>
            <p className="text-white/90 text-sm sm:text-base">
              Usá el <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 rounded-lg text-xs sm:text-sm">
                <Search className="w-3 h-3 sm:w-4 sm:h-4" />
                buscador
              </span> abajo o las <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 rounded-lg text-xs sm:text-sm">
                <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
                categorías
              </span> para encontrar rápido lo que buscás
            </p>
          </div>
        </div>
      </div>

      {/* Animation decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-orange-400/40 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-amber-300/25 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  )
}
