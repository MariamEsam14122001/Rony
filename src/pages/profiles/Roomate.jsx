import React from "react";

import PropTypes from "prop-types";

import styles from "./roomatte.module.css";
import Photos from "../../componets/photo/Photo";
import img from "../pictures/prof.png";
//import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
//import { useParams } from "react-router-dom";
//import axios from "axios";

const Roommatte = (props) => {
  return (
    <>
      <div className={styles["photoo"]}>
        <img alt="" src={img} />
      </div>
      <div>
        <div className={styles["form"]}>
          <span className={styles["userprofile"]}>Roommatte</span>
          <div className={styles["full-name"]}>
            <span className={styles["name"]}>Name</span>
          </div>
          <p
            name="nameinput"
            id="nameinput"
            type="text"
            className={styles["nameinput"]}
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
            <span className={styles["accountsetting"]}>Report</span>
          </button>
        </div>
      </div>
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

export default Roommatte;
