import express from "express";
import { bookClass, bookDemo, getUserBookings } from "../controllers/classbooking.controller.js";

const router = express.Router();

router.post("/class", bookClass); // POST /api/bookings/class
router.post("/demo", bookDemo);   // POST /api/bookings/demo
router.get("/user/:userId", getUserBookings); // GET /api/bookings/user/:userId

export default router;
