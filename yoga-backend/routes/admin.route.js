// 📁 routes/admin.route.js
import express from "express";
import { getAdminStats, getAllUsersAdmin } from "../controllers/admin.controller.js";
import { isAdmin, verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/stats", getAdminStats);
router.get("/users", verifyToken, isAdmin, getAllUsersAdmin);

export default router;
