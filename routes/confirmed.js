const express = require("express");
const router = express.Router();
const { getConfirmed, createConfirmed } = require("../controllers/confirmed");
const boot = require("../middleware/boot");

router.route("/").get(boot, getConfirmed).post(createConfirmed);
router.route("/").post(createConfirmed);

module.exports = router;
