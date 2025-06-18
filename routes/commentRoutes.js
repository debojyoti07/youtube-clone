const router = require("express").Router();
const { addComment, getComments } = require("../controllers/commentController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, addComment);
router.get("/:videoId", getComments);

module.exports = router;
