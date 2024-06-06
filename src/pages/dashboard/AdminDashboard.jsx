import React from "react";
import styles from "./AdminDashboard.module.css";

import Side from "../../componets/sidebar/Sidebarcomponents";
const AdminDashboard = () => {
  return (
    <div>
      <div>
        <Side />
      </div>
      <div className={styles["managment"]}>
        <button className={styles["AccommodationList"]}>
          Accommodations List <br></br>Total Number: 3412
        </button>
        <button className={styles["UserList"]}>
          User List <br></br>Total Number: 3412
        </button>
        <button className={styles["providerList"]}>
          Provider List <br></br>Total Number: 3412
        </button>
        <div className={styles["Adminstrators"]}>
          <button className={styles["Admin"]}>Adminstrators</button>
        </div>
        <button className={styles["Rental"]}>
          Rental <br></br>Total Number: 3412
        </button>
        <button className={styles["financialGrowth"]}>
          Financial Growth <br></br>show details
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
/**/
