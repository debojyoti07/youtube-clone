import { Link } from "react-router-dom";
import "./../styles/VideoGrid.css";

function VideoCard({ video }) {
  return (
    <Link to={`/video/${video._id}`} className="video-card">
      <img src={video.thumbnailUrl} alt={video.title} />
      <div className="video-info">
        <h4>{video.title}</h4>
        <p>{video.uploader}</p>
        <p>{video.views} views</p>
      </div>
    </Link>
  );
}

export default VideoCard;

