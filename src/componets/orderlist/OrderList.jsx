import React, { useState } from "react";
import styles from "./styles.module.css"; // Make sure the path to your CSS file is correct

// Sample data for orders
const initialOrders = [
  {
    id: 1,
    referenceNumber: "ORD123",
    imageUrl: "https://via.placeholder.com/50",
    endDate: "2024-06-01",
  },
  {
    id: 2,
    referenceNumber: "ORD124",
    imageUrl: "https://via.placeholder.com/50",
    endDate: "2024-06-02",
  },
  {
    id: 3,
    referenceNumber: "ORD125",
    imageUrl: "https://via.placeholder.com/50",
    endDate: "2024-06-03",
  },
];

const OrderList = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [orderStatus, setOrderStatus] = useState({});

  const handleAccept = (id) => {
    setOrderStatus((prevStatus) => ({ ...prevStatus, [id]: "Accepted" }));
  };

  const handleDefuse = (id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  return (
    <div className={styles.orderlistcontainer}>
      <table className={styles.orderlisttable}>
        <thead>
          <tr>
            <th>Reference Number</th>
            <th>Image</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.referenceNumber}</td>
              <td>
                <img
                  src={order.imageUrl}
                  alt={`Order ${order.id}`}
                  className={styles.orderlistimage}
                />
              </td>
              <td>{order.endDate}</td>
              <td>
                {orderStatus[order.id] === "Accepted" ? (
                  <span>Accepted</span>
                ) : (
                  <>
                    <button
                      className={styles.orderlistbuttonaccept}
                      onClick={() => handleAccept(order.id)}
                    >
                      Accept
                    </button>
                    <button
                      className={styles.orderlistbuttondefuse}
                      onClick={() => handleDefuse(order.id)}
                    >
                      Defuse
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
