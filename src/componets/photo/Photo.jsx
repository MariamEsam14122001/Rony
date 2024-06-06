import React from "react";

import styles from "./photo.module.css";
const Photos = (props) => {
  return (
    <div className={styles["photoo"]}>
      <img alt={props.iMAGEAlt} src={props.iMAGESrc} />
    </div>
  );
};

export default Photos;
