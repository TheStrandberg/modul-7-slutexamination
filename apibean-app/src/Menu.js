import React from "react";
import topFlower from "./assets/graphics/graphics-header.svg";
import bottomFlower from "./assets/graphics/graphics-footer.svg";
import MenuItems from "./MenuItems";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Menu() {

  //Gets the number of items in our redux store
  const itemCount = useSelector((state) => { return state.shoppingCart.length });

  return (
    <div>
      <div className="bag">
      <Link to="/cart"><button id="bag-button"></button></Link>
        <h1 id="counter">{itemCount}</h1>
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
