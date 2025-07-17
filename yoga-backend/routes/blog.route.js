import express from "express";
import {
  createBlogCtrl,
  getAllBlogsCtrl,
  getBlogByIdCtrl,
  updateBlogCtrl,
  deleteBlogCtrl
} from "../controllers/blog.controller.js";
import { verifyToken, isAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/create", verifyToken, isAdmin, createBlogCtrl);  // ✅ required route
router.get("/all", getAllBlogsCtrl);
router.get("/:id", getBlogByIdCtrl);
router.put("/:id", verifyToken, isAdmin, updateBlogCtrl);
router.delete("/:id", verifyToken, isAdmin, deleteBlogCtrl);

export default router;
