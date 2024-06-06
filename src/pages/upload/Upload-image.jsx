import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./upload.module.css";
import home from "../pictures/up.png";
import Welcome from "../../componets/welcome/Welcome";
import axios from "axios";

const Uploadform = () => {
  const cities = [
    "Alexandria",
    "Aswan",
    "Asyut",
    "Beheira",
    "Beni Suef",
    "Cairo",
    "Dakahlia",
    "Damietta",
    "Faiyum",
    "Gharbia",
    "Giza",
    "Ismailia",
    "Kafr El Sheikh",
    "Luxor",
    "Matruh",
    "Minya",
    "Monufia",
    "New Valley",
    "North Sinai",
    "Port Said",
    "Qalyubia",
    "Qena",
    "Red Sea",
    "Sharqia",
    "Sohag",
    "South Sinai",
    "Suez",
  ];
  const [selectedCity, setSelectedCity] = useState("");
  const handleSelect = (city) => {
    setSelectedCity(city);
  };

  const [formData, setFormData] = useState({
    description: "",
    address: "",
    location_link: "",
    region: "",
    price: "",
    facilities: "",
    shared: "",
    individual: "",
    image: "",
    selectedCity: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("description", formData.description);
    data.append("address", formData.address);
    data.append("location_link", formData.location_link);
    data.append("region", formData.region);
    data.append("price", formData.price);
    data.append("facilities", formData.facilities);
    data.append("shared_or_individual", formData.shared_or_individual);
    data.append("city", selectedCity);
    if (selectedFile) {
      data.append("image", selectedFile);
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/upload",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <>
      <Welcome image={home} />

      <form onSubmit={handleSubmit} className={styles["uploadform"]}>
        <span className={styles["upload-your-image-text"]}>
          Upload Your Image
        </span>

        <span className={styles["specstext"]}>Apartment Description</span>
        <input
          onChange={handleChange}
          name="description"
          value={formData.description}
          id="description"
          type="text"
          className={styles["appartmentspecsinput"]}
        />

        <span className={styles["addresstext"]}> Address</span>
        <input
          onChange={handleChange}
          name="address"
          value={formData.address}
          id="address"
          type="text"
          className={styles["appartmentaddressinput"]}
        />

        <span className={styles["locationtext"]}>Location Link</span>
        <input
          onChange={handleChange}
          name="location_link"
          value={formData.location_link}
          id="location_link"
          type="text"
          className={styles["locationinput"]}
        />

        <span className={styles["regiontext"]}>Region </span>
        <input
          onChange={handleChange}
          name="region"
          value={formData.region}
          id="region"
          type="text"
          className={styles["regioninput"]}
        />

        <span className={styles["rentaltext"]}>Rental Price</span>
        <input
          onChange={handleChange}
          name="price"
          value={formData.price}
          id="price"
          type="text"
          className={styles["rentalpriceinput"]}
        />

        <span className={styles["phonetext"]}>Facilities</span>
        <input
          onChange={handleChange}
          name="facilities"
          value={formData.facilities}
          id="facilities"
          type="text"
          className={styles["phonenumberinput"]}
        />

        <span className={styles["ortext"]}>
          Shared Or Individual Apartment?
        </span>

        <input
          onChange={handleChange}
          value={formData.shared}
          id="shared"
          type="radio"
          name="shared_or_individual"
          className={styles["sharedradio"]}
        />
        <span className={styles["sharedtext"]}>Shared</span>
        <input
          onChange={handleChange}
          value={formData.individual}
          id="individual"
          type="radio"
          name="shared_or_individual"
          className={styles["invidualradio"]}
        />
        <span className={styles["invidualtext"]}>Individual</span>

        <span className={styles["governoratetext"]}> Governorate</span>
        <div>
          <input
            placeholder="select city"
            className={styles["city"]}
            type="text"
            list="cities"
            name="cities"
            value={selectedCity}
            onChange={handleChange}
          />
          <datalist id="cities">
            {cities.map((city) => (
              <option
                key={city}
                value={city}
                onClick={() => handleSelect(city)}
              />
            ))}
          </datalist>
        </div>

        <div className={styles["browse"]}>
          <div className={styles["browseimage"]}>
            <div>
              <input
                className={styles["text"]}
                type="file"
                onChange={handleFileChange}
                value={formData.image}
              />
              {selectedFile && <p>Selected file: {selectedFile.name}</p>}
            </div>
            <span className={styles["text04"]}>
              Supports: PNG, JPG, JPEG, WEBP
            </span>
          </div>
        </div>

        <button type="submit" className={styles["donebutton"]}>
          <span className={styles["text12"]}>Done</span>
        </button>
      </form>
    </>
  );
};

Welcome.defaultProps = {
  iMAGESrc: home,
  iMAGEAlt: "IMAGE",
};

Welcome.propTypes = {
  iMAGESrc: PropTypes.string,
  iMAGEAlt: PropTypes.string,
};

export default Uploadform;
