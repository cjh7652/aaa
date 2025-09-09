import React from "react";
import "./Home.scss";
import mainImage from "../../img/home/bg.jpg";   // ✅ PC 이미지
import mobileImage from "../../img/home/bg_h.png"; // ✅ 모바일 이미지

function Home() {
  return (
    <div className="home">
      {/* 좌측 상단 텍스트 */}
      <div className="portfolio-label">PORTFOLIO</div>

      {/* 중앙 이미지 (PC/모바일 자동 전환) */}
      <picture>
        <source />
        <img src={mainImage} alt="PC 버전" className="visual-pc" />
        <img src={mobileImage} alt="모바일 버전" className="visual-mobile" />
      </picture>

      {/* 우측 텍스트 */}
      <div className="name-label">KIL JEONG EUN</div>
    </div>
  );
}

export default Home;
