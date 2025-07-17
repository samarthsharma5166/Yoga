import React, { useState } from "react";
import { bookDemo } from "../services/api";
import "./CSS/ClassBooking.css"

const DemoBooking = () => {
  const [form, setForm] = useState({
    user_id: JSON.parse(localStorage.getItem("user")).id,
    name: "",
    email: "",
    phone: "",
    preferred_date: "",
    preferred_time: "",
    notes: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await bookDemo(form);
    alert("Demo class booked!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} placeholder="Name" required />
      <input name="email" onChange={handleChange} placeholder="Email" required />
      <input name="phone" onChange={handleChange} placeholder="Phone" required />
      <input type="date" name="preferred_date" onChange={handleChange} required />
      <input type="time" name="preferred_time" onChange={handleChange} required />
      <textarea name="notes" onChange={handleChange} placeholder="Any Notes" />
      <button type="submit">Book Demo</button>
    </form>
  );
};

export default DemoBooking;