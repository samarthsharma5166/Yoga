import { getUserById } from "../model/usermodel.js";

export const getReferralStats = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await getUserById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({
      referral_code: user.referral_code,
      referral_count: user.referral_count,
    });
  } catch (err) {
    console.error("Referral Stats Error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
};
