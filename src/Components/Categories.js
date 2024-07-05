import React from "react";
import c1 from '../Assets/Images/cate1.png';
import c2 from '../Assets/Images/cate2.png';
import c3 from '../Assets/Images/cate3.png';
import c4 from '../Assets/Images/cate4.png';
import get from '../Assets/Images/getstarted.png';
import pocket from '../Assets/Images/pocket.png';
import customer from '../Assets/Images/customers.png';

import './Categories.css';

export default function Categories() {
    return (
        <>
            <br />
            <div className="container-custom container-fluid justify-content-center text-center">
                <span className="customer-favorites">Customer Favorites</span>
                <br />
                <p className="popular-categories">
                    Popular <span>Categories</span>
                </p>
                <br />
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="category col col-lg-3 col-sm-12">
                            <img className="category-img my-2" src={c1} alt="Main Dish" />
                            <br />
                            <span className="main-dish">Main Dish</span>
                            <span>(86 dishes)</span>
                        </div>
                        <div className="category col col-lg-3 col-sm-12">
                            <img className="category-img my-4" src={c2} alt="Breakfast" />
                            <span className="breakfast">Breakfast</span>
                            <span>(86 dishes)</span>
                        </div>
                        <div className="category col col-lg-3 col-sm-12">
                            <img className="category-img" src={c3} alt="Dessert" />
                            <br />
                            <span className="dessert">Dessert</span>
                            <span>(86 dishes)</span>
                        </div>
                        <div className="category col col-lg-3 col-sm-12">
                            <img className="category-img" src={c4} alt="Barbecue" />
                            <br />
                            <span className="barbecue">Barbecue</span>
                            <span>(86 dishes)</span>
                        </div>
                    </div>
                </div>
                <br /><br />
                <img style={{width:'78%'}} className="image-fluid my-4 slide-in-left" src={get} alt="Get Started" />
                <img style={{width:'78%'}} className="image-fluid slide-in-right" src={pocket} alt="Pocket" />
                <img style={{width:'78%'}} className="image-fluid my-4 slide-in-left" src={customer} alt="Customer" />
            </div>
        </>
    );
}
