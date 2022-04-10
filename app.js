// Import NPM Packages
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyparser = require("body-parser");
const passport = require("passport");
const passportLocal = require("passport-local");
const expressSession = require("express-session");

// Import Local Files
const connectDB = require("./config/connectdb");
const User = require("./models/user");

// Load Config Variables
dotenv.config({ path: "./config/config.env" });

//Express Config
const app = express();

app.use(express.static("public"));

app.use(bodyparser.urlencoded({ extended: true }));

// Session config
app.use(
  expressSession({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Passport Config
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
const LocalStrategy = passportLocal.Strategy;
passport.use(new LocalStrategy(User.authenticate()));

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
