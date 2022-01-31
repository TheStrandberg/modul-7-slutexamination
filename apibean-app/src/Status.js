import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "./actions/ItemAction";
import drone from "./assets/graphics/drone.svg";
import ReactLoading from "react-loading";
import { loader } from "./assets/graphics/loader.png";

function Status() {
  const [order, setOrder] = useState({});
  const [done, setDone] = useState(undefined);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getStatus() {
      const response = await fetch("http://localhost:5000/api/beans", {
        method: "POST",
      });
      let fetchOrder = await response.json();
      setOrder(fetchOrder);
      setDone(true);
    }
    getStatus();
    dispatch(clearCart());
  }, []);

  return (
    <>
    {!done ? (
      <ReactLoading type={"bars"} 
      color={"green"}
      height={100}
      width={100}
      />
    ) : (
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
    )}
    </>
  );
}

export default Status;
