import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from "react-redux";
import { AddQuantity, RemoveFromCart, SubQuantity } from './actions/ItemAction';
import SummaryComponent from './SummaryComponent';

function CartSummary({ cart }) {

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
    let price = 0;
    cart.forEach((item) => {
      price += item.qty * item.price;
    })
      //Special price for Bryggkaffe and Gustav Adolfsbakelse
      const bryggkaffe = cart.find(e => e.title === "Bryggkaffe");
      const bakelse = cart.find(e => e.title === "Gustav Adolfsbakelse");

      if (bryggkaffe && bakelse) {
        let kaffeCount = bryggkaffe.qty;
        let bakelseCount = bakelse.qty;
        let iterations = kaffeCount + bakelseCount;
        for (let i = 1; i < iterations; i++) {
          kaffeCount--;
          bakelseCount--;
          if (kaffeCount === 0 || bakelseCount === 0) {
              price -= (39 * i);
              break;
          } 
        }
      }

    setTotalPrice(price);
  }, [cart]);

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
