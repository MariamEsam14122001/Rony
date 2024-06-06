import React from "react";
import styles from "./itemowner.module.css";
import loc from "../pictures/location.png";
import axios from "axios";
import img from "../pictures/delete.svg";

function ItemOwner({
  id,
  title,
  price,
  location,
  description,
  shared_or_individual,
  image,
  onDelete,
}) {
  const handleDelete = async () => {
    try {
      // Make an HTTP DELETE request to the backend API
      const response = await axios.delete(
        `http://your-backend-api/items/${id}`
      );

      // Handle the response as needed (e.g., display a success message)
      console.log("Item deleted successfully:", response.data);

      // Call the onDelete callback function to update the UI or perform any other action
      onDelete(id);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error deleting item:", error);
    }
  };

  return (
    <>
      <div>
        <div className={styles["card"]}>
          <div className="col card ">
            <div className={styles["item"]}>
              <div className={styles["content"]}>
                <div className={styles["frame53"]}>
                  <span className={styles["text"]}>{title}</span>
                  <span className={styles["text2"]}>{price}</span>
                </div>
                <p>{description}</p>
                <div className={styles["frame52"]}>
                  <img src={loc} className={styles["locationonblack24dp2"]} />
                  <span className={styles["text4"]}>{location}</span>
                </div>
                <span className={styles["text"]}>{shared_or_individual}</span>
                <span className={styles["text"]}>0111111111</span>
              </div>
              <img src={image} alt={title} className={styles["image"]} />
              <div onClick={handleDelete} className={styles["delete"]}>
                <img src={img} alt="delete" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemOwner;
