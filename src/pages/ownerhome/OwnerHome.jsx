import React, { useState, useEffect } from "react";
import axios from "axios";
import OwnerHeader from "../../componets/header/OwnerHeader.jsx";
import HeadOwner from "../../componets/header/Headowner.jsx";
import ItemsOwner from "../../componets/itemowner/ItemsOwner.jsx";

const Owner = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const token = localStorage.getItem("authToken"); // Get the owner's authentication token

    if (!token) {
      console.error("No token found");
      return;
    }

    try {
      const response = await axios.get("http://localhost:5000/api/items", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const deleteItem = async (itemId) => {
    try {
      await fetch(`http://localhost:5000/api/items/${itemId}`, {
        method: "DELETE",
      });
      setItems(items.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div>
      <OwnerHeader />
      <HeadOwner />
      <ItemsOwner accommodations={items} onDelete={deleteItem} />
    </div>
  );
};

export default Owner;
