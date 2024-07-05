import React from 'react';
import './Signup.css';
import WhiteScreen from '../Assets/Images/WhiteScreen.png';
import OrangeScreen from '../Assets/Images/OrangeScreen.png';
import SignupWithGoogle from '../Assets/Images/SignupWithGoogle.png';
import SignupWithFacebook from '../Assets/Images/SignupWithFacebook.png';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="screen-container">
        <img src={OrangeScreen} alt="Orange Screen" className="orange-screen" />
        <img src={WhiteScreen} alt="White Screen" className="white-screen" />
        <div className="signup-form">
          <h2>Create Account</h2>
          <div className="input-container">
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="input-container">
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-container">
            <input type="password" placeholder="Password" />
          </div>
          <div className="input-container">
            <input type="password" placeholder="Confirm Password" />
          </div>
          <div className="terms-container">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I have read and agreed to the <span className="terms-link">Terms of Service</span> and <span className="terms-link">Privacy Policy</span></label>
          </div>
          <button>Create Account</button>
          <p className="or-text">Or</p>
          <div className="social-login-container">
            <img src={SignupWithGoogle} alt="Signup with Google" className="signup-with-google" />
            <img src={SignupWithFacebook} alt="Signup with Facebook" className="signup-with-facebook" />
          </div>
          <p className="have-account">
            Already have an account? <Link to="/login" className="login-account">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
