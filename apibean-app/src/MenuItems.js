import React from "react";

function MenuItems() {

  function addItem() {
    alert("hej");
  }

  return (
    <div>
      <div className="menu-item">
        <div className="button-class">
          <button id="add-button" onClick={addItem}></button>
        </div>
        <h1>Kaffe......................49 kr</h1>
        <p>Bryggd på månadens bönor</p>
      </div>
    </div>
  );
}

export default MenuItems;
