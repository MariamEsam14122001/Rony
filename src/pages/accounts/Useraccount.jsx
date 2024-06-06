import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./useraccount.module.css";
import Photos from "../../componets/photo/Photo"; // Ensure the correct path
import img from "../pictures/prof.png";
import axios from "axios";

const Userform = () => {
  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const cities = [
    "Alexandria",
    "Aswan",
    "Asyut",
    "Beheira",
    "Beni Suef",
    "Cairo",
    "Dakahlia",
    "Damietta",
    "Faiyum",
    "Gharbia",
    "Giza",
    "Ismailia",
    "Kafr El Sheikh",
    "Luxor",
    "Matruh",
    "Minya",
    "Monufia",
    "New Valley",
    "North Sinai",
    "Port Said",
    "Qalyubia",
    "Qena",
    "Red Sea",
    "Sharqia",
    "Sohag",
    "South Sinai",
    "Suez",
  ];

  const [selectedCity, setSelectedCity] = useState("");
  const handleSelect = (city) => {
    setSelectedCity(city);
  };
  const [formData, setFormData] = useState({
    nameinput: "",
    emailinput: "",
    passwordinput: "",
    statusinput: "",
    genderinput: "",
    ageinput: "",
    imageinput: null, // null initially for file
    phoneinput: "",
    selectedCity: "",
    setting: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value, // Handle file input
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post(
        "http://localhost:8000/api/register",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <>
      <Photos />

      <form onSubmit={handleSubmit}>
        <div className={styles["form"]}>
          <span className={styles["userprofile"]}>Account Setting</span>
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

          <div>
            <span className={styles["status"]}>Status</span>
          </div>
          <input
            onChange={handleChange}
            name="statusinput"
            value={formData.statusinput}
            id="statusinput"
            type="text"
            className={styles["statusinput"]}
          />

          <span className={styles["gender"]}>Gender</span>
          <input
            onChange={handleChange}
            name="genderinput"
            value={formData.genderinput}
            id="genderinput"
            type="text"
            className={styles["genderinput"]}
          />

          <span className={styles["age"]}>
            <span>Age</span>
          </span>
          <input
            onChange={handleChange}
            name="ageinput"
            value={formData.ageinput}
            id="ageinput"
            type="text"
            className={styles["ageinput"]}
          />

          <div>
            <span className={styles["phone"]}>Phone</span>
          </div>
          <input
            onChange={handleChange}
            name="phoneinput"
            value={formData.phoneinput}
            id="phoneinput"
            type="text"
            className={styles["phoneinput"]}
          />

          <button
            name="setting"
            value={formData.setting}
            id="setting"
            type="submit"
            className={styles["button"]}
          >
            <span className={styles["accountsetting"]}>Save Changes</span>
          </button>
        </div>

        <span className={styles["citytext"]}>
          <span>City</span>
        </span>
        <div>
          <input
            placeholder="select city"
            className={styles["city"]}
            type="text"
            list="cities"
            name="cities"
            value={selectedCity}
            onChange={handleChange}
          />
          <datalist id="cities">
            {cities.map((city) => (
              <option
                key={city}
                value={city}
                onClick={() => handleSelect(city)}
              />
            ))}
          </datalist>
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

export default Userform;
