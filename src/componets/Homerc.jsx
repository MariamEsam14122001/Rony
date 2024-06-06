import StarRating from "./RC"; // Assuming StarRating component is in the same directory

import React from "react";

function Home() {
  return (
    <div>
      <p>Rate your experience:</p>
      <StarRating />
    </div>
  );
}

export default Home;
