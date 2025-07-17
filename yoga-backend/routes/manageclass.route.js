// 📁 routes/class.route.js
import express from "express";
import {
  fetchClasses,
  createClass,
  modifyClass,
  removeClass,
} from "../controllers/manageclass.controller.js";

const router = express.Router();

router.get("/", fetchClasses);
router.post("/", createClass);
router.put("/:id", modifyClass);
router.delete("/:id", removeClass);

export default router;
