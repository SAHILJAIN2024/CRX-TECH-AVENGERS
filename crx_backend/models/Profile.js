const { Wallet } = require("ethers");
const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    Wallet: {type: string, require: true },
    name: {type: string, require: true },
    email: {type: string, require: true },
    Company: {type: string, require: true },
    Post: {type: string, require: true }
})

module.exports = mongoose.model("profile", ProfileSchema);