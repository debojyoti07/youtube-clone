const router = require("express").Router();
const { createChannel, getChannel } = require("../controllers/channelController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, createChannel);
router.get("/:id", getChannel);

module.exports = router;
