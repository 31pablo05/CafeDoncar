import { useState, useEffect } from 'react'

// Hook para detectar dispositivos táctiles
export function useTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  
  useEffect(() => {
    const checkTouch = () => {
      return 'ontouchstart' in window || 
             navigator.maxTouchPoints > 0 || 
             navigator.msMaxTouchPoints > 0
    }
    
    setIsTouchDevice(checkTouch())
    
    // Listener para cambios en el tipo de dispositivo
    const handleTouchStart = () => setIsTouchDevice(true)
    const handleMouseMove = () => {
      if (!('ontouchstart' in window)) {
        setIsTouchDevice(false)
      }
    }
    
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  
  return isTouchDevice
}

// Hook para manejar gestos táctiles básicos
export function useTouch(onSwipeLeft, onSwipeRight, onTap, options = {}) {
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  
  const {
    minSwipeDistance = 50,
    maxTapDistance = 10,
    tapTimeout = 300
  } = options
  
  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
      time: Date.now()
    })
  }
  
  const onTouchMove = (e) => {
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    })
  }
  
  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart.x - touchEnd.x
    const verticalDistance = Math.abs(touchStart.y - touchEnd.y)
    const timeElapsed = Date.now() - touchStart.time
    const totalDistance = Math.sqrt(
      Math.pow(distance, 2) + Math.pow(verticalDistance, 2)
    )
    
    // Detectar tap
    if (totalDistance < maxTapDistance && timeElapsed < tapTimeout) {
      onTap?.()
      return
    }
    
    // Detectar swipe horizontal (solo si el movimiento vertical es menor)
    if (Math.abs(distance) > minSwipeDistance && verticalDistance < 100) {
      if (distance > 0) {
        onSwipeLeft?.()
      } else {
        onSwipeRight?.()
      }
    }
  }
  
  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd: onTouchEndHandler
  }
}

// Hook para feedback háptico (si está disponible)
export function useHapticFeedback() {
  const triggerHaptic = (type = 'impact') => {
    if (navigator.vibrate) {
      switch (type) {
        case 'light':
          navigator.vibrate(10)
          break
        case 'medium':
          navigator.vibrate(20)
          break
        case 'heavy':
          navigator.vibrate(50)
          break
        case 'success':
          navigator.vibrate([50, 50, 100])
          break
        case 'error':
          navigator.vibrate([100, 50, 100, 50, 100])
          break
        default:
          navigator.vibrate(15)
      }
    }
  }
  
  return { triggerHaptic }
}

// Hook para áreas de toque mejoradas
export function useTouchArea(minSize = 44) {
  const isTouchDevice = useTouchDevice()
  
  const getTouchAreaClasses = (baseClasses = '') => {
    if (isTouchDevice) {
      return `${baseClasses} min-h-[${minSize}px] min-w-[${minSize}px] touch-manipulation`
    }
    return baseClasses
  }
  
  const getTouchAreaStyle = (baseStyle = {}) => {
    if (isTouchDevice) {
      return {
        ...baseStyle,
        minHeight: `${minSize}px`,
        minWidth: `${minSize}px`,
        touchAction: 'manipulation'
      }
    }
    return baseStyle
  }
  
  return {
    isTouchDevice,
    getTouchAreaClasses,
    getTouchAreaStyle
  }
}