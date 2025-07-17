import React from 'react';
import './CSS/TermsOfUse.css';

const TermsOfUse = () => {
  return (
    <div className="terms-container">
      <h1>Terms of Use</h1>
      <p className="intro">By accessing or using our services, you agree to be bound by the following terms and conditions.</p>

      <div className="term-section">
        <h2>1. Eligibility</h2>
        <ul>
          <li>You must be 18 years old or have parental consent.</li>
          <li>You must provide accurate personal information.</li>
        </ul>
      </div>

      <div className="term-section">
        <h2>2. Booking Policy</h2>
        <ul>
          <li>All classes must be booked in advance.</li>
          <li>Cancellation must be made at least 24 hours before class.</li>
        </ul>
      </div>

      <div className="term-section">
        <h2>3. Refunds & Payments</h2>
        <ul>
          <li>No refunds on completed bookings unless canceled by us.</li>
          <li>We use secure third-party payment gateways.</li>
        </ul>
      </div>

      <div className="term-section">
        <h2>4. Content Use</h2>
        <p>All yoga materials, content, and videos belong to YogaSite. Reuse is prohibited without written permission.</p>
      </div>

      <div className="term-section">
        <h2>5. Contact</h2>
        <p>If you have any questions, please email <strong>support@yogasite.com</strong>.</p>
      </div>
    </div>
  );
};

export default TermsOfUse;
