import React from "react";
import styles from "./item.module.css";
import loc from "../pictures/location.png";
// import red from "../pictures/red-heart-icon.svg";
// import empty from "../pictures/empty_heart.svg";
//import { useWishlist } from "../../Context/WishlistContext";
import HeartButton from "../heart/Heart";

function Item({
  id,
  title,
  price,
  location,
  image,
  description,
  shared_or_individual,
}) {
  return (
    <>
      <div className={styles["card"]}>
        <div className="col card ">
          <div className={styles["item"]}>
            <div className={styles["wishlist"]}>
              <HeartButton id={id} />
            </div>

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
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
