
import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import DeliveryBanner from './components/DeliveryBanner'
import MenuList from './components/MenuList'
import AboutSection from './components/AboutSection'
import BusinessHours from './components/BusinessHours'
import ReviewsSection from './components/ReviewsSection'
import Footer from './components/Footer'
import CartSidebarNew from './components/CartSidebarNew'
import FloatingActionButtonNew from './components/FloatingActionButtonNew'
import SearchBar from './components/SearchBar'
import HowToOrderGuide from './components/HowToOrderGuide'
import CategoryFilter from './components/CategoryFilter'
import menuItems from './components/menuItems'
import categories from './components/categories'
import './App.css'

function App() {
  // Estados para el carrito
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  
  // Estados para el menú
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  
  // Funciones del carrito
  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id)
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }
      return [...prevItems, { ...item, quantity: 1 }]
    })
  }

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id)
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      )
    }
  }

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  // Filtrado del menú
  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Todos' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleCheckout = () => {
    // Lógica para procesar el pedido (WhatsApp, etc.)
    const phoneNumber = "5492804518716"
    const orderDetails = cartItems.map(item => 
      `${item.quantity}x ${item.name} - $${item.price * item.quantity}`
    ).join('\n')
    
    const total = getTotalPrice()
    const message = encodeURIComponent(`🍔 *PEDIDO CAFÉ DONCAR* 🍔

${orderDetails}

💰 *Total: $${total}*

📍 Dirección de entrega: 
🕒 Horario preferido: 
💬 Comentarios: 

¡Gracias!`)
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
    setCartItems([])
    setIsCartOpen(false)
  }

  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #2e2d2b 0%, #1a1a1a 100%)'}}>
      <Header 
        cartItemsCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main>
        {/* Hero Section */}
        <section id="inicio">
          <HeroSection onCategoryFilter={setSelectedCategory} />
        </section>

        {/* Delivery Banner */}
        <div className="pt-16 lg:pt-20">
          <DeliveryBanner />

          {/* Menu Section */}
          <section id="menu" className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 px-2" style={{color: '#fdbc5c'}}>
                Nuestro Menú
              </h2>
              <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
                Descubre nuestras deliciosas hamburguesas, pizzas artesanales y mucho más
              </p>
            </div>

            {/* How to Order Guide */}
            <HowToOrderGuide />

            {/* Barra de búsqueda */}
            <div className="mb-6 sm:mb-8 px-2 sm:px-0">
              <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            </div>

            {/* Filtros de categoría - Componente moderno */}
            <CategoryFilter 
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            {/* Lista del menú */}
            <MenuList items={filteredItems} onAddToCart={addToCart} />
          </div>
        </section>

        {/* About Section - Nosotros */}
        <section id="nosotros">
          <AboutSection />
        </section>

        {/* Business Hours - Horarios */}
        <section id="horarios">
          <BusinessHours />
        </section>

        {/* Reviews Section - Reseñas */}
        <section id="resenas">
          <ReviewsSection />
        </section>

        {/* Footer - Contacto */}
        <section id="contacto">
          <Footer />
        </section>
        </div>
      </main>

      {/* Cart Sidebar */}
      <CartSidebarNew
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        total={getTotalPrice()}
        onCheckout={handleCheckout}
      />

      {/* Floating Action Button */}
      <FloatingActionButtonNew 
        cartItemsCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />
    </div>
  )
}

export default App
