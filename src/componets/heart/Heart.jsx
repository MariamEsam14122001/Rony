import React from "react";
import red from "../pictures/redhearticon.svg";
import empty from "../pictures/empty_heart.svg";
import { useWishlist } from "../Context/WishlistContext";

import React from "react";

import { useSelector } from "react-redux";

function HeartButton({ id }) {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleToggleLike = () => {
    if (!isAuthenticated) {
      // Optionally, you can display a message or redirect the user to the login page
      console.log("Please log in to add items to wishlist");
      return;
    }

    if (wishlist.includes(id)) {
      removeFromWishlist(id);
    } else {
      addToWishlist(id);
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
