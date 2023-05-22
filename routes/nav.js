// Imports
const express = require("express");
const router = express.Router();
const { schedule } = require("../controllers/confirmed");

const isLoggedIn = require("../middleware/islogged");
const { getDemos } = require("../controllers/demo");

router.get("/about-us", (req, res) => {
  res.render("aboutus", { user: req.user });
});

router.get("/contact", (req, res) => {
  res.render("contact", { user: req.user });
});

router.get("/forgot-password", (req, res) => {
  res.render("forgotpassword", { user: req.user });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.route("/schedule&booking").get(isLoggedIn, schedule);

router.get("/services", (req, res) => {
  res.render("services", { user: req.user });
});

router.get("/sign-up", (req, res) => {
  res.render("signup");
});

router.get("/profile", (req, res) => {
  res.render("profile", { user: req.user });
});

router.route("/demo").get(getDemos)

module.exports = router;
