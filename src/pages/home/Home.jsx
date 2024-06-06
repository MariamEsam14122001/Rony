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

const Home = () => {
  //recommended
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    // Simulated data for demonstration
    const response = await axios.get("http://localhost:8000/items");
    setItems(response.data);
  };

  //search

  const navigate = useNavigate();

  const handleSearch = async (params) => {
    try {
      const response = await axios.get("/api/search", { params });
      // Assuming you want to navigate after setting the state
      setSearchResults(response.data);
      navigate("/search");
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["home"]}>
        <Header />
        <Head />
        <div className={styles["archieve"]}>
          <SearchBar onSearch={handleSearch} />
        </div>
        <Title />

        {/*recommended
        <AccommodationList accommodations={accommodationsData}/>*/}

        <Items accommodations={items} />

        <Footer />
      </div>
    </div>
  );
};

export default Home;
