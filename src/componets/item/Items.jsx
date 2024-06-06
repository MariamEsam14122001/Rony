// AccommodationList.jsx
import React from "react";
import Item from "./Item";
import styles from "./items.module.css";
import { Link } from "react-router-dom";

const Items = ({ accommodations, likedItems, onToggleLike }) => {
  return (
    <div className={styles["card-container"]}>
      <div className="row  row-cols-md-3 g-3">
        {accommodations.map((accommodation) => (
          <Link
            to={`/details/${accommodation.id}`}
            state={{ item: accommodation }}
            key={accommodation.id}
          >
            <Item
              id={accommodation.id}
              title={accommodation.title}
              price={accommodation.price}
              location={accommodation.location}
              image={accommodation.image}
              phone={accommodation.phone}
              shared_or_individual={accommodation.shared_or_individual}
              isLiked={likedItems.includes(accommodation.id)}
              onToggleLike={() => onToggleLike(accommodation.id)}
              onClick={() => handleItemClick(accommodation.id)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Items;

// const Items = ({ accommodations, onItemSelect, likedItems, onToggleLike }) => {
//   return (
//     <div className={styles["card-container"]}>
//       <div className="row  row-cols-md-3 g-3">
//         {accommodations.map((accommodation) => (
//           <Link
//   to={`/details/${accommodation.id}`}
//   onClick={() => onItemSelect(accommodation)}
//   key={accommodation.id}
// >
//             <Item
//               id={accommodation.id}
//               title={accommodation.title}
//               price={accommodation.price}
//               location={accommodation.location}
//               image={accommodation.image}
//               shared_or_individual={accommodation.shared_or_individual}
// isLiked={likedItems.includes(accommodation.id)}
// onToggleLike={() => onToggleLike(accommodation.id)}
// onClick={() => handleItemClick(accommodation.id)}

//             />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Items;
