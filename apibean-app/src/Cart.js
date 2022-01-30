import React, { useState, useEffect } from "react";
import topFlower from "./assets/graphics/graphics-header.svg";
import MenuItems from "./MenuItems";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Cart( {cart} ) {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

    return (
    <div className="cart">
    <div className="triangle">&#9650;</div>
    <div className="cart-summary"></div>
    <h1 id="your-order-header">Din beställning</h1>
    <Link to="/status"><button id="confirm-btn"><h1>Take My Money!</h1></button></Link>
    
      <div className="bag">
      <Link to="/cart"><button id="bag-button"></button></Link>
        <h1 id="counter">{totalItems}</h1>
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

const mapStateToProps = (state) => {
    return {
        cart: state.shoppingCart,
    };
};

export default connect(mapStateToProps)(Cart);
