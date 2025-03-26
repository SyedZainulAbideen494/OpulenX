import React, { useState } from 'react';
import './plans-page.css';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const PlansPage = () => {
  const [currentPlanIndex, setCurrentPlanIndex] = useState(0);
  const plans = [
    {
      name: 'Basic Plan',
      price: '$10/month',
      description: 'Access to basic features, personalized cards, and more.',
    },
    {
      name: 'Standard Plan',
      price: '$30/month',
      description: 'Includes all Basic Plan features, plus additional customizations.',
    },
    {
      name: 'Premium Plan',
      price: '$60/month',
      description: 'Exclusive benefits, full customization, and VIP support.',
    },
  ];

  const nextPlan = () => {
    setCurrentPlanIndex((prevIndex) => (prevIndex + 1) % plans.length);
  };

  const prevPlan = () => {
    setCurrentPlanIndex(
      (prevIndex) => (prevIndex - 1 + plans.length) % plans.length
    );
  };

  return (
    <div className="plans-page">
      <div className="hero-container-plans-page">
        <div className="hero-content-plans-page">
          <h1 className="hero-title-plans-page">Choose Your Elite Plan</h1>
          <p className="hero-subtitle-plans-page">
            Unlock the ultimate experience with our exclusive digital elite plans.
          </p>
        </div>


      </div>
    </div>
  );
};

export default PlansPage;
