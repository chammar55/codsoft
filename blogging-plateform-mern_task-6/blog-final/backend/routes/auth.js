const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hashSync(password, salt); // encrypting the pass
    const newUser = new User({ username, email, password: hashedPassword });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json("user not found!");
    }
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      return res.status(401).json("wrong credentials");
    }
    // the underscore (_id,_doc)  is data coming from the server
    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: "3d", // 3d mean jwt token will last 3 days
    });
    // we seperated the pass cuz we dont want to show it in output

    const { password, ...info } = user._doc;
    res.cookie("jwtToken", token).status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Logout

module.exports = router;
