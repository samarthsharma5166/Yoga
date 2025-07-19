import React, { useState, useEffect } from "react";
import { registerUser } from "../services/api"; // Make sure this function exists
import { Link, useNavigate } from "react-router-dom";
import "../pages/CSS/reglogin.css"; // ✅ Correct path to CSS

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    number:"",
    password: "",
    referred_by: "",
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
      console.log(form);
      await registerUser(form);
      navigate("/auth/greet")
      alert("Registered successfully");
    } catch (err) {
      console.error("Register error:", err.response?.data || err.message);
      alert(
        "Registration failed: " +
          (err.response?.data?.error || "Something went wrong")
      );
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Join Us now</h2>
        <input
          name="name"
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="email"
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          name="number"
          onChange={handleChange}
          placeholder="Mobile Number"
          required
        />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
        <p>
          Already have an account?{" "}
          <Link
            to="/auth/login"
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
