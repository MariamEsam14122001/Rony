import React from "react";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  const iconStyle = {
    marginRight: "80px",
    color: "#1877F2",
    cursor: "pointer",
    position: "absolute",
    top: "20px",
    left: "500px",
  };
  const iiconStyle = {
    marginRight: "80px",
    color: "#1DA1F2",
    cursor: "pointer",
    position: "absolute",
    top: "20px",
    left: "550",
  };
  const iiiconStyle = {
    marginRight: "80px",
    color: "#833AB4",
    cursor: "pointer",
    position: "absolute",
    top: "20px",
    left: "600px",
  };
  const iiiiconStyle = {
    marginRight: "80px",
    color: "#25D366",
    cursor: "pointer",
    position: "absolute",
    top: "20px",
    left: "650px",
  };
  return (
    <div className={styles["footer"]}>
      <span className={styles["text"]}>
        <span>FOLLOW US </span>
      </span>
      <div>
        <a
          href="https://www.facebook.com/yourpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebookSquare}
            size="2x"
            style={iconStyle}
          />
        </a>
        <a
          href="https://twitter.com/youraccount"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" style={iiconStyle} />
        </a>
        <a
          href="https://www.instagram.com/youraccount"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" style={iiiconStyle} />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=1272682720"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" style={iiiiconStyle} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
