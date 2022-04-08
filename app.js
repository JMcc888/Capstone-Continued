// Import NPM Packages
const express = require("express");
const dotenv = require("dotenv");

// Load Config Variables
dotenv.config({ path: "./config/config.env" });

//Express Config
const app = express();

app.use(express.static("public"));

const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");

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
