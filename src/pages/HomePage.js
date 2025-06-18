import { Link } from "react-router-dom";
import "./../styles/HomePage.css";

// Static video list
const videos = [
  {
    _id: "E7wJTI-1dvQ",
    title: "How to Build a YouTube Clone",
    thumbnailUrl: "https://i.ytimg.com/vi/E7wJTI-1dvQ/hqdefault.jpg",
    uploader: "DevTuber",
    views: 12000,
  },
  {
    _id: "59IXY5IDrBA",
    title: "React Router in 15 Minutes",
    thumbnailUrl: "https://i.ytimg.com/vi/59IXY5IDrBA/hqdefault.jpg",
    uploader: "CodeMaster",
    views: 9000,
  },
  {
    _id: "dFgzHOX84xQ",
    title: "Master Tailwind CSS Today",
    thumbnailUrl: "https://i.ytimg.com/vi/dFgzHOX84xQ/hqdefault.jpg",
    uploader: "Frontend Ninja",
    views: 18700,
  },
  {
    _id: "fBNz5xF-Kx4",
    title: "Node.js Crash Course",
    thumbnailUrl: "https://i.ytimg.com/vi/fBNz5xF-Kx4/hqdefault.jpg",
    uploader: "NodeZone",
    views: 22000,
  },
  {
    _id: "oSIv-E60NiU",
    title: "MongoDB Full Tutorial",
    thumbnailUrl: "https://i.ytimg.com/vi/oSIv-E60NiU/hqdefault.jpg",
    uploader: "MongoMania",
    views: 14500,
  },
  {
    _id: "R8rmfD9Y5-c",
    title: "JavaScript Array Tricks",
    thumbnailUrl: "https://i.ytimg.com/vi/R8rmfD9Y5-c/hqdefault.jpg",
    uploader: "JS Galaxy",
    views: 30000,
  },
  {
    _id: "EFafSYg-PkI",
    title: "CSS Grid vs Flexbox",
    thumbnailUrl: "https://i.ytimg.com/vi/EFafSYg-PkI/hqdefault.jpg",
    uploader: "StyleGuru",
    views: 8100,
  },
  {
    _id: "nhBVL41-_Cw",
    title: "Deploy Full Stack Apps Easily",
    thumbnailUrl: "https://i.ytimg.com/vi/nhBVL41-_Cw/hqdefault.jpg",
    uploader: "Cloud Coder",
    views: 20000,
  },
  {
    _id: "Ke90Tje7VS0",
    title: "React JS Fundamentals",
    thumbnailUrl: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    uploader: "React Mastery",
    views: 50000,
  },
  {
    _id: "yE9v9rt6ziw",
    title: "JavaScript in 1 Hour",
    thumbnailUrl: "https://i.ytimg.com/vi/yE9v9rt6ziw/hqdefault.jpg",
    uploader: "JS Quick",
    views: 25000,
  },
  {
    _id: "j59qQ7YWLxw",
    title: "React Hooks Crash Course",
    thumbnailUrl: "https://i.ytimg.com/vi/j59qQ7YWLxw/hqdefault.jpg",
    uploader: "HookZone",
    views: 16000,
  },
  {
    _id: "0riHps91AzE",
    title: "Create a Portfolio Website",
    thumbnailUrl: "https://i.ytimg.com/vi/0riHps91AzE/hqdefault.jpg",
    uploader: "Dev Designer",
    views: 11000,
  },
  {
    _id: "w7ejDZ8SWv8",
    title: "React Project Setup",
    thumbnailUrl: "https://i.ytimg.com/vi/w7ejDZ8SWv8/hqdefault.jpg",
    uploader: "CodeWithMe",
    views: 9500,
  },
  {
    _id: "G3e-cpL7ofc",
    title: "React JS Explained in 5 Minutes",
    thumbnailUrl: "https://i.ytimg.com/vi/G3e-cpL7ofc/hqdefault.jpg",
    uploader: "Frontend 101",
    views: 31000,
  },
  {
    _id: "yVJpPZtGTtI",
    title: "Tailwind CSS Tips and Tricks",
    thumbnailUrl: "https://i.ytimg.com/vi/yVJpPZtGTtI/hqdefault.jpg",
    uploader: "Tailwind Pro",
    views: 12000,
  },
  {
    _id: "Oe421EPjeBE",
    title: "REST API Tutorial",
    thumbnailUrl: "https://i.ytimg.com/vi/Oe421EPjeBE/hqdefault.jpg",
    uploader: "RESTful Dev",
    views: 15000,
  },
  {
    _id: "sBzRwzY7G-k",
    title: "Understanding Express.js",
    thumbnailUrl: "https://i.ytimg.com/vi/sBzRwzY7G-k/hqdefault.jpg",
    uploader: "Express Expert",
    views: 18000,
  },
  {
    _id: "bMknfKXIFA8",
    title: "React + Tailwind Dashboard",
    thumbnailUrl: "https://i.ytimg.com/vi/bMknfKXIFA8/hqdefault.jpg",
    uploader: "Admin UI",
    views: 19000,
  },
  {
    _id: "jS4aFq5-91M",
    title: "MongoDB Beginner Guide",
    thumbnailUrl: "https://i.ytimg.com/vi/jS4aFq5-91M/hqdefault.jpg",
    uploader: "DataNerd",
    views: 21000,
  },
  {
    _id: "rLoWMU4L_qE",
    title: "How to Build a Responsive Navbar",
    thumbnailUrl: "https://i.ytimg.com/vi/rLoWMU4L_qE/hqdefault.jpg",
    uploader: "WebDesigners",
    views: 15500,
  }
];


function HomePage() {
  return (
    <div className="homepage-container">
      <h2 className="homepage-title">Recommended Videos</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <Link to={`/video/${video._id}`} key={video._id} className="video-card">
            <img src={video.thumbnailUrl} alt={video.title} />
            <div className="video-info">
              <h4>{video.title}</h4>
              <p>{video.uploader}</p>
              <p>{video.views.toLocaleString()} views</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
