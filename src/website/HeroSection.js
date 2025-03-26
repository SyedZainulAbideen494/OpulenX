import React from "react";
import "./HeroSection.css";
import logo from '../images/OpulenX.png'
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="hero-container">
      <div className="hero-logo">

      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          Entwined in the Elite's Dominion
        </h1>
        <p className="hero-subtitle">
          "In the realm of the elite, your name is your legacy. Ascend, or remain unseen."
        </p>
        <div className="button-group">
          <button className="cta-button find-elite" onClick={() => {navigate('/search')}}>
            Find the Elite
          </button>
          <button className="cta-button claim-status" onClick={() => {navigate('/join-elite')}}>
          Join the League
          </button>
        </div>
      
      </div>
    </div>
  );
};

export default HeroSection;
