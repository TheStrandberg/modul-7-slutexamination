import React from 'react';
import rightFlower from "./assets/graphics/intro-graphic-right.svg";
import leftFlower from "./assets/graphics/intro-graphic-left.svg";
import loader from "./assets/graphics/airbean-landing.svg";

function Landing() {
  return <div className="landing-page">
    <img id="right-flower" src={rightFlower} alt="right-graphic" />
    <img id="left-flower" src={leftFlower} alt="left-graphic" />
    <img id="loader" src={loader} alt="loader-icon" />
    
  </div>;
}

export default Landing;
