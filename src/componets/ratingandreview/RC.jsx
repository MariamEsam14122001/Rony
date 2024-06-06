import React, { useState } from "react";
import styles from "./rc.module.css"; // Import CSS file for styling
import img8 from "../pictures/user1.png";

function StarRating() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
    setRating(false);
    // Here you can submit the rating and comment to your backend or perform any other action
    console.log("Rating:", rating);
    console.log("Comment:", comment);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className={styles.starrating}>
            {[1, 2, 3, 4, 5].map((value) => (
              <span
                key={value}
                style={{
                  color: value <= rating ? "rgb(9, 192, 248)" : "gray",
                  left: "25px",
                  position: "relative",
                }}
                onClick={() => handleStarClick(value)}
              >
                &#9733;
              </span>
            ))}
          </div>
          <div>
            <label className={styles.Ratin}>Rating:</label>

            <span className={styles.Ratinn}>{rating}</span>
          </div>

          <div>
            <label className={styles.Review}>Review:</label>
            <textarea
              className={styles.text}
              placeholder="Enter your Review..."
              rows="3"
              cols="50"
              value={comment}
              onChange={handleCommentChange}
            />
          </div>

          <button className={styles.submit} type="submit">
            Submit
          </button>
        </form>
      </div>

      <div>
        <ul className={styles.img}>
          {comments.map((index) => (
            <img
              key={index}
              src={img8}
              alt="Account"
              className={styles.photo}
            />
          ))}
        </ul>

        <ul className={styles.comment}>
          {comments.map((comment, index) => (
            <li key={index} className={styles.commentt}>
              <p className={styles.p}>{comment}</p>
              <span className={styles.span}>
                03 Jan 2022 rented it for 3 mon
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StarRating;
