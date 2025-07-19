import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../config/db.js";
import {
  getUserByEmail,
  getUserById,
  getUserByReferralCode,
  incrementReferralCount
} from "../model/usermodel.js";

// ✅ REGISTER Controller
export const register = async (req, res) => {
  const { name, email, password, referred_by, number } = req.body;

  try {
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const referral_code = name.toLowerCase().replace(/\s+/g, '') + Math.floor(Math.random() * 10000);

    let safeReferrer = referred_by;
    if (!referred_by || referred_by === "null" || referred_by === "") {
      safeReferrer = null;
    }

    const [result] = await db.execute(
      "INSERT INTO users (name, email, password, number, role, referral_code, referred_by, referral_count) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        name,
        email,
        hashedPassword,
        number,
        "user",
        referral_code,
        safeReferrer,
        0,
      ]
    );

    if (referred_by) {
      const referrer = await getUserByReferralCode(referred_by);
      if (referrer) {
        await incrementReferralCount(referrer.id);
      }
    }

    return res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Registration Error:", err.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// ✅ LOGIN Controller (Newly Added)
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "2h" }
    );

    return res.status(200).json({ message: "Login successful", token, user });
  } catch (err) {
    console.error("Login Error:", err.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// ✅ GET REFERRAL STATS
export const getReferralStats = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await getUserById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({
      referral_code: user.referral_code,
      referral_count: user.referral_count,
    });
  } catch (err) {
    console.error("Referral Stats Error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};
