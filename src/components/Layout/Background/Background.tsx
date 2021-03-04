import React from "react";
import type Node from "react";
import styles from "./Background.module.scss";

const Background = () => {
  return <RotatedSquareBackground />;
};

const RotatedSquareBackground = () => {
  return (
    <React.Fragment>
      <div className={styles.rotatedsquarebackground}>
        <ul className={styles.rotatedsquarebackground__circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Background;
