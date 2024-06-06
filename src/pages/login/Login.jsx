// src/pages/login/Login.jsx
import React, { useState } from "react";
import Welcome from "../../componets/welcome/Welcome";
import styles from "./login.module.css";
import img from "../pictures/logsign.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthToken, setUserRole } from "../../redux/authSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        formData
      );
      const token = response.data.token;
      const email = formData.email;

      // Check if the user is an admin based on email
      const isAdmin = email.endsWith("@example.com");
      const userType = isAdmin ? "admin" : response.data.userType;

      // Store in session and Redux
      sessionStorage.setItem("authToken", token);
      sessionStorage.setItem("userRole", userType);
      dispatch(setAuthToken(token));
      dispatch(setUserRole(userType));

      console.log("Login successful:", response.data);
      navigateToRolePage(userType);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const navigateToRolePage = (role) => {
    if (role === "admin") {
      navigate("/Admin");
    } else if (role === "owner") {
      navigate("/owner");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <Welcome image={img} />
      <form onSubmit={handleSubmit} className={styles["container"]}>
        <div className={styles["component1"]}>
          <div className={styles["frameusersignup"]}>
            <span className={styles["text"]}>Login</span>
            <div>
              <span className={styles["details"]}>
                Enter your account details
              </span>
            </div>
            <div className={styles["email-address"]}>
              <span>Email Address</span>
            </div>
            <input
              type="email"
              id="email"
              placeholder="email"
              required
              className={styles["email"]}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <span className={styles["pass"]}>
              <span>Password</span>
            </span>
            <input
              type="password"
              id="password"
              placeholder="password"
              required
              className={styles["password"]}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit" className={styles["button"]}>
              <span className={styles["login"]}>Login</span>
            </button>
            <div>
              <span className={styles["do"]}>Do not have an account?</span>
              <Link to="/signup/user" className={styles["signup"]}>
                Signup
              </Link>
            </div>
            <Link to="/" className={styles["home"]}>
              Go back to Home
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
