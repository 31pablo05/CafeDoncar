"use client"

import { useState } from 'react';
import { X, MapPin, Clock, Phone, CreditCard } from 'lucide-react';

export default function CheckoutModal({ isOpen, onClose, cartItems, total, onConfirmOrder }) {
  const [orderData, setOrderData] = useState({
    customerName: '',
    phone: '',
    address: '',
    deliveryMethod: 'delivery', // 'delivery' or 'pickup'
    paymentMethod: 'cash', // 'cash' or 'card'
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // Generar mensaje predeterminado para WhatsApp
    const orderSummary = cartItems.map(item => 
      `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
    const deliveryInfo = orderData.deliveryMethod === 'delivery' 
      ? `📍 Dirección: ${orderData.address}`
      : `🏪 Retiro en local`;
    
    const paymentInfo = orderData.paymentMethod === 'cash' 
      ? '💵 Pago: Efectivo'
      : '💳 Pago: Tarjeta';
    
    const whatsappMessage = `��🍔 *NUEVO PEDIDO - CAFÉ DONCAR*
    
👤 Cliente: ${orderData.customerName}
📞 Teléfono: ${orderData.phone}

📋 *PEDIDO:*
${orderSummary}

💰 *TOTAL: $${total.toFixed(2)}*

${deliveryInfo}
${paymentInfo}

${orderData.notes ? `📝 Notas: ${orderData.notes}` : ''}

¡Gracias por elegir Café Doncar! 🚀
📍 Pellegrini 1624, Trelew, Chubut`;

    onConfirmOrder({
      ...orderData,
      items: cartItems,
      total,
      whatsappMessage,
      timestamp: new Date().toISOString()
    });
  };

  const handleInputChange = (field, value) => {
    setOrderData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Finalizar Pedido</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Resumen del pedido */}
        <div className="mb-6 p-4 bg-gray-800/50 rounded-xl">
          <h3 className="text-lg font-semibold text-white mb-3">Resumen del Pedido</h3>
          {cartItems.map(item => (
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
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Datos del cliente */}
          <div>
            <label htmlFor="customerName" className="block text-gray-300 mb-2">Nombre completo *</label>
            <input
              type="text"
              id="customerName"
              name="customerName"
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
            <label htmlFor="phone" className="block text-gray-300 mb-2">Teléfono *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={orderData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`w-full p-3 bg-gray-800 text-white rounded-xl border ${
                errors.phone ? 'border-red-500' : 'border-gray-600'
              } focus:outline-none focus:border-gray-400`}
              placeholder="+54 9 11 1234-5678"
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
                aria-pressed={orderData.deliveryMethod === 'delivery'}
                onClick={() => handleInputChange('deliveryMethod', 'delivery')}
                className={`p-3 rounded-xl border-2 transition-all ${
                  orderData.deliveryMethod === 'delivery'
                    ? 'border-gray-400 bg-gray-800 text-white'
                    : 'border-gray-600 text-gray-400 hover:border-gray-500'
                }`}
              >
                <MapPin className="h-5 w-5 mx-auto mb-1" />
                <span className="text-sm font-medium">Delivery Propio</span>
              </button>
              <button
                type="button"
                aria-pressed={orderData.deliveryMethod === 'pickup'}
                onClick={() => handleInputChange('deliveryMethod', 'pickup')}
                className={`p-3 rounded-xl border-2 transition-all ${
                  orderData.deliveryMethod === 'pickup'
                    ? 'border-gray-400 bg-gray-800 text-white'
                    : 'border-gray-600 text-gray-400 hover:border-gray-500'
                }`}
              >
                <Clock className="h-5 w-5 mx-auto mb-1" />
                <span className="text-sm font-medium">Retiro en Local</span>
              </button>
            </div>
          </div>

          {/* Dirección (solo si es delivery) */}
          {orderData.deliveryMethod === 'delivery' && (
            <div>
              <label htmlFor="address" className="block text-gray-300 mb-2">Dirección de entrega *</label>
              <input
                type="text"
                id="address"
                name="address"
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
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                aria-pressed={orderData.paymentMethod === 'cash'}
                onClick={() => handleInputChange('paymentMethod', 'cash')}
                className={`p-3 rounded-xl border-2 transition-all ${
                  orderData.paymentMethod === 'cash'
                    ? 'border-gray-400 bg-gray-800 text-white'
                    : 'border-gray-600 text-gray-400 hover:border-gray-500'
                }`}
              >
                <Phone className="h-5 w-5 mx-auto mb-1" />
                <span className="text-sm font-medium">Efectivo</span>
              </button>
              <button
                type="button"
                aria-pressed={orderData.paymentMethod === 'card'}
                onClick={() => handleInputChange('paymentMethod', 'card')}
                className={`p-3 rounded-xl border-2 transition-all ${
                  orderData.paymentMethod === 'card'
                    ? 'border-gray-400 bg-gray-800 text-white'
                    : 'border-gray-600 text-gray-400 hover:border-gray-500'
                }`}
              >
                <CreditCard className="h-5 w-5 mx-auto mb-1" />
                <span className="text-sm font-medium">Tarjeta</span>
              </button>
            </div>
          </div>

          {/* Notas adicionales */}
          <div>
            <label htmlFor="notes" className="block text-gray-300 mb-2">Notas adicionales</label>
            <textarea
              id="notes"
              name="notes"
              value={orderData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              className="w-full p-3 bg-gray-800 text-white rounded-xl border border-gray-600 focus:outline-none focus:border-gray-400 resize-none"
              rows="3"
              placeholder="Instrucciones especiales, alérgenos, etc."
            />
          </div>

          {/* Botón de confirmar */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-600 to-gray-800 text-white font-bold py-4 px-6 rounded-xl hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Confirmar Pedido por WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
