import { db } from "../config/db.js";

export const getUserByEmail = async (email) => {
  const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
  return rows[0];
};

export const getUserById = async (id) => {
  const [rows] = await db.execute("SELECT * FROM users WHERE id = ?", [id]);
  return rows[0];
};

export const getUserByReferralCode = async (code) => {
  const [rows] = await db.execute("SELECT * FROM users WHERE referral_code = ?", [code]);
  return rows[0];
};

export const incrementReferralCount = async (id) => {
  await db.execute("UPDATE users SET referral_count = referral_count + 1 WHERE id = ?", [id]);
};
