import React from 'react';
import './Cart.css';
import SmileImage from '../Assets/Images/emoji.png';
import BasketImage from '../Assets/Images/basket.png';
import CartLine from '../Assets/Images/cartline.png';

const Cart = () => {
    return (
        <>
            <img src={CartLine} alt="CartLine" className="cart-line-image" />
            <div className="mobile-cart-section">
                <div className="mobile-cart-header">
                    <img src={BasketImage} alt="Basket" className="mobile-basket-image" />
                    <span className="mobile-basket-text">My Basket</span>
                </div>
                <div className="mobile-cart-content">
                    <img src={SmileImage} alt="Smile" className="mobile-smile-image" />
                    <p className="mobile-craving-text">Craving something delicious?</p>
                    <p className="mobile-empty-text">Your plate is still empty!</p>
                </div>
            </div>
        </>
    );
}

export default Cart;
