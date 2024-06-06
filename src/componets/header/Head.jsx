import React from "react";
import styles from "./head.module.css";
import image from "../pictures/image.png";
//import SearchForm from "../searchbar/SearchBar";

const Head = (props) => {
  return (
    <div className={styles["head"]}>
      <img src={image} className={styles["image"]} />

      <span className={styles["text16"]}>
        <span>
          <span>Second Home</span>
          <br></br>
          <span> Find your SecondHome in second</span>
        </span>
      </span>
    </div>
  );
};

export default Head;
