// Imports
const express = require("express");
const router = express.Router();
const {
  newAppointment,
  createAppointment,
  viewAppointments,
} = require("../controllers/appointments");

router.route("/view").get(viewAppointments);
router.route("/new").get(newAppointment);
router.route("/new").post(createAppointment);

module.exports = router;
