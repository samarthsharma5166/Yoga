import React, { useState } from "react";
import { loginUser } from "../services/api";
import { useNavigate, Link } from "react-router-dom"; // ✅ Link imported
// import "../pages/CSS/relogin.css"

 function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(form);
      const user = res.data.user;

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(user));

      alert("Login successful");

      if (user.role === "admin") {
        navigate("/admin/admin-dashboard");
      } else if (user.role === "user") {
        navigate("/user/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      alert("Login failed. Please check credentials.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <center><h1>LOGIN</h1></center>
      <input
        name="email"
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        name="password"
        type="password"
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>

      {/* ✅ Sign up redirect line */}
      <p style={{ marginTop: "10px", textAlign: "center" }}>
        Don't have an account?{" "}
        <Link to="/auth/register" style={{ color: "#007bff", textDecoration: "none" }}>
          Sign up
        </Link>
      </p>
    </form>
  );
}
export default Login