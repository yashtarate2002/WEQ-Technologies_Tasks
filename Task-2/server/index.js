require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authController = require("./controllers/authController");
const productController = require("./controllers/productController");
const uploadController = require("./controllers/uploadController");
const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/WEQ-Technologies-Final", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Db is connected");
  } catch (error) {
    console.error("Error connecting to the database", error);
    process.exit(1);
  }
};

// Connect to the database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// To serve images inside public folder
app.use('/images', express.static('public/images'));

app.use("/auth", authController);
app.use("/product", productController);
app.use('/upload', uploadController);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));