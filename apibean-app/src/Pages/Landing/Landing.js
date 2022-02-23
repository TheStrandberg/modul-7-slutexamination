import React from "react";
import "./landing.css";
import rightFlower from "../../assets/graphics/intro-graphic-right.svg";
import leftFlower from "../../assets/graphics/intro-graphic-left.svg";
import loader from "../../assets/graphics/airbean-landing.svg";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <Link to="/menu">
        <div className="landing-page">
          <img id="right-flower" src={rightFlower} alt="right-graphic" />
          <img id="left-flower" src={leftFlower} alt="left-graphic" />
          <img id="loader" src={loader} alt="loader-icon" />
        </div>
      </Link>
    </div>
  );
}

export default Landing;
