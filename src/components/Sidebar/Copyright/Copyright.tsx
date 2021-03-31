import React from "react";
import styles from "./Copyright.module.scss";

type Props = {
  copyright: string;
};

function Copyright({ copyright }: Props): JSX.Element {
  return <div className={styles.copyright}>{copyright}</div>;
}

export default Copyright;
