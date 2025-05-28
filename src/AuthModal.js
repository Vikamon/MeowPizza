import React, { useState } from 'react';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('+7');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'login') {
      if (login === 'admin' && password === 'admin') {
        alert('Успешный вход!');
        onClose();
      } else {
        setError('Неверный логин или пароль');
      }
    } else {
      if (login && password && phone) {
        alert('Регистрация успешна! Теперь вы можете войти.');
        setActiveTab('login');
        setError('');
      } else {
        setError('Заполните все поля');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('login');
              setError('');
            }}>
            Вход
          </button>
          <button 
            className={`tab ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('register');
              setError('');
            }}>
            Регистрация
          </button>
        </div>

        <form className="modal-content" onSubmit={handleSubmit}>
          <h3>{activeTab === 'login' ? 'Вход в аккаунт' : 'Регистрация'}</h3>
          
          <div className="form-group">
            <label>Логин</label>
            <input 
              type="text" 
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Введите ваш логин"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Пароль</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите ваш пароль"
              required
            />
          </div>
          
          {activeTab === 'register' && (
            <div className="form-group">
              <label>Телефон</label>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Введите номер телефона"
                required
              />
            </div>
          )}
          
          {error && <p style={{color: 'red'}}>{error}</p>}
          
          <button type="submit" className="submit-btn">
            {activeTab === 'login' ? 'Войти' : 'Зарегистрироваться'}
          </button>
          
          <div className="agreement">
            {activeTab === 'register' && 
              'Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных'}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;