// AccommodationList.jsx
import React from "react";
import Item from "./Item";
import styles from "./items.module.css";
import { Link } from "react-router-dom";

const Items = ({ accommodations }) => {
  return (
    <div className={styles["card-container"]}>
      <div className="row  row-cols-md-3 g-3">
        {accommodations.map((accommodation) => (
          <Link to={`/details/${accommodation.id}`}>
            <Item
              id={accommodation.id}
              title={accommodation.title}
              price={accommodation.price}
              location={accommodation.location}
              images={accommodation.image}
              shared_or_individual={accommodation.shared_or_individual}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Items;

// const Items = ({ accommodations ,likedItems, onToggleLike }) => {
//   return (
//     <div className={styles["card-container"]}>
//     <div className="row  row-cols-md-3 g-3">
//     {accommodations.map( accommodation  => (
// <Link to={`/details/${accommodation.id}`}>
//           <Item
//             key={index}
//             id={accommodation.id}
//             title={accommodation.title}
//             price={accommodation.price}
//             location={accommodation.location}
//             image={accommodation.image}
//shared_or_individual={accommodation.shared_or_individual}
//             isLiked={likedItems.includes(accommodation.id)}
//           onToggleLike={() => onToggleLike(accommodation.id)}
//           onClick={() => handleItemClick(accommodation.id)}
//           />
// </Link>
//           ))}
//     </div>
//     </div>
//   );
// };
