// Imports
const express = require("express");
const router = express.Router();

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

router.get("/schedule&booking", (req, res) => {
  res.render("schedule&booking", { user: req.user });
});

router.get("/services", (req, res) => {
  res.render("services", { user: req.user });
});

router.get("/sign-up", (req, res) => {
  res.render("signup");
});

module.exports = router;
