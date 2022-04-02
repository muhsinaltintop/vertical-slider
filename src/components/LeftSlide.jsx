import React from "react";
import DataSlider from "./DataSlider";
import styles from "./styles/Slider.module.css";

const LeftSlide = () => {
  return (
    <div className={styles.leftSlide}>
      {DataSlider.map((data) => (
        <div key={data.id} className={styles.flower}>
          <h1>{data.title}</h1>
          <h3>{data.body}</h3>
        </div>
      ))}
    </div>
  );
};

export default LeftSlide;
