// 📁 model/classmodel.js

import { db } from "../config/db.js";

// ✅ Get all classes
export const getAllClasses = async () => {
  const [rows] = await db.query("SELECT * FROM classes ORDER BY date ASC");
  return rows;
};

// ✅ Add a new class
export const addClass = async ({ title, class_type, date, time, link, description }) => {
  const [result] = await db.query(
    "INSERT INTO classes (title, class_type, date, time, link, description) VALUES (?, ?, ?, ?, ?, ?)",
    [title, class_type, date, time, link, description]
  );
  return result;
};

// ✅ Update a class
export const updateClass = async (id, { title, class_type, date, time, link, description }) => {
  const [result] = await db.query(
    "UPDATE classes SET title=?, class_type=?, date=?, time=?, link=?, description=? WHERE id=?",
    [title, class_type, date, time, link, description, id]
  );
  return result;
};

// ✅ Delete a class
export const deleteClass = async (id) => {
  const [result] = await db.query("DELETE FROM classes WHERE id=?", [id]);
  return result;
};
