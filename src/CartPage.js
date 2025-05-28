
import './CartPage.css';
import React, { useState } from 'react';
const CartPage = ({ cartItems, setCartItems }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    birthDate: '',
    street: '',
    entrance: '',
    apartment: ''
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev => 
        prev.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const order = {
      items: cartItems,
      total,
      customerInfo: formData,
      date: new Date().toISOString()
    };

    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const updatedOrders = [...existingOrders, order];

    localStorage.setItem('orders', JSON.stringify(updatedOrders));

    setOrderSubmitted(true);

    setCartItems([]);

    alert(`Заказ оформлен!\nИтого: ${total} ₽\nТелефон: ${formData.phone}\nАдрес: ${formData.street}, кв. ${formData.apartment}`);
  };

  return (
    <div className="cart-page">
      <h1>Корзина</h1>
      
      {orderSubmitted ? (
        <div className="order-confirmation">
          <h2>Спасибо за заказ!</h2>
          <p>Мы уже готовим ваши пиццы и скоро доставим их по указанному адресу.</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            <h2>Состав заказа:</h2>
            {cartItems.length > 0 ? (
              cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="pizza-image" />
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p className="item-price">{item.price} ₽ × {item.quantity} шт. = {item.price * item.quantity} ₽</p>
                    <div className="counter">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className='Empty'>Ваша корзина пуста</p>
            )}
          </div>

          {cartItems.length > 0 && (
            <form className="checkout-form" onSubmit={handleSubmit}>
              <h2>Стоимость:</h2>
              <div className="order-summary">
                <div className="summary-row">
                  <span>Количество товара:</span>
                  <span>{totalItems} шт.</span>
                </div>
                <div className="summary-row">
                  <span>Доставка:</span>
                  <span>Бесплатная</span>
                </div>
                <div className="summary-row">
                  <span>Скидка:</span>
                  <span>0 руб.</span>
                </div>
                <div className="summary-row total-row">
                  <span>Сумма заказа:</span>
                  <span>{total} ₽</span>
                </div>
              </div>

              <h2>Оформление заказа:</h2>
              <h3>Получатель:</h3>
              
              <div className="form-group">
                <label>ФИО</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Введите ваше ФИО" 
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Номер телефона</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Введите номер телефона" 
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Дата рождения</label>
                <input 
                  type="date" 
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="address-group">
                <h3>Адрес доставки:</h3>
                <div className="form-group">
                  <label>Улица, дом</label>
                  <input 
                    type="text" 
                    name="street"
                    value={formData.street}
                    onChange={handleInputChange}
                    placeholder="Введите улицу и номер дома" 
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Подъезд</label>
                  <input 
                    type="text" 
                    name="entrance"
                    value={formData.entrance}
                    onChange={handleInputChange}
                    placeholder="Номер подъезда" 
                  />
                </div>
                
                <div className="form-group">
                  <label>Квартира</label>
                  <input 
                    type="text" 
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleInputChange}
                    placeholder="Номер квартиры" 
                    required
                  />
                </div>
              </div>
              
              <button type="submit" className="submit-btn">Оформить заказ</button>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default CartPage;