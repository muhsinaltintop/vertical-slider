import React from "react";
import DownButton from "./DownButton";
import LeftSlide from "./LeftSlide";
import RightSlide from "./RightSlide";
import styles from "./styles/Slider.module.css";
import UpButton from "./UpButton";

const Slider = () => {
  return (
    <div className={styles.sliderContainer}>
      <h2>Slider</h2>
      <LeftSlide />
      <RightSlide />
      <UpButton />
      <DownButton />
    </div>
  );
};

export default Slider;
