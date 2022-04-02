import React from "react";
import DataSlider from "./DataSlider";
import styles from "./styles/Slider.module.css";

const RightSlide = () => {
  return (
    <div className={styles.rightSlide}>
      {DataSlider.map((data) => {
        return (
          <div>
            <img src={process.env.PUBLIC_URL + `/images/img${data.id}.jpg`} />
          </div>
        );
      })}

      {/* <div className={styles.mountain}></div>
      <div className={styles.castle}></div>
      <div className={styles.eagle}></div> */}
    </div>
  );
};

export default RightSlide;
