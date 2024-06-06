import img from "../pictures/logo.svg";
import React, { useState } from "react";
import styles from "./sidebarcomponents.module.css";
//import { Link } from "react-router-dom";
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
                  <button className={styles.buttonchild}>
                    providers accounts
                  </button>
                </li>
                <li>
                  {" "}
                  <button className={styles.buttonchild}>users Accounts</button>
                </li>
                <li>
                  {" "}
                  <button className={styles.buttonchild}>
                    Deactivated Accounts
                  </button>
                </li>
              </div>
            )}
          </ul>

          <ul className={styles.button1}>Accommodations</ul>

          <ul className={styles.button2}>admin</ul>

          <ul className={styles.button3}>Settings</ul>
          <ul className={styles.button4}>Analytics</ul>

          <ul className={styles.button5}>Support</ul>
        </ul>
      </div>
    </div>
  );
};
export default Side;
