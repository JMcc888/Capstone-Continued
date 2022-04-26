const express = require("express");
const router = express.Router();
//const advancedResults = require("../middleware/advancedResults");
// const { authorize } = require("../middleware/auth");
//const { key } = require("../middleware/querycheck");

const { getConfirmed, createConfirmed } = require("../controllers/confirmed");

router.route("/").get(getConfirmed).post(createConfirmed);

module.exports = router;
