// Imports
const express = require("express");
const router = express.Router();
const { getAppointments } = require("../controllers/appointments");

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

router.route("/schedule&booking").get(getAppointments);

router.get("/services", (req, res) => {
  res.render("services", { user: req.user });
});

router.get("/sign-up", (req, res) => {
  res.render("signup");
});

router.get("/profile", (req, res) => {
  res.render("profile", { user: req.user });
});

module.exports = router;
