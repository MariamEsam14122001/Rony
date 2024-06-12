// import React, { useState, useRef, useEffect } from "react";
// import PropTypes from "prop-types";
// import styles from "./useraccount.module.css";
// import Photos from "../../componets/photo/Photo"; // Ensure the correct path
// import img from "../pictures/prof.png";
// import axios from "axios";

// const Useform = () => {
//   const fileInputRef = useRef(null);

//   const handleBrowseClick = () => {
//     fileInputRef.current.click();
//   };

//   // const cities = [
//   //   "Alexandria",
//   //   "Aswan",
//   //   "Asyut",
//   //   "Beheira",
//   //   "Beni Suef",
//   //   "Cairo",
//   //   "Dakahlia",
//   //   "Damietta",
//   //   "Faiyum",
//   //   "Gharbia",
//   //   "Giza",
//   //   "Ismailia",
//   //   "Kafr El Sheikh",
//   //   "Luxor",
//   //   "Matruh",
//   //   "Minya",
//   //   "Monufia",
//   //   "New Valley",
//   //   "North Sinai",
//   //   "Port Said",
//   //   "Qalyubia",
//   //   "Qena",
//   //   "Red Sea",
//   //   "Sharqia",
//   //   "Sohag",
//   //   "South Sinai",
//   //   "Suez",
//   // ];

//   // const [selectedCity, setSelectedCity] = useState("");

//   const [formData, setFormData] = useState({
//     name: 'Unknown',
//     email: "",
//     password: "",
//     status: "",
//     gender: "",
//     age: "",
//     photo: null, // null initially for file
//     phone: "",
//   });
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     const userProfile = sessionStorage.getItem("userProfile");
//     if (userProfile) {
//       const parsedProfile = JSON.parse(userProfile);
//       setUserId(parsedProfile.id);
//     } else {
//       console.error("User profile not found in sessionStorage");
//     }

    
//    }, []);

// //    const handleChange = (e) => {
// //   const { name, value, files } = e.target;
// //   setFormData((prevData) => ({
// //     ...prevData,
// //     [name]: name === "selectedCity" ? value : files ? files[0] : value,
// //   }));

// //   if (name === "selectedCity") {
// //     setSelectedCity(value);
// //   }
// // };

// const handleChange = (e) => {
//   const { id, value, files } = e.target;
//   setFormData((prevData) => ({
//    ...prevData,
//     [id]: files? files[0] : value,
//   }));
// };

  

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

   
    
//     // const handleSubmit = async (e) => {
//     //   e.preventDefault();
    
//     //   if (!userId) {
//     //     console.error("User ID is null. Cannot submit form.");
//     //     return;
//     //   }
//     //   if (!formData.name || formData.name.trim() === '') {
//     //     console.error("Name field is empty. Please enter your name.");
//     //     return;
//     //   }
    
//     //   console.log(formData);
//     //   console.log("Submitting form with id:", userId);

//     // const data = new FormData();
//     // Object.keys(formData).forEach((key) => {
//     //   data.append(key, formData[key]);
//     // });
//     // };

//     const handleSubmit = async (e) => {
//       e.preventDefault();
    
//       if (!userId) {
//         console.error("User ID is null. Cannot submit form.");
//         return;
//       }
//       if (!formData.name || formData.name.trim() === '') {
//         console.error("Name field is empty. Please enter your name.");
//         return;
//       }
    
//       console.log(formData);
//       console.log("Submitting form with id:", userId);
    
//       const data = new FormData();
//       Object.keys(formData).forEach((key) => {
//         data.append(key, formData[key]);
//       });

//       const token = sessionStorage.getItem("authToken");
//       try {
//         console.log(formData);
//         const response = await axios.put(
//           `http://localhost:8000/api/user/profile/${userId}/update`,
//           data,
//           {
//             headers: {
//               "Content-Type": "multipart/form-data",
//               Authorization: `Bearer ${token}`,
//             }
//           }
//         );
//         console.log(" successful:", response.data);
//       } catch (error) {
//         console.error(" failed:", error);
//       }
//     };
  
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   const formDataToSend = new FormData();
//   //   formDataToSend.append("nameinput", formData.nameinput);
//   //   formDataToSend.append("emailinput", formData.emailinput);
//   //   formDataToSend.append("passwordinput", formData.passwordinput);
//   //   formDataToSend.append("statusinput", formData.statusinput);
//   //   formDataToSend.append("genderinput", formData.genderinput);
//   //   formDataToSend.append("ageinput", formData.ageinput);
//   //   formDataToSend.append("phoneinput", formData.phoneinput);
//   //   formDataToSend.append("city", formData.city);

//   //   // Check if image is present before appending
//   //   if (formData.imageinput) {
//   //     formDataToSend.append("imageinput", formData.imageinput);
//   //   }

//   //   try {
//   //     const response = await axios.post(
//   //       "http://localhost:8000/api/updateUser",
//   //       formDataToSend,
//   //       {
//   //         headers: {
//   //           "Content-Type": "multipart/form-data",
//   //         },
//   //       }
//   //     );
//   //     console.log("Updating data successful:", response.data);
//   //   } catch (error) {
//   //     console.error("Updating data failed:", error);
//   //   }
//   // };

//   return (
//     <>
//       <Photos />

//       <form onSubmit={handleSubmit}>
//         <div className={styles["form"]}>
//           <span className={styles["userprofile"]}>Account Setting</span>
//           <div className={styles["full-name"]}>
//             <span className={styles["name"]}>Name</span>
//           </div>
//           <input
//             onChange={handleChange}
//             name="name"
//             value={formData.name}
//             id="name"
//             type="text"
//             className={styles["nameinput"]}
//           />

//           <div className={styles["email-address"]}>
//             <span className={styles["email"]}>Email Address</span>
//           </div>
//           <input
//             onChange={handleChange}
//             name="email"
//             value={formData.email}
//             id="email"
//             type="text"
//             className={styles["emailinput"]}
//           />

//           <div className={styles["password"]}>
//             <span className={styles["password1"]}>Password</span>
//           </div>
//           <input
//             onChange={handleChange}
//             name="password"
//             value={formData.password}
//             id="password"
//             type="password"
//             className={styles["passwordinput"]}
//           />

//           <div>
//             <span className={styles["status"]}>Status</span>
//           </div>
//           <input
//             onChange={handleChange}
//             name="status"
//             value={formData.status}
//             id="status"
//             type="text"
//             className={styles["statusinput"]}
//           />

//           <span className={styles["gender"]}>Gender</span>
//           <input
//             onChange={handleChange}
//             name="gender"
//             value={formData.gender}
//             id="gender"
//             type="text"
//             className={styles["genderinput"]}
//           />

//           <span className={styles["age"]}>
//             <span>Age</span>
//           </span>
//           <input
//             onChange={handleChange}
//             name="age"
//             value={formData.age}
//             id="age"
//             type="text"
//             className={styles["ageinput"]}
//           />

//           <div>
//             <span className={styles["phone"]}>Phone</span>
//           </div>
//           <input
//             onChange={handleChange}
//             name="phone"
//             value={formData.phone}
//             id="phone"
//             type="text"
//             className={styles["phoneinput"]}
//           />

//           <button
//             name="setting"
//             value={formData.setting}
//             id="setting"
//             type="submit"
//             className={styles["button"]}
//           >
//             <span className={styles["accountsetting"]}>Save Changes</span>
//           </button>
//         </div>

//         {/* <span className={styles["citytext"]}>
//           <span>City</span>
//         </span>
//         <div>
//           <input
//             placeholder="select city"
//             className={styles["city"]}
//             type="text"
//             list="cities"
//             name="selectedCity"
//             value={selectedCity}
//             onChange={handleChange}
//           />
//           <datalist id="cities">
//             {cities.map((city) => (
//               <option key={city} value={city} />
//             ))}
//           </datalist>
//         </div> */}

//         <div className={styles["upload-container"]}>
//           <div className={styles["browse-button"]} onClick={handleBrowseClick}>
//             Change
//           </div>
//           <input
//             ref={fileInputRef}
//             name="imageinput"
//             type="file"
//             style={{ display: "none" }}
//             onChange={handleChange}
//           />
//         </div>
//       </form>
//     </>
//   );
// };

// Photos.defaultProps = {
//   iMAGESrc: img,
//   iMAGEAlt: "IMAGE",
// };

// Photos.propTypes = {
//   iMAGESrc: PropTypes.string,
//   iMAGEAlt: PropTypes.string,
// };

// export default Useform;

import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./useraccount.module.css";
import Photos from "../../componets/photo/Photo"; // Ensure the correct path
import img from "../pictures/prof.png";
import axios from "axios";


const Useform = () => {
  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    status: '',
    phone: '',
    age: '',
    gender: '',
    password: '',
    photo: null,
  });
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const userProfile = sessionStorage.getItem("userProfile");
    if (userProfile) {
      const parsedProfile = JSON.parse(userProfile);
      setUserId(parsedProfile.id);
    } else {
      console.error("User profile not found in sessionStorage");
    }

    
   }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

 
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('status', formData.status);
    data.append('phone', formData.phone);
    data.append('age', formData.age);
    data.append('gender', formData.gender);
    data.append('password', formData.password);
    data.append('photo', formData.photo);

    const token = sessionStorage.getItem("authToken");
      try {
        console.log(formData);
        const response = await axios.put(
          `http://localhost:8000/api/user/profile/${userId}/update`,
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            }
          }
        );
        console.log(" successful:", response.data);
      } catch (error) {
        console.error(" failed:", error);
      }
    };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="status"
        value={formData.status}
        onChange={handleChange}
        placeholder="Status"
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        type="text"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        placeholder="Gender"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <input type="file" name="photo" onChange={handleFileChange} />
      <button type="submit">Update Profile</button>
    </form>
  );
}

export default Useform;
