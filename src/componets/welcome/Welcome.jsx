import React from "react";
import styles from "./welcome.module.css";

const Welcome = ({ image }) => {
  return (
    <div className={styles["welcomecomponent"]}>
      <span className={styles["text"]}> Welcome To SecondHome</span>
      <img alt={"image"} src={image} className={styles["image"]} />
    </div>
  );
};

// alt={props.iMAGEAlt}
// src={props.iMAGESrc}

export default Welcome;
