import React from "react";
//import red from "../pictures/redhearticon.svg";
//import empty from "../pictures/empty_heart.svg";
//import { useWishlist } from "../Context/WishlistContext";

function HeartButton({ id }) {
  // const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  // const handleToggleLike = () => {
  //   if (wishlist.includes(id)) {
  //     removeFromWishlist(id);
  //   } else {
  //     addToWishlist(id);
  //   }
  // };

  return (
    <div>
      {/*} <img
        src={wishlist.includes(id) ? red : empty}
        alt={wishlist.includes(id) ? 'Liked' : 'Like'}
        onClick={handleToggleLike}
        style={{ cursor: 'pointer' }}
    />*/}
    </div>
  );
}

export default HeartButton;
