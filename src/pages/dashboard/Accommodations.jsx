import React from "react";
//import { Link } from "react-router-dom";
import Side from "../../componets/sidebar/Sidebarcomponents.jsx";
import Items from "../../componets/item/Items.jsx";
const accommodations = [
  {
    id: 1,
    title: "Luxury Villa",
    price: "$500",
    location: "Los Angeles, CA",
    image: "luxury-villa.JPEG",
  },
  {
    id: 2,
    title: "Beachfront Condo",
    price: "$300",
    location: "Miami, FL",
    image: "beachfront-condo.JPEG",
  },
  {
    id: 3,
    title: "Mountain Cabin",
    price: "$200",
    location: "Aspen, CO",
    image: "mountain-cabin.JPEG",
  },
  // Add more accommodation objects as needed
];

function Accommodations() {
  return (
    <div>
      <Side />
      <Items accommodations={accommodations} />
    </div>
  );
}
export default Accommodations;
/**/
