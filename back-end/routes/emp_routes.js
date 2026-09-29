let express = require('express');
let router = express.Router();

let users = require('../models/users');

router.post("/register", async (req, res) => {
  try {
    const result = await registerUser(req.body);

    console.log("User saved:", result);

    res.status(201).send(result);
  } catch (err) {
    console.log("Register error:", err);
    res.status(500).send(err);
  }
});
router.post("/register", async (req, res) => {
  try {
    const result = await registerUser(req.body);

    console.log("User saved:", result);

    res.status(201).send(result);
  } catch (err) {
    console.log("Register error:", err);
    res.status(500).send(err);
  }
});
router.post("/register", async (req, res) => {
  try {
    // your existing registration/database code here

    res.status(201).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});


router.post("/login", (req, res) => {
    res.send("login page called");
});

router.get("/viewtask", (req, res) => {
    res.send("view task page called");
});

module.exports = router;
