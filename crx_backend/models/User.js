const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  wallet: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  role: {
    type: String,
    enum: ["user", "authority"],
    required: true
  }
});

module.exports = mongoose.model("User", userSchema);

