"use client"

import { useState } from 'react'
import { Loader2, Check, X } from 'lucide-react'

export default function LoadingButton({ 
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loadingText = 'Procesando...',
  successText = 'Completado',
  errorText = 'Error',
  autoResetDelay = 2000,
  className = '',
  ...props
}) {
  const [state, setState] = useState('idle') // idle, loading, success, error
  
  const handleClick = async (e) => {
    if (disabled || state !== 'idle') return
    
    setState('loading')
    
    try {
      await onClick?.(e)
      setState('success')
      
      // Auto reset después del delay
      setTimeout(() => {
        setState('idle')
      }, autoResetDelay)
    } catch {
      setState('error')
      
      // Auto reset en caso de error
      setTimeout(() => {
        setState('idle')
      }, autoResetDelay)
    }
  }
  
  const variants = {
    primary: {
      idle: 'bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white',
      loading: 'bg-gradient-to-r from-amber-400 to-orange-500 text-white cursor-wait',
      success: 'bg-gradient-to-r from-green-500 to-green-600 text-white',
      error: 'bg-gradient-to-r from-red-500 to-red-600 text-white'
    },
    secondary: {
      idle: 'bg-white/10 border border-white/20 text-white hover:bg-white/20',
      loading: 'bg-white/10 border border-white/20 text-white cursor-wait',
      success: 'bg-green-500/20 border border-green-400/30 text-green-300',
      error: 'bg-red-500/20 border border-red-400/30 text-red-300'
    },
    ghost: {
      idle: 'text-white hover:bg-white/10',
      loading: 'text-white/60 cursor-wait',
      success: 'text-green-400',
      error: 'text-red-400'
    }
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  }
  
  const getIcon = () => {
    switch (state) {
      case 'loading':
        return <Loader2 className="w-4 h-4 animate-spin" />
      case 'success':
        return <Check className="w-4 h-4" />
      case 'error':
        return <X className="w-4 h-4" />
      default:
        return null
    }
  }
  
  const getText = () => {
    switch (state) {
      case 'loading':
        return loadingText
      case 'success':
        return successText
      case 'error':
        return errorText
      default:
        return children
    }
  }
  
  return (
    <button
      onClick={handleClick}
      disabled={disabled || state === 'loading'}
      className={`
        inline-flex items-center justify-center gap-2 
        font-medium rounded-lg transition-all duration-300
        transform hover:scale-105 active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
        ${variants[variant][state]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {getIcon()}
      <span className={state === 'loading' ? 'animate-pulse' : ''}>
        {getText()}
      </span>
    </button>
  )
}

// Variantes específicas para casos comunes
export function AddToCartButton({ onAddToCart, item, className = '', ...props }) {
  return (
    <LoadingButton
      onClick={() => onAddToCart(item)}
      loadingText="Agregando..."
      successText="¡Agregado!"
      errorText="Error"
      variant="primary"
      size="md"
      className={`
        bg-gradient-to-r from-amber-400 via-orange-500 to-red-500
        hover:from-amber-500 hover:via-orange-600 hover:to-red-600
        shadow-lg hover:shadow-xl
        ${className}
      `}
      {...props}
    >
      Agregar
    </LoadingButton>
  )
}

export function CheckoutButton({ onCheckout, className = '', ...props }) {
  return (
    <LoadingButton
      onClick={onCheckout}
      loadingText="Procesando..."
      successText="¡Pedido enviado!"
      errorText="Error en pedido"
      variant="primary"
      size="lg"
      className={`w-full ${className}`}
      {...props}
    >
      Finalizar Pedido
    </LoadingButton>
  )
}