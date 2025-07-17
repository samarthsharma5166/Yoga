import React, { useState } from "react";
import "../pages/CSS/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSuccess("");
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setErrors({});
    setSuccess("");

    try {
      const res = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setErrors({ general: "Something went wrong. Please try again." });
      }
    } catch (err) {
      setErrors({ general: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="main-contact">
      <section className="contact">
        <h2 className="contact-title">Contact Us</h2>
        <div className="contact-container">
          <div className="contact-details">
            <ul className="contact-list">
              <li>✉ yogaeveryday@habuild.in</li>
              <li>📞 +91 7126924545</li>
              <li>💬 +91 7969329699</li>
              <li>🏢 Bothra Complex, Nagpur</li>
            </ul>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              {errors.general && <p className="error-message">{errors.general}</p>}
              {success && <p className="success-message">{success}</p>}

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                disabled={submitting}
              />
              {errors.name && <div className="error-message">{errors.name}</div>}

              <input
                type="email"
                name="email"
                placeholder="Your Email (optional)"
                value={formData.email}
                onChange={handleChange}
                disabled={submitting}
              />
              {errors.email && <div className="error-message">{errors.email}</div>}

              <input
                type="text"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                disabled={submitting}
              />
              {errors.phone && <div className="error-message">{errors.phone}</div>}

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                disabled={submitting}
              ></textarea>
              {errors.message && <div className="error-message">{errors.message}</div>}

              <button type="submit" className="submit-btn" disabled={submitting}>
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
