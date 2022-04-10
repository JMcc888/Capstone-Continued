const express = require("express");
const router = express.Router();
const { login, trylogin, logout } = require("../controllers/users");
router.route("/").get(login);
router.route("/").post(trylogin);
// Update later, login/logout :D
router.route("/logout").get(logout);
module.exports = router;
