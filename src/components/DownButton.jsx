import React from "react";
import styles from "./styles/Slider.module.css";

const DownButton = () => {
  return (
    <div className={styles.downButton}>
      <button>
        <i className="fas fa-arrow-down"></i>
      </button>
    </div>
  );
};

export default DownButton;
