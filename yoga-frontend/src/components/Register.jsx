import React, { useState, useEffect } from "react";
import { registerUser } from "../services/api";
import { Link } from "react-router-dom"; // ✅ Link import kiya
// import "../pages/CSS/relogin.css"

 function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    referred_by: "", // referral code (if any)
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");
    if (ref) {
      setForm((prev) => ({ ...prev, referred_by: ref }));
    }
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(form);
      alert("Registered successfully");
    } catch (err) {
      console.error("Register error:", err.response?.data || err.message);
      alert("Registration failed: " + (err.response?.data?.error || "Something went wrong"));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
     <center><h1>REGISTER</h1></center>
      <input name="name" onChange={handleChange} placeholder="Name" required />
      <input name="email" onChange={handleChange} placeholder="Email" required />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" required />
      <button type="submit">Register</button>

      {/* ✅ Login page link */}
      <p style={{ marginTop: "10px", textAlign: "center" }}>
        Already have an account?{" "}
        <Link to="/auth/login" style={{ color: "#007bff", textDecoration: "none" }}>
          Login
        </Link>
      </p>
    </form>
  );
}
export default Register