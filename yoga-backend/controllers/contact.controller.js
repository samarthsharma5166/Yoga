import { saveContact } from "../model/contactModel.js";

export const submitContact = async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({ success: false, message: "Required fields missing." });
  }

  try {
    await saveContact({ name, email, phone, message });
    res.status(200).json({ success: true, message: "Message saved successfully." });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ success: false, message: "Server error." }); 
  }
};
