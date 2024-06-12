import { React, useState, useEffect } from "react";
import Header from "../../componets/header/Header.jsx";
import Head from "../../componets/header/Head.jsx";
import Footer from "../../componets/footer/Footer.jsx";

import styles from "./home.module.css";
import Title from "../../componets/title/Title.jsx";
import SearchBar from "../../componets/searchbar/SearchBar.jsx";
import { /*Link,*/ useNavigate } from "react-router-dom";
import axios from "axios";
import Items from "../../componets/item/Items.jsx";
import { useSelector } from "react-redux";

const Home = () => {
  const authToken = useSelector((state) => state.auth.token);
  const [accommodations, setAccommodations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAccommodations();
  }, []);

  const fetchAccommodations = async () => {
    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.get(
        //`http://localhost:8000/api/recommendation_system_output`,
        `http://localhost:8000/api/accommodation/some`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAccommodations(response.data.accommodations || []);
    } catch (error) {
      console.error("Error fetching accommodations:", error);
    }
  };

  const handleSearch = async (params) => {
    try {
      const response = await axios.get("/api/search", { params });
      setSearchResults(response.data);
      navigate("/search");
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <Header />
        <Head />
        <div className={styles.archieve}>
          <SearchBar onSearch={handleSearch} />
        </div>
        <Title />
        {authToken && <Items accommodations={accommodations} />}
      </div>
      <div>
       
          <Footer />
        
      </div>
    </div>
  );
};

export default Home;
