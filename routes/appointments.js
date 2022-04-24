// Imports
const express = require("express");
const router = express.Router();
const {
  newAppointment,
  createAppointment,
} = require("../controllers/appointments");

router.route("/new").get(newAppointment);
router.route("/new").post(createAppointment);

module.exports = router;
