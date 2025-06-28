const express = require("express");
const router = express.Router();
const User = require("../models/User");

// POST /login
router.post("/login", async (req, res) => {
  const { wallet, email } = req.body;

  if (!wallet || !email) {
    return res.status(400).json({ message: "Wallet and email are required" });
  }

  try {
    const user = await User.findOne({ wallet });

    if (!user) {
      return res.status(404).json({ message: "User not found. Please sign up first." });
    }

    if (user.email !== email) {
      return res.status(400).json({ message: "Email does not match wallet. Try again." });
    }

    return res.status(200).json({
      message: "Login successful",
      role: user.role,
      wallet: user.wallet,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// POST /signup
router.post("/signup", async (req, res) => {
  const { wallet, email, role } = req.body;

  if (!wallet || !email || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    let existing = await User.findOne({ wallet });
    if (existing) {
      return res.status(409).json({ message: "User already exists" });
    }

    const user = new User({ wallet, email, role });
    await user.save();

    return res.status(201).json({
      message: "Signup successful",
      role: user.role,
      wallet: user.wallet,
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
