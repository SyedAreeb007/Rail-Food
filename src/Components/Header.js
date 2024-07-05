import React from 'react';
import './Header.css';
import Logo from '../Assets/Images/logo.png';
import CartLogo from '../Assets/Images/CartLogo.png';
import LoginLogo from '../Assets/Images/LoginLogo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo" style={{ animation: 'fadeIn 1s forwards' }} />
        </Link>
      </div>
      <div className="buttons-container">
        <button className="cart-button" style={{ animation: 'slideInLeft 1s forwards' }}>
          <img src={CartLogo} alt="Cart" className="button-logo" />
          <span>Cart</span>
        </button>
        <button className="login-button" style={{ animation: 'slideInRight 1s forwards' }}>
          <Link to="/signup" className="signup-account">
            <img src={LoginLogo} alt="Login/Signup" className="button-logo" />
            <span>Login/Signup</span>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
