import React from 'react';
import './CSS/Physical.css';

const Physical = () => {
  return (
    <div className="physical-container">
      <h1>Physical Wellness</h1>
      <p>Maintain flexibility and strength with our guided yoga routines.</p>
      <div className="physical-sections">
        <div className="physical-card">
          <h3>Daily Yoga Routine</h3>
          <p>20-minute daily yoga to keep you active and energetic.</p>
        </div>
        <div className="physical-card">
          <h3>Yoga Challenges</h3>
          <p>Join our 7-day or 21-day challenges to stay fit and motivated.</p>
        </div>
        <div className="physical-card">
          <h3>Transformation Stories</h3>
          <p>Real results from our yoga community.</p>
        </div>
      </div>
    </div>
  );
};

export default Physical;
