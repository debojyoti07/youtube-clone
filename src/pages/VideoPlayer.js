import { useParams } from "react-router-dom";
import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import "./../styles/VideoPlayer.css";

// Static video list
const videos = [
  {
    _id: "fBNz5xF-Kx4",
    title: "Node.js Crash Course",
    uploader: "NodeZone",
    description: "A complete crash course on Node.js",
  },
  {
    _id: "dFgzHOX84xQ",
    title: "Master Tailwind CSS Today",
    uploader: "Frontend Ninja",
    description: "In-depth guide to Tailwind CSS from scratch",
  },
  {
    _id: "pnkuI4q7eUQ",
    title: "Build Spotify UI with React",
    uploader: "UI Beast",
    description: "Let's recreate Spotify UI using React",
  }
];

function VideoPlayer() {
  const { id } = useParams();
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const video = videos.find((v) => v._id === id);

  if (!video) return <div className="video-player">Video not found</div>;

  return (
    <div className="video-player">
      <div className="video-frame">
        <iframe
          width="100%"
          height="480"
          src={`https://www.youtube.com/embed/${video._id}`}
          title={video.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-details">
        <h2>{video.title}</h2>
        <p className="channel-name">Channel: {video.uploader}</p>

        <div className="video-actions">
          <button onClick={() => setLikes(likes + 1)}>
            <FaThumbsUp /> {likes}
          </button>
          <button onClick={() => setDislikes(dislikes + 1)}>
            <FaThumbsDown /> {dislikes}
          </button>
        </div>

        <p className="video-description">{video.description}</p>
      </div>
    </div>
  );
}

export default VideoPlayer;
