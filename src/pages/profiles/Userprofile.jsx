import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./userprofile.module.css";
import Photos from "../../componets/photo/Photo.jsx";
import img from "../pictures/prof.png";
import LogoutButton from "../../componets/logoutbutton/LogoutButton.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector

const Userform = () => {
  const [photoUrl, setPhotoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const userData = useSelector((state) => state.auth.userProfile); // Get user data from Redux

  useEffect(() => {
    const fetchPhotoUrl = async () => {
      if (userData && userData.photo) {
        try {
          const response = await axios.get(
            `http://localhost:8000/api/user/profile/${userData.photo}`
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
  }, [userData]);

  return (
    <div>
      <div className={styles["button1"]}>
        <LogoutButton />
      </div>

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
        <div className={styles["form"]}>
          <span className={styles["userprofile"]}>User Profile</span>

          <div className={styles["full-name"]}>
            <span className={styles["name"]}>Name:</span>
          </div>
          <p className={styles["nameinput"]}>{userData.name}</p>

          <div className={styles["email-address"]}>
            <span className={styles["email"]}>Email Address:</span>
          </div>
          <p className={styles["emailinput"]}>{userData.email}</p>

          <div className={styles["password"]}>
            <span className={styles["password1"]}>Password:</span>
          </div>
          <p className={styles["passwordinput"]}>{userData.password}</p>

          <div>
            <span className={styles["status"]}>Status:</span>
          </div>
          <p className={styles["statusinput"]}>{userData.status}</p>

          <span className={styles["gender"]}>Gender:</span>
          <p className={styles["genderinput"]}>{userData.gender}</p>

          <span className={styles["age"]}>
            <span>Age:</span>
          </span>
          <p className={styles["ageinput"]}>{userData.age}</p>

          <span className={styles["city"]}>
            <span>City:</span>
          </span>
          <p className={styles["cityinput"]}>{userData.city}</p>

          <div>
            <span className={styles["phone"]}>Phone:</span>
          </div>
          <p className={styles["phoneinput"]}>{userData.phone}</p>
          <Link to="/Useraccount">
            <button name="setting" id="setting" className={styles["button"]}>
              <span className={styles["accountsetting"]}>Account Setting</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Userform.propTypes = {
  iMAGESrc: PropTypes.string,
  iMAGEAlt: PropTypes.string,
};

export default Userform;
