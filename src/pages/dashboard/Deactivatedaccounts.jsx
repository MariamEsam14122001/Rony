import React from "react";
//import { Link } from "react-router-dom";
import Side from "../../componets/sidebar/Sidebarcomponents.jsx";
import Items2 from "../../componets/item2/Items2.jsx";
//import iframe from "iframe";
const accommodations = [
  {
    id: 1,
    name: "mary",
    age: "20",
    location: "Los Angeles, CA",
    image: "luxury-villa.JPEG",
  },
  {
    id: 2,
    name: "memo",
    age: "30",
    location: "Miami, FL",
    image: "beachfront-condo.JPEG",
  },
  {
    id: 3,
    name: "rony",
    age: "23",
    location: "Aspen, CO",
    image: "mountain-cabin.JPEG",
  },
  {
    id: 4,
    name: "rony",
    age: "23",
    location: "Aspen, CO",
    image: "mountain-cabin.JPEG",
  },
  {
    id: 5,
    name: "rony",
    age: "23",
    location: "Aspen, CO",
    image: "mountain-cabin.JPEG",
  },
  {
    id: 6,
    name: "rony",
    age: "23",
    location: "Aspen, CO",
    image: "mountain-cabin.JPEG",
  },
  // Add more accommodation objects as needed
];

const Deactivatedaccounts = () => {
  return (
    <div>
      <Side />
      <Items2 accommodations={accommodations} />
    </div>
  );
};
export default Deactivatedaccounts;
/* <iframe
        width="800"
        height="600"
        src="https://make3d.app/render?url=bgvbv.com&size=256"
        title="image"
        scrolling="no"
        frameborder="0"
      />*/
