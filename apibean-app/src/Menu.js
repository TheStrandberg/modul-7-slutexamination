import React from "react";
import topFlower from "./assets/graphics/graphics-header.svg";
import bottomFlower from "./assets/graphics/graphics-footer.svg";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

function Menu( { cart } ) {

    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
    let itemsTotal = 0;

    cart.forEach((item) => {
      itemsTotal += item.qty;
    });

    setTotalItems(itemsTotal);
  }, [cart, totalItems, setTotalItems]);

  return (
    <div>
      <div className="bag">
      <Link to="/cart"><button id="bag-button"></button></Link>
        <h1 id="counter">{totalItems}</h1>
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

const mapStateToProps = (state) => {
  return {
      cart: state.shoppingCart,
  };
};

export default connect(mapStateToProps)(Menu);
