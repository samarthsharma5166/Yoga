import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import Referral from "../Admin/Referral";
import "./CSS/admindashboard.css";
import { getAdminStats } from "../services/api";

const Dashboard = () => {
  const userdata = JSON.parse(localStorage.getItem("user"));
  const [stats, setStats] = useState({
    counselors: 0,
    students: 0,
    sessions: 0,
    complaints: 0,
  });

  // 🔁 Replace this with real user from login/session/token
  const user = {
    id: userdata.id, // 👉 Use dynamic ID from login
    name: userdata.name,
  };

  useEffect(() => {
    // Fetch dashboard stats from the API
    getAdminStats()
      .then((res) => {
        console.log(res)
          setStats({
            counselors: res.data.counselors,
            students: res.data.students,
            sessions: res.data.sessions, 
            complaints: res.data.complaints || 14
          })
      })
      .catch((error) =>
        console.error("Error fetching dashboard stats:", error)
      );
  }, []);

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
    <div >
      <h2 style={{ marginBottom: "1rem" }} className="text-2xl font-semibold border-b mt-14 mb-14">Welcome, {user.name}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2  gap-20 items-center justify-center mt-20">
        <StatCard label="Total Users" value={stats.counselors} dashArray="100.96" dashOffset="90.635" rotate="0" className="" />
        <StatCard label="Total Classes" value={stats.students} dashArray="100.52" dashOffset="30.84" rotate="385" />
        <StatCard label="Payment Status" value={stats.sessions} dashArray="110.52" dashOffset="65.31" rotate="10" />
        <StatCard label="Referral Status" value={stats.complaints} dashArray="122.52" dashOffset="121.42" rotate="10" />
      </div>

      {/* ✅ Referral block added here */}
      <Referral userId={user.id} />
    </div>
  );
};

export default Dashboard;
