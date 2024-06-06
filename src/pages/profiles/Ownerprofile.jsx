import React from "react";

import PropTypes from "prop-types";

import styles from "./ownerprofile.module.css";
import Photos from "../../componets/photo/Photo.jsx";
import img from "../pictures/prof.png";
import LogoutButton from "../../componets/logoutbutton/LogoutButton.jsx";

//import { useNavigate } from "react-router-dom";
//import { useParams } from "react-router-dom";
//import axios from "axios";
import { Link } from "react-router-dom";

const Ownerform = (props) => {
  return (
    <div>
      <div>
        <Photos />

        <Link to="/upload">
          {" "}
          <button
            name="Uload Properities"
            id="Uload Properities"
            type="submit"
            className={styles["button2"]}
          >
            <span className={styles["acccountsetting"]}>
              Upload Properities
            </span>
          </button>
        </Link>

        <button
          name="Properities"
          id="Properities"
          type="submit"
          className={styles["button3"]}
        >
          <span className={styles["acccountsetting"]}>Properities</span>
        </button>

        <div className={styles["logout"]}>
          <LogoutButton />
        </div>

        <div className={styles["form"]}>
          <span className={styles["userprofile"]}>Owner profile</span>
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

          <button
            name="setting"
            id="setting"
            type="submit"
            className={styles["button"]}
          >
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
  iMAGESrc: PropTypes.any,
  iMAGEAlt: PropTypes.string,
};
export default Ownerform;
