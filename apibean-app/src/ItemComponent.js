import React from "react";

function ItemComponent({ title, price, desc }) {
  return (
    <div>
      <div className="menu-item">
        <div className="button-class">
          <button id="add-button"></button>
        </div>
        <h1>{title} {price} kr</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default ItemComponent;
