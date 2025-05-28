import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
const pizzaData = [
  {
    id: 1,
    title: "Классика",
    name: "Мяу-перони",
    description: "Томатный соус, колбаски пепперони, моцарелла и итальянские тарвы",
    price: "550 ₽",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d610a62d78598406363a9a8ad65.jpg",
    diameter: "30 см"
  },
  {
    id: 2,
    title: "Вегетарианская",
    name: "Огородный Мурзик",
    description: "Помидоры,перцы,лук, томатный соус, оливки и моцарелла",
    price: "500 ₽",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d61546d8483a61a0bbaa7adcc78.jpg",
    diameter: "30 см"
  },
  {
    id: 3,
    title: "Сырная",
    name: "Четыре кота",
    description: "Соус альфредо, моцарелла, пармезан, чеддер",
    price: "500 ₽",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d5f837255b58b25a62c60ffdb38.jpg",
    diameter: "35 см"
  },
  {
    id: 4,
    title: "Итальянская",
    name: "Римский Мурлыка",
    description: "Сливочный соус, бекон, ветчина, пармезан, лук и моцарелла",
    price: "600 ₽",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/0194023ae8cb7270914357a76712d2d1.jpg",
    diameter: "30 см"
  },
  {
    id: 5,
    title: "Острая",
    name: "Горячий Котэ",
    description: "Острый соус, чили, говядина, халапеньо",
    price: "580 ₽",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d5fb110d0f0971c366c3fc0080a.jpg",
    diameter: "35 см"
  },
  {
    id: 6,
    title: "Грибная",
    name: "Котенок ушёл по грибы",
    description: "Шампиньоны, белые грибы, сливочный соус",
    price: "520 ₽",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d6175c10773bfe36e56d48df7e3.jpg",
    diameter: "30 см"
  },
  {
    id: 7,
    title: "Морская",
    name: "Котёнок на плаву",
    description: "Креветки, помидоры, чеснок,шампиньоны",
    price: "700 ₽",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/019591b642d87304a62d322945990861.jpg",
    diameter: "30 см"
  },
  {
    id: 8,
    title: "Детская",
    name: "Сырррррный котёнок",
    description: "Цыплёнок, сыр моцарелла, альфредо",
    price: "450 ₽",
    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d614cbe0530b7234b6d7a6e5f8e.jpg",
    diameter: "25 см"
  }
];


const PizzaCard = ({ pizza, onCountChange }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(pizza.id, newCount);
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      onCountChange(pizza.id, newCount);
    }
  };

  return (
    <div className="pizza-card">
      <h2>{pizza.title}</h2>
      <img src={pizza.imageUrl} alt={pizza.name} width="250" />
      <h3>{pizza.name}</h3>
      <p>{pizza.description}</p>
      <hr />
      <p>Диаметр: {pizza.diameter}</p>
      <p><strong>{pizza.price}</strong></p>
      <div className="counter">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

const PizzaGrid = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  const handleCountChange = (pizzaId, count) => {
    const pizza = pizzaData.find(p => p.id === pizzaId);

    setCartItems(prevItems => {
      if (count === 0) {
        return prevItems.filter(item => item.id !== pizzaId);
      }
      const existingItem = prevItems.find(item => item.id === pizzaId);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === pizzaId ? { ...item, quantity: count } : item
        );
      } else {
        return [...prevItems, {
          id: pizza.id,
          name: pizza.name,
          image: pizza.imageUrl,
          price: parseInt(pizza.price.replace('₽', '')),
          quantity: count
        }];
      }
    });
  };

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <div className='app-container'>
      <h1 className='Pizza'>Пицца</h1>
      <div className='main-content'>
        <div className="pizza-app">
          <div className="pizza-grid">
            {pizzaData.map(pizza => (
              <PizzaCard
                key={pizza.id}
                pizza={pizza}
                onCountChange={handleCountChange}
              />
            ))}
          </div>
        </div>
        <button className="checkout-btn" onClick={goToCart}>
          Перейти в корзину ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
        </button>
      </div>
    </div>
  );
};

export default PizzaGrid;


