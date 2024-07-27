import React from 'react';
import Restaurant from './Restaurant';
import RestaurantDetails from './RestaurantDetails';

const CompleteRestaurant = () => {
  return (
    <div id='back'>
      <Restaurant />
      <RestaurantDetails />
    </div>
  );
};

export default CompleteRestaurant;