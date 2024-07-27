import React from 'react';
import './Footer.css';
import FacebookLogo from '../Assets/Images/FacebookLogo.png';
import InstagramLogo from '../Assets/Images/InstagramLogo.png';

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="footer-section">
                    <p>We won't spam, read our email policy</p>
                    <div className="footer-logos">
                        <img src={FacebookLogo} alt="Facebook Logo" className="social-logo1" />
                    </div>
                    <div className="footer-logos">
                        <img src={InstagramLogo} alt="Instagram Logo" className="social-logo2" />
                    </div>
                    <p>
                        Incubation #2, CEL&Inc,
                        <span className="newline">Sukkur IBA University.</span>
                    </p>
                </div>
                <div className="footer-section">
                    <p>Legal Pages</p>
                    <p className="clickable"><a href="/">Terms and conditions</a></p>
                    <p className="clickable"><a href="/">Privacy</a></p>
                    <p className="clickable"><a href="/">Cookies</a></p>
                </div>
                <div className="footer-section">
                    <p>Important Links</p>
                    <p className="clickable"><a href="/">Get help</a></p>
                    <p className="clickable"><a href="/">Add your restaurant</a></p>
                    <p className="clickable"><a href="/">Sign up to deliver</a></p>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-left">Copyright 2024, All Rights Reserved.</p>
                <p className="footer-center">
                    <a href="/">Privacy Policy</a> |
                    <a href="/">Terms</a> |
                    <a href="/">Pricing</a>
                </p>
                <p className="footer-right">Do not sell or share my personal information</p>
            </div>
        </div>
    );
};

export default Footer;