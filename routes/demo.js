const express = require("express");
const router = express.Router();
const { createDemo } = require('../controllers/demo')

router.post("/", createDemo)

module.exports = router;
