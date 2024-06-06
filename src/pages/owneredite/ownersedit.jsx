import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./upload.module.css";
import home from "../pictures/up.png";
import Welcome from "../../componets/welcome/Welcome";

const OwnersEdit = () => {
  //fetch data details
  const { id } = useParams();

  const cities = ["Alexandria", "Aswan", "Cairo"];

  const [propertyData, setPropertyData] = useState({
    images: "",
    description: "",
    address: "",
    location_link: "",
    region: "",
    price: "",
    facilities: "",
    shared_or_individual: "",
    city: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    // Fetch property data from the server when the component mounts
    fetchPropertyData();
  }, []);

  const fetchPropertyData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/properties/${id}`
      );
      setPropertyData(response.data);
    } catch (error) {
      console.error("Error fetching property data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData({
      ...propertyData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("images", selectedFile);
      for (const key in propertyData) {
        formData.append(key, propertyData[key]);
      }

      const response = await axios.put(
        `http://localhost:8000/api/properties/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Property updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating property:", error);
    }
  };

  return (
    <>
      <Welcome image={home} />

      <form onSubmit={handleSubmit} className={styles.uploadform}>
        <span className={styles["upload-your-image-text"]}>
          Edit Property Information
        </span>

        <span className={styles["specstext"]}>Apartment Description</span>
        <input
          onChange={handleChange}
          name="description"
          value={propertyData.description}
          type="text"
          className={styles["appartmentspecsinput"]}
        />

        <span className={styles["addresstext"]}> Address</span>
        <input
          onChange={handleChange}
          name="address"
          value={propertyData.address}
          type="text"
          className={styles["appartmentaddressinput"]}
        />

        <span className={styles["locationtext"]}>Location Link</span>
        <input
          onChange={handleChange}
          name="location_link"
          value={propertyData.location_link}
          type="text"
          className={styles["locationinput"]}
        />

        <span className={styles["regiontext"]}>Region </span>
        <input
          onChange={handleChange}
          name="region"
          value={propertyData.region}
          type="text"
          className={styles["regioninput"]}
        />

        <span className={styles["rentaltext"]}>Rental Price</span>

        <input
          onChange={handleChange}
          name="price"
          value={propertyData.price}
          type="text"
          className={styles["rentalpriceinput"]}
        />

        <span className={styles["phonetext"]}>Facilities</span>
        <input
          onChange={handleChange}
          name="facilities"
          value={propertyData.facilities}
          type="text"
          className={styles["phonenumberinput"]}
        />

        <span className={styles["ortext"]}>
          Shared Or Individual Apartment?
        </span>

        <input
          onChange={handleChange}
          value="Shared"
          type="radio"
          name="shared_or_individual"
          className={styles["sharedradio"]}
        />
        <span className={styles["sharedtext"]}>Shared</span>
        <input
          onChange={handleChange}
          value="Individual"
          type="radio"
          name="shared_or_individual"
          className={styles["invidualradio"]}
        />
        <span className={styles["invidualtext"]}>Individual</span>

        <button type="submit" className={styles["donebutton"]}>
          <span className={styles["text12"]}>Save Changes</span>
        </button>

        <span className={styles["governoratetext"]}>Governorate</span>

        <div>
          <select
            name="city"
            value={propertyData.city}
            onChange={handleChange}
            className={styles["city"]}
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className={styles["browse"]}>
          <div className={styles["browseimage"]}>
            <div>
              <input
                className={styles["text"]}
                type="file"
                onChange={handleFileChange}
              />
              {selectedFile && (
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected Image"
                  className={styles["selected-image"]}
                />
              )}
            </div>
            <span className={styles["text04"]}>
              Supports: PNG, JPG, JPEG, WEBP
            </span>
          </div>
        </div>
      </form>
    </>
  );
};

export default OwnersEdit;
