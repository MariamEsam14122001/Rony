import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./roomatte.module.css";
import Photos from "../../componets/photo/Photo";
import img from "../pictures/prof.png";
import axios from "axios";

const Roommatte = () => {
  const [photoUrl, setPhotoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotoUrl = async () => {
      try {
        const response = await axios.get("http://example.com/api/photo");
        setPhotoUrl(response.data.photoUrl);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchPhotoUrl();
  }, []);
  const [roommateData, setRoommateData] = useState({
    name: "",
    gender: "",
    age: "",
    city: "",
    phone: "",
  });

  useEffect(() => {
    // Fetch roommate data from the backend
    axios
      .get("http://localhost:8000/api/roommate")
      .then((response) => {
        setRoommateData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching roommate data:", error);
      });
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <Photos photoUrl={photoUrl} altText="Description of the photo" />
        )}
      </div>
      <div>
        <div className={styles["form"]}>
          <span className={styles["userprofile"]}>Roommate</span>

          <div className={styles["full-name"]}>
            <span className={styles["name"]}>Name</span>
          </div>
          <p className={styles["nameinput"]}>{roommateData.name}</p>

          <span className={styles["gender"]}>Gender</span>
          <p className={styles["genderinput"]}>{roommateData.gender}</p>

          <span className={styles["age"]}>Age</span>
          <p className={styles["ageinput"]}>{roommateData.age}</p>

          <span className={styles["city"]}>City</span>
          <p className={styles["cityinput"]}>{roommateData.city}</p>

          <div>
            <span className={styles["phone"]}>Phone</span>
          </div>
          <p className={styles["phoneinput"]}>{roommateData.phone}</p>

          <button name="setting" id="setting" className={styles["button"]}>
            <span className={styles["accountsetting"]}>Report</span>
          </button>
        </div>
      </div>
    </>
  );
};

Photos.defaultProps = {
  iMAGESrc: img,
  iMAGEAlt: "IMAGE",
};

Photos.propTypes = {
  iMAGESrc: PropTypes.string,
  iMAGEAlt: PropTypes.string,
};

export default Roommatte;
