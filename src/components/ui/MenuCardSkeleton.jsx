"use client"

export default function MenuCardSkeleton() {
  return (
    <div className="group relative animate-pulse">
      {/* Card principal skeleton */}
      <div className="relative backdrop-blur-md bg-gray-800/30 border border-gray-600/20 overflow-hidden rounded-2xl">
        
        {/* Imagen skeleton */}
        <div className="aspect-[4/3] overflow-hidden relative">
          <div className="w-full h-full bg-gradient-to-br from-gray-700/40 to-gray-800/40 animate-pulse"></div>
          
          {/* Badge skeleton */}
          <div className="absolute top-3 left-3">
            <div className="h-6 w-16 bg-gray-600/40 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Contenido skeleton */}
        <div className="p-5 relative space-y-3">
          {/* Línea de brillo skeleton */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600/30 to-transparent"></div>
          
          {/* Nombre del producto skeleton */}
          <div className="space-y-2">
            <div className="h-5 bg-gray-600/40 rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-600/30 rounded w-1/2 animate-pulse delay-100"></div>
          </div>
          
          {/* Precio y botón skeleton */}
          <div className="flex justify-between items-center pt-2">
            {/* Precio skeleton */}
            <div className="h-8 bg-gradient-to-r from-gray-600/40 to-gray-700/40 rounded w-16 animate-pulse delay-200"></div>
            
            {/* Botón skeleton */}
            <div className="h-10 bg-gradient-to-r from-gray-600/40 to-gray-700/40 rounded-xl w-20 animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
      
      {/* Shimmer effect para skeleton */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 animate-shimmer pointer-events-none"></div>
    </div>
  );
}

// Componente para múltiples skeletons
export function MenuSkeletonGrid({ count = 8 }) {
  return (
    <div className="grid gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-3 sm:px-4 md:px-6 lg:px-8">
      {[...Array(count)].map((_, index) => (
        <MenuCardSkeleton key={index} />
      ))}
    </div>
  );
}