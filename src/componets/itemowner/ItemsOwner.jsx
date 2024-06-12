// // ItemsOwner.jsx

import React from "react";
import { Link } from "react-router-dom";
import ItemOwner from "./ItemOwner";
import styles from "./itemsowner.module.css";

const ItemsOwner = ({ accommodations = [], onDelete }) => {
  if (!Array.isArray(accommodations)) {
    return <div>No accommodations available.</div>;
  }

  return (
    <div className={styles["card-container"]}>
      <div className="row row-cols-md-3 g-3">
        {accommodations.map((accommodation) => (
          <Link to={`/edit/${accommodation.id}`} key={accommodation.id}>
            <ItemOwner
              id={accommodation.id}
              title={accommodation.title}
              description={accommodation.description}
              price={accommodation.price}
              location={accommodation.address}
              image={`http://localhost:8000/storage/${accommodation.main_image}`}
              region={accommodation.region}
              onDelete={() => onDelete(accommodation.id)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemsOwner;
