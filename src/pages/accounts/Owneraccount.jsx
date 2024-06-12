import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./owneraccount.module.css";
import Photos from "../../componets/photo/Photo";
import img from "../pictures/prof.png";
import axios from "axios";

const Ownform = () => {
  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const [formData, setFormData] = useState({
    nameinput: "",
    emailinput: "",
    passwordinput: "",
    imageinput: null,
    setting: "",
  });

  const [userId, setUserId] = useState(null);
  const [csrfToken, setCsrfToken] = useState("");  // State to store CSRF token

  useEffect(() => {
    const userProfile = sessionStorage.getItem("userProfile");
    if (userProfile) {
      const parsedProfile = JSON.parse(userProfile);
      setUserId(parsedProfile.id);
    } else {
      console.error("User profile not found in sessionStorage");
    }

    // Fetch CSRF token when component mounts
     // Fetch CSRF token when component mounts
     fetchCsrfToken();

     // Log CSRF token
     console.log("CSRF Token:", csrfToken);
   }, []);


    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get("http://localhost:8000/csrf-token");
        setCsrfToken(response.data.token);
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    };
  

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imageinput" && files.length > 0) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      console.error("User ID is null. Cannot submit form.");
      return;
    }

    console.log("Submitting form with id:", userId);
    
    console.log("Submitting form with token:", csrfToken);

    const formDataToSend = new FormData();
    formDataToSend.append("nameinput", formData.nameinput);
    formDataToSend.append("emailinput", formData.emailinput);
    formDataToSend.append("passwordinput", formData.passwordinput);
    if (formData.imageinput) {
      formDataToSend.append("imageinput", formData.imageinput);
    }
    formDataToSend.append("setting", formData.setting);
    const token = sessionStorage.getItem("authToken");

console.log("Authentication Token:", token);
    // const csrfToken = sessionStorage.getItem("csrfToken");
    try {
      const response = await axios.put(
        `http://localhost:8000/owner/profile/${userId}/update`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
            // Include CSRF token if necessary
            'X-CSRF-TOKEN': csrfToken,
          },
        }
      );
      console.log("Changing data successful:", response.data);
    } catch (error) {
      console.error("Changing data failed:", error);
    }
  };

  return (
    <>
      <Photos />

      <form onSubmit={handleSubmit}>
        <div className={styles["form"]}>
          <span className={styles["userprofile"]}>Account setting</span>
          <div className={styles["full-name"]}>
            <span className={styles["name"]}>Name</span>
          </div>
          <input
            onChange={handleChange}
            name="nameinput"
            value={formData.nameinput}
            id="nameinput"
            type="text"
            className={styles["nameinput"]}
          />

          <div className={styles["email-address"]}>
            <span className={styles["email"]}>Email Address</span>
          </div>

          <input
            onChange={handleChange}
            name="emailinput"
            value={formData.emailinput}
            id="emailinput"
            type="text"
            className={styles["emailinput"]}
          />

          <div className={styles["password"]}>
            <span className={styles["password1"]}>Password</span>
          </div>

          <input
            onChange={handleChange}
            name="passwordinput"
            value={formData.passwordinput}
            id="passwordinput"
            type="password"
            className={styles["passwordinput"]}
          />
          <button id="setting" type="submit" className={styles["button"]}>
            <span className={styles["change"]}>Save Changes</span>
          </button>
        </div>
        <div className={styles["upload-container"]}>
          <div className={styles["browse-button"]} onClick={handleBrowseClick}>
            Change
          </div>
          <input
            ref={fileInputRef}
            name="imageinput"
            type="file"
            style={{ display: "none" }}
            onChange={handleChange}
          />
        </div>
      </form>
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

export default Ownform;