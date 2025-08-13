"use client"

import { useState } from "react";
import { X, Plus, Minus, Trash2, MapPin, Clock, Phone, CreditCard, Banknote } from "lucide-react";

export default function CartSidebar({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem, total, onCheckout }) {
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderData, setOrderData] = useState({
    customerName: '',
    phone: '',
    address: '',
    deliveryMethod: 'delivery', // 'delivery' or 'pickup'
  paymentMethod: 'cash', // 'cash' | 'card' | 'transfer'
    notes: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!orderData.customerName.trim()) {
      newErrors.customerName = 'Nombre requerido';
    }
    
    if (!orderData.phone.trim()) {
      newErrors.phone = 'Teléfono requerido';
    }
    
    if (orderData.deliveryMethod === 'delivery' && !orderData.address.trim()) {
      newErrors.address = 'Dirección requerida para delivery';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setOrderData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleConfirmOrder = () => {
    if (!validateForm()) return;
    
    // Generar mensaje completo para WhatsApp
    const orderSummary = items.map(item => 
      `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
    const deliveryInfo = orderData.deliveryMethod === 'delivery' 
      ? `📍 *Dirección de entrega:* ${orderData.address}`
      : `🏪 *Modalidad:* Retiro en local (Pellegrini 1624, Trelew)`;
    

    let paymentInfo = '';
    if (orderData.paymentMethod === 'cash') {
      paymentInfo = '💵 *Forma de pago:* Efectivo';
    } else if (orderData.paymentMethod === 'card') {
      paymentInfo = '💳 *Forma de pago:* Tarjeta';
    } else if (orderData.paymentMethod === 'transfer') {
      paymentInfo = '🏦 *Forma de pago:* Transferencia bancaria';
    }
    
    const phoneNumber = "5492804518716";
    const message = encodeURIComponent(`🍔 *PEDIDO CAFÉ DONCAR* 🍔

👤 *Cliente:* ${orderData.customerName}
📞 *Teléfono:* ${orderData.phone}

📋 *DETALLE DEL PEDIDO:*
${orderSummary}

💰 *TOTAL: $${total.toFixed(2)}*

${deliveryInfo}
${paymentInfo}

${orderData.notes ? `📝 *Comentarios:* ${orderData.notes}` : ''}

🕒 *Horario de pedido:* ${new Date().toLocaleString('es-AR')}

¡Gracias por elegir Café Doncar! 🚀`);
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    
    // Limpiar carrito y cerrar
    items.forEach(item => onRemoveItem(item.id));
    setShowCheckout(false);
    onClose();
  };
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
                onClick={() => setShowCheckout(true)}
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

      {/* Modal de Checkout */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-60 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Finalizar Pedido</h2>
              <button
                onClick={() => setShowCheckout(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Resumen del pedido */}
            <div className="mb-6 p-4 bg-gray-800/50 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-3">Resumen del Pedido</h3>
              {items.map(item => (
                <div key={item.id} className="flex justify-between text-gray-300 mb-2">
                  <span>{item.name} x{item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t border-gray-600 pt-2 mt-2">
                <div className="flex justify-between font-bold text-white">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="space-y-4">
              {/* Datos del cliente */}
              <div>
                <label className="block text-gray-300 mb-2">Nombre completo *</label>
                <input
                  type="text"
                  value={orderData.customerName}
                  onChange={(e) => handleInputChange('customerName', e.target.value)}
                  className={`w-full p-3 bg-gray-800 text-white rounded-xl border ${
                    errors.customerName ? 'border-red-500' : 'border-gray-600'
                  } focus:outline-none focus:border-gray-400`}
                  placeholder="Tu nombre completo"
                />
                {errors.customerName && (
                  <p className="text-red-400 text-sm mt-1">{errors.customerName}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Teléfono *</label>
                <input
                  type="tel"
                  value={orderData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full p-3 bg-gray-800 text-white rounded-xl border ${
                    errors.phone ? 'border-red-500' : 'border-gray-600'
                  } focus:outline-none focus:border-gray-400`}
                  placeholder="+54 9 280 123-4567"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Método de entrega */}
              <div>
                <label className="block text-gray-300 mb-3">Método de entrega</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleInputChange('deliveryMethod', 'delivery')}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      orderData.deliveryMethod === 'delivery'
                        ? 'border-green-400 bg-green-500/20 text-white'
                        : 'border-gray-600 text-gray-400 hover:border-gray-500'
                    }`}
                  >
                    <MapPin className="h-5 w-5 mx-auto mb-1" />
                    <span className="text-sm font-medium">Delivery</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInputChange('deliveryMethod', 'pickup')}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      orderData.deliveryMethod === 'pickup'
                        ? 'border-blue-400 bg-blue-500/20 text-white'
                        : 'border-gray-600 text-gray-400 hover:border-gray-500'
                    }`}
                  >
                    <Clock className="h-5 w-5 mx-auto mb-1" />
                    <span className="text-sm font-medium">Retiro</span>
                  </button>
                </div>
              </div>

              {/* Dirección (solo si es delivery) */}
              {orderData.deliveryMethod === 'delivery' && (
                <div>
                  <label className="block text-gray-300 mb-2">Dirección de entrega *</label>
                  <input
                    type="text"
                    value={orderData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className={`w-full p-3 bg-gray-800 text-white rounded-xl border ${
                      errors.address ? 'border-red-500' : 'border-gray-600'
                    } focus:outline-none focus:border-gray-400`}
                    placeholder="Dirección en Trelew (calle, número, barrio)"
                  />
                  {errors.address && (
                    <p className="text-red-400 text-sm mt-1">{errors.address}</p>
                  )}
                </div>
              )}

              {/* Método de pago */}
              <div>
                <label className="block text-gray-300 mb-3">Método de pago</label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => handleInputChange('paymentMethod', 'cash')}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      orderData.paymentMethod === 'cash'
                        ? 'border-yellow-400 bg-yellow-500/20 text-white'
                        : 'border-gray-600 text-gray-400 hover:border-gray-500'
                    }`}
                  >
                    <Phone className="h-5 w-5 mx-auto mb-1" />
                    <span className="text-sm font-medium">Efectivo</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInputChange('paymentMethod', 'card')}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      orderData.paymentMethod === 'card'
                        ? 'border-purple-400 bg-purple-500/20 text-white'
                        : 'border-gray-600 text-gray-400 hover:border-gray-500'
                    }`}
                  >
                    <CreditCard className="h-5 w-5 mx-auto mb-1" />
                    <span className="text-sm font-medium">Tarjeta</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInputChange('paymentMethod', 'transfer')}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      orderData.paymentMethod === 'transfer'
                        ? 'border-green-400 bg-green-500/20 text-white'
                        : 'border-gray-600 text-gray-400 hover:border-gray-500'
                    }`}
                  >
                    <Banknote className="h-5 w-5 mx-auto mb-1" />
                    <span className="text-sm font-medium">Transferencia</span>
                  </button>
                </div>
              </div>

              {/* Notas adicionales */}
              <div>
                <label className="block text-gray-300 mb-2">Comentarios adicionales</label>
                <textarea
                  value={orderData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  className="w-full p-3 bg-gray-800 text-white rounded-xl border border-gray-600 focus:outline-none focus:border-gray-400 resize-none"
                  rows="3"
                  placeholder="Instrucciones especiales, sin cebolla, cocción de la carne, etc."
                />
              </div>

              {/* Botón de confirmar */}
              <button
                onClick={handleConfirmOrder}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                🚀 Enviar Pedido por WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
