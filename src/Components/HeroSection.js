import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';
import backgroundImage from '../Assets/Images/bg2.jpg';
import CountdownTimer from './CountdownTimer';
import logo from '../Assets/Images/logo.png';
import TypeWriter from './TypeWriter';
import ChatBox from './ChatBox'; // Import the ChatBox component

const targetLaunchDate = '2024-07-20T00:00:00';

const HeroSection = () => {
  const englishText = "RailFood";
  const urduText = "ریلفوڈ کے ساتھ ذائقے کا سفر";
  const daysLeftText = "Time left to launch in Pakistan";

  return (
    <div className="hero-section">
      <motion.div
        className="background"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, loop: Infinity, ease: 'easeInOut' }}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <header className="hero-header">
        {/* Logo and Text Container */}
        <div className="logo-text-container">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="text-container">
            <div className="english-text">{englishText}</div>
            <div className="urdu-text">{urduText}</div>
          </div>
        </div>
        
        {/* Countdown Timer with Animation */}
        <motion.div
          className="countdown-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="countdown-text">{daysLeftText}</div>
          <CountdownTimer targetDate={targetLaunchDate} />
        </motion.div>

        {/* ChatBox Component */}
        <ChatBox /> {/* Positioned on the right side with the updated CSS */}
      </header>

      {/* TypeWriter Component */}
      <TypeWriter /> {/* Positioned at the bottom left with the updated CSS */}
    </div>
  );
};

export default HeroSection;
