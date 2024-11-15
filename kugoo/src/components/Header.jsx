import React from "react";
import { Link } from "react-router-dom"; 
import './Header.css';
import viber from '../img/viber.svg';
import whatsapp from '../img/whatsapp.svg';
import telegram from '../img/telegram.svg';
import plus from '../img/plus.svg';
import balance from '../img/balance.svg';
import heart from '../img/Icon/Outlined/Heart.svg';
import shoppingCart from '../img/shopping-cart.svg';
import search from '../img/Icon/Outlined/Search.svg';

function Header() {
  return (
    <header className="header">
      <div className="header_content">
        {/* Верхняя панель */}
        <div className="top_header">
          <div className="top_header_left">
            <Link to="/service">Сервис</Link>
            <Link to="/partnership">Сотрудничество</Link>
            <Link to="/callback">Заказать звонок</Link>
            <div className="social_links">
              <img src={viber} alt="viber" />
              <img src={whatsapp} alt="whatsapp" />
              <img src={telegram} alt="telegram" />
            </div>
          </div>
          <div className="top_header_right">
            <p>+7 (800) 505-54-61</p>
            <img src={plus} alt="plus" />
          </div>
        </div>
        
        <span className="border"></span>
        
        {/* Основная панель */}
        <div className="main_header">
          <h1>KUGOO</h1>
          <button className="catalogBtn">
            <div className="burger-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="button-text">Каталог</span>
          </button>
          <div className="search_container">
            <select className="dropdown">
              <option value="all">Везде</option>
              <option value="category1">Категория 1</option>
              <option value="category2">Категория 2</option>
            </select>
            <input type="text" className="search-input" placeholder="Искать самокат KUGOO" />
            <button className="search-button">
              <img src={search} alt="Поиск" />
            </button>
          </div>
          <div className="cart_content">
            <img src={balance} alt="balance" />
            <img src={heart} alt="heart" />
            <img src={shoppingCart} alt="shopping cart" />
            <p>Корзина</p>
          </div>
        </div>
        
        {/* Нижняя панель с меню */}
        <div className="menu">
          <div className="menu_content">
            <Link to="/about-us">О магазине</Link>
            <Link to="/delivery">Доставка и оплата</Link>
            <Link to="/test-drive">Тест-драйв</Link>
            <Link to="/blog">Блог</Link>
            <Link to="/contacts">Контакты</Link>
            <Link to="/promotions">Акции</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
