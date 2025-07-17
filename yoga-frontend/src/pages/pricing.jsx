import React, { useState } from "react";
import "../pages/CSS/pricing.css";

const plans = [
  {
    id: 1,
    duration: "12 Months",
    originalPrice: "INR 12000",
    discountedPrice: "INR 3999",
    discount: "67% OFF",
    bestSeller: true,
  },
  {
    id: 2,
    duration: "6 Months",
    originalPrice: "INR 6000",
    discountedPrice: "INR 2999",
    discount: "50% OFF",
    bestSeller: false,
  },
  {
    id: 3,
    duration: "3 Months",
    originalPrice: "INR 3000",
    discountedPrice: "INR 1999",
    discount: "34% OFF",
    bestSeller: false,
  },
];

const features = [
  "Yoga Everyday with Sunidhi Sinha",
  "Dance & Strength with Trishna Sinha",
  "Flexible Batch Timings",
  "Face Yoga",
  "Breathing Exercises",
  "Habit Tracking",
  "Self Healing Marma",
  "Hand Mudras",
  "Mindful Journaling",
  "Physiotherapy Consultation",
  "Water Reminders",
  "Community Sessions",
];

const MembershipPlans = () => {
  const [selectedPlanId, setSelectedPlanId] = useState(null);

  const handleSelect = (planId) => {
    setSelectedPlanId(planId);
  };

  const handleBuyNow = (plan) => {
    alert(`You selected: ${plan.duration} - ${plan.discountedPrice}`);
  };

  const handleChat = () => {
    alert("Starting chat support...");
  };

  const handleCall = () => {
    alert("Calling support...");
    window.location.href = "tel:+911234567890";
  };

  return (
    <div className="membership-container">
      <h2 className="heading">Membership Plans</h2>
      <p className="subheading">Choose your Membership Plan</p>

      <div className="plans-wrapper">
        {plans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => handleSelect(plan.id)}
            className={`plan-card ${selectedPlanId === plan.id ? "selected" : ""}`}
          >
            {plan.bestSeller && <div className="badge">⭐ BEST SELLER</div>}
            {selectedPlanId === plan.id && <div className="tick">✓</div>}

            <h3 className="plan-duration">{plan.duration}</h3>
            <p className="original-price">{plan.originalPrice}</p>
            <div className="discount-badge">-{plan.discount}</div>
            <p className="discounted-price">{plan.discountedPrice}</p>
            <button
              className="buy-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleBuyNow(plan);
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      <div className="feature-table-wrapper">
        <table className="feature-table">
          <thead>
            <tr>
              <th>Features</th>
              {plans.map((plan) => (
                <th key={plan.id}>{plan.duration}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, idx) => (
              <tr key={idx}>
                <td>{feature}</td>
                {plans.map((plan) => {
                  const isNotIncluded =
                    (feature === "Self Healing Marma" && plan.duration === "3 Months") ||
                    (feature === "Hand Mudras" && plan.duration === "3 Months");

                  const symbol = isNotIncluded ? "✗" : "✔";

                  return (
                    <td
                      key={plan.id}
                      className={`${
                        isNotIncluded ? "feature-false" : "feature-true"
                      } ${selectedPlanId === plan.id ? "highlight-col" : ""}`}
                    >
                      {symbol}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h1 className="testimonials-heading">Our Members Stories</h1>
      <div className="testimonials">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
          <div key={id} className="testimonial-card">
            <div className="avatar"></div>
            <p className="member-name">Member {id}</p>
            <p className="member-title">Yoga Success Story</p>
            <p className="member-story">
              This is a wonderful experience shared by Member {id}.
            </p>
          </div>
        ))}
      </div>

      <div className="help-section">
        <p>Need help choosing the right plan?</p>
        <div className="help-buttons">
          <button className="chat-btn" onClick={handleChat}>
            Chat with Us
          </button>
          <button className="call-btn" onClick={handleCall}>
            Call Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipPlans;
