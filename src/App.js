import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import CompleteRestaurant from './Components/CompleteRestaurant';
import AllRestaurants from './Components/AllRestaurants';
import Cart from './Components/Cart'; // Import Cart component
import Checkout from './Components/Checkout';
import OrderPlaced from './Components/OrderPlaced';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home component as the landing page */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/restaurants" element={<CompleteRestaurant />} /> {/* Corrected */}
        <Route path="/cart" element={<Cart />} /> {/* Added Cart route */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-placed" element={<OrderPlaced />} />
      </Routes>
      <CompleteRestaurant />
      <AllRestaurants />
      <Checkout />
      <OrderPlaced />
      <Footer />
    </div>
  );
}

export default App;
