import axios from "axios";

const API = "/api/comments";

// Get comments for a video
export const getComments = async (videoId) => {
  const res = await axios.get(`${API}/${videoId}`);
  return res.data;
};

// Add a comment
export const addComment = async (commentData, token) => {
  const res = await axios.post(API, commentData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
