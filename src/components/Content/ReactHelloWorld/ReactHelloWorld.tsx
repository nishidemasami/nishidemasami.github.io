import React from "react";
import logo from "./logo.svg";
import {
  reactHelloWorld,
  reactHelloWorldLeader,
  reactHelloWorldLogo,
} from "./ReactHelloWorld.module.scss";

interface ReactHelloWorldProps {
  children?: React.ReactNode;
}

function ReactHelloWorld({ children }: ReactHelloWorldProps): JSX.Element {
  return (
    <div className={reactHelloWorld}>
      <header className={reactHelloWorldLeader}>
        <img alt="logo" className={reactHelloWorldLogo} src={logo} />
        <p>{children}</p>
      </header>
    </div>
  );
}

export default ReactHelloWorld;
