import { useState } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import crownAnimation from "./crown.json"; // Import your Lottie JSON file
import { useNavigate } from "react-router-dom"; // Import for navigation

import "./BuyPassForm.css";

const BuyPassForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const navigate = useNavigate(); // Initialize navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Send user details to create an order
      const { data } = await axios.post("https://srv594954.hstgr.cloud/buy-opulenx", formData);
  
      const options = {
        key: "rzp_live_jPX6SxetQbApHC",
        amount: data.order.amount,
        currency: "INR",
        order_id: data.order.id,
        name: "OpulenX",
        description: "Unrivaled status. Absolute exclusivity.",
        handler: async (response) => {
          const verifyRes = await axios.post("https://srv594954.hstgr.cloud/verify-payment-opulenx", {
            payment_id: response.razorpay_payment_id,
            order_id: response.razorpay_order_id,
            signature: response.razorpay_signature,
          });
  
          if (verifyRes.data.success) {
            navigate("/success", { 
              state: { ...formData, amount: "4999", userId: verifyRes.data.userId } 
            }); // Pass the user ID to the success page
          } else {
            alert("Payment verification failed. Please try again.");
          }
        },
        theme: { color: "#000000" },
        method: {
          upi: true,
          card: true,
          netbanking: true,
          wallet: true,
        },
      };
  
      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error("Error processing payment", error);
      alert("An error occurred. Please try again.");
    }
  };
  
  

  return (
    <div className="container-BuyPassForm">
      <div className="formWrapper-BuyPassForm">
        
        {/* ---- Animated Crown Icon ---- */}
        <div className="crownIcon-BuyPassForm">
          <Lottie animationData={crownAnimation} loop={true} />
        </div>

        {/* ---- Title & Subtitle ---- */}
        <h2 className="title-BuyPassForm">Elite Digital Pass</h2>
        <p className="subtitle-BuyPassForm">Unrivaled status. Absolute exclusivity.</p>

        {/* ---- Premium Divider ---- */}
        <div className="divider-BuyPassForm"></div>

        {/* ---- Form Start ---- */}
        <form onSubmit={handleSubmit} className="form-BuyPassForm">
          <div className="inputGroup-BuyPassForm">
            <label className="label-BuyPassForm">Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="input-BuyPassForm" />
          </div>

          <div className="inputGroup-BuyPassForm">
            <label className="label-BuyPassForm">Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="input-BuyPassForm" />
          </div>

          <div className="inputGroup-BuyPassForm">
            <label className="label-BuyPassForm">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="input-BuyPassForm" />
          </div>

          {/* ---- Membership Plan ---- */}
          <div className="plan-BuyPassForm">
            <p>Elite Membership – <span>₹4999</span></p>
            <p className="planSubtext-BuyPassForm">Unmatched prestige. Unquestionable exclusivity.</p>
          </div>

          {/* ---- Join Button ---- */}
          <button type="submit" className="submitBtn-BuyPassForm" style={{ marginTop: "20px" }}>
            Join the League
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuyPassForm;
