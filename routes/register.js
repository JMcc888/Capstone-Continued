const express = require("express");
const router = express.Router();
const { register } = require("../controllers/users");
//const isLoggedIn = require("./islogged");
//const userCheck = require("./usercheck");
//router.route("/").get(isLoggedIn, userCheck, getAccounts);
router.route("/").post(register);

module.exports = router;
