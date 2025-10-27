// MEJORAS PARA EL HEADER
// Aplica estos cambios a tu Header.jsx

/*
PROBLEMAS DETECTADOS:
- Menu móvil podría ser más fluido
- Falta sticky behavior mejorado 
- Animaciones de transición básicas

SOLUCIONES RECOMENDADAS:
*/

// 1. STICKY HEADER INTELIGENTE
const [isScrolled, setIsScrolled] = useState(false);
const [lastScrollY, setLastScrollY] = useState(0);
const [isVisible, setIsVisible] = useState(true);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    // Header background change
    setIsScrolled(currentScrollY > 50);
    
    // Auto-hide header on scroll down (only after 200px)
    if (currentScrollY > 200) {
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
    } else {
      setIsVisible(true);
    }
    
    setLastScrollY(currentScrollY);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [lastScrollY]);

// 2. CLASSES MEJORADAS PARA HEADER
const headerClasses = `
  fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
  ${isScrolled 
    ? 'bg-gray-900/95 backdrop-blur-2xl shadow-2xl shadow-black/20 border-b border-amber-500/20' 
    : 'bg-transparent'
  }
  ${isVisible ? 'translate-y-0' : '-translate-y-full'}
`;

// 3. BURGER MENU ANIMADO MEJORADO
const BurgerIcon = ({ isOpen }) => (
  <div className="relative w-6 h-6 flex flex-col justify-center items-center">
    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
      isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
    }`} />
    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
      isOpen ? 'opacity-0' : 'opacity-100'
    }`} />
    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
      isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-2'
    }`} />
  </div>
);

// 4. MOBILE MENU CON MEJOR UX
const mobileMenuClasses = `
  fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out
  ${isMenuOpen 
    ? 'opacity-100 visible' 
    : 'opacity-0 invisible'
  }
`;

const mobileMenuContentClasses = `
  absolute top-0 right-0 h-full w-80 max-w-[90vw] 
  bg-gradient-to-br from-gray-900/98 to-gray-800/98 
  backdrop-blur-2xl border-l border-amber-500/20
  transform transition-transform duration-500 ease-in-out
  ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
  shadow-2xl shadow-black/50
`;