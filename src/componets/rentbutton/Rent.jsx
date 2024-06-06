import React, { useState } from "react";
import styles from "./rent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function WhatsAppButton() {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const iiiiconStyle = {
    marginRight: "80px",
    color: "#25D366",
    cursor: "pointer",
    position: "absolute",
    top: "60px",
    left: "300px",
  };
  return (
    <div>
      <button className={styles.rent} onClick={handleButtonClick}>
        Rent
      </button>

      <a
        href="https://api.whatsapp.com/send?phone=1272682720"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" style={iiiiconStyle} />
      </a>
      {showPopup && (
        <form onSubmit={handleSubmit}>
          <div className={styles.popup}>
            <span className={styles.close} onClick={handleClosePopup}>
              &times;
            </span>
            <span className={styles.img}>Image :</span>

            <div className={styles.browseimage}>
              <div>
                <input
                  className={styles.text}
                  type="file"
                  onChange={handleFileChange}
                />

                {selectedFile && <p></p>}
              </div>
            </div>
            <span className={styles.ReferenceNumber}>Reference Number :</span>
            <input
              className={styles.Enterreferencenumber}
              placeholder=" Enter reference number"
            ></input>
            <span className={styles.EndDate}>End Date :</span>
            <input type="Date" className={styles.dateinput}></input>

            <button type="submit">submit</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default WhatsAppButton;
