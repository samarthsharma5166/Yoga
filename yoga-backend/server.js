import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import blogRoutes from "./routes/blog.route.js";
import authRoutes from "./routes/auth.route.js";
import manageUserRoutes from "./routes/manageuser.route.js";
import classRoutes from "./routes/manageclass.route.js";
import adminRoutes from "./routes/admin.route.js";
import referralRoutes from "./routes/referral.route.js";
import contactRoutes from "./routes/contact.route.js";
import bookingRoutes from "./routes/booking.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

// ✅ FIXED: Enable CORS for Vite frontend (port 5173)
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/manageusers", manageUserRoutes);
app.use("/api/classes", classRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/referrals", referralRoutes); // ✅ Add this line
app.use("/api", contactRoutes);
app.use("/api/bookings", bookingRoutes); 
// ✅ Health check route
app.get('/', (req, res) => {
  res.send('Yoga Backend Running...');
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
