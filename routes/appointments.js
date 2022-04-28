// Imports
const express = require("express");
const router = express.Router();
const {
  newAppointment,
  createAppointment,
  viewAppointments,
  getAppointment,
  deleteAppointment,
} = require("../controllers/appointments");

const boot = require("../middleware/boot");

router.route("/view").get(boot, viewAppointments);
router.route("/new").get(boot, newAppointment);
router.route("/new").post(createAppointment);

router.route("/view/:id").get(boot, getAppointment);
router.route("/view/:id").post(deleteAppointment);

module.exports = router;
