import "./text.css";


import React, { useState } from "react";

const FooterInitials = () => {
  const [hovered, setHovered] = useState(false);

  const scrollToTop = () => {
    console.log("scroll clicked");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer-text-wrapper">
      <div
        className="content"
        onClick={scrollToTop}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          cursor: "pointer",
          transform: hovered ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.25s ease",
          pointerEvents: "auto",
        }}
        title="Back to top"
      >
        <h6
          style={{
            textShadow: hovered ? "0 0 12px rgba(255,172,172,0.45)" : "none",
            transition: "text-shadow 0.25s ease",
            pointerEvents: "auto",
          }}
        >
          QZ ↑
        </h6>

        <h6
          style={{
            textShadow: hovered ? "0 0 18px rgba(228,90,132,0.55)" : "none",
            transition: "text-shadow 0.25s ease",
            pointerEvents: "auto",
          }}
        >
          QZ ↑
        </h6>
      </div>
    </div>
  );
};

export default FooterInitials;