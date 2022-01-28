import React from "react";
import topFlower from "./assets/graphics/graphics-header.svg";
import MenuItems from "./MenuItems";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {

    //Gets the number of items in our redux store
  const itemCount = useSelector((state) => { return state.shoppingBasket.length });

    return (
    <div className="cart">
    <div className="triangle">&#9650;</div>
    <div className="cart-summary"></div>
    <h1 id="your-order-header">Din beställning</h1>
    <Link to="/status"><button id="confirm-btn"><h1>Take My Money!</h1></button></Link>
    
      <div className="bag">
      <Link to="/cart"><button id="bag-button"></button></Link>
        <h1 id="counter">{itemCount}</h1>
      </div>

      <div className="menu-overlay">
      <div className="menu-page">
        <img id="top-flower" src={topFlower} alt="top-flower" />
        <h1 id="meny-header">Meny</h1>
        <div className="menu-layout">
          <MenuItems />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Cart;
