import React from 'react';
import './CSS/returnrefund.css';

const RefundPolicy = () => {
  return (
    <div className="policy-container">
      <h1 className="policy-title">Refund and Replacement Policy</h1>
      <p className="company-name">Healthy Horizons Pvt. Ltd. (Yog Saathi)</p>

      <p>
        At Healthy Horizons Pvt. Ltd. (brand name <strong>Yog Saathi</strong>), we are committed to deliver high-quality
        wellness yoga services. Please read our Refund and Replacement Policy carefully before subscribing or
        purchasing any of our services.
      </p>

      <h3>1. General Policy</h3>
      <p>
        All services provided by Yog Saathi, including but not limited to yoga classes (online/offline), workshops,
        events, and subscription-based offerings, are <strong>non-refundable</strong> once the payment is made.
      </p>

      <h3>2. Service Deficiency or Inaccessibility</h3>
      <p>
        If a user faces any deficiency in services—such as inability to access a session, poor quality, or disruption in
        delivery not at the customer’s end—such issues must be reported within <strong>3 (three) calendar days</strong>{' '}
        of occurrence via email at <em>support@yourdomain.com</em> or through our official customer support channels.
      </p>
      <p>Upon review, the Company may, at its sole discretion:</p>
      <ul>
        <li>Extend the duration of the subscription or affected service.</li>
        <li>Offer access to additional sessions as compensation.</li>
      </ul>
      <p>
        The decision of Healthy Horizons Pvt. Ltd. in this matter shall be final and binding, and no further claims
        will be entertained.
      </p>

      <h3>3. No Cash Refunds</h3>
      <p>No cash or credit card refunds shall be processed under any circumstances, including:</p>
      <ul>
        <li>User’s change of mind after purchase.</li>
        <li>Failure to use the service within the stipulated time.</li>
        <li>Any personal inconvenience, unless it falls under the deficiency clause mentioned above.</li>
      </ul>

      <h3>4. Exception in Special Circumstances</h3>
      <p>
        In rare and exceptional cases, such as technical failure in payment processing or duplicate transactions,
        a refund may be considered after proper verification. All such requests must be made within{' '}
        <strong>5 (five) calendar days</strong> from the date of transaction.
      </p>

      <h3>📞 Contact Us</h3>
      <p>
        For any further queries or clarifications, please contact us at:
        <br />
        📧 <strong>Email:</strong> support@yourdomain.com
        <br />
        📞 <strong>Phone:</strong> [Insert Helpline Number]
      </p>

      <p className="disclaimer">
        This policy is subject to change at the discretion of the Company. Users are advised to check the latest
        version available on our official website.
      </p>
    </div>
  );
};

export default RefundPolicy;
