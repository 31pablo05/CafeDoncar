import React from 'react'

export function Button({ 
  children, 
  className = '', 
  onClick, 
  disabled = false, 
  style = {},
  ...props 
}) {
  return (
    <button
      className={`inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
      {...props}
    >
      {children}
    </button>
  )
}
