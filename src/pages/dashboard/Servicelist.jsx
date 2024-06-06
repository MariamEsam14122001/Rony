import React from "react";
import OrderList from "../../componets/orderlist/OrderList.jsx";
import Side from "../../componets/sidebar/Sidebarcomponents.jsx";
import "./styles.module.css"; // Ensure the path is correct

const Home = () => {
  return (
    <div className="home-container">
      <Side />
      <OrderList />
    </div>
  );
};

export default Home;
