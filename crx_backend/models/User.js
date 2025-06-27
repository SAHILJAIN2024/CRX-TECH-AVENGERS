const { Wallet } = require("ethers");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        Wallet: {type: string, required: true,unique: true},
        email: {type: string, required: true },
        role: {
            type: string,
            enum: ["user", "authority"],
            require: true
        }

    }
)

module.exports = mongoose.model("user",UserSchema);
