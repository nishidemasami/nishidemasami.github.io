import React from "react";
import styles from "./Background.module.scss";

const SunshineRayBackground = () => {
  const [test] = React.useState(false);
  if (test) {
    return null;
  }
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
            strokeDasharray="60, 2000"
            strokeWidth="3"
            strokeDashoffset="10"
            style={{ transform: "scale(0.3) rotate(0deg)" }}
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
            strokeDasharray="60, 2000"
            strokeWidth="3"
            strokeDashoffset="10"
            style={{ transform: "scale(0.4) rotate(170deg)" }}
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
            strokeDasharray="60, 2000"
            strokeWidth="3"
            strokeDashoffset="10"
            style={{ transform: "scale(0.5) rotate(90deg)" }}
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
            strokeDasharray="60, 2000"
            strokeWidth="3"
            strokeDashoffset="10"
            style={{ transform: "scale(0.6) rotate(310deg)" }}
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
            strokeDasharray="60, 2000"
            strokeWidth="3"
            strokeDashoffset="10"
            style={{ transform: "scale(0.7) rotate(110deg)" }}
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
            strokeDasharray="60, 2000"
            strokeWidth="3"
            strokeDashoffset="10"
            style={{ transform: "scale(0.8) rotate(180deg)" }}
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
            strokeDasharray="60, 2000"
            strokeWidth="3"
            strokeDashoffset="10"
            style={{ transform: "scale(0.85) rotate(60deg)" }}
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
            strokeDasharray="60, 2000"
            strokeWidth="3"
            strokeDashoffset="10"
            style={{ transform: "scale(0.9) rotate(260deg)" }}
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
            strokeDasharray="0, 2000"
            strokeWidth="3"
            strokeDashoffset="10"
            style={{ transform: "scale(1.1) rotate(130deg)" }}
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
            strokeDasharray="0, 2000"
            strokeWidth="3"
            strokeDashoffset="10"
            style={{ transform: "scale(1.3) rotate(350deg)" }}
          />
        </svg>
      </div>
    </React.Fragment>
  );
};

export default SunshineRayBackground;
