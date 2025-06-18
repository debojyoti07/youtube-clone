import axios from "axios";

const API = "/api/channels";

// Get a channel by ID
export const getChannel = async (channelId) => {
  const res = await axios.get(`${API}/${channelId}`);
  return res.data;
};

// Create a channel (when registering or uploading)
export const createChannel = async (channelData, token) => {
  const res = await axios.post(API, channelData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
