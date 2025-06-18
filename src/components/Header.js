import "./../styles/Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  FaBars,
  FaSearch,
  FaTimes,
  FaSun,
  FaMoon,
  FaUserCircle,
  FaVideo,
  FaBell,
  FaMicrophone
} from "react-icons/fa";

function Header({ setShowSidebar, showSidebar }) {
  const [query, setQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { logout, user } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = () => {
    alert("Searching for: " + query);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const handleUpload = () => {
    alert("Redirecting to upload page...");
  };

  const handleMic = () => {
    alert("🎤 Microphone not supported in demo mode.");
  };

  const handleMenuClick = () => {
    if (location.pathname.startsWith("/video")) {
      navigate("/");
    } else {
      setShowSidebar(!showSidebar);
    }
  };

  return (
    <header className="yt-header">
      <div className="left">
        <button className="menu-toggle" onClick={handleMenuClick}>
          {showSidebar ? <FaTimes /> : <FaBars />}
        </button>
        <Link to="/" className="logo">YouTube</Link>
      </div>

      <div className="center">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          <FaSearch />
        </button>
        <button className="mic-btn" onClick={handleMic}>
          <FaMicrophone />
        </button>
      </div>

      <div className="right">
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <button className="upload-btn" onClick={handleUpload}>
          <FaVideo />
        </button>

        <div className="notif-dropdown">
          <button className="notif-btn" onClick={() => setShowNotifications(!showNotifications)}>
            <FaBell />
          </button>
          {showNotifications && (
            <div className="dropdown-menu notifications">
              <p>No new notifications 🔕</p>
            </div>
          )}
        </div>

        {user ? (
          <div className="user-dropdown">
            <FaUserCircle
              className="avatar"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div className="dropdown-menu">
                <p>Hello, {user.username}</p>
                <button onClick={logout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/signin">
            <button className="signin-btn">Sign In</button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
