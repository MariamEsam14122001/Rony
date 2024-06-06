import React, { useState } from "react";

import PropTypes from "prop-types";

import styles from "./owneraccount.module.css";
import Photos from "../../componets/photo/Photo";
import img from "../pictures/prof.png";

import axios from "axios";

const Ownform = (props) => {
  const fileInputRef = useState(null);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const [formData, setFormData] = useState({
    nameinput: "",
    emailinput: "",
    passwordinput: "",
    imageinput: "",
    setting: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/register", {
        ...formData,
      });
      console.log("changing data successfull:", response.data);
    } catch (error) {
      console.error("changing data failed:", error);
      return <h1>changing data failed: {error}</h1>;
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
            type="text"
            className={styles["passwordinput"]}
          />

          <button
            name="setting"
            id="setting"
            type="submit"
            value={formData.setting}
            className={styles["button"]}
          >
            <span className={styles["change"]}>save changes</span>
          </button>
        </div>
        <div className={styles["upload-container"]}>
          <div className={styles["browse-button"]} onClick={handleBrowseClick}>
            change
          </div>
          <input
            ref={fileInputRef}
            value={formData.imageinput}
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
