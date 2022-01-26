import React from "react";
import { useState, useEffect  } from "react";
import ItemComponent from "./ItemComponent";

function MenuItems() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    async function getItems() {
    const response = await fetch("http://localhost:5000/api/beans");
    const itemArray = await response.json();
    setItem(itemArray.menu);
    }
    getItems();
    }, []);

  return (
    <div>
      {item.map((item) => {
        return <ItemComponent 
        title={item.title} 
        price={item.price} 
        desc={item.desc} 
        key={item.id}/>
      })}
    </div>
  );
}

export default MenuItems;
