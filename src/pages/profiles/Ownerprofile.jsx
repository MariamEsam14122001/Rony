import React, { useState, useEffect } from "react";
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

  const ownerData = useSelector((state) => state.auth.userProfile);
  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchPhotoUrl = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/owner/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPhotoUrl(response.data.photoUrl);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching photo URL:", error);
        if (error.response && error.response.status === 401) {
          setError("Unauthorized: Please log in to access this resource.");
        } else {
          setError(error.message || "An unexpected error occurred");
        }
        setIsLoading(false);
      }
    };

    fetchPhotoUrl();
  }, [token]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: "50px",
        }}
      >
        {isLoading ? <p>Loading...</p> : error ? <p>Error: {error}</p> : null}

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

          <div className={styles["Phone"]}>
            <span className={styles["Phone1"]}>Phone :</span>
          </div>
          <p className={styles["Phoneinput"]}>{ownerData?.phone}</p>

          <Link to="/Owneraccount">
            <button
              name="setting"
              id="setting"
              type="button"
              className={styles["button"]}
            >
              <span className={styles["accountsetting"]}>Edit Profile</span>
            </button>
          </Link>
          <Photos photoUrl={photoUrl} altText="Owner Photo" />
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
        </div>
      </div>
    </div>
  );
};

export default Ownerform;
