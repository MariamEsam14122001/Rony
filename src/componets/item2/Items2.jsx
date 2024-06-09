// AccommodationList.jsx
import React from "react";
import Item2 from "./Item2";
import styles from "./items2.module.css";

const Items2 = ({ datasets }) => {
  return (
    <div className={styles["card-container"]}>
      <div className="row  row-cols-2 g-2">
        {datasets.map((dataset) => (
          <div className="col" key={dataset.id}>
            <Item2
              id={dataset.id}
              name={dataset.name}
              age={dataset.age}
              location={dataset.location}
              image={dataset.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items2;
