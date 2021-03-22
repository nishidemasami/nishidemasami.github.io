import React from "react";
import styles from "./Meta.module.scss";

type Props = {
  date: string;
};

const Meta = ({ date }: Props) => (
  <div className={styles["meta"]}>
    <p className={styles["meta__date"]}>
      公開日：{" "}
      {new Date(date).toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
    </p>
  </div>
);

export default Meta;
