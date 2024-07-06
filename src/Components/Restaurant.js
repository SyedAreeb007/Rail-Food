import React, { useState, useEffect } from 'react';
import './Restaurant.css';
import SearchLogo from '../Assets/Images/SearchLogo.png';
import card1 from '../Assets/Images/BurgerCard.png';
import card2 from '../Assets/Images/CafeCard.png';
import card3 from '../Assets/Images/ButterCard.png';
import GreenArrow from '../Assets/Images/GreenArrow.png';
import OrangeArrow from '../Assets/Images/OrangeArrow.png';
import CuisineList1 from '../Assets/Images/CuisineList1.png';
import CuisineList2 from '../Assets/Images/CuisineList2.png';
import CuisineList3 from '../Assets/Images/CuisineList3.png';
import CuisineList4 from '../Assets/Images/CuisineList4.png';
import CuisineList5 from '../Assets/Images/CuisineList5.png';
import CuisineList6 from '../Assets/Images/CuisineList6.png';
import CuisineList7 from '../Assets/Images/CuisineList7.png';
import CuisineList8 from '../Assets/Images/CuisineList8.png';
import HomeChefCard1 from '../Assets/Images/HomeChefCard1.png';
import HomeChefCard2 from '../Assets/Images/HomeChefCard2.png';
import HomeChefCard3 from '../Assets/Images/HomeChefCard3.png';

const Restaurant = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    // Mock implementation for development
    const mapElement = document.getElementById('map');
    if (mapElement) {
      mapElement.innerHTML = 'Google Maps Mock - No API Key';
      mapElement.style.display = 'flex';
      mapElement.style.justifyContent = 'center';
      mapElement.style.alignItems = 'center';
      mapElement.style.backgroundColor = '#E5E5E5';
    }

    const handleMapClick = (event) => {
      const rect = mapElement.getBoundingClientRect();
      const lat = ((event.clientY - rect.top) / rect.height) * 180 - 90;
      const lng = ((event.clientX - rect.left) / rect.width) * 360 - 180;
      setSelectedLocation({ lat, lng });
    };

    mapElement.addEventListener('click', handleMapClick);

    // Cleanup function
    return () => {
      mapElement.removeEventListener('click', handleMapClick);
    };
  }, []);

  return (
    <>
      <div className="restaurant-container">
        <div className="search-box">
          <input type="text" placeholder="What are you craving for" className="search-input" />
          <img src={SearchLogo} alt="Search" className="search-logo" />
        </div>
        {selectedLocation && (
          <div className="location-display">
            Selected Location: Lat: {selectedLocation.lat.toFixed(4)}, Lng: {selectedLocation.lng.toFixed(4)}
          </div>
        )}
        <div className="map-container">
          <div id="map" className="map">Mock Google Map</div>
        </div>
      </div>

      <div className="daily-deals">
        <div className="daily-deals-header">
          <span className="daily-deals-title">Daily Deals</span>
          <img src={GreenArrow} alt="Green Arrow" className="green-arrow" />
        </div>
        <div className="daily-deals-cards">
          <img src={card1} alt="Card 1" className="deal-card1" />
          <img src={card2} alt="Card 2" className="deal-card2" />
          <img src={card3} alt="Card 3" className="deal-card3" />
        </div>
      </div>

      <div className="cuisines">
        <div className="cuisines-header">
          <span className="cuisines-title">Top Most Cuisines</span>
          <img src={OrangeArrow} alt="Orange Arrow" className="orange-arrow" />
        </div>
        <div className="cuisine-list">
          <img src={CuisineList1} alt="Cuisine 1" className="cuisine-item" />
          <img src={CuisineList2} alt="Cuisine 2" className="cuisine-item" />
          <img src={CuisineList3} alt="Cuisine 3" className="cuisine-item" />
          <img src={CuisineList4} alt="Cuisine 4" className="cuisine-item" />
          <img src={CuisineList5} alt="Cuisine 5" className="cuisine-item" />
          <img src={CuisineList6} alt="Cuisine 6" className="cuisine-item" />
          <img src={CuisineList7} alt="Cuisine 7" className="cuisine-item" />
          <img src={CuisineList8} alt="Cuisine 8" className="cuisine-item" />
        </div>
      </div>

      <div className="home-chefs">
        <div className="home-chefs-header">
          <span className="home-chefs-title">Home Chefs</span>
          <img src={GreenArrow} alt="Green Arrow" className="green-arrow" />
        </div>
      </div>

      <div className="home-chef-cards">
        <img src={HomeChefCard1} alt="Home Chef 1" className="home-chef-card" />
        <img src={HomeChefCard2} alt="Home Chef 2" className="home-chef-card" />
        <img src={HomeChefCard3} alt="Home Chef 3" className="home-chef-card" />
      </div>
    </>
  );
};

export default Restaurant;
