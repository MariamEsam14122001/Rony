import React, { useState, useEffect } from "react";

import styles from "./roomatte.module.css";

import axios from "axios";

const Roommatte = () => {
  const [roommateData, setRoommateData] = useState({
    name: "",
    gender: "",
    age: "",
    city: "",
    phone: "",
    photoUrl: "", // Add photoUrl state to store the URL of the user's photo
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
        {/* Display user's photo */}
        {roommateData.photoUrl && (
          <img
            src={roommateData.photoUrl}
            alt="photo"
            className={styles["photo"]}
          />
        )}
      </div>
      <div>
        <div className={styles["form"]}>
          <span className={styles["userprofile"]}>Roommate</span>

          <div className={styles["full-name"]}>
            <span className={styles["name"]}>Name:</span>
          </div>
          <p className={styles["nameinput"]}>{roommateData.name}</p>

          <span className={styles["gender"]}>Gender:</span>
          <p className={styles["genderinput"]}>{roommateData.gender}</p>

          <span className={styles["age"]}>Age:</span>
          <p className={styles["ageinput"]}>{roommateData.age}</p>

          <span className={styles["city"]}>City:</span>
          <p className={styles["cityinput"]}>{roommateData.city}</p>

          <div>
            <span className={styles["phone"]}>Phone:</span>
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

export default Roommatte;
