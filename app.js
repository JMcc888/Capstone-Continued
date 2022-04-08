// Import NPM Packages
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Import Local Files
const connectDB = require("./config/connectdb");

// Load Config Variables
dotenv.config({ path: "./config/config.env" });

//Express Config
const app = express();

app.use(express.static("public"));

const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");

// Allow CORS
app.use(cors());

// Connect to DB
connectDB();

// Import Routes
const index = require("./routes/index");
const navRoutes = require("./routes/nav");

// Use Routes
app.use(index);
app.use(navRoutes);

// Run App
app.listen(PORT, () => {
  console.log(`Server listening in ${process.env.NODE_ENV} on port ${PORT}`);
});
