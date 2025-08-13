"use client"

import { X, Plus, Minus, Trash2 } from "lucide-react";

export default function CartSidebar({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem, total, onCheckout }) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="absolute right-0 top-0 h-full w-full max-w-md backdrop-blur-xl bg-white/10 border-l border-white/20">
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <h3 className="text-xl font-bold text-white">🛒 TU PEDIDO</h3>
          <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-lg transition-all duration-200">
            <X className="h-5 w-5 text-white" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🛒</div>
              <p className="text-white/70 text-lg">Tu carrito está vacío</p>
              <p className="text-white/50 text-sm mt-2">Agrega algunos productos deliciosos</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">{item.name}</h4>
                      <p className="text-green-400 font-bold">${item.price}</p>
                    </div>
                    <button 
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-400 hover:text-red-300 p-1 hover:bg-red-500/20 rounded-lg transition-all duration-200"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 hover:border-red-400 text-red-300 hover:text-red-200 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      
                      <span className="text-white font-bold text-lg min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 hover:border-green-400 text-green-300 hover:text-green-200 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-yellow-400 font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Footer del Carrito */}
        {items.length > 0 && (
          <div className="border-t border-white/20 p-4 space-y-4">
            {/* Resumen del Total */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex justify-between items-center">
                <span className="text-white font-semibold">Subtotal:</span>
                <span className="text-white">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xl font-bold text-white">TOTAL:</span>
                <span className="text-2xl font-black text-yellow-400">${total.toFixed(2)}</span>
              </div>
            </div>
            
            {/* Botones de Acción */}
            <div className="space-y-3">
              <button 
                onClick={onCheckout}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>📱</span>
                <span>FINALIZAR PEDIDO</span>
              </button>
              
              <button 
                onClick={() => items.forEach(item => onRemoveItem(item.id))}
                className="w-full bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 hover:border-red-400 text-red-300 hover:text-red-200 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                🗑️ Vaciar Carrito
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
