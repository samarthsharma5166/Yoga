// 📁 model/manageusermodel.js
import { db } from "../config/db.js";

// ✅ Get all users
export const getAllUsers = async () => {
  try {
    const [rows] = await db.query("SELECT * FROM manageusers ORDER BY created_at DESC");
    return rows;
  } catch (error) {
    console.error("❌ DB Error in getAllUsers:", error);
    throw error;
  }
};

// ✅ Add a new user
export const addUser = async ({ name, email, phone, role, status }) => {
  try {
    const [result] = await db.query(
      "INSERT INTO manageusers (name, email, phone, role, status) VALUES (?, ?, ?, ?, ?)",
      [name, email, phone, role, status]
    );
    return result;
  } catch (error) {
    console.error("❌ DB Error in addUser:", error);
    throw error;
  }
};

// ✅ Update an existing user
export const updateUser = async (id, { name, email, phone, role }) => {
  try {
    const [result] = await db.query(
      "UPDATE manageusers SET name=?, email=?, phone=?, role=? WHERE id=?",
      [name, email, phone, role, id]
    );
    return result;
  } catch (error) {
    console.error("❌ DB Error in updateUser:", error);
    throw error;
  }
};

// ✅ Delete a user
export const deleteUser = async (id) => {
  try {
    const [result] = await db.query("DELETE FROM manageusers WHERE id=?", [id]);
    return result;
  } catch (error) {
    console.error("❌ DB Error in deleteUser:", error);
    throw error;
  }
};

// ✅ Toggle user status
export const toggleStatus = async (id, status) => {
  try {
    const [result] = await db.query("UPDATE manageusers SET status=? WHERE id=?", [status, id]);
    return result;
  } catch (error) {
    console.error("❌ DB Error in toggleStatus:", error);
    throw error;
  }
};
