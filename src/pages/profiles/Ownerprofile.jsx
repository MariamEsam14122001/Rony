import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ownerprofile.module.css";
import Photos from "../../componets/photo/Photo.jsx";
import LogoutButton from "../../componets/logoutbutton/LogoutButton.jsx";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux"; // Import useSelector

const Ownerform = () => {
  const [photoUrl, setPhotoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const ownerData = useSelector((state) => state.auth.userProfile); // Get owner data from Redux

  useEffect(() => {
    const fetchPhotoUrl = async () => {
      if (ownerData && ownerData.photo) {
        try {
          const response = await axios.get(
            `http://localhost:8000/api/owner/profile/${ownerData.photo}`
          );
          setPhotoUrl(response.data.photoUrl);
          setIsLoading(false);
        } catch (error) {
          setError(error.message);
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    fetchPhotoUrl();
  }, [ownerData]);

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

        <Link to="/owner">
          <button
            name="Properities"
            id="Properities"
            type="button"
            className={styles["button3"]}
          >
            <span className={styles["acccountsetting"]}>Properities</span>
          </button>
        </Link>
        <div className={styles["logout"]}>
          <LogoutButton />
        </div>

        <div className={styles["form"]}>
          <span className={styles["userprofile"]}>Owner Profile</span>

          <div className={styles["full-name"]}>
            <span className={styles["name"]}>Name:</span>
          </div>
          <p className={styles["nameinput"]}>{ownerData?.name}</p>

          <div className={styles["email-address"]}>
            <span className={styles["email"]}>Email Address:</span>
          </div>
          <p className={styles["emailinput"]}>{ownerData?.email}</p>

          <div className={styles["password"]}>
            <span className={styles["password1"]}>Password:</span>
          </div>
          <p className={styles["passwordinput"]}>{ownerData?.password}</p>

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

export default Ownerform;
