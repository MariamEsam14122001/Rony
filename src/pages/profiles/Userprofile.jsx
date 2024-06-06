import React, { useState } from "react";

import PropTypes from "prop-types";

import styles from "./userprofile.module.css";
import Photos from "../../componets/photo/Photo.jsx";
import img from "../pictures/prof.png";
import LogoutButton from "../../componets/logoutbutton/LogoutButton.jsx";
//import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
//import { useParams } from "react-router-dom";
//import axios from "axios";

const Userform = (props) => {
  return (
    <div>
      <div className={styles["button1"]}>
        <LogoutButton />
      </div>

      <div>
        <Photos />
        <div className={styles["form"]}>
          <span className={styles["userprofile"]}>User Profile</span>
          <div className={styles["full-name"]}>
            <span className={styles["name"]}>Name</span>
          </div>
          <p
            name="nameinput"
            id="nameinput"
            type="text"
            className={styles["nameinput"]}
          />

          <div className={styles["email-address"]}>
            <span className={styles["email"]}>Email Address</span>
          </div>

          <p
            name="emailinput"
            id="emailinput"
            type="text"
            className={styles["emailinput"]}
          />

          <div className={styles["password"]}>
            <span className={styles["password1"]}>Password</span>
          </div>

          <p
            name="passwordinput"
            id="passwordinput"
            type="text"
            className={styles["passwordinput"]}
          />

          <div>
            <span className={styles["status"]}>Status</span>
          </div>

          <p
            name="statusinput"
            id="statusinput"
            type="text"
            className={styles["statusinput"]}
          />
          <span className={styles["gender"]}>Gender</span>

          <p
            name="genderinput"
            id="genderinput"
            type="text"
            className={styles["genderinput"]}
          />

          <span className={styles["age"]}>
            <span>Age</span>
          </span>

          <p
            name="ageinput"
            id="ageinput"
            type="text"
            className={styles["ageinput"]}
          />

          <span className={styles["city"]}>
            <span>City</span>
          </span>

          <p
            name="cityinput"
            id="cityinput"
            type="text"
            className={styles["cityinput"]}
          />
          <div>
            <span className={styles["phone"]}>phone</span>
          </div>

          <p
            name="phoneinput"
            id="phoneinput"
            type="text"
            className={styles["phoneinput"]}
          />

          <button name="setting" id="setting" className={styles["button"]}>
            <span className={styles["accountsetting"]}>Account Setting</span>
          </button>
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
  iMAGESrc: PropTypes.string,
  iMAGEAlt: PropTypes.string,
};
export default Userform;
