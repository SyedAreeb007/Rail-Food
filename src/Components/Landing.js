import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Landing.css';
import LandingImage from '../Assets/Images/Landing.png';
import TrainImage from '../Assets/Images/TrainImage.png';
import BikeImage from '../Assets/Images/BikeImage.png'
import FriesImage from '../Assets/Images/FriesImage.png'
import EggImage from '../Assets/Images/EggImage.png'
import ChickenImage from '../Assets/Images/ChickenImage.png'
import BenefitImage1 from '../Assets/Images/BenefitImage1.png'
import BenefitImage2 from '../Assets/Images/BenefitImage2.png'
import BenefitImage3 from '../Assets/Images/BenefitImage3.png'

const Landing = () => {
    const [station, setStation] = useState('');
    const [train, setTrain] = useState('');
    const navigate = useNavigate();

    const handleGoClick = async () => {
        try {
            const response = await axios.get('http://localhost:5000/restaurants', {
                params: { station }
            });
            navigate('/restaurants', { state: { restaurants: response.data.restaurants } });
        } catch (error) {
            console.error('Error fetching restaurants:', error);
        }
    };

    return (

        <div className="landing-container">

            <img src={LandingImage} alt="Landing" className="landing-image" style={{ animation: 'fadeIn 3s forwards' }} />
            <div className="landing-inputs-overlay" style={{ animation: 'slideInRight 1s forwards' }}>
                <div className="mobile-heading" style={{ animation: 'fadeInUp 1s forwards' }}>
                    <div className="black-text">Order Restaurant food,</div>
                    <div className="green-text">for your train</div>
                </div>
                <div className="landing-input-container " style={{ animation: 'fadeInUp 1s forwards' }}>

                    <label htmlFor="">Enter Your Train</label>
                    <div className="input-with-button ">
                        <select className='p-2' style={{
                            width: '100%',
                            height: '40px',
                            border: '0.5px solid gray',  // Corrected border style
                            borderRadius: '10px',
                            fontSize: '16px',
                            animation: 'fadeInUp 1s forwards'
                        }}
                            id=""
                            value={train}
                            onChange={(e) => setTrain(e.target.value)}
                         >
                            <option value="">Select Train</option>
                            <option className='' value="Sukkur">Sukkur</option>
                            <option value="Karachi">Karachi</option>
                            <option value="Lahore">Lahore</option>
                        </select>
                    </div> <br />
                    <label htmlFor="stationInput ">Enter Your Station</label>

                    <div className="input-with-button ">
                        <select className='p-2'
                            id="stationInput"
                            value={station}
                            onChange={(e) => setStation(e.target.value)}
                            style={{
                                width: '100%',
                                height: '40px',
                                border: '0.5px solid gray',  // Corrected border style

                                borderRadius: '10px',
                                fontSize: '16px',
                                animation: 'fadeInUp 1s forwards'
                            }}
                        >
                            <option value="">Select Station</option>
                            <option value="Sukkur">Sukkur</option>
                            <option value="Karachi">Karachi</option>
                            <option value="Lahore">Lahore</option>
                        </select>

                    </div>
                    <br />
                    <button
                        className="landing-button"
                        style={{ animation: 'scaleIn 1s forwards, fadeIn 1s forwards', width: '100%' }}
                        onClick={handleGoClick}
                    >
                        Go
                    </button>
                </div>
                <img src={TrainImage} alt="Train" className="train-image" style={{ animation: 'fadeInRight 1s forwards' }} />
            </div>
            <div className="background-box" style={{ animation: 'fadeIn 3s forwards' }}></div>
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
};

export default Landing;