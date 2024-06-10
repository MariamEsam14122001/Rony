import React from "react";
import PropTypes from "prop-types";
import styles from "./photo.module.css";
import img from "../pictures/prof.png";

const Photos = ({ photoUrl = img, altText = "IMAGE" }) => {
  return (
    <div className={styles["photoo"]}>
      <img alt={altText} src={photoUrl} />
    </div>
  );
};

Photos.propTypes = {
  photoUrl: PropTypes.string,
  altText: PropTypes.string,
};

export default Photos;
