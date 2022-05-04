import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItemToBasket } from "../../actions/ItemAction";
import ItemComponent from "./ItemComponent/ItemComponent";
import menuItems from "../../data/menu.json";

function MenuItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getItems() {
      // const response = await fetch("http://localhost:5000/api/beans");
      // const itemArray = await response.json();
      // setItems(itemArray.menu);
      setItems(menuItems.menu);
    }
    getItems();
  }, []);

  const dispatch = useDispatch();
  function AddItem(item) {
    dispatch(addItemToBasket(item));
  }

  return (
    <div>
      {items.map((item) => {
        return (
          <ItemComponent
            title={item.title}
            price={item.price}
            desc={item.desc}
            key={item.id}
            AddItem={() => AddItem(item)}
          />
        );
      })}
    </div>
  );
}

export default MenuItems;
