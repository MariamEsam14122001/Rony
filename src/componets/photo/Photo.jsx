import React from "react";
import styles from "./photo.module.css";

const Photos = (props) => {
  // Destructure the props to get the photo URL
  const { photoUrl, altText } = props;

  return (
    <div className={styles["photoo"]}>
      {/* Use the photoUrl received from the backend */}
      <img alt={altText} src={photoUrl} />
    </div>
  );
};

export default Photos;
