const express = require("express");
const router = express.Router();
const {
  getConfirmed,
  createConfirmed,
  getConfirm,
  deleteConfirm,
} = require("../controllers/confirmed");
const boot = require("../middleware/boot");

router.route("/").get(boot, getConfirmed).post(createConfirmed);
router.route("/").post(createConfirmed);

router.route("/:id").get(boot, getConfirm);
router.route("/:id").post(deleteConfirm);

module.exports = router;
