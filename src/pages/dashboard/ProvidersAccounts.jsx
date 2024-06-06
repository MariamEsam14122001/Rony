import React from "react";

//import { Link } from "react-router-dom";
import Side from "../../componets/sidebar/Sidebarcomponents.jsx";
import Items2 from "../../componets/item2/Items2.jsx";
const accommodations = [
  {
    id: 1,
    name: "Luxury Villa",
    age: "$500",
    location: "Los Angeles, CA",
    image: "luxury-villa.JPEG",
  },
  {
    id: 2,
    name: "Beachfront Condo",
    age: "$300",
    location: "Miami, FL",
    image: "beachfront-condo.JPEG",
  },
  {
    id: 3,
    name: "Mountain Cabin",
    age: "$200",
    location: "Aspen, CO",
    image: "mountain-cabin.JPEG",
  },
  // Add more accommodation objects as needed
];

const ProvidersAccounts = () => {
  return (
    <div>
      <Side />
      <Items2 accommodations={accommodations} />
    </div>
  );
};
export default ProvidersAccounts;
