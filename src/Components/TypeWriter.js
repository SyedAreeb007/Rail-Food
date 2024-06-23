import React, { useState, useEffect } from 'react';
import './TypeWriter.css';

const TypeWriter = () => {
  const serviceTexts = [
    "Delicious meals delivered on the go",
    "Explore a journey of flavors",
    "Convenient and tasty food options"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true); // Flag to manage typing or erasing
  const [isPaused, setIsPaused] = useState(false); // Flag to manage pause

  useEffect(() => {
    let charIndex = 0;
    let timer;

    const typeWriterEffect = () => {
      if (isTyping) {
        if (charIndex <= serviceTexts[currentTextIndex].length) {
          setCurrentText(serviceTexts[currentTextIndex].slice(0, charIndex));
          charIndex++;
        } else {
          setIsTyping(false); // Stop typing
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false); // Continue erasing after pause
          }, 2000); // Pause duration when a sentence is completed
        }
      } else {
        if (charIndex >= 0) {
          setCurrentText(serviceTexts[currentTextIndex].slice(0, charIndex));
          charIndex--;
        } else {
          setIsTyping(true); // Move to the next text
          setCurrentTextIndex((currentTextIndex + 1) % serviceTexts.length);
        }
      }
    };

    if (!isPaused) {
      timer = setInterval(typeWriterEffect, 80); // Adjust typing speed here (e.g., 150ms for slower speed)
    }

    return () => clearInterval(timer);
  }, [currentTextIndex, isTyping, isPaused]);

  return (
    <div className="typewriter-container">
      <div className="typewriter-box">
        <p className="typewriter-text">{currentText}</p>
      </div>
    </div>
  );
};

export default TypeWriter;
