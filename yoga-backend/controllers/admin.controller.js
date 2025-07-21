// 📁 controllers/admin.controller.js
import {
  countUsers,
  countClasses,
  countPayments,
  countReferrals,
  getAllUsersFromDb,
} from "../model/adminmodel.js";

export const getAdminStats = async (req, res) => {
  try {
    // const [counselors, students, sessions, complaints] = await Promise.all([
    //   countUsers(),
    //   countClasses(),
    //   // countPayments(),
    //   countReferrals(),
    // ]);

    const [counselors, students, complaints] = await Promise.all([
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


export const getAllUsersAdmin = async (req,res) =>{
  try {
    const users = await getAllUsersFromDb();
    res.status(200).json(users);
  } catch (error) {
    console.error("❌ Error in getAllUsers:", error.message);
    res.status(500).json({ message: "Failed to fetch users" });
  }
}