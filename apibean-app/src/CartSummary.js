import React, { useState, useEffect, Fragment } from 'react';
import { connect, useDispatch } from "react-redux";
import { AddQuantity, RemoveFromCart, SubQuantity } from './actions/ItemAction';
import SummaryComponent from './SummaryComponent';

function CartSummary({ cart }) {

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
    let price = 0;
    let count = 0;
    cart.forEach((item) => {

      if (item.id === 1 && item.qty === 1) {
        count++;
      }
      if (item.id === 7 && item.qty === 1) {
        count++;
      }
      if (count === 2 && cart.length === 2) {
        price = 39;
        return;
      }
      //if above is false, calc price as usual
      price += item.qty * item.price;

    });

    setTotalPrice(price);
  }, [cart, totalPrice, setTotalPrice]);

  const dispatch = useDispatch();
  function IncreaseQuantity(item) {
    dispatch(AddQuantity(item));
  }

  function DecreaseQuantity(item){
    dispatch(SubQuantity(item));
    //item.qty === 0 did not work for some reason..
    if (item.qty === 1) {
      //remove item from cart
      dispatch(RemoveFromCart(item));
    }
  }
  
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
            IncreaseQuantity={() => IncreaseQuantity(item)}
            DecreaseQuantity={() => DecreaseQuantity(item)}
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
