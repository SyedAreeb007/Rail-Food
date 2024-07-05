import React from "react";
import c1 from '../Assets/Images/cate1.png';
import c2 from '../Assets/Images/cate2.png';
import c3 from '../Assets/Images/cate3.png';
import c4 from '../Assets/Images/cate4.png';
import pocket from '../Assets/Images/pocket.png';
import customer from '../Assets/Images/customers.png';
import partner from '../Assets/Images/partner with us.png';
import ride from '../Assets/Images/ride with us.png';
import app from '../Assets/Images/appstore.png';
import play from '../Assets/Images/playstore.png';
import './Categories.css';

export default function Categories() {
    return (
        <>
            <br />
            <div className=" container-custom container-fluid justify-content-center text-center">
                <span className="customer-favorites">Customer Favorites</span>
                <br />
                <p className="popular-categories">
                    Popular <span>Categories</span>
                </p>
                <br />
                <div className="container-fluid text-center">
                    <div className=" row justify-content-center">
                        <div className="category col col-lg-3 col-sm-12 col-md-12">
                            <img style={{ width: '50%' }} className="category-img my-2" src={c1} alt="Main Dish" />
                            <br />
                            <span className="main-dish">Main Dish</span>
                            <span>(86 dishes)</span>
                        </div>
                        <div className="category col col-lg-3 col-sm-11 col-md-3">
                            <img style={{ width: '57%' }} className="category-img " src={c2} alt="Breakfast" />  <br />
                            <span className="breakfast">Breakfast</span>
                            <span>(86 dishes)</span>
                        </div>
                        <div className="category col col-lg-3 col-sm-11 col-md-3">
                            <img style={{ width: '50%' }} className="category-img" src={c3} alt="Dessert" />
                            <br />
                            <span className="dessert">Dessert</span>
                            <span>(86 dishes)</span>
                        </div>
                        <div className="category col col-lg-3 col-sm-12">
                            <img style={{ width: '50%' }} className="category-img" src={c4} alt="Barbecue" />
                            <br />
                            <span className="barbecue">Barbecue</span>
                            <span>(86 dishes)</span>
                        </div>
                    </div>
                </div>
                <br /><br />
                <div class="container-fluid text-center justify-content-center my-5">
                    <div class="row justify-content-center">
                        <div class="col-lg-5 col-md-6 col-sm-12 image-container text-center justify-content-center">
                            <img className="img-fluid my-4 slide-in-left" src={partner} alt="Get Started" />
                            <button class="btn-overlay">Get Started</button>
                        </div>
                        <div class="col-lg-5 image-container text-center justify-content-center">
                            <img className="img-fluid my-4 slide-in-left" src={ride} alt="Get Started" />
                            <button class="btn-overlay">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="container image-wrapper">
                    <img className="main-img-fluid" src={pocket} alt="Pocket" />
                    <div className="overlay-images">
                        <a href="https://www.facebook.com" className="image-wrapper">
                            <img className="overlay-img" src={play} alt="Overlay 1" />
                        </a>
                        <a href="http://example.com/page1" className="image-wrapper">
                            <img className="overlay-img" src={app} alt="Overlay 2" />
                        </a>
                    </div>
                </div>
                <img style={{ width: '80%' }} className="image-fluid my-4 slide-in-left" src={customer} alt="Customer" />
            </div>
        </>
    );
}