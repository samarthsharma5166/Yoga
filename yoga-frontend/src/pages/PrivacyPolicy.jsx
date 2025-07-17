// PrivacyPolicy.jsx
import React from 'react';
import './CSS/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-container">
      <h1>Privacy Policy</h1>
      <p>We value your privacy and are committed to safeguarding your personal data. This policy explains how we collect, use, and protect your information.</p>

      <div className="legal-section">
        <h3>1. Data We Collect</h3>
        <ul>
          <li>Name, email, phone number during registration or booking</li>
          <li>Booking preferences, class history</li>
          <li>Payment and referral tracking info</li>
        </ul>
      </div>

      <div className="legal-section">
        <h3>2. How We Use Your Data</h3>
        <p>We use your information to:</p>
        <ul>
          <li>Manage bookings and demo classes</li>
          <li>Send class reminders and updates</li>
          <li>Improve our yoga platform and services</li>
        </ul>
      </div>

      <div className="legal-section">
        <h3>3. Data Protection</h3>
        <p>All personal data is stored securely and we implement best practices to prevent unauthorized access.</p>
      </div>

      <div className="legal-section">
        <h3>4. Third-Party Services</h3>
        <p>We may share information with trusted partners (e.g., payment gateways or referral services) only to complete specific services.</p>
      </div>

      <div className="legal-section">
        <h3>5. Contact</h3>
        <p>If you have any questions about our privacy policy, reach out to <strong>support@yogasite.com</strong></p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
