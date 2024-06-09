import img from "../pictures/logo.svg";
import React, { useState } from "react";
import styles from "./sidebarcomponents.module.css";
import { Link } from "react-router-dom";
const Side = () => {
  const [isUserAccountExpanded, setIsUserAccountExpanded] = useState(false);

  const toggleUserAccount = () => {
    setIsUserAccountExpanded(!isUserAccountExpanded);
  };

  return (
    <div>
      <div className={styles.navigationbar}>
        <img
          style={{
            position: "absolute",
            top: "-30px",
            height: "110px",
            width: "10%",
          }}
          src={img}
          alt="mego"
        ></img>
      </div>
      <div className={styles.sidebar}>
        <ul>
          <ul>
            <button className={styles.button} onClick={toggleUserAccount}>
              {" "}
              Users Accounts
            </button>
            {isUserAccountExpanded && (
              <div>
                <li>
                  {" "}
                  <Link to="/provider">
                    {" "}
                    <button className={styles.buttonchild}>
                      providers accounts
                    </button>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/user">
                    {" "}
                    <button className={styles.buttonchild}>
                      users Accounts
                    </button>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/deactivated">
                    <button className={styles.buttonchild}>
                      Deactivated Accounts
                    </button>
                  </Link>
                </li>
              </div>
            )}
          </ul>

          <Link to="/accomodations">
            <ul className={styles.button1}>Accommodations</ul>
          </Link>

          <Link to="/servicelist">
            {" "}
            <ul className={styles.button2}>Service List</ul>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Side;
