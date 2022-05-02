const express = require("express");
const router = express.Router();
const {
  getMessages,
  createMessage,
  getMessage,
  deleteMessage,
 
} = require("../controllers/message");
const boot = require("../middleware/boot");

router.route("/").get(boot, getMessages).post(createMessage);
router.route("/").post(createMessage);

router.route("/:id").get(boot, getMessage);
router.route("/:id").delete(deleteMessage);

module.exports = router;
