import React from "react";
import type Node from "react";
import styles from "./Background.module.scss";

const SunshineRayBackground = () => {
  return (
    <React.Fragment>
      <div className={styles.sunshineRaybackground}>
        <ul
          style={{ listStyle: "none" }}
          className={styles.sunshineRaybackground__sunshineRays}
        >
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

export const RotatedSquareBackground = () => {
  return (
    <React.Fragment>
      <div className={styles.rotatedsquarebackground}>
        <ul
          style={{ listStyle: "none" }}
          className={styles.rotatedsquarebackground__circles}
        >
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

export default SunshineRayBackground;
