const express = require("express");
const router = express.Router();
const { getConfirmed, createConfirmed } = require("../controllers/confirmed");

router.route("/").get(getConfirmed).post(createConfirmed);

module.exports = router;
