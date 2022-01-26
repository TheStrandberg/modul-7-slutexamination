import React from 'react';
import topFlower from "./assets/graphics/graphics-header.svg"
import bottomFlower from "./assets/graphics/graphics-footer.svg"

function Menu() {
  return <div className="menu-page">
    <img id="top-flower" src={topFlower} alt="top-flower" />
    <img id="bottom-flower" src={bottomFlower} alt="bottom-flower" />
    <h1>Meny</h1>
  </div>;
}

export default Menu;

