import React, { useState } from "react";
import axios from "axios";
import Welcome from "../../componets/welcome/Welcome";
import styles from "./signup.module.css";
import img from "../pictures/logsign.png";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthToken } from "../../redux/authSlice";

const Signup = () => {
  const cities = [
    "Cairo",
    "Giza",
    "Alexandria",
    "Shubra al Khaymah",
    "Halwan",
    "Al Mahallah al Kubra",
    "Tanta",
    "Asyut",
    "Al Fayyum",
    "Az Zaqaziq",
    "Al Ajami",
    "Kafr ad Dawwar",
    "Damanhur",
    "Al Minya",
    "Mallawi",
    "Damietta",
    "Qina",
    "Bani Suwayf",
    "Shibin al Kawm",
    "Banha",
    "Kafr ash Shaykh",
    "Disuq",
    "Mit Ghamr",
    "Munuf",
    "Faqus",
    "Qalyub",
    "Jirja",
    "Akhmim",
    "Al Badrashayn",
    "Al Khankah",
    "Izbat al Burj",
    "Kirdasah",
    "Abnub",
    "Al Minshah",
    "Al Qurayn",
    "Al Balyana",
    "Al Ayyat",
    "Al Badari",
    "Kafr al Kurdi",
    "Abu Qir",
    "Al Karnak",
    "Mit Nama",
    "Bani Murr",
    "Al Madamud",
    "Birqash",
    "Kafr Tahlah",
  ];

  const where_to_go = ["Alexandria", "Cairo", "Aswan"];

  const status = ["shared", "single"];
  const { userType } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    status: "",
    gender: "",
    age: "",
    city: "",
    where_to_go: "",
    phone: "",
    photo: "",
  });

  const [error, setError] = useState(null);

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
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        ...formData,
        user_type: userType,
      });
      sessionStorage.setItem("authToken", response.data.token);
      sessionStorage.setItem("userRole", getRoleFromEmail(formData.email)); // Store user role based on email
      dispatch(setAuthToken(response.data.token)); // Dispatch the token to Redux
      console.log("Signup successful:", response.data);

      navigateToRolePage(getRoleFromEmail(formData.email));
    } catch (error) {
      console.error("Signup failed:", error);
      // Handle signup failure
    }
  };

  const getRoleFromEmail = (email) => {
    return email.endsWith("@example.com") ? "admin" : userType;
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
        {error && <div className={styles.error}>{error}</div>}
        <div className={styles["component1"]}>
          <div className={styles["frameusersignup"]}>
            <span className={styles["text"]}>
              <span>Create Account</span>
            </span>
            <div className={styles["full-name"]}>
              <span>Full Name</span>
            </div>
            <div>
              <input
                type="text"
                id="name"
                required
                className={styles["fullname"]}
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles["email-address"]}>
              <span>Email Address</span>
            </div>
            <input
              type="email"
              id="email"
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
              required
              className={styles["password"]}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <span className={styles["pho"]}>
              <span>Phone number</span>
            </span>
            <input
              type="tel"
              id="phone"
              className={styles["phon"]}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <span className={styles["text14"]}>
              <span>Profile picture</span>
            </span>
            <input
              type="file"
              id="photo"
              className={styles["photo"]}
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              accept="image/*"
            />

            {(userType === "renter" || userType === "user") && (
              <>
                <span className={styles["gend"]}>
                  <span>Gender</span>
                </span>
                <input
                  type="text"
                  id="gender"
                  className={styles["gender"]}
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                />
                <span className={styles["ag"]}>
                  <span>Age</span>
                </span>
                <input
                  type="number"
                  min={15}
                  max={99}
                  id="age"
                  className={styles["age"]}
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
                <span className={styles["citee"]}>
                  <span>City</span>
                </span>
                <select
                  className={styles["city"]}
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                >
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>

                <span className={styles["stat"]}>Status</span>
                <select
                  className={styles["status"]}
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  {status.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
                <span className={styles["where"]}>
                  <span>Where to go</span>
                </span>
                <select
                  className={styles["wheretogo"]}
                  id="where_to_go"
                  name="where_to_go"
                  value={formData.where_to_go}
                  onChange={handleChange}
                >
                  {where_to_go.map((where_to_go) => (
                    <option key={where_to_go} value={where_to_go}>
                      {where_to_go}
                    </option>
                  ))}
                </select>
              </>
            )}
            <button type="submit" className={styles["button"]}>
              <span className={styles["create-account"]}>Create Account</span>
            </button>
            <div>
              <span className={styles["already"]}>
                Already have an account?
              </span>
              <Link to="/Login" className={styles["login"]}>
                Login
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
