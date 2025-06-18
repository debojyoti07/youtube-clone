const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String,
  thumbnailUrl: String,
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  uploadDate: { type: Date, default: Date.now },
  uploader: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  channelId: { type: mongoose.Schema.Types.ObjectId, ref: "Channel" },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }]
});

module.exports = mongoose.models.Video || mongoose.model("Video", videoSchema);

