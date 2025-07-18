import React, { useEffect, useState } from "react";
import axios from "axios";
// {
//   userId;
// }
const Referral = () => {
  const [stats, setStats] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user.id;
  console.log(userId)
  useEffect(() => {
    const fetchReferralStats = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/referrals/stats/${userId}`);
        setStats(res.data);
      } catch (err) {
        console.error("Error fetching referral stats:", err);
      }
    };
    if (userId) {
      fetchReferralStats();
    }
  }, [userId]);

  if (!stats) return <p>Loading referral info...</p>;

 const referralLink = `http://localhost:5173/auth/register?ref=${stats.referral_code}`;



  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginTop: "1rem" }}>
      <h3>🔁 Referral Information</h3>
      <p><strong>Referral Code:</strong> {stats.referral_code}</p>
      <p><strong>Total Referrals:</strong> {stats.referral_count}</p>
      <p><strong>Your Link:</strong> <a href={referralLink}>{referralLink}</a></p>
    </div>
  );
};

export default Referral;
