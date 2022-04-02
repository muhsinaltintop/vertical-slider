import React from "react";
import styles from "./styles/Slider.module.css";

const UpButton = () => {
  const afterClick = () => {
    const right_slide = document.getElementsByClassName(`.rightSlide`);
    const left_slide = document.getElementsByClassName(`.leftSlide`);
    const up_button = document.getElementsByClassName(`.upButton`);
  };

  return (
    <div className={styles.upButton}>
      <button onClick={afterClick}>
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default UpButton;
