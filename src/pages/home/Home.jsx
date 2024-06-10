import { React, useState, useEffect } from "react";
import Header from "../../componets/header/Header.jsx";
import Head from "../../componets/header/Head.jsx";
import Footer from "../../componets/footer/Footer.jsx";
//import AccommodationList from ".../componets/AccommodationList.jsx";
//import RecommendedList from "../componets/RecommendedList.jsx";
import styles from "./home.module.css";
import Title from "../../componets/title/Title.jsx";
//import accommodationsData from "./accommodations.json";
import SearchBar from "../../componets/searchbar/SearchBar.jsx";
import { /*Link,*/ useNavigate } from "react-router-dom";
import axios from "axios";
import Items from "../../componets/item/Items.jsx";
import { useSelector } from "react-redux";

const Home = () => {
  const authToken = useSelector((state) => state.auth.token);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const token = sessionStorage.getItem("authToken"); // Assuming you store the token in localStorage
      const response = await axios.get("http://localhost:8000/items", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
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
        {authToken && <Items accommodations={items} />}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
