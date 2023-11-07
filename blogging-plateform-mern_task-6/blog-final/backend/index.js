// Database:
// Username: chammar5255
// pass: DE2aFRIXWQRcEUWb

const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const dotenv = require("dotenv");

//database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database connected successfully");
  } catch (err) {
    console.log(err);
  }
};

//************** middlewares ********************
dotenv.config();

app.listen(process.env.PORT, () => {
  connectDB();
  console.log("app is running on port " + process.env.PORT);
});
