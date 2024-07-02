import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header/Header.css';

const ChatBox = () => {
  const messages = [
    { sender: "user", text: "Hi, I'd like to order some food." },
    { sender: "bot", text: "Sure! What would you like to have?" },
    { sender: "user", text: "Can I see the menu?" },
    { sender: "bot", text: "Here it is! We have a variety of delicious meals." },
    { sender: "user", text: "I’ll take a Chicken Biryani." },
    { sender: "bot", text: "Great choice! Anything else?" },
    { sender: "user", text: "That’s all for now." },
    { sender: "bot", text: "Your order will be ready soon. Thank you!" },
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentMessageIndex < messages.length) {
        setChatMessages(prevMessages => [...prevMessages, messages[currentMessageIndex]]);
        setCurrentMessageIndex(currentMessageIndex + 1);
      }
    }, 1000); // Adjust the interval time to control the speed of message appearance

    return () => clearInterval(timer);
  }, [currentMessageIndex, messages]);

  return (
    <div className="chatbox-container">
      {chatMessages.map((message, index) => (
        <motion.div
          key={index}
          className={`chat-message ${message.sender}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {message.text}
        </motion.div>
      ))}
    </div>
  );
};

export default ChatBox;
