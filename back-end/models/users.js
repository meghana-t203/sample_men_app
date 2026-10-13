const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ["HR", "EMPLOYEE"]
    }
});

const Users = mongoose.model("users", userSchema);

module.exports = Users;