const express = require("express");
const router = express.Router();

const Users = require("../models/users");

router.post("/register", async (req, res) => {
    try {
        console.log("Received data:", req.body);

        const user = new Users(req.body);

        const result = await user.save();

        console.log("User saved:", result);

        res.status(201).json(result);

    } catch (err) {
        console.log("Register error:", err);

        res.status(500).json({
            message: "Registration failed",
            error: err.message
        });
    }
});

router.post("/login", (req, res) => {
    res.send("login page called");
});

router.get("/viewtask", (req, res) => {
    res.send("view task page called");
});

module.exports = router;