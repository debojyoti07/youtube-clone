const Video = require("../models/Video");

exports.uploadVideo = async (req, res) => {
  try {
    const video = await Video.create({ ...req.body, uploader: req.user });
    res.status(201).json(video);
  } catch (err) {
    res.status(500).json({ error: "Video upload failed", details: err.message });
  }
};

exports.getAllVideos = async (req, res) => {
  const videos = await Video.find().populate("uploader", "username");
  res.json(videos);
};

exports.getVideoById = async (req, res) => {
  const video = await Video.findById(req.params.id).populate("comments");
  res.json(video);
};

exports.deleteVideo = async (req, res) => {
  await Video.findByIdAndDelete(req.params.id);
  res.json({ message: "Video deleted" });
};

// controllers/videoController.js
exports.likeVideo = async (req, res) => {
  const { id } = req.params;
  try {
    const video = await Video.findById(id);
    video.likes += 1;
    await video.save();
    res.json({ likes: video.likes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.dislikeVideo = async (req, res) => {
  const { id } = req.params;
  try {
    const video = await Video.findById(id);
    video.dislikes += 1;
    await video.save();
    res.json({ dislikes: video.dislikes });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
