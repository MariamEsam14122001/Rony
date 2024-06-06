import React from "react";
import axios from "axios";
import styles from "./logout.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";

const handleLogout = async (dispatch) => {
  try {
    await axios.post(
      "http://localhost:8000/api/logout",
      {},
      {
        headers: {
          Authorization: sessionStorage.getItem("authToken"),
        },
      }
    );
    // Clear tokens from sessionStorage
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("userRole");

    dispatch(logout()); // Dispatch the logout action to Redux

    // Redirect to the home page
    window.location.href = "/";
  } catch (error) {
    console.error("There was an error logging out!", error);
  }
};

const LogoutButton = () => {
  const dispatch = useDispatch(); // Initialize the dispatch function

  return (
    <>
      <button
        className={styles["button"]}
        onClick={() => handleLogout(dispatch)}
      >
        <span className={styles["logout"]}>Logout</span>
      </button>
    </>
  );
};

export default LogoutButton;
