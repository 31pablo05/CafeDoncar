import { useState } from 'react'
import { Heart } from 'lucide-react'

export default function FavoritesButton() {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = (e) => {
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  return (
    <button
      onClick={toggleFavorite}
      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-110 ${
        isFavorite
          ? 'bg-red-500/20 border-red-400/50 text-red-400'
          : 'bg-white/10 border-white/20 text-white/70 hover:text-white'
      }`}
      aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
    >
      <Heart 
        className={`w-4 h-4 transition-all duration-300 ${
          isFavorite ? 'fill-current' : ''
        }`} 
      />
    </button>
  )
}
