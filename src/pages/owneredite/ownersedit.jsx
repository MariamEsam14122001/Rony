import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import styles from "./upload.module.css";
import home from "../pictures/up.png";
import Welcome from "../../componets/welcome/Welcome";

// const OwnersEdit = () => {
//   const { id } = useParams();

//   const cities = ["Alexandria", "Aswan", "Cairo"];

//   const [propertyData, setPropertyData] = useState({
//     images: "",
//     description: "",
//     address: "",
//     location_link: "",
//     region: "",
//     price: "",
//     facilities: "",
//     shared_or_individual: "",
//     city: "",
//   });

//   const [selectedFile, setSelectedFile] = useState(null);

//   useEffect(() => {
//     fetchPropertyData();
//   }, []);

//   const fetchPropertyData = async () => {
//     try {
//       const token = sessionStorage.getItem("authToken"); // Get the token from session storage
//       const response = await axios.get(
//         `http://localhost:8000/api/accommodations/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setPropertyData(response.data);
//     } catch (error) {
//       console.error("Error fetching property data:", error);
//     }
//   };
//   //   try {
//   //     const token = sessionStorage.getItem("authToken");
//   //     const response = await axios.get(
//   //       `http://localhost:8000/api/accommodations/${id}`
//   //     );
//   //     setPropertyData(response.data);
//   //   } catch (error) {
//   //     console.error("Error fetching property data:", error);
//   //   }
//   // };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPropertyData({
//       ...propertyData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (
//       file &&
//       ["image/png", "image/jpg", "image/jpeg", "image/webp"].includes(file.type)
//     ) {
//       setSelectedFile(file);
//     } else {
//       console.error("Unsupported file format");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//   //   try {
//   //     const formData = new FormData();
//   //     if (selectedFile) {
//   //       formData.append("images", selectedFile);
//   //     }
//   //     for (const key in propertyData) {
//   //       formData.append(key, propertyData[key]);
//   //     }

//   //     const response = await axios.put(
//   //       `http://localhost:8000/api/accommodations/${id}`,
//   //       formData,
//   //       {
//   //         headers: {
//   //           "Content-Type": "multipart/form-data",
//   //         },
//   //       }
//   //     );
//   //     console.log("Property updated successfully:", response.data);
//   //   } catch (error) {
//   //     console.error("Error updating property:", error);
//   //   }
//   // };
//   try {
//     const token = sessionStorage.getItem("authToken"); // Get the token from session storage
//     const formData = new FormData();
//     if (selectedFile) {
//       formData.append("images", selectedFile);
//     }
//     for (const key in propertyData) {
//       formData.append(key, propertyData[key]);
//     }

//     const response = await axios.put(
//       `http://localhost:8000/api/accommodations/${id}`,
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`, // Include the token in the headers
//         },
//       }
//     );
//     console.log("Property updated successfully:", response.data);
//   } catch (error) {
//     console.error("Error updating property:", error);
//   }
// };

//   return (
//     <>
//       <Welcome image={home} />

//       <form onSubmit={handleSubmit} className={styles.uploadform}>
//         <span className={styles["upload-your-image-text"]}>
//           Edit Property Information
//         </span>

//         <span className={styles["specstext"]}>Apartment Description</span>
//         <input
//           onChange={handleChange}
//           name="description"
//           value={propertyData.description}
//           type="text"
//           className={styles["appartmentspecsinput"]}
//         />

//         <span className={styles["addresstext"]}> Address</span>
//         <input
//           onChange={handleChange}
//           name="address"
//           value={propertyData.address}
//           type="text"
//           className={styles["appartmentaddressinput"]}
//         />

//         <span className={styles["locationtext"]}>Location Link</span>
//         <input
//           onChange={handleChange}
//           name="location_link"
//           value={propertyData.location_link}
//           type="text"
//           className={styles["locationinput"]}
//         />

//         <span className={styles["regiontext"]}>Region </span>
//         <input
//           onChange={handleChange}
//           name="region"
//           value={propertyData.region}
//           type="text"
//           className={styles["regioninput"]}
//         />

//         <span className={styles["rentaltext"]}>Rental Price</span>
//         <input
//           onChange={handleChange}
//           name="price"
//           value={propertyData.price}
//           type="text"
//           className={styles["rentalpriceinput"]}
//         />

//         <span className={styles["phonetext"]}>Facilities</span>
//         <input
//           onChange={handleChange}
//           name="facilities"
//           value={propertyData.facilities}
//           type="text"
//           className={styles["phonenumberinput"]}
//         />

//         <span className={styles["ortext"]}>
//           Shared Or Individual Apartment?
//         </span>
//         <input
//           onChange={handleChange}
//           value="Shared"
//           type="radio"
//           name="shared_or_individual"
//           className={styles["sharedradio"]}
//           checked={propertyData.shared_or_individual === "Shared"}
//         />
//         <span className={styles["sharedtext"]}>Shared</span>
//         <input
//           onChange={handleChange}
//           value="Individual"
//           type="radio"
//           name="shared_or_individual"
//           className={styles["invidualradio"]}
//           checked={propertyData.shared_or_individual === "Individual"}
//         />
//         <span className={styles["invidualtext"]}>Individual</span>

//         <button type="submit" className={styles["donebutton"]}>
//           <span className={styles["text12"]}>Save Changes</span>
//         </button>

//         <span className={styles["governoratetext"]}>Governorate</span>
//         <div>
//           <select
//             name="city"
//             value={propertyData.city}
//             onChange={handleChange}
//             className={styles["city"]}
//           >
//             <option value="">Select City</option>
//             {cities.map((city) => (
//               <option key={city} value={city}>
//                 {city}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className={styles["browse"]}>
//           <div className={styles["browseimage"]}>
//             <div>
//               <input
//                 className={styles["text"]}
//                 type="file"
//                 onChange={handleFileChange}
//               />
//               {selectedFile && (
//                 <img
//                   src={URL.createObjectURL(selectedFile)}
//                   alt="Selected Image"
//                   className={styles["selected-image"]}
//                 />
//               )}
//             </div>
//             <span className={styles["text04"]}>
//               Supports: PNG, JPG, JPEG, WEBP
//             </span>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };

// export default OwnersEdit;


const OwnersEdit = () => {
  const { id } = useParams();

  const cities = ["Alexandria", "Aswan", "Cairo"];

  const [propertyData, setPropertyData] = useState({
    description: "",
    address: "",
    location_link: "",
    region: "",
    price: "",
    facilities: "",
    shared_or_individual: "",
    city: "",
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    fetchPropertyData();
  }, []);

  const fetchPropertyData = async () => {
    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.get(
        `http://localhost:8000/api/accommodations/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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
    const files = Array.from(e.target.files);
    setSelectedImages(files);
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file && ["image/png", "image/jpg", "image/jpeg", "image/gif"].includes(file.type)) {
      setMainImage(file);
    } else {
      console.error("Unsupported file format");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = sessionStorage.getItem("authToken");
      const formData = new FormData();

      formData.append("description", propertyData.description);
      formData.append("address", propertyData.address);
      formData.append("location_link", propertyData.location_link);
      formData.append("region", propertyData.region);
      formData.append("price", propertyData.price);
      formData.append("facilities", propertyData.facilities);
      formData.append("shared_or_individual", propertyData.shared_or_individual);
      formData.append("city", propertyData.city);

      if (mainImage) {
        formData.append("main_image", mainImage);
      }

      selectedImages.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
      });

      const response = await axios.put(
        `http://localhost:8000/api/accommodations/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
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
          checked={propertyData.shared_or_individual === "Shared"}
        />
        <span className={styles["sharedtext"]}>Shared</span>
        <input
          onChange={handleChange}
          value="Individual"
          type="radio"
          name="shared_or_individual"
          className={styles["invidualradio"]}
          checked={propertyData.shared_or_individual === "Individual"}
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
                multiple
                onChange={handleFileChange}
              />
              {selectedImages.length > 0 &&
                selectedImages.map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`Selected ${index}`}
                    className={styles["selected-image"]}
                  />
                ))}
            </div>
            <span className={styles["text04"]}>
              Supports: PNG, JPG, JPEG, WEBP
            </span>
          </div>
          <div>
            <input
              type="file"
              onChange={handleMainImageChange}
              className={styles["main-image-input"]}
            />
            {mainImage && (
              <img
                src={URL.createObjectURL(mainImage)}
                alt="Main Image"
                className={styles["main-image"]}
              />
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default OwnersEdit;