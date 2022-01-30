import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

function SummaryComponent({ title, quantity, unitPrice }) {
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     let price = 0;

//     cart.forEach((item) => {
//       price += item.qty * item.price;
//     });

//     setTotalPrice(price);
//   }, [cart, totalPrice, setTotalPrice]);

  return (
    <div>
      <div className="item-summary">
        <h1>{title}</h1>
        
        <div className="container-dots"></div>
        
        <h2>{quantity}</h2>
      </div>
      {unitPrice}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shoppingCart,
  };
};

export default connect(mapStateToProps)(SummaryComponent);
