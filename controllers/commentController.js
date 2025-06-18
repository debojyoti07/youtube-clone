const Comment = require("../models/Comment");
const Video = require("../models/Video");

exports.addComment = async (req, res) => {
  const { videoId, text } = req.body;
  const comment = await Comment.create({ userId: req.user, videoId, text });
  await Video.findByIdAndUpdate(videoId, { $push: { comments: comment._id } });
  res.status(201).json(comment);
};

exports.getComments = async (req, res) => {
  const comments = await Comment.find({ videoId: req.params.videoId }).populate("userId", "username");
  res.json(comments);
};
