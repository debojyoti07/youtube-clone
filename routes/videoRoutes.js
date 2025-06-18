const router = require("express").Router();
const { uploadVideo, getAllVideos, getVideoById, deleteVideo } = require("../controllers/videoController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, uploadVideo);
router.get("/", getAllVideos);
router.get("/:id", getVideoById);
router.delete("/:id", auth, deleteVideo);
router.put("/:id/like", auth, likeVideo);
router.put("/:id/dislike", auth, dislikeVideo);


module.exports = router;
