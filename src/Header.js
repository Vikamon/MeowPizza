import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './MeowPizza.png';

const Header = ({ onLoginClick, cartItemsCount, isAuthenticated, user }) => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Meow Pizza Logo" width={500} />
      </Link>
      <nav className="nav-menu">
        <Link to="/" className="nav-link">Меню</Link>
        <Link to="/cart" className="nav-link">Корзина ({cartItemsCount})</Link>
        <Link to="/about" className="nav-link">Связь с нами</Link>
      </nav>
      {isAuthenticated ? (
        <div className="user-info">
          <span>Привет, {user?.login || 'Пользователь'}!</span>
        </div>
      ) : (
        <button className="login-btn" onClick={onLoginClick}>Войти</button>
      )}
    </header>
  );
};

export default Header;