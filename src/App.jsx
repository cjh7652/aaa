import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Web from "./components/Web/Web";
import Graphic from "./components/Graphic/Graphic";
import Header from "./components/Header/Header";

import "./App.scss";

function App() {
  const videoID = "AMz0SZBWiJ8"; // ✅ 유튜브 영상 ID

  return (
    <div className="app">
      {/* 배경 유튜브 영상 */}
      <div className="bg-video">
        {/* <iframe
          src={`https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1&loop=1&playlist=${videoID}`}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Background Video"
        ></iframe> */}
      </div>

      {/* ✅ 오버레이 */}
      <div className="overlay"></div>

      {/* 중앙 네모 박스 */}
      <div className="content-box">
        <Header />
        <div className="content-inner">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/web" element={<Web />} />
            <Route path="/graphic" element={<Graphic />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
