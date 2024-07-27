import React from 'react';
import './Checkout.css';
import CheckoutLine from '../Assets/Images/checkoutLine.png';
import EasyPaisa from '../Assets/Images/easypaisaIcon.png';
import JazzCash from '../Assets/Images/jazzcashIcon.png';
import PayFast from '../Assets/Images/payfastIcon.png';
import COD from '../Assets/Images/codIcon.png';
import orderSummaryBox from '../Assets/Images/orderSummaryBox.png';
import BikeImage from '../Assets/Images/BikeImage.png'

const Checkout = () => {
    return (
        <div className="checkout-container">
            <div className="white-background-container">
                <img src={CheckoutLine} alt="Checkout Line" className="checkout-line" />
                <h1 className="details-heading">Delivery and Payment Details</h1>
                <div className="content-container">
                    <div className="form-container">
                        <label htmlFor="fullName" className="form-label">Full Name</label>
                        <input type="text" id="fullName" className="form-input" placeholder="Enter your full name" />
                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                        <input type="text" id="phoneNumber" className="form-input" placeholder="Enter your phone number" />
                        <div className="form-row">
                            <div className="form-field-bogie">
                                <label htmlFor="bogieNo" className="form-label-bogie">Bogie No.</label>
                                <input type="text" id="bogieNo" className="bogie-field" placeholder="Enter bogie number" />
                            </div>
                            <div className="form-field-seat">
                                <label htmlFor="seatNo" className="form-label-seat">Seat No.</label>
                                <input type="text" id="seatNo" className="seat-field" placeholder="Enter seat number" />
                            </div>
                        </div>
                    </div>
                    <div className="order-summary-box">
                        <img src={orderSummaryBox} alt="Order Summary Box" className="order-summary-image" />
                        <div className="order-summary-text">Order Summary</div>
                    </div>
                </div>
                <div className="payment-options">
                    <div className="payment-option">
                        <input type="radio" id="easyPaisa" name="payment" value="easyPaisa" />
                        <label htmlFor="easyPaisa" className="payment-label">
                            EasyPaisa
                            <img src={EasyPaisa} alt="EasyPaisa" className="payment-logo-ep" />
                        </label>
                    </div>
                    <div className="payment-option">
                        <input type="radio" id="jazzCash" name="payment" value="jazzCash" />
                        <label htmlFor="jazzCash" className="payment-label">
                            JazzCash
                            <img src={JazzCash} alt="JazzCash" className="payment-logo-jc" />
                        </label>
                    </div>
                    <div className="payment-option">
                        <input type="radio" id="payFast" name="payment" value="payFast" />
                        <label htmlFor="payFast" className="payment-label">
                            PayFast
                            <img src={PayFast} alt="PayFast" className="payment-logo-pf" />
                        </label>
                    </div>
                    <div className="payment-option">
                        <input type="radio" id="cashOnDelivery" name="payment" value="cashOnDelivery" />
                        <label htmlFor="cashOnDelivery" className="payment-label">
                            Cash on Delivery
                            <img src={COD} alt="Cash on Delivery" className="payment-logo-cod" />
                        </label>
                    </div>
                </div>
                <button className="place-order-button">Place Order</button>
                <div className="agreement-text">
                    By placing your order, you agree to our company 
                    <span className="link-text"> Privacy policy </span>
                    and 
                    <span className="link-text"> Conditions of use.</span>
                </div>
                <img src={BikeImage} alt="Bike" className="bike-image" />
            </div>
        </div>
    );
};

export default Checkout;
