// Imports
const express = require("express");
const router = express.Router();
const {
  newAppointment,
  createAppointment,
  viewAppointments,
  getAppointment,
} = require("../controllers/appointments");

router.route("/view").get(viewAppointments);
router.route("/new").get(newAppointment);
router.route("/new").post(createAppointment);

router.route("/view/:id").get(getAppointment);

module.exports = router;
