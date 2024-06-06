import React, { useState, useEffect } from "react";
import styles from "./property.module.css";

import img6 from "../pictures/location.png";
import img7 from "../pictures/provide.png";

import HeartButton from "../../componets/heart/Heart.jsx";
import VRList from "../../componets/vr/VRList.jsx";
import ImagesList from "../../componets/vr/ImagesList.jsx";
import img1 from "../pictures/line.png";
import Header from "../../componets/header/Header.jsx";
//import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
//import img from "./pictures/image.jpg";
//import axios from "axios";
//import { ItemContext } from "../../Context/itemContext.jsx";

const PropertyDetails = (props) => {
  //fetch data details
  //first way
  const location = useLocation();
  const { item } = location.state;

  //second way
  // const { selectedItem: item } = useContext(ItemContext);

  // if (!item) {
  //   return <div>Loading...</div>;
  // }

  //third way
  //  const { id } = useParams();
  //  const [item, setItem] = useState(null);

  //  useEffect(() => {
  //    // Fetch item details from the backend API
  //    axios
  //      .get(`http://localhost:8000/items/${id}`)
  //      .then((response) => {
  //        setItem(response.data);
  //      })
  //      .catch((error) => {
  //        console.error("Error fetching item details:", error);
  //      });
  //  }, [id]);

  //Panorama show
  const [showPanorama, setShowPanorama] = useState(false);

  const togglePanorama = () => {
    setShowPanorama(!showPanorama);
  };

  //rating

  return (
    <>
      <Header />
      <div className={styles["property-details"]}>
        <div className={styles["image1"]}>
          {showPanorama ? (
            <div className={styles["panorama-image"]}>
              <VRList images={item.images} />
            </div>
          ) : (
            <ImagesList images={item.images} />
          )}
        </div>
        <button onClick={togglePanorama} className={styles["vrbutton"]} />
        <span className={styles["textbuttonvr"]}>
          <span>Property&apos;s Virtual Reality</span>
        </span>

        <span className={styles["d3"]}>
          <span>Bedrooms: 2</span>
        </span>
        <span className={styles["d4"]}>
          <span>Available from:{item.availability}</span>
        </span>
        <span className={styles["d5"]}>
          <span>Property size: 98 sqft</span>
        </span>
        <span className={styles["d6"]}>
          <span>Bathrooms: 1</span>
        </span>

        <div className={styles["rentdetails"]} />
        <span className={styles["r1"]}>
          <span>{item.price} EGP/Monthly</span>
        </span>

        <div className={styles["line2"]} />
        <div className={styles["r2"]} />

        <span className={styles["r3"]}>
          <span>Save to Wishlist</span>
        </span>

        <div className={styles["rectangle12"]}>
          {} <HeartButton id={item.id} />
        </div>

        <img src={img1} alt="gege" className={styles["line"]} />

        <span className={styles["description"]}>
          <span>Description</span>
        </span>
        <div
          style={{
            color: "black",
            top: "1150px",
            position: "absolute",
            left: "150px",
          }}
        >
          <p>{item.description}</p>
        </div>

        <span className={styles["location"]}>
          <span>Location:</span>
        </span>
        <img src={img6} alt={props} className={styles["locationphoto"]} />
        <span className={styles["text15"]}>
          <span>{item.location}</span>
        </span>

        <span className={styles["provider"]}>
          <span>Provider:</span>
        </span>
        <img src={img7} alt={props} className={styles["providerphoto"]} />
        <span className={styles["text22"]}>
          <span>
            <span>yasmin mohamed</span>
            <br></br>
            <span>Experts Home</span>
            <br></br>
            <span>(150 properties)</span>
          </span>
        </span>

        <img src={img1} alt="gege" className={styles["lineee"]} />

        <div
          style={{
            left: "125px",
            position: "absolute",
            width: "50%",
            top: "100px",
          }}
        ></div>
      </div>
    </>
  );
};

export default PropertyDetails;
