import React, { useState } from "react";
import styles from "./searchBar.module.css";
import axios from "axios";

const SearchBar = ({ onSearch }) => {
  const [searchType, setSearchType] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [price, setPrice] = useState("");

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setCity(selectedCity);
    // Reset district when city changes
    setDistrict("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("/api/search", {
        params: { district, searchType, city, price },
      });
      onSearch(response.data);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  const cities = ["Alexandria", "Cairo", "Aswan"];
  const districtsByCity = {
    Alexandria: [
      "The first district of Al-Montaza",
      "The second district of Al-Montazah",
      "The Sharq district",
      "the Wasat district",
      "The Gharb district",
      "El Gomrok district",
      "the Amriya district",
      " the second district of Al-Amriya",
      "the Al-Ajmi district",
    ],

    Cairo: [
      " Abbassia",
      "Ain Shams",
      "Al Rehab",
      "Al-Wayli and al-Daher, Cairo",
      "Azbakeya",
      "Bab al-Louq",
      "Boulaq",
      " City of the Dead (Cairo)",
      " Coptic Cairo",
      "Downtown Cairo",

      " El Manial",
      "El Marg",
      "El Matareya, Cairo",
      "El Qobbah",
      " El Sahel",
      " El Sakkakini",
      " Ezbet El Nakhl",
      "Faggala",
      " Fifth Settlement",
      " Fustat",

      " Garden City, Cairo",
      "Gezira (Cairo)",

      " Heliopolis, Cairo",

      "Islamic Cairo",

      " Maadi",
      "Madinat El-Amal",

      "Old Cairo",

      "Roda Island",

      " Shubra (administrative region)",
      "Shubra",
      "Shubra El Kheima",

      "Wagh El Birket",

      "Zamalek",
      "Zeitoun",
      " Cairo",
    ],

    Aswan: [
      "Abu Simbel",
      "Aswan",
      "Aswan 1",
      "Aswan 2",
      "Daraw",
      "Edfu",
      " Kom Ombo",
      " New Aswan",
      " New Tushka",
      "Nasr",
    ],
  };

  return (
    <form className={styles["search-form"]} onSubmit={handleSubmit}>
      <select value={city} name="city" onChange={handleCityChange}>
        <option value="">All cities</option>
        {Object.keys(districtsByCity).map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <select
        value={district}
        name="district"
        onChange={(e) => setDistrict(e.target.value)}
      >
        <option value="">All districts</option>
        {districtsByCity[city] &&
          districtsByCity[city].map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
      </select>
      <input
        type="number"
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />

      <select
        value={searchType}
        name="searchType"
        onChange={(e) => setSearchType(e.target.value)}
      >
        <option value="">All Types</option>
        <option value="ind">Individual</option>
        <option value="Shared">Shared</option>
      </select>
      <button className={styles["search-button"]} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
