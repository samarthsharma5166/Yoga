// 📁 controllers/admin.controller.js
import {
  countUsers,
  countClasses,
  countPayments,
  countReferrals,
} from "../model/adminmodel.js";

export const getAdminStats = async (req, res) => {
  try {
    const [counselors, students, sessions, complaints] = await Promise.all([
      countUsers(),
      countClasses(),
      // countPayments(),
      countReferrals(),
    ]);

    res.json({
      counselors,
      students,
      // sessions,
      complaints,
    });
  } catch (err) {
    console.error("❌ Error fetching admin stats:", err);
    res.status(500).json({ error: "Failed to fetch admin dashboard stats" });
  }
};
