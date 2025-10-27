"use client"

import { useState } from 'react'
import { useTouchDevice, useHapticFeedback } from '../../hooks/useTouch'

export default function TouchButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  hapticFeedback = true,
  ripple = true,
  ...props
}) {
  const isTouchDevice = useTouchDevice()
  const { triggerHaptic } = useHapticFeedback()
  const [ripples, setRipples] = useState([])
  
  const handleClick = (e) => {
    if (disabled) return
    
    // Feedback háptico en dispositivos táctiles
    if (isTouchDevice && hapticFeedback) {
      triggerHaptic('light')
    }
    
    // Efecto ripple
    if (ripple) {
      const rect = e.currentTarget.getBoundingClientRect()
      const ripple = {
        id: Date.now(),
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
      
      setRipples(prev => [...prev, ripple])
      
      // Remover ripple después de la animación
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== ripple.id))
      }, 600)
    }
    
    onClick?.(e)
  }
  
  const variants = {
    primary: `
      bg-gradient-to-r from-amber-400 via-orange-500 to-red-500
      hover:from-amber-500 hover:via-orange-600 hover:to-red-600
      active:from-amber-600 active:via-orange-700 active:to-red-700
      text-white shadow-lg hover:shadow-xl
      ${isTouchDevice ? 'active:scale-95' : 'hover:scale-105'}
    `,
    secondary: `
      bg-white/10 border border-white/20 text-white
      hover:bg-white/20 active:bg-white/30
      ${isTouchDevice ? 'active:scale-95' : 'hover:scale-105'}
    `,
    ghost: `
      text-white hover:bg-white/10 active:bg-white/20
      ${isTouchDevice ? 'active:scale-95' : 'hover:scale-105'}
    `,
    floating: `
      bg-gradient-to-r from-amber-400 to-orange-500
      text-white shadow-2xl hover:shadow-3xl
      rounded-full fixed bottom-6 right-6 z-50
      ${isTouchDevice ? 'active:scale-90' : 'hover:scale-110'}
    `
  }
  
  const sizes = {
    sm: isTouchDevice ? 'px-4 py-3 text-sm min-h-[44px] min-w-[44px]' : 'px-3 py-1.5 text-sm',
    md: isTouchDevice ? 'px-6 py-4 text-base min-h-[48px] min-w-[48px]' : 'px-4 py-2 text-base',
    lg: isTouchDevice ? 'px-8 py-5 text-lg min-h-[52px] min-w-[52px]' : 'px-6 py-3 text-lg',
    xl: isTouchDevice ? 'px-10 py-6 text-xl min-h-[56px] min-w-[56px]' : 'px-8 py-4 text-xl',
    fab: 'w-14 h-14 p-0' // Floating Action Button
  }
  
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`
        relative overflow-hidden
        inline-flex items-center justify-center gap-2
        font-medium rounded-lg transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
        ${isTouchDevice ? 'touch-manipulation' : ''}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      style={{
        WebkitTapHighlightColor: 'transparent', // Quitar highlight azul en iOS
        touchAction: 'manipulation' // Prevenir zoom accidental
      }}
      {...props}
    >
      {/* Efecto ripple */}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ping pointer-events-none"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
            animationDuration: '0.6s'
          }}
        />
      ))}
      
      {children}
    </button>
  )
}

// Componentes especializados para casos comunes
export function TouchAddToCartButton({ onAddToCart, item, className = '', ...props }) {
  return (
    <TouchButton
      onClick={() => onAddToCart(item)}
      variant="primary"
      size="md"
      hapticFeedback={true}
      className={className}
      {...props}
    >
      <span className="text-lg">+</span>
      <span className="hidden sm:inline">Agregar</span>
    </TouchButton>
  )
}

export function TouchFloatingButton({ children, className = '', ...props }) {
  return (
    <TouchButton
      variant="floating"
      size="fab"
      hapticFeedback={true}
      className={className}
      {...props}
    >
      {children}
    </TouchButton>
  )
}

export function TouchMenuButton({ children, active = false, className = '', ...props }) {
  return (
    <TouchButton
      variant={active ? "primary" : "secondary"}
      size="md"
      hapticFeedback={true}
      className={`
        transition-all duration-300
        ${active ? 'scale-105 shadow-lg' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </TouchButton>
  )
}