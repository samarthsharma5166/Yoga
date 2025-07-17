// 📁 controllers/class.controller.js

import {
  getAllClasses,
  addClass,
  updateClass,
  deleteClass,
} from "../model/manageclassmodel.js";

export const fetchClasses = async (req, res) => {
  try {
    const classes = await getAllClasses();
    res.status(200).json(classes);
  } catch (error) {
    console.error("❌ Fetch Error:", error);
    res.status(500).json({ error: "Failed to fetch classes" });
  }
};

export const createClass = async (req, res) => {
  try {
    const result = await addClass(req.body);
    res.status(201).json({ message: "Class added", result });
  } catch (error) {
    console.error("❌ Add Error:", error);
    res.status(500).json({ error: "Failed to add class" });
  }
};

export const modifyClass = async (req, res) => {
  try {
    const result = await updateClass(req.params.id, req.body);
    res.status(200).json({ message: "Class updated", result });
  } catch (error) {
    console.error("❌ Update Error:", error);
    res.status(500).json({ error: "Failed to update class" });
  }
};

export const removeClass = async (req, res) => {
  try {
    const result = await deleteClass(req.params.id);
    res.status(200).json({ message: "Class deleted", result });
  } catch (error) {
    console.error("❌ Delete Error:", error);
    res.status(500).json({ error: "Failed to delete class" });
  }
};
