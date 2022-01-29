import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "./actions/ItemAction";
import drone from "./assets/graphics/drone.svg";

function Status() {
  const [order, setOrder] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    async function getStatus() {
      const response = await fetch("http://localhost:5000/api/beans", {
        method: "POST",
      });
      let fetchOrder = await response.json();
      setOrder(fetchOrder);
    }
    getStatus();
    dispatch(clearCart());
  }, []);

  return (
    <div className="order-page">
      <div className="order-number">
        <p>Ordernummer</p>
        <p id="order-number-id">{order.orderNr}</p>
      </div>
      <img src={drone} alt="drone" />
      <h1>Din beställning är påväg!</h1>
      <div className="order-time">
        <h2 id="order-time-id">{order.eta}</h2>
        <h2 id="order-time-minutes">minuter</h2>
      </div>
      <Link to="/menu">
        <button><h3 id="button-font">Ok, cool!</h3></button>
      </Link>
    </div>
  );
}

export default Status;
