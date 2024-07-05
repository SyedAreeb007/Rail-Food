import React from 'react';
import './Landing.css'; // Import CSS file
import LandingImage from '../Assets/Images/Landing.png';
import TrainImage from '../Assets/Images/TrainImage.png'; // Import the train image
import BikeImage from '../Assets/Images/BikeImage.png';
import ChickenImage from '../Assets/Images/ChickenImage.png';
import EggImage from '../Assets/Images/EggImage.png';
import FriesImage from '../Assets/Images/FriesImage.png';
import BenefitImage1 from '../Assets/Images/BenefitImage1.png';
import BenefitImage2 from '../Assets/Images/BenefitImage2.png';
import BenefitImage3 from '../Assets/Images/BenefitImage3.png';

const Landing = () => {
    return (
        <div className="landing-container">
            <img src={LandingImage} alt="Landing" className="landing-image" style={{ animation: 'fadeIn 3s forwards' }} />
            <div className="landing-inputs-overlay" style={{ animation: 'slideInRight 1s forwards' }}>
                <div className="mobile-heading" style={{ animation: 'fadeInUp 1s forwards' }}>
                    <div className="black-text">Order Restaurant food,</div>
                    <div className="green-text">for your train</div>
                </div>
                <div className="landing-input-container" style={{ animation: 'fadeInUp 1s forwards' }}>
                    <label htmlFor="trainInput">Enter Your Train</label>
                    <input type="text" id="trainInput" placeholder="e.g. EC4R 3TE" style={{ animation: 'fadeInUp 1s forwards' }} />
                </div>
                <div className="landing-input-container with-button" style={{ animation: 'fadeInUp 1s forwards' }}>
                    <label htmlFor="stationInput">Enter Your Station</label>
                    <div className="input-with-button">
                        <input type="text" id="stationInput" placeholder="e.g. EC4R 3TE" style={{ animation: 'fadeInUp 1s forwards' }} />
                        <button className="landing-button" style={{ animation: 'scaleIn 1s forwards, fadeIn 1s forwards' }}>Go</button>
                    </div>
                </div>
                <div className="or-text-specific" style={{ animation: 'fadeInUp 1s forwards' }}>Or</div>
                <div className="landing-input-container with-button" style={{ animation: 'fadeInUp 1s forwards' }}>
                    <label htmlFor="locationInput">Enter Location</label>
                    <div className="input-with-button">
                        <input type="text" id="locationInput" placeholder="e.g. EC4R 3TE" style={{ animation: 'fadeInUp 1s forwards' }} />
                        <button className="landing-button" style={{ animation: 'scaleIn 1s forwards, fadeIn 1s forwards' }}>Go</button>
                    </div>
                </div>
                <img src={TrainImage} alt="Train" className="train-image" style={{ animation: 'fadeInRight 1s forwards' }} /> {/* Add Train Image */}
            </div>
            <div className="background-box" style={{ animation: 'fadeIn 3s forwards' }}></div> {/* New box for mobile view */}
            <div className="text-section">
                <div className="text-icons-wrapper">
                    <img src={BikeImage} alt="Bike" className="side-icon left-icon" />
                    <div className="ride-dine-text">
                        <img src={FriesImage} alt="Fries" className="small-icon1" />
                        <span className="ride-text">Ride </span>
                        <span className="and-text">&</span>
                        <span className="dine-text"> Dine</span>
                        <img src={EggImage} alt="Egg" className="small-icon2" />
                    </div>
                    <img src={ChickenImage} alt="Chicken" className="side-icon right-icon" />
                </div>
                <div className="enjoy-text">Enjoy Delicious Food</div>
                <div className="anywhere-text">Anywhere You Go!</div>
                <div className="experience-our-text">
                    <br /><br />
                    <span className="experience-text">Experience Our</span>
                    <span className="benefits-text">Benefits</span>
                </div>
                <div className="benefits-images">
                    <img src={BenefitImage1} alt="Benefit 1" className="benefit-image" />
                    <img src={BenefitImage2} alt="Benefit 2" className="benefit-image" />
                    <img src={BenefitImage3} alt="Benefit 3" className="benefit-image" />
                </div>
            </div>
        </div>
    );
}

export default Landing;
