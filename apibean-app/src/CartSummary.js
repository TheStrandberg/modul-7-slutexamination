import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from "react-redux";
import { AddQuantity, RemoveFromCart, SubQuantity } from './actions/ItemAction';
import SummaryComponent from './SummaryComponent';

function CartSummary({ cart }) {

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
    let price = 0;
    let counter = 0;
    cart.forEach((item) => {

      //Special price for Bryggkaffe and Gustav Adolfsbakelse
      //id 1 = "Bryggkaffe"
      if (item.id === 1 && item.qty === 1) {
        counter++;
      }
      //id 7 = "Gustav Adolfsbakelse"
      if (item.id === 7 && item.qty === 1) {
        counter++;
      }
      if (counter === 2 && cart.length === 2) {
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
    //item.qty === 0 showed 0 qty in app but required one more removal before item was removed from cart
    if (item.qty === 1) {
      dispatch(RemoveFromCart(item));
    }
  }
  
  return (
    <div>
    <div className="item-summary-page">
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
    </div>
    
      <div className="total-summary">
        <h3>Total</h3>
        <div className="container-dots"></div>
        <h3>{totalPrice} kr</h3>
      </div>
      <p id="fine-print">inkl moms + drönarleverans</p>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        cart: state.shoppingCart,
    };
};

export default connect(mapStateToProps)(CartSummary);
