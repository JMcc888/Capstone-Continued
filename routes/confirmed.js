const express = require("express");
const router = express.Router();
const {
  getConfirmed,
  createConfirmed,
  getConfirm,
  deleteConfirm,
  updateConfirm,
  updateConfirmed,
} = require("../controllers/confirmed");
const boot = require("../middleware/boot");

router.route("/").get(boot, getConfirmed).post(createConfirmed);
router.route("/").post(createConfirmed);

router.route("/:id").get(boot, getConfirm);
router.route("/:id").delete(deleteConfirm);
router.route("/:id").put(updateConfirmed);
router.route("/:id/edit").get(updateConfirm);

module.exports = router;
