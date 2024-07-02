import React from 'react';
import './Landing.css'; // Import CSS file
import LandingImage from '../Assets/Images/Landing.png';
import TrainImage from '../Assets/Images/TrainImage.png'; // Import the train image

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
        </div>
    );
}

export default Landing;
