import { useState, useEffect } from 'react';

// Hook para simular carga de datos con delay realista
export function useLoading(initialState = true, delay = 1500) {
  const [isLoading, setIsLoading] = useState(initialState);
  
  useEffect(() => {
    if (initialState) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [initialState, delay]);
  
  return [isLoading, setIsLoading];
}

// Hook para lazy loading de imágenes
export function useImageLoad(src) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  useEffect(() => {
    if (!src) return;
    
    const img = new Image();
    
    img.onload = () => {
      setIsLoaded(true);
      setHasError(false);
    };
    
    img.onerror = () => {
      setHasError(true);
      setIsLoaded(false);
    };
    
    img.src = src;
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);
  
  return { isLoaded, hasError };
}

// Hook para lazy loading de componentes con intersection observer
export function useLazyLoad(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);
  
  useEffect(() => {
    if (!ref) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );
    
    observer.observe(ref);
    
    return () => observer.disconnect();
  }, [ref, options]);
  
  return [setRef, isVisible];
}

// Hook para retries automáticos en caso de error
export function useRetry(asyncFunction, maxRetries = 3, delay = 1000) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  
  const execute = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await asyncFunction();
      setData(result);
      setRetryCount(0);
    } catch (err) {
      setError(err);
      
      if (retryCount < maxRetries) {
        setTimeout(() => {
          setRetryCount(prev => prev + 1);
          execute();
        }, delay * Math.pow(2, retryCount)); // Exponential backoff
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  const retry = () => {
    setRetryCount(0);
    execute();
  };
  
  return { isLoading, error, data, retry, retryCount, execute };
}