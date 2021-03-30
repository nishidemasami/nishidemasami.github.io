import React from "react";
import styles from "./Background.module.scss";

const SunshineRayBackground = () => {
  return (
    <React.Fragment>
      <div className={styles.sunshineRaybackground}>
        <svg
          className={styles.sunshineRaybackground__sunshineRays}
          viewBox="20 20 40 40"
        >
          <circle
            cx="40"
            cy="40"
            r="15"
            strokeWidth="5"
            style={{
              transform: `scale(0.3) rotate(${0 + Math.random() * 360}deg)`,
            }}
          />
        </svg>
        <svg
          className={styles.sunshineRaybackground__sunshineRays}
          viewBox="20 20 40 40"
        >
          <circle
            cx="40"
            cy="40"
            r="15"
            strokeWidth="4.4"
            style={{
              transform: `scale(0.4) rotate(${170 + Math.random() * 360}deg)`,
            }}
          />
        </svg>
        <svg
          className={styles.sunshineRaybackground__sunshineRays}
          viewBox="20 20 40 40"
        >
          <circle
            cx="40"
            cy="40"
            r="15"
            strokeWidth="4.1"
            style={{
              transform: `scale(0.5) rotate(${90 + Math.random() * 360}deg)`,
            }}
          />
        </svg>
        <svg
          className={styles.sunshineRaybackground__sunshineRays}
          viewBox="20 20 40 40"
        >
          <circle
            cx="40"
            cy="40"
            r="15"
            strokeWidth="3.8"
            style={{
              transform: `scale(0.6) rotate(${310 + Math.random() * 360}deg)`,
            }}
          />
        </svg>
        <svg
          className={styles.sunshineRaybackground__sunshineRays}
          viewBox="20 20 40 40"
        >
          <circle
            cx="40"
            cy="40"
            r="15"
            strokeWidth="3.5"
            style={{
              transform: `scale(0.7) rotate(${110 + Math.random() * 360}deg)`,
            }}
          />
        </svg>
        <svg
          className={styles.sunshineRaybackground__sunshineRays}
          viewBox="20 20 40 40"
        >
          <circle
            cx="40"
            cy="40"
            r="15"
            strokeWidth="3.2"
            style={{
              transform: `scale(0.8) rotate(${180 + Math.random() * 360}deg)`,
            }}
          />
        </svg>
        <svg
          className={styles.sunshineRaybackground__sunshineRays}
          viewBox="20 20 40 40"
        >
          <circle
            cx="40"
            cy="40"
            r="15"
            strokeWidth="2.9"
            style={{
              transform: `scale(0.85) rotate(${60 + Math.random() * 360}deg)`,
            }}
          />
        </svg>
        <svg
          className={styles.sunshineRaybackground__sunshineRays}
          viewBox="20 20 40 40"
        >
          <circle
            cx="40"
            cy="40"
            r="15"
            strokeWidth="2.6"
            style={{
              transform: `scale(0.9) rotate(${260 + Math.random() * 360}deg)`,
            }}
          />
        </svg>
        <svg
          className={styles.sunshineRaybackground__sunshineRays}
          viewBox="20 20 40 40"
        >
          <circle
            cx="40"
            cy="40"
            r="15"
            strokeWidth="2.3"
            style={{
              transform: `scale(1.1) rotate(${130 + Math.random() * 360}deg)`,
            }}
          />
        </svg>
        <svg
          className={styles.sunshineRaybackground__sunshineRays}
          viewBox="20 20 40 40"
        >
          <circle
            cx="40"
            cy="40"
            r="15"
            strokeWidth="2"
            style={{
              transform: `scale(1.3) rotate(${350 + Math.random() * 360}deg)`,
            }}
          />
        </svg>
      </div>
    </React.Fragment>
  );
};

export default SunshineRayBackground;
