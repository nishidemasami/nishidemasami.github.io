import React from "react";
import { copyright as copyrightStyle } from "./Copyright.module.scss";

type Props = {
  copyright: string;
};

function Copyright({ copyright }: Props): JSX.Element {
  return <div className={copyrightStyle}>{copyright}</div>;
}

export default Copyright;
