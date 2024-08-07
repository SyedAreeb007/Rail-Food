import React from 'react';
import './Login.css';
import WhiteScreen from '../Assets/Images/WhiteScreen.png';
import GreenScreen from '../Assets/Images/GreenScreen.png';
import LoginWithGoogle from '../Assets/Images/LoginWithGoogle.png';
import LoginWithFacebook from '../Assets/Images/LoginWithFacebook.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <div className="screen-container">
        <div className="login-form">
          <h2>Login To Your Account</h2>
          <div className="input-container">
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-container">
            <input type="password" placeholder="Password" />
          </div>
          <button>Login</button>
          <p className="or-text">Or</p>
          <div className="social-login-container">
            <img src={LoginWithGoogle} alt="Login with Google" className="login-with-google" />
            <img src={LoginWithFacebook} alt="Login with Facebook" className="login-with-facebook" />
          </div>
          <p className="forget-password">
            Forget password? <span className="reset-password">Reset password</span>
          </p>
          <p className="signup">
            Don't have an account? <Link to="/signup" className="signup-account">Signup</Link>
          </p>
        </div>
        <img src={WhiteScreen} alt="White Screen" className="White-screen" />
        <img src={GreenScreen} alt="Green Screen" className="green-screen" />
      </div>
    </div>
  );
}

export default Login;