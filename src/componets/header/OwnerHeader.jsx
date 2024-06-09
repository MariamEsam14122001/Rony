import React from "react";
import { Link } from "react-router-dom";
import logo from "../pictures/logo.svg";
import people from "../pictures/people.png";

import styles from "./ownerheader.module.css";

const OwnerHeader = (props) => {
  return (
    <header>
      <img src={logo} className={styles["logo"]} />
      <ul className={styles["menu"]}>
        <li>
          <Link>My Accommodations</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/Getstarted">Get started </Link>
        </li>
      </ul>
      <div className={styles["profile-icons"]}>
        <Link to="/ownerform">
          <img src={people} className={styles["people"]} />
        </Link>
      </div>
    </header>
  );
};

export default OwnerHeader;
