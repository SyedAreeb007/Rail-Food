import React from 'react';
import './OrderPlaced.css';
import OrderCompleteImage from '../Assets/Images/orderCompleteImage.png';

const OrderPlaced = () => {
    return (
        <div className="orderplaced-container">
            <div className="white-background-container">
                <h1 className="orderplaced-details-heading">Thank you for your order!</h1>
                <img
                    src={OrderCompleteImage}
                    alt="Order Complete"
                    className="order-complete-image"
                />
                <div className="time-text">
                    <h2 className="time-text1">Delivery Time 25-30 min</h2>
                </div>
                <div className="order-text">
                    <p className="link-text1">Your order is being prepared by the restaurant</p>
                    <p className="link-text2">Once ready, our delivery partner will pick it up.</p>
                </div>
            </div>
        </div>
    );
}

export default OrderPlaced;
