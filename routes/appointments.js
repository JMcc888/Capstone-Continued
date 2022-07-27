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
const isLogged = require("../middleware/islogged");

router.route("/view").get(boot, viewAppointments);
// Checks for login, booting is excessive
router.route("/new").get(isLogged, newAppointment);
router.route("/new").post(createAppointment);

router.route("/view/:id").get(boot, getAppointment);
router.route("/view/:id").delete(deleteAppointment);

module.exports = router;
