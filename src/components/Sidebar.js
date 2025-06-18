import { Link } from "react-router-dom";
import "./../styles/Sidebar.css";
import {
  FaHome, FaFire, FaHistory, FaVideo, FaUserAlt, FaThumbsUp,
  FaMusic, FaGamepad, FaBook, FaClock, FaListUl, FaDownload,
  FaChevronDown, FaFilm, FaTrophy, FaPodcast, FaLightbulb,
  FaNewspaper, FaQuestionCircle, FaGlobe, FaMicrophone, FaSignal,
  FaCodeBranch, FaHeart, FaRocket, FaPalette, FaTools, FaFlask,
  FaTree, FaBuilding, FaGraduationCap, FaPlane,
  FaAppleAlt, FaCloud, FaMapMarkedAlt
} from "react-icons/fa";

function Sidebar({ show }) {
  return (
    <aside className={`sidebar ${show ? "show" : ""}`}>
      <section>
        <ul>
          <li><Link to="/" className="sidebar-link"><FaHome /> Home</Link></li>
          <li><Link to="/trending" className="sidebar-link"><FaFire /> Trending</Link></li>
          <li><Link to="/subscriptions" className="sidebar-link"><FaVideo /> Subscriptions</Link></li>
        </ul>
      </section>

      <hr />

      <section>
        <ul>
          <li><Link to="/history" className="sidebar-link"><FaHistory /> History</Link></li>
          <li><Link to="/watch-later" className="sidebar-link"><FaClock /> Watch Later</Link></li>
          <li><Link to="/liked" className="sidebar-link"><FaThumbsUp /> Liked Videos</Link></li>
          <li><Link to="/playlists" className="sidebar-link"><FaListUl /> Playlists</Link></li>
          <li><Link to="/downloads" className="sidebar-link"><FaDownload /> Downloads</Link></li>
        </ul>
      </section>

      <hr />

      <section>
        <ul>
          <li><Link to="/channel" className="sidebar-link"><FaUserAlt /> Your Channel</Link></li>
          <li><Link to="/music" className="sidebar-link"><FaMusic /> Music</Link></li>
          <li><Link to="/gaming" className="sidebar-link"><FaGamepad /> Gaming</Link></li>
          <li><Link to="/movies" className="sidebar-link"><FaFilm /> Movies</Link></li>
          <li><Link to="/learning" className="sidebar-link"><FaBook /> Learning</Link></li>
          <li><Link to="/sports" className="sidebar-link"><FaTrophy /> Sports</Link></li>
          <li><Link to="/podcasts" className="sidebar-link"><FaPodcast /> Podcasts</Link></li>
          <li><Link to="/explore" className="sidebar-link"><FaLightbulb /> Explore</Link></li>
          <li><Link to="/news" className="sidebar-link"><FaNewspaper /> News</Link></li>
          <li><Link to="/live" className="sidebar-link"><FaMicrophone /> Live</Link></li>
          <li><Link to="/streaming" className="sidebar-link"><FaSignal /> Streaming</Link></li>
          <li><Link to="/development" className="sidebar-link"><FaCodeBranch /> Development</Link></li>
          <li><Link to="/technology" className="sidebar-link"><FaRocket /> Technology</Link></li>
          <li><Link to="/health" className="sidebar-link"><FaHeart /> Health</Link></li>
          <li><Link to="/world" className="sidebar-link"><FaGlobe /> World</Link></li>
          <li><Link to="/design" className="sidebar-link"><FaPalette /> Design</Link></li>
          <li><Link to="/diy" className="sidebar-link"><FaTools /> DIY</Link></li>
          <li><Link to="/science" className="sidebar-link"><FaFlask /> Science</Link></li>
          <li><Link to="/nature" className="sidebar-link"><FaTree /> Nature</Link></li>
          <li><Link to="/business" className="sidebar-link"><FaBuilding /> Business</Link></li>
          <li><Link to="/education" className="sidebar-link"><FaGraduationCap /> Education</Link></li>
          <li><Link to="/travel" className="sidebar-link"><FaPlane /> Travel</Link></li>
          <li><Link to="/food" className="sidebar-link"><FaAppleAlt /> Food</Link></li>
          <li><Link to="/cloud" className="sidebar-link"><FaCloud /> Cloud</Link></li>
          <li><Link to="/maps" className="sidebar-link"><FaMapMarkedAlt /> Maps</Link></li>
        </ul>
      </section>

      <hr />

      <section>
        <ul>
          <li><Link to="/help" className="sidebar-link"><FaQuestionCircle /> Help</Link></li>
          <li><Link to="/more" className="sidebar-link"><FaChevronDown /> Show More</Link></li>
        </ul>
      </section>
    </aside>
  );
}

export default Sidebar;
