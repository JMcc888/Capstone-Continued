// Import NPM Packages
const express = require("express");
const dotenv = require("dotenv");

//Express Config
const app = express();
const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");
// Import Routes
const index = require("./routes/index");
// Use Routes
app.use(index);

// Run App
app.listen(PORT, () => {
  console.log(`Server listening in ${process.env.NODE_ENV} on port ${PORT}`);
});
