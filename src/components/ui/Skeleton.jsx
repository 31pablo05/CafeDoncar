"use client"

export default function Skeleton({ 
  className = "", 
  children,
  lines = 1,
  height = "h-4",
  width = "w-full",
  rounded = "rounded",
  shimmer = true
}) {
  const baseClasses = `animate-pulse bg-gray-600/30 ${height} ${rounded}`;
  const shimmerClasses = shimmer ? "relative overflow-hidden" : "";
  
  // Si hay children, renderizar como contenedor
  if (children) {
    return (
      <div className={`${shimmerClasses} ${className}`}>
        {children}
        {shimmer && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-shimmer"></div>
        )}
      </div>
    );
  }
  
  // Si hay múltiples líneas
  if (lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {[...Array(lines)].map((_, index) => (
          <div key={index} className={`${shimmerClasses}`}>
            <div 
              className={`${baseClasses} ${index === lines - 1 ? 'w-3/4' : width}`}
            />
            {shimmer && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-shimmer"></div>
            )}
          </div>
        ))}
      </div>
    );
  }
  
  // Skeleton simple
  return (
    <div className={`${shimmerClasses} ${className}`}>
      <div className={`${baseClasses} ${width}`} />
      {shimmer && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-shimmer"></div>
      )}
    </div>
  );
}

// Skeletons específicos para otros componentes
export function HeroSkeleton() {
  return (
    <div className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center animate-pulse">
      {/* Background skeleton */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 to-gray-900/60"></div>
      
      {/* Content skeleton */}
      <div className="relative z-10 text-center space-y-6 max-w-4xl px-4">
        <Skeleton height="h-12" width="w-3/4" className="mx-auto" />
        <Skeleton height="h-6" width="w-1/2" className="mx-auto" />
        <div className="pt-4">
          <Skeleton height="h-12" width="w-40" rounded="rounded-xl" className="mx-auto" />
        </div>
      </div>
    </div>
  );
}

export function AboutSkeleton() {
  return (
    <div className="py-12 lg:py-16 xl:py-20 animate-pulse">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Skeleton height="h-10" width="w-1/2" className="mx-auto" />
          <Skeleton lines={3} className="max-w-3xl mx-auto" />
        </div>
      </div>
    </div>
  );
}

export function ReviewsSkeleton() {
  return (
    <div className="py-12 lg:py-16 xl:py-20 animate-pulse">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <Skeleton height="h-10" width="w-1/3" className="mx-auto mb-4" />
          <Skeleton height="h-6" width="w-1/2" className="mx-auto" />
        </div>
        
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} height="h-5" width="w-5" rounded="rounded-full" />
                ))}
              </div>
              <Skeleton lines={3} />
              <div className="flex items-center space-x-3">
                <Skeleton height="h-12" width="w-12" rounded="rounded-full" />
                <Skeleton height="h-5" width="w-24" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}