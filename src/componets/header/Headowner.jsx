import React from "react";
import styles from "./headowner.module.css";
import image from "../pictures/image.png";

const HeadOwner = () => {
  return (
    <div className={styles["head"]}>
      <img src={image} className={styles["image"]} />
    </div>
  );
};

export default HeadOwner;
