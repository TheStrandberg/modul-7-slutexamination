import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import arrowUp from "./assets/graphics/arrow-up.svg";
import arrowDown from "./assets/graphics/arrow-down.svg";

function SummaryComponent({ title, quantity, IncreaseQuantity,DecreaseQuantity, unitPrice }) {

  return (
    <div>
      <div className="item-summary">
        <h1>{title}</h1>
        
        <div className="container-dots"></div>
        <button id="arrow-up" onClick={IncreaseQuantity}></button>
        <h2>{quantity}</h2>
        <button id="arrow-down" onClick={DecreaseQuantity}></button>
      </div>
      <p>{unitPrice}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shoppingCart,
  };
};

export default connect(mapStateToProps)(SummaryComponent);
