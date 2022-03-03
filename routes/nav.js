// Imports
const express = require("express");
const router = express.Router();

router.get("/about-us", (req, res) => {
  res.render("aboutus");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/forgot-password", (req, res) => {
  res.render("forgotpassword");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/schedule&booking", (req, res) => {
  res.render("schedule&booking");
});

router.get("/services", (req, res) => {
  res.render("services");
});

router.get("/sign-up", (req, res) => {
  res.render("signup");
});

module.exports = router;
