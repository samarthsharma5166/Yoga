// 📁 components/Dashboard.jsx
import React, { useState } from "react";
import CountUp from "react-countup";
import "./CSS/userdashboard.css"; // Link external CSS

import Referral from "../Admin/Referral";

const Dashboard = () => {
  const [stats, setStats] = useState({
    counselors: 0,
    students: 0,
    sessions: 0,
    complaints: 0,
  });

  // 🔁 Replace this with real user from login/session/token
  const user = {
    id: 1, // 👉 Use dynamic ID from login
    name: "Amit",
  };

  const StatCard = ({ label, value, dashArray, dashOffset, rotate }) => (
    <div className="stat-card">
      <div className="stat-circle-wrapper">
        <svg viewBox="0 0 50 50" className="stat-circle-svg">
          <circle
            cx="25"
            cy="25"
            r="19.5"
            fill="none"
            strokeWidth="11"
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            strokeLinecap="square"
            transform={`rotate(${rotate} 25 25)`}
            className="stat-circle"
          />
        </svg>
      </div>
      <div className="stat-count">
        <span>
          <CountUp end={value} duration={2} />
        </span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Welcome, {user.name}</h2>

      <div className="dashboard-grid">
        <StatCard
          label="Total Users"
          value={stats.counselors}
          dashArray="100.96"
          dashOffset="90.635"
          rotate="0"
        />
        <StatCard
          label="Total Classes"
          value={stats.students}
          dashArray="100.52"
          dashOffset="30.84"
          rotate="385"
        />
        <StatCard
          label="Payment Status"
          value={stats.sessions}
          dashArray="110.52"
          dashOffset="65.31"
          rotate="10"
        />
        <StatCard
          label="Referral Status"
          value={stats.complaints}
          dashArray="122.52"
          dashOffset="121.42"
          rotate="10"
        />
      </div>

      {/* ✅ Referral block added here */}
      <Referral userId={user.id} />
    </div>
  );
};

export default Dashboard;
