import React from 'react';
import { useLocation } from 'react-router-dom';
import './RestaurantDetails.css';
import clock from '../Assets/Images/clock.png';
import boy from '../Assets/Images/boy.png';
import review from '../Assets/Images/reviews.png';

const RestaurantDetails = () => {
    const location = useLocation();
    const { restaurants } = location.state || { restaurants: [] };

    return (
        <>
            <br />
            <div style={{ width: "80%" }} className="container-fluid justify-content-center text-center my-5">
                <div className="container-fluid text-center justify-content-center">
                    <div className="row justify-content-center">
                        {restaurants.map((restaurant, index) => (
                            <div key={index} className="restaurant-card border col-lg-4 col-md-6 col-sm-12 bg-white">
                                <img style={{ float: 'left' }} className="img-fluid" src={`http://localhost:5000${restaurant.image_url}`} alt={restaurant.name} />
                                <div className="container">
                                    <p style={{ fontSize: '20px' }} className="left">
                                        {restaurant.name}
                                        <span className="text-success" style={{ fontSize: '12px' }}>
                                            <br />
                                            <img style={{ width: '8%' }} className="left" src={clock} alt="Delivery time" /> 40-60 min
                                            <img style={{ width: '8%' }} className="mx-1" src={boy} alt="Delivery boy" /><span className="orange"> free</span>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <br /><br />
                <div className="container border my-5 bg-light">
                    <br />
                    <p className="heading left my-4">
                        Customer Reviews
                    </p>
                    <img style={{ width: '90%' }} className="img-fluid" src={review} alt="Customer reviews" />
                    <br />
                </div>
            </div><br />
        </>
    );
};

export default RestaurantDetails;
