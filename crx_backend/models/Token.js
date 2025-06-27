const mongoose = require("mongoose");
const { type } = require("os");

const TokenSchema = new mongoose.Schema({
    totalburn: { type: Number},
    totalmint: {type: Number}
})

module.export = mongoose.model("token", TokenSchema);
