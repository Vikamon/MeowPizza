import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import PizzaGrid from './PizzaGrid';
import AuthModal from './AuthModal';
import AboutPage from './AboutPage';
import CartPage from './CartPage';
import './App.css';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleLoginClick = () => {
    setIsAuthModalOpen(true);
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <Router >
      
      <div className="App">
        <Header 
          onLoginClick={handleLoginClick} 
          cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} 
        />
        
        <div className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={
                <PizzaGrid 
                  cartItems={cartItems} 
                  setCartItems={setCartItems} 
                />
              } 
            />
            <Route 
              path="/about" 
              element={<AboutPage />} 
            />
            <Route 
              path="/cart" 
              element={
                <CartPage 
                  cartItems={cartItems} 
                  setCartItems={setCartItems} 
                />
              } 
            />
          </Routes>
        </div>
        
        <footer className="footer">
          <div className="footer-content">
            <p className='order'>© 2025 Пиццерия "MEOWPIZZA"</p>
            <p className='order'>Все права защищены</p>
          </div>
        </footer>
        
        <AuthModal isOpen={isAuthModalOpen} onClose={handleCloseAuthModal} />
      </div>
    </Router>
  );
}

export default App;