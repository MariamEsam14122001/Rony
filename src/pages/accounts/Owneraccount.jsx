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
    imageinput: null, // Change to null to handle files
  });

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const id = sessionStorage.getItem("userId");
    setUserId(id);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imageinput" && files.length > 0) {
      setFormData({
        ...formData,
        [name]: files[0], // Set the file object
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

    console.log("Submitting form with id:", userId); // Log the id

    const formDataToSend = new FormData();
    formDataToSend.append("nameinput", formData.nameinput);
    formDataToSend.append("emailinput", formData.emailinput);
    formDataToSend.append("passwordinput", formData.passwordinput);
    if (formData.imageinput) {
      formDataToSend.append("imageinput", formData.imageinput);
    }

    const token = sessionStorage.getItem("authToken");

    try {
      const response = await axios.put(
        `http://localhost:8000/api/owner/profile/${userId}/update`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
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
