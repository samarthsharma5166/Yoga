import { db } from "../config/db.js";

export const bookClass = async (req, res) => {
  const {
    user_id,
    class_id,
    name,
    email,
    phone,
    preferred_date,
    preferred_time,
    notes,
  } = req.body;

  try {
    const [result] = await db.execute(
      `INSERT INTO class_bookings 
       (user_id, class_id, name, email, phone, preferred_date, preferred_time, notes) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user_id ?? null,
        class_id ?? null,
        name ?? null,
        email ?? null,
        phone ?? null,
        preferred_date ?? null,
        preferred_time ?? null,
        notes ?? null,
      ]
    );
    console.log("✅ Class booked:", result.insertId);
    res.status(200).json({ message: "Class booked successfully", bookingId: result.insertId });
  } catch (error) {
    console.error("❌ Error booking class:", error.message);
    res.status(500).json({ message: "Booking failed", error: error.message });
  }
};


// ✅ Book a Demo Class
export const bookDemo = async (req, res) => {
  const {
    user_id,
    name,
    email,
    phone,
    preferred_date,
    preferred_time,
    notes,
  } = req.body;

  try {
    const [result] = await db.execute(
      `INSERT INTO demo_bookings 
       (user_id, name, email, phone, preferred_date, preferred_time, notes) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [user_id, name, email, phone, preferred_date, preferred_time, notes]
    );

    console.log("✅ Demo class booked:", result.insertId);
    res.status(200).json({ message: "Demo class booked successfully", bookingId: result.insertId });
  } catch (error) {
    console.error("❌ Error booking demo class:", error.message);
    res.status(500).json({ message: "Demo booking failed", error: error.message });
  }
};

// ✅ Get Booking History for a User
export const getUserBookings = async (req, res) => {
  const { userId } = req.params;

  try {
    const [rows] = await db.execute(
      `SELECT * FROM class_bookings WHERE user_id = ? ORDER BY preferred_date DESC`,
      [userId]
    );

    res.status(200).json({ bookings: rows });
  } catch (error) {
    console.error("❌ Error fetching bookings:", error.message);
    res.status(500).json({ message: "Failed to fetch bookings", error: error.message });
  }
};
