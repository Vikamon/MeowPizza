import React from 'react';
import './AboutPage.css';
import cat from './PhoneCar.png';
import love from './PizzaCar.png';
import sun from './SunCar.png';
const AboutPage = () => {
  return (
    <body className='wallpapper'>
    <div className="about-page">
    <h1>Наш подход к качеству</h1>
      <div className="contact-info">
        <div className="text-content">
          
          
          <div className="contact-details">
          Мы готовим пиццу из отборных 
          ингредиентов на профессиональном 
          оборудовании, поэтому каждая пицца 
          получается одинаково вкусной.
          </div>
        </div>
        
        <div className="image-content">
          <img src={love} alt="PhoneCat" className="contact-image"  width={300}/>
        </div>
        
      </div>
    </div>

    <div className="about-page">
    <h1>У нас гости становятся друзьями</h1>
      <div className="contact-info">
        <div className="text-content">
          
          
          <div className="contact-details">
          Задумка ресторана была ясной: создать уютное 
          место с котиками и пиццей. Точку притяжения, 
          где легко отдыхать в кругу близких с спокойной 
          обстановкой и вкусной пиццей.
          </div>
        </div>
        
        <div className="image-content">
          <img src={sun} alt="PhoneCat" className="contact-image" />
        </div>
        
      </div>
    </div>

    <div className="about-page">
      <h1>Связь с нами</h1>
      
      <div className="contact-info">
        <div className="text-content">
          
          
          <div className="contact-details">
            <p>Если у вас возникли вопросы, то мы<br />
          с радостью на них ответим</p>
            <p><strong>Наш номер:</strong> 89530504565</p>
            <p><strong>Наша почта:</strong> MeowPizza@mail.ru</p>
            <p><strong>График работы:</strong> работаем ежедневно<br />
            с 10:00 до 22:00</p>
            <p><strong>Адрес:</strong> г. Екатеринбург, ул. Амундсена 63</p>
          </div>
        </div>
        
        <div className="image-content">
          <img src={cat} alt="PhoneCat" className="contact-image" />
        </div>
        
      </div>
    </div>
    </body>
  );
};

export default AboutPage;