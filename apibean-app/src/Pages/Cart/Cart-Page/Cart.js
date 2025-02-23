import React, { useState, useEffect, useRef } from "react";
import "./cart.css";
import topFlower from "../../../assets/graphics/graphics-header.svg";
import MenuItems from "../../Menu/MenuItems";
import { Link } from "react-router-dom";
import CartSummary from "../CartSummary/CartSummary";
import { connect } from "react-redux";

function Cart({ cart }) {
  const [totalItems, setTotalItems] = useState(0);
  const btnRef = useRef();

  useEffect(() => {
    let itemsTotal = 0;

    cart.forEach((item) => {
      itemsTotal += item.qty;
    });

    setTotalItems(itemsTotal);

    if (cart.length === 0) {
      btnRef.current.style.opacity = "50%";
      btnRef.current.style.pointerEvents = "none";
    }
  }, [cart, totalItems, setTotalItems]);

  return (
    <div className="cart">
      <div className="triangle">&#9650;</div>
      <div className="cart-summary">
        <CartSummary />
      </div>

      <h1 id="your-order-header">Din beställning</h1>

      <Link to="/status">
        <button ref={btnRef} id="confirm-btn"><h1>Take My Money!</h1></button>
      </Link>

      <div className="bag">
        <Link to="/menu">
          <button id="bag-button"></button>
        </Link>
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
