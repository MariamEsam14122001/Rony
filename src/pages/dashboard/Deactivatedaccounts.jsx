import React, { useEffect, useState } from "react";
import axios from "axios";
import Side from "../../componets/sidebar/Sidebarcomponents.jsx";
import Items2 from "../../componets/item2/Items2.jsx";

const Deactivatedaccounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/accounts");
        setAccounts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAccounts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Side />
      <Items2 datasets={accounts} />
    </div>
  );
};

export default Deactivatedaccounts;
