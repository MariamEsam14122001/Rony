import React, { useState, useEffect } from "react";
import axios from "axios";
import OwnerHeader from "../../componets/header/OwnerHeader.jsx";
import HeadOwner from "../../componets/header/Headowner.jsx";
import ItemsOwner from "../../componets/itemowner/ItemsOwner.jsx";

const Owner = () => {
  //ownersitems
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get("http://localhost:5000/api/items");
    setItems(response.data);
  };

  const deleteItem = async (itemId) => {
    try {
      await fetch(`http://localhost:5000/api/items/${itemId}`, {
        method: "DELETE",
      });
      // Update the items state to remove the deleted item
      setItems(items.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div>
      <OwnerHeader />
      <HeadOwner />
      {/*ownersitems*/}
      <ItemsOwner accommodations={items} onDelete={deleteItem} />
    </div>
  );
};
export default Owner;
