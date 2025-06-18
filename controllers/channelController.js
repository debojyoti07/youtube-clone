const Channel = require("../models/Channel");

exports.createChannel = async (req, res) => {
  try {
    const { channelName, description, channelBanner } = req.body;
    const newChannel = await Channel.create({
      channelName,
      description,
      channelBanner,
      owner: req.user
    });
    res.status(201).json(newChannel);
  } catch (err) {
    res.status(500).json({ error: "Failed to create channel", details: err.message });
  }
};

exports.getChannel = async (req, res) => {
  try {
    const channel = await Channel.findById(req.params.id).populate("videos");
    res.json(channel);
  } catch (err) {
    res.status(404).json({ error: "Channel not found" });
  }
};
