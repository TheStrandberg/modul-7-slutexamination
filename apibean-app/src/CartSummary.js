import React, { useState, useEffect, Fragment } from 'react';
import { connect } from "react-redux";
import SummaryComponent from './SummaryComponent';

function CartSummary({ cart }) {

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
    let price = 0;

    cart.forEach((item) => {
      price += item.qty * item.price;
    });

    setTotalPrice(price);
  }, [cart, totalPrice, setTotalPrice]);
  
  return (
    <div>
      {cart.map((item) => {
        return (
          <SummaryComponent
            title={item.title}
            quantity={item.qty}
            key={item.id}
            itemTotal={item.itemTotal}
            unitPrice= {item.qty * item.price}
          />
        );
      })}
      <div className="total-summary">
        <h3>Total</h3>
        <div className="container-dots"></div>
        <h3>{totalPrice}</h3>
      </div>
      <p>inkl moms + drönarleverans</p>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        cart: state.shoppingCart,
    };
};

export default connect(mapStateToProps)(CartSummary);
