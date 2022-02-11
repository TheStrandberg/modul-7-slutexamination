import React from "react";

function ItemComponent({ title, price, desc, AddItem }) {

  return (
    <div>
      <div className="menu-item">
        <div className="button-class">
          <button id="add-button" onClick={AddItem}></button>
        </div>
        <div className="title">{title}</div>
        <div className="container-dots"></div>
        <div className="price">{price} kr</div>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default ItemComponent;
