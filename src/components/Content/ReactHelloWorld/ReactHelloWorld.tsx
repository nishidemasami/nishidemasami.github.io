import React from "react";
import logo from "./logo.svg";
import styles from "./ReactHelloWorld.module.scss";

interface ReactHelloWorldProps {
  children?: React.ReactNode;
}

const ReactHelloWorld: React.FunctionComponent<ReactHelloWorldProps> = (
  props
) => {
  return (
    <div className={styles["reactHelloWorld"]}>
      <header className={styles["reactHelloWorld-header"]}>
        <img src={logo} className={styles["reactHelloWorld-logo"]} alt="logo" />
        <p>{props.children}</p>
      </header>
    </div>
  );
};

export default ReactHelloWorld;
