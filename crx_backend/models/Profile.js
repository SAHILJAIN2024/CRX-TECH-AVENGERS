const { Wallet } = require("ethers");
const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
 wallet: { type: String, required: true, unique: true },   
  name: {type: String, require: true },
    email: {type: String, require: true },
    Company: {type: String, require: true },
    Post: {type: String, require: true }
})

module.exports = mongoose.model("profile", ProfileSchema);