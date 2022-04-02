import React from "react";
import Slider from "./Slider";
import styles from "../components/styles/Mainpage.module.css";

const Mainpage = () => {
  return (
    <div className={styles.mainPage}>
      {/* <h1>Mainpage</h1> */}

      <Slider />
    </div>
  );
};

export default Mainpage;
