import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import VideoPlayer from "./pages/VideoPlayer";
import ChannelPage from "./pages/ChannelPage";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";

function Layout() {
  const [showSidebar, setShowSidebar] = useState(true);
  const location = useLocation();

  // Only hide sidebar on video player page
  const isVideoPage = location.pathname.startsWith("/video");

  return (
    <>
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      {showSidebar && !isVideoPage && <Sidebar show={true} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video/:id" element={<VideoPlayer />} />
        <Route path="/channel/:id" element={<ChannelPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
