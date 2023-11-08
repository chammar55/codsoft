// Database:
// Username: chammar5255
// pass: DE2aFRIXWQRcEUWb

const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

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
app.use(express.json()); //When clients (e.g., web browsers or other services) send data to your server using the JSON format, this middleware automatically parses that JSON data and makes it accessible in your route handlers through req.body.
app.use("/api/auth", authRoute);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log("app is running on port " + process.env.PORT);
});
