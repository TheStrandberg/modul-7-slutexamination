import React from "react";
import topFlower from "./assets/graphics/graphics-header.svg";
import bottomFlower from "./assets/graphics/graphics-footer.svg";
import MenuItems from "./MenuItems";
import { useSelector } from "react-redux";

function Menu() {

  return (
    <div>
      <div className="bag">
        <button id="bag-button"></button>
        <h1 id="counter">0</h1>
      </div>
      <div className="menu-page">
        <img id="top-flower" src={topFlower} alt="top-flower" />
        <img id="bottom-flower" src={bottomFlower} alt="bottom-flower" />
        <h1 id="meny-header">Meny</h1>
        <div className="menu-layout">
          <MenuItems />
        </div>
      </div>
    </div>
  );
}

export default Menu;
