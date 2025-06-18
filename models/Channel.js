const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema({
  channelName: { type: String, required: true },
  description: String,
  channelBanner: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  subscribers: { type: Number, default: 0 },
  videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }]
});

module.exports = mongoose.models.Channel || mongoose.model("Channel", channelSchema);

