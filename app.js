// Import NPM Packages
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyparser = require("body-parser");
const passport = require("passport");
const passportLocal = require("passport-local");
const expressSession = require("express-session");
const methodOverride = require("method-override");

// Import Local Files
const connectDB = require("./config/connectdb");
const User = require("./models/user");

// Load Config Variables
dotenv.config({ path: "./config/config.env" });

//Express Config
const app = express();

app.use(express.static("public"));

app.use(bodyparser.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

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
const loginRoutes = require("./routes/login");
const register = require("./routes/register");
const apRoutes = require("./routes/appointments");
const confRoutes = require("./routes/confirmed");
const messRoutes = require("./routes/message");

// Use Routes
app.use(index);
app.use(navRoutes);
app.use("/login", loginRoutes);
app.use("/sign-up", register);
app.use("/appointments", apRoutes);
app.use("/appointments/confirmed", confRoutes);
app.use("/messages", messRoutes);

// Run App
const application = app.listen(PORT, () => {
  console.log(`Server listening in ${process.env.NODE_ENV} on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  //  Log problem to console
  console.log(`Unhandled Promise Rejection: ${err.message}`);
  // Stop Server and the process
  application.close(() => {
    process.exit(1);
  });
});
