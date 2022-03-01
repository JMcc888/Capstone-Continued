// Import NPM Packages
const app = require("express");
const dotenv = require("dotenv");

// View Engine
app.set("view engine", "ejs");
// Import Routes
const index = require("./routes/index");
// Use Routes
app.use(index);

// Run App
app.listen(PORT, () => {
  console.log(`App listening in ${process.env.NODE_ENV} on port ${PORT}`);
});
