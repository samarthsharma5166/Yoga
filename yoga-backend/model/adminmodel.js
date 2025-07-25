// 📁 model/adminmodel.js
import { db } from "../config/db.js";

// Count total users (e.g., counselors)
export const countUsers = async () => {
  const [rows] = await db.query("SELECT COUNT(*) AS total FROM users");
  return rows[0].total;
};

// Count total classes
export const countClasses = async () => {
  const [rows] = await db.query("SELECT COUNT(*) AS total FROM classes");
  return rows[0].total;
};

// Count total payments/sessions
export const countPayments = async () => {
  const [rows] = await db.query("SELECT COUNT(*) AS total FROM payments");
  return rows[0].total;
};

// Count total referrals
export const countReferrals = async () => {
  const [rows] = await db.query("SELECT COUNT(*) AS total FROM users WHERE referred_by IS NOT NULL");
  console.log("from countReferrals",rows[0].total)
  return rows[0].total;
};


export const getAllUsersFromDb = async () => {
  const [rows] = await db.query("SELECT * FROM users");
  return rows;
};