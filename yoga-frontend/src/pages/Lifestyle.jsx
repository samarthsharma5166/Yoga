import React from 'react';
import './CSS/Lifestyle.css';

const Lifestyle = () => {
  return (
    <div className="lifestyle-container">
      <h1>Yogic Lifestyle</h1>
      <p>Build peace and productivity with healthy routines and ancient wisdom.</p>
      <div className="lifestyle-sections">
        <div className="lifestyle-card">
          <h3>Morning Routine</h3>
          <p>Start your day with yoga, journaling, and meditation.</p>
        </div>
        <div className="lifestyle-card">
          <h3>Stress Reduction</h3>
          <p>Tips for managing anxiety through breathwork and mindfulness.</p>
        </div>
        <div className="lifestyle-card">
          <h3>Principles of Yoga</h3>
          <p>Learn about Ahimsa (non-violence), Satya (truth), and more.</p>
        </div>
      </div>
    </div>
  );
};

export default Lifestyle;
