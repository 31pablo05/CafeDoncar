// NUEVA PALETA DE COLORES CONSISTENTE PARA CAFÉ DONCAR
// Basada en tu tema actual amber/orange/red con variaciones profesionales

export const doncarColorPalette = {
  // COLORES PRINCIPALES (mantener)
  primary: {
    amber: {
      50: '#fefdf8',
      100: '#fef7cd', 
      200: '#fedf89',
      300: '#fec64b',
      400: '#fdbc5c', // Color principal actual
      500: '#f59e0b',
      600: '#dc7609',
      700: '#b45309',
      800: '#924012',
      900: '#78350f'
    },
    orange: {
      50: '#fff7ed',
      100: '#ffead5',
      200: '#fed0aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316', // Naranja principal
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12'
    },
    red: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444', // Rojo de acento
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d'
    }
  },

  // COLORES SECUNDARIOS (reemplazar verdes/azules por tonos cálidos)
  secondary: {
    warm: {
      50: '#fdf8f6',
      100: '#f7e6d3',
      200: '#f0c78a',
      300: '#e8a54c',
      400: '#d4821a',
      500: '#b8641c',
      600: '#9c4f1a',
      700: '#7d3d18',
      800: '#6b3416',
      900: '#582b14'
    },
    brown: {
      50: '#fdf8f6',
      100: '#f2e8e5',
      200: '#eaddd7',
      300: '#e0c7b7',
      400: '#d2a68d',
      500: '#bc8a5f',
      600: '#a47148',
      700: '#8b5e3c',
      800: '#744e33',
      900: '#5d402a'
    }
  },

  // GRADIENTES MEJORADOS
  gradients: {
    primary: 'from-amber-400 via-orange-500 to-red-500',
    warm: 'from-amber-300 via-orange-400 to-red-400',
    subtle: 'from-amber-50 via-orange-50 to-red-50',
    dark: 'from-amber-800 via-orange-800 to-red-800',
    glow: 'from-amber-400/20 via-orange-500/30 to-red-500/20'
  }
}