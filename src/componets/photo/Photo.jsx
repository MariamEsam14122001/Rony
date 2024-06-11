import React from "react";
import styles from "./photo.module.css";
import img from "../pictures/prof.png";

const Photos = ({ photoUrl = img, altText = "IMAGE" }) => {
  return (
    <div className={styles["photoo"]}>
      <img alt={altText} src={photoUrl} />
    </div>
  );
};

export default Photos;
