import React from "react";

function SummaryComponent({ title, quantity, IncreaseQuantity, DecreaseQuantity, unitPrice }) {

  return (
    <div>
      <div className="item-summary">
        <h1>{title}</h1>
        <div className="container-dots"></div>
        <button id="arrow-up" onClick={IncreaseQuantity}></button>
        <h2>{quantity}</h2>
        <button id="arrow-down" onClick={DecreaseQuantity}></button>
      </div>
      <p id="unit-price">{unitPrice} kr</p>
    </div>
  );
}

export default SummaryComponent;
