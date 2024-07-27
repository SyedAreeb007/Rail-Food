import React, { useState } from 'react';
import './AllRestaurants.css';
import Banner from '../Assets/Images/piatoBakersBanner.png';
import SearchLogo from '../Assets/Images/SearchLogo.png';
import AppetizerCard1 from '../Assets/Images/AppetizerMenuCard1.png';
import AppetizerCard2 from '../Assets/Images/AppetizerMenuCard2.png';
import AppetizerCard3 from '../Assets/Images/AppetizerMenuCard3.png';
import AppetizerCard4 from '../Assets/Images/AppetizerMenuCard4.png';
import CakesCard1 from '../Assets/Images/CakesMenuCard1.png';
import CakesCard2 from '../Assets/Images/CakesMenuCard2.png';
import CakesCard3 from '../Assets/Images/CakesMenuCard3.png';
import CakesCard4 from '../Assets/Images/CakesMenuCard4.png';
import BurgersandSandwichesCard1 from '../Assets/Images/BurgersandSandwichesMenuCard1.png';
import BurgersandSandwichesCard2 from '../Assets/Images/BurgersandSandwichesMenuCard2.png';
import BurgersandSandwichesCard3 from '../Assets/Images/BurgersandSandwichesMenuCard3.png';
import BurgersandSandwichesCard4 from '../Assets/Images/BurgersandSandwichesMenuCard4.png';
import PastaandLasagnaCard1 from '../Assets/Images/PastaandLasagnaMenuCard1.png';
import PastaandLasagnaCard2 from '../Assets/Images/PastaandLasagnaMenuCard2.png';
import PastaandLasagnaCard3 from '../Assets/Images/PastaandLasagnaMenuCard3.png';
import PastaandLasagnaCard4 from '../Assets/Images/PastaandLasagnaMenuCard4.png';
import PastaandLasagnaCard5 from '../Assets/Images/PastaandLasagnaMenuCard5.png';
import PastaandLasagnaCard6 from '../Assets/Images/PastaandLasagnaMenuCard6.png';
import SmileImage from '../Assets/Images/emoji.png';
import BasketImage from '../Assets/Images/basket.png';
import menuLogo from '../Assets/Images/menuLogo.png';
import dropDownLogo from '../Assets/Images/dropDownLogo.png';

const AllRestaurants = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showMenuItems, setShowMenuItems] = useState(false);

  const handleMenuClick = () => {
    setShowMenuItems(!showMenuItems);
  };

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const menuItems = [
    "Offers",
    "Appetizers",
    "Cakes",
    "Burgers and Sandwiches",
    "Pasta and Lasagna",
    "Sizzling Steaks"
  ];

  return (
    <div className="all-restaurants-container">
      <img src={Banner} alt="Banner" className="banner" />
      <div className="header-section">
        <h2 className="offers-text">All Offers from Piato Bakers</h2>
        <div className="search-box">
          <img src={SearchLogo} alt="Search" className="search-logo" />
          <input type="text" placeholder="Search from menu..." className="search-input" />
        </div>
      </div>
      <h2 className="mobile-text">Order from Piato Bakers</h2>
      <div className={`black-stripe ${showMenuItems ? 'show' : ''}`}>
        {menuItems.map((text, index) => (
          <span
            key={index}
            className={`menu-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {text}
          </span>
        ))}
      </div>
      <div className="mobile-container">
        <div className="mobile-header">
          <img src={menuLogo} alt="Menu Logo" className="menu-logo" />
          <span className="menu-text">Menu</span>
          <span className="all-text">All</span>
          <img
            src={dropDownLogo}
            alt="Drop Down"
            className="dropdown-logo"
            onClick={handleMenuClick}
          />
        </div>
        {showMenuItems && (
          <ul className="menu-items-list">
            {menuItems.map((text, index) => (
              <li
                key={index}
                className={`menu-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleClick(index)}
              >
                {text}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="background-below">
        <div className="menu-section">
          <h3>Appetizers</h3>
          <img src={AppetizerCard1} alt="Appetizer 1" className="menu-card" />
          <img src={AppetizerCard2} alt="Appetizer 2" className="menu-card" />
          <img src={AppetizerCard3} alt="Appetizer 3" className="menu-card" />
          <img src={AppetizerCard4} alt="Appetizer 4" className="menu-card" />

          <h3>Cakes</h3>
          <img src={CakesCard1} alt="Cake 1" className="menu-card" />
          <img src={CakesCard2} alt="Cake 2" className="menu-card" />
          <img src={CakesCard3} alt="Cake 3" className="menu-card" />
          <img src={CakesCard4} alt="Cake 4" className="menu-card" />

          <h3>Burgers and Sandwiches</h3>
          <img src={BurgersandSandwichesCard1} alt="Burger 1" className="menu-card" />
          <img src={BurgersandSandwichesCard2} alt="Burger 2" className="menu-card" />
          <img src={BurgersandSandwichesCard3} alt="Burger 3" className="menu-card" />
          <img src={BurgersandSandwichesCard4} alt="Burger 4" className="menu-card" />

          <h3>Pasta and Lasagna</h3>
          <img src={PastaandLasagnaCard1} alt="Pasta 1" className="menu-card" />
          <img src={PastaandLasagnaCard2} alt="Pasta 2" className="menu-card" />
          <img src={PastaandLasagnaCard3} alt="Pasta 3" className="menu-card" />
          <img src={PastaandLasagnaCard4} alt="Pasta 4" className="menu-card" />
          <img src={PastaandLasagnaCard5} alt="Pasta 5" className="menu-card" />
          <img src={PastaandLasagnaCard6} alt="Pasta 6" className="menu-card" />
        </div>
        <div className="cart-section">
          <div className="cart-header">
            <img src={BasketImage} alt="Basket" className="basket-image" />
            <span className="basket-text">My Basket</span>
          </div>
          <div className="cart-content">
            <img src={SmileImage} alt="Smile" className="smile-image" />
            <p className="craving-text">Craving something delicious?</p>
            <p className="empty-text">Your plate is still empty!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRestaurants;
