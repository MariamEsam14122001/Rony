import React from "react";
import red from "../pictures/redhearticon.svg";
import empty from "../pictures/empty_heart.svg";
import { useWishlist } from "../../Context/WishlistContext";
import { useSelector } from "react-redux";

function HeartButton({ id }) {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector((state) => state.auth.token);

  if (!wishlist || !addToWishlist || !removeFromWishlist) {
    // Handle the case where the wishlist context is not available
    return null; // or render a fallback UI
  }

  const handleToggleLike = () => {
    if (!isAuthenticated) {
      console.log("Please log in to add items to wishlist");
      return;
    }

    if (wishlist.includes(id)) {
      removeFromWishlist(id, token);
    } else {
      addToWishlist(id, token);
    }
  };

  return (
    <div>
      {isAuthenticated && (
        <img
          src={wishlist.includes(id) ? red : empty}
          alt={wishlist.includes(id) ? "Liked" : "Like"}
          onClick={handleToggleLike}
          style={{ cursor: "pointer" }}
        />
      )}
    </div>
  );
}

export default HeartButton;

// function HeartButton({ id }) {
//   const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
//   console.log("Wishlist:", wishlist); // Debug log
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const token = useSelector((state) => state.auth.token); // Assuming you have a token in your Redux state

//   const handleToggleLike = () => {
//     if (!isAuthenticated) {
//       // Optionally, you can display a message or redirect the user to the login page
//       console.log("Please log in to add items to wishlist");
//       return;
//     }

//     if (wishlist.includes(id)) {
//       removeFromWishlist(id, token);
//     } else {
//       addToWishlist(id, token);
//     }
//   };

//   return (
//     <div>
//       {isAuthenticated && (
//         <img
//           src={wishlist.includes(id) ? red : empty}
//           alt={wishlist.includes(id) ? "Liked" : "Like"}
//           onClick={handleToggleLike}
//           style={{ cursor: "pointer" }}
//         />
//       )}
//     </div>
//   );
// }

// export default HeartButton;
