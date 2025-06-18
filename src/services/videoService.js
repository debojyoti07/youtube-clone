import axios from "axios";

const API = "/api/videos";

// Get all videos
export const getAllVideos = async () => {
  const res = await axios.get(API);
  return res.data;
};

// Get single video by ID
export const getVideoById = async (id) => {
  const res = await axios.get(`${API}/${id}`);
  return res.data;
};

// Upload a new video
export const uploadVideo = async (data, token) => {
  const res = await axios.post(API, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Like a video
export const likeVideo = async (id, token) => {
  const res = await axios.put(`${API}/${id}/like`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Dislike a video
export const dislikeVideo = async (id, token) => {
  const res = await axios.put(`${API}/${id}/dislike`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
