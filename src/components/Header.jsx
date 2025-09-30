"use client"

import { useState, useEffect } from "react"

export default function Header({ cartItemsCount = 0, onCartClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  // Efecto de scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20
      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Detectar sección activa
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'menu', 'nosotros', 'horarios', 'contacto']
      const scrollPos = window.scrollY + 100

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const bottom = top + element.offsetHeight
          if (scrollPos >= top && scrollPos <= bottom) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const top = element.offsetTop - 80
      window.scrollTo({
        top,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: '🏠' },
    { id: 'menu', label: 'Menú', icon: '📋' },
    { id: 'nosotros', label: 'Nosotros', icon: '👥' },
    { id: 'horarios', label: 'Horarios', icon: '🕒' },
    { id: 'contacto', label: 'Contacto', icon: '📞' }
  ]

  return (
    <>
      {/* Header Principal */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/50 backdrop-blur-lg shadow-xl border-b border-amber-100/50' 
          : 'bg-white/30 backdrop-blur-md shadow-lg'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            
            {/* Logo */}
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/svg/logodonnuevo.svg" 
                  alt="Cafe Doncar" 
                  className="h-12 w-12 lg:h-14 lg:w-14 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
                />
              </div>
              <div className="block">
                <h1 className="text-xl lg:text-3xl font-bold drop-shadow-sm">
                  <span className="text-gray-900">Cafe</span>
                  <span className="text-white ml-1">Doncar</span>
                </h1>
              </div>
            </div>

            {/* Navigation Desktop */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-amber-500 shadow-lg shadow-amber-500/30'
                      : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-base">{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                  
                  {/* Efecto hover */}
                  <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-r from-amber-400 to-amber-600' 
                      : 'bg-amber-100 scale-0 group-hover:scale-100'
                  }`} style={{ zIndex: -1 }}></div>
                </button>
              ))}
            </div>

            {/* Carrito y Menu Mobile */}
            <div className="flex items-center space-x-3">
              
              {/* Carrito */}
              <button
                onClick={onCartClick}
                className="relative group p-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6.5M7 13h10m-4 8a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
                
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white animate-bounce">
                    {cartItemsCount > 99 ? '99+' : cartItemsCount}
                  </span>
                )}
                
                {/* Efecto de pulso */}
                <div className="absolute inset-0 bg-white/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>

              {/* Menu Mobile */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                  <span className={`block h-0.5 w-6 bg-gray-800 rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}></span>
                  <span className={`block h-0.5 w-6 bg-gray-800 rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}></span>
                  <span className={`block h-0.5 w-6 bg-gray-800 rounded-full transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Menu Mobile Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Menu Panel */}
        <div className={`absolute top-16 left-4 right-4 bg-white rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-10 scale-95'
        }`}>
          <div className="p-6">
            
            {/* Logo Mobile */}
            <div className="flex items-center justify-center space-x-3 pb-6 border-b border-gray-100">
              <img src="/svg/2(1).svg" alt="Cafe Doncar" className="h-10 w-10" />
              <h2 className="text-xl font-bold">
                <span className="text-gray-800">Cafe</span>
                <span className="text-amber-500 ml-1">Doncar</span>
              </h2>
            </div>

            {/* Navigation Items */}
            <div className="py-6 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                  
                  {activeSection === item.id && (
                    <div className="ml-auto">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-6 border-t border-gray-100">
              <div className="text-center text-sm text-gray-500">
                <p>🍕 ¡Los mejores sabores te esperan! ☕</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
