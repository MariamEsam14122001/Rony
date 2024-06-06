import React from "react";
import Items from "../item/Items";

function AccommodationsList({ accommodations }) {
  return (
    <div>
      <Items accommodations={accommodations} />
    </div>
  );
}

export default AccommodationsList;
