// ItemsOwner.jsx
import React from "react";
import { Link } from "react-router-dom";
import ItemOwner from "./ItemOwner";
import styles from "./itemsowner.module.css";

const ItemsOwner = ({ accommodations, onDelete }) => {
  return (
    <div className={styles["card-container"]}>
      <div className="row  row-cols-md-3 g-3">
        {accommodations.map((accommodation) => (
          <Link to={`/edit/${accommodation.id}`}>
            <ItemOwner
              key={accommodation.id}
              id={accommodation.id}
              title={accommodation.title}
              price={accommodation.price}
              location={accommodation.location}
              image={accommodation.image}
              onDelete={() => onDelete(accommodation.id)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemsOwner;
