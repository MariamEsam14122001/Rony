import React, { useState } from "react";

import PropTypes from "prop-types";

import styles from "./useraccount.module.css";
import Photos from "../../componets/photo/Photo";
import img from "../pictures/prof.png";

import axios from "axios";

const Userform = () => {
  const fileInputRef = useState(null);

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
    imageinput: "",
    phoneinput: "",
    selectedCity: "",
    setting: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setSelectedCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/register", {
        ...formData,
      });
      console.log("upload image successful:", response.data);
    } catch (error) {
      console.error("upload image failed:", error);
      return <h1>upload image failed: {error}</h1>;
    }
  };

  return (
    <>
      <Photos />

      <form onSubmit={handleSubmit}>
        <div className={styles["form"]}>
          <span className={styles["userprofile"]}>account setting</span>
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
            <span className={styles["phone"]}>phone</span>
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
            <span className={styles["accountsetting"]}>save changes</span>
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
            value={selectedCity}
            onChange={handleChange}
          ></input>

          <datalist id="cities">
            {cities.map((city) => (
              <option
                key={city}
                value={city}
                onClick={() => handleSelect(city)}
              ></option>
            ))}
          </datalist>
        </div>
        <div className={styles["upload-container"]}>
          <div className={styles["browse-button"]} onClick={handleBrowseClick}>
            change
          </div>
          <input
            ref={fileInputRef}
            type="file"
            value={formData.imageinput}
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
