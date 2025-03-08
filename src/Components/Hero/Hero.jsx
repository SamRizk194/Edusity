import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

function Hero() {
  return (
    <div className="container hero">
      <div className="hero-text">
        <h1>We insure better education for a better world</h1>
        <p>
          Our cutting-edge cerriculum is desidend to empowr students with the
          knowledge, skills and experiences to excel in the dynamic field of
          education
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
