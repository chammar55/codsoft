const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcryptjs"); // encrypt pass in database
const app = express();
const jwt = require("jsonwebtoken");

const salt = bcrypt.genSaltSync(10);
const secret = "asdasfvsdvfwdfsad";

//Credentials: You're allowing things like cookies and login information to be sent along with the requests. This is important for user authentication.
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json()); // 'app.use(express.json());' When a client sends a POST request with a JSON payload in the request body, this middleware will automatically parse that JSON data and make it available as req.body for the route handlers that come after it.

// username: blog
// password: JVSq6n0JYKtOQwgN
mongoose.connect(
  "mongodb+srv://blog:JVSq6n0JYKtOQwgN@cluster0.ike5jsu.mongodb.net/"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  // res.json(passOk);
  if (passOk) {
    //logged in
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json("ok");
    });
  } else {
    res.status(400).json("wrong credentials");
  }
});

app.listen(4000);
