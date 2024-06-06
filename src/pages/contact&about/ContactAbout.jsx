import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./contactabout.module.css";
import img from "../pictures/logo3.svg";
import img1 from "../pictures/about.png";
import img2 from "../pictures/email.svg";
import img3 from "../pictures/fax.svg";
import img4 from "../pictures/location.svg";
import img5 from "../pictures/mobile.svg";
import img6 from "../pictures/icon.png";

import img7 from "../pictures/iicon.png";
import img8 from "../pictures/wavy.png";

const Contact = (props) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const iconStyle = {
    marginRight: "80px",
    color: "#1877F2",
    cursor: "pointer",
    position: "absolute",
    top: "1400px",
    left: "1150px",
  };
  const iiconStyle = {
    marginRight: "80px",
    color: "#1DA1F2",
    cursor: "pointer",
    position: "absolute",
    top: "1400px",
    left: "1200px",
  };
  const iiiconStyle = {
    marginRight: "80px",
    color: "#833AB4",
    cursor: "pointer",
    position: "absolute",
    top: "1400px",
    left: "1250px",
  };
  const iiiiconStyle = {
    marginRight: "80px",
    color: "#25D366",
    cursor: "pointer",
    position: "absolute",
    top: "1400px",
    left: "1300px",
  };

  return (
    <div className={styles["contact-page"]}>
      <img src={img} alt="" className={styles["logo"]} />
      <img src={img1} alt="" className={styles["about"]} />
      <div className={styles["eemail"]}>
        <img src={img2} alt="" className={styles["email"]} />
      </div>
      <img src={img3} alt="" className={styles["fax"]} />
      <img src={img4} alt="" className={styles["location"]} />
      <img src={img5} alt="" className={styles["mobile"]} />
      <img src={img6} alt="" className={styles["icon"]} />
      <img src={img7} alt="" className={styles["iicon"]} />
      <img src={img8} alt="" className={styles["wavy"]} />

      <button className={styles["log"]}>Login</button>
      <button className={styles["sign"]}>Sign Up</button>
      <div className={styles["containerabout"]} />
      <div className={styles["containercotact"]} />

      <span className={styles["why"]}>Why it’s works</span>

      <span className={styles["trust"]}>Trusted Deals</span>
      <br></br>
      <span className={styles["sec"]}>
        Secure Online Bookings and Payment
        <br></br>
        Many payment options available on the website, security measures in
        place to protect students&apos; personal and financial information
      </span>

      <span className={styles["tools"]}>Tools to empower our service</span>
      <br></br>
      <span className={styles["with"]}>
        with second home you can see your department using VR feature and choose
        your roommate using the recommendation special feature.
      </span>

      <div className={styles["seemore"]}>
        <p>Students housing website </p>
        {showMore && (
          <div>
            <p>
              Many students from other countries and cities face challenges when
              searching for suitable accommodation.
            </p>
          </div>
        )}
        <button
          onClick={toggleShowMore}
          style={{
            backgroundColor: "rgb(172, 233, 252)",
            color: "black",
            borderRadius: "20px",
            left: "200px",
            top: "0px",
            position: "relative",
            cursor: "pointer",
          }}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>

      <span className={styles["abouttext"]}>About Us</span>

      <span className={styles["deco"]}>
        Developing Confident and
        <br></br>
        comfortable Occupants
      </span>

      <span className={styles["developing"]}>
        This website is for helping Expat students to find a reservation for
        university housing or private accommodation and make this process
        easier, search filters, secure online bookings, verified property
        listings, and student community forums, User-Friendly Interface, the
        ease of navigation and intuitive design for users of all technical
        levels.
      </span>
      <div className={styles["thank"]}>thank you for your confidence</div>
      <span className={styles["followus"]}>Follow Us</span>
      <span className={styles["contactus"]}>Contact Us</span>

      <span className={styles["gmail"]}>secondhome23@gmail.com</span>
      <span className={styles["gover"]}>smouha St, Alexandria, Egypt</span>
      <span className={styles["num"]}>83300</span>

      <span className={styles["phone"]}>01272682720</span>

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

export default Contact;
