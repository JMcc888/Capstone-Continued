const express = require("express");
const router = express.Router();
const { getConfirmed, createConfirmed } = require("../controllers/confirmed");
const { isLogged } = require("../middleware/islogged");

router.route("/").get(isLogged, getConfirmed).post(createConfirmed);

module.exports = router;
