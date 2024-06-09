import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ownerprofile.module.css";
import Photos from "../../componets/photo/Photo.jsx";
import img from "../pictures/prof.png";
import LogoutButton from "../../componets/logoutbutton/LogoutButton.jsx";
import { Link } from "react-router-dom";
import axios from "axios";

const Ownerform = () => {
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
  const [ownerData, setOwnerData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    // Fetch owner data from the backend
    axios
      .get("http://localhost:8000/api/owner")
      .then((response) => {
        setOwnerData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching owner data:", error);
      });
  }, []);

  return (
    <div>
      <div>
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <Photos photoUrl={photoUrl} altText="Description of the photo" />
          )}
        </div>

        <Link to="/upload">
          <button
            name="Uload Properities"
            id="Uload Properities"
            type="button"
            className={styles["button2"]}
          >
            <span className={styles["acccountsetting"]}>
              Upload Properities
            </span>
          </button>
        </Link>

        <button
          name="Properities"
          id="Properities"
          type="button"
          className={styles["button3"]}
        >
          <span className={styles["acccountsetting"]}>Properities</span>
        </button>

        <div className={styles["logout"]}>
          <LogoutButton />
        </div>

        <div className={styles["form"]}>
          <span className={styles["userprofile"]}>Owner Profile</span>

          <div className={styles["full-name"]}>
            <span className={styles["name"]}>Name:</span>
          </div>
          <p className={styles["nameinput"]}>{ownerData.name}</p>

          <div className={styles["email-address"]}>
            <span className={styles["email"]}>Email Address:</span>
          </div>
          <p className={styles["emailinput"]}>{ownerData.email}</p>

          <div className={styles["password"]}>
            <span className={styles["password1"]}>Password:</span>
          </div>
          <p className={styles["passwordinput"]}>{ownerData.password}</p>

          <Link to="/Owneraccount">
            <button
              name="setting"
              id="setting"
              type="button"
              className={styles["button"]}
            >
              <span className={styles["accountsetting"]}>Account Setting</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Photos.defaultProps = {
  iMAGESrc: img,
  iMAGEAlt: "IMAGE",
};

Photos.propTypes = {
  iMAGESrc: PropTypes.any,
  iMAGEAlt: PropTypes.string,
};

export default Ownerform;
